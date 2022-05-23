let canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = "../assets/tiled/PelletTown.png";

const playerImage = new Image();
playerImage.src = "../assets/playerDown.png";

import { Sprite } from "./sprite";
import { keys } from "./control";
import { collisions } from "./data/collisions";
import { offset } from "./constants";

const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, i + 70));
}

class Boundary {
  static width = 48;
  static height = 48;
  constructor({ _position, _c }) {
    this.position = _position;
    // this is cause we exported 12x12px tiles at 400%
    this.width = 48;
    this.height = 48;
    this.c = _c;
  }

  draw() {
    this.c.fillStyle = "red";
    this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
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

console.log(boundaries);

const background = new Sprite({
  _position: {
    x: offset.x,
    y: offset.y,
  },
  _image: image,
  _c: c,
});

const testBoundary = new Boundary({
  _position: {
    x: 400,
    y: 400,
  },
  _c: c,
});

const movables = [background, testBoundary];

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  testBoundary.draw();
  // boundaries.forEach((boundary) => {
  //   boundary.draw();
  // });
  c.drawImage(
    playerImage,
    0,
    0,
    playerImage.width / 4,
    playerImage.height,
    canvas.width / 2 - playerImage.width / 2 / 4,
    canvas.height / 2 - playerImage.height / 2,
    playerImage.width / 4,
    playerImage.height
  );

  if (keys.w.pressed && keys.lastkey === "w") {
    // background.position.y += 3;
    movables.forEach((movable) => (movable.position.y += 3));
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
}
animate();

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      keys.lastkey = "w";
      break;
    case "a":
      keys.a.pressed = true;
      keys.lastkey = "a";
      break;
    case "s":
      keys.s.pressed = true;
      keys.lastkey = "s";
      break;
    case "d":
      keys.d.pressed = true;
      keys.lastkey = "d";
      break;
  }
  console.log(keys);
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
  }
  console.log(keys);
});
