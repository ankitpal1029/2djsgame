import { Sprite, Boundary } from "./objects";
import { keys } from "./control/keys";
import { collisions } from "./data/collisions";
import {
  offset,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
} from "./constants";
import { rectangularCollisions } from "./control/collisions";
import { KeyPressListeners } from "./listeners/keypress";

let canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = "../assets/tiled/PelletTown.png";

const playerImage = new Image();
playerImage.src = "../assets/playerDown.png";

const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, i + 70));
}

const boundaries = [];

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025) {
      boundaries.push(
        new Boundary({
          _position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y,
          },
          _c: c,
        })
      );
    }
  });
});

const background = new Sprite({
  _position: {
    x: offset.x,
    y: offset.y,
  },
  _image: image,
  _c: c,
});

const player = new Sprite({
  _position: {
    x: CANVAS_WIDTH / 2 - PLAYER_WIDTH / 2 / 4,
    y: CANVAS_HEIGHT / 2 - PLAYER_HEIGHT / 2,
  },
  _image: playerImage,
  _c: c,
  _frames: { max: 4 },
});

const testBoundary = new Boundary({
  _position: {
    x: 400,
    y: 400,
  },
  _c: c,
});

const movables = [background, ...boundaries];

const animate = () => {
  window.requestAnimationFrame(animate);
  background.draw();
  // testBoundary.draw();
  boundaries.forEach((boundary) => {
    boundary.draw();
    // if (rectangularCollisions({ rectangle1: player, rectangle2: boundary })) {
    //   console.log("colliding");
    // }
  });
  player.draw();

  // collision conditions

  let moving = true;
  if (keys.w.pressed && keys.lastkey === "w") {
    // background.position.y += 3;
    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollisions({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3,
            },
          },
        })
      ) {
        console.log("colliding");
        moving = false;
        break;
      }
    }
    if (moving) {
      movables.forEach((movable) => (movable.position.y += 3));
    }
  }
  if (keys.a.pressed && keys.lastkey === "a") {
    // background.position.x += 3;
    movables.forEach((movable) => (movable.position.x += 3));
  }
  if (keys.s.pressed && keys.lastkey === "s") {
    // background.position.x += 3;
    movables.forEach((movable) => (movable.position.y -= 3));
  }

  if (keys.d.pressed && keys.lastkey === "d") {
    // background.position.x -= 3;
    movables.forEach((movable) => (movable.position.x -= 3));
  }
};
KeyPressListeners();
animate();
