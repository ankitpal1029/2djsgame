import { rectangularCollisions } from "./collisions";
import { keys } from "./keys";
export const updateLoop = (player, boundaries, movables) => {
  let moving = true;
  player.moving = false;
  if (keys.w.pressed && keys.lastkey === "w") {
    // background.position.y += 3;
    player.moving = true;
    player.image = player.sprites.up;

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
    player.moving = true;
    player.image = player.sprites.left;

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollisions({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y,
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
      movables.forEach((movable) => (movable.position.x += 3));
    }
  }
  if (keys.s.pressed && keys.lastkey === "s") {
    player.moving = true;
    player.image = player.sprites.down;

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollisions({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3,
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
      movables.forEach((movable) => (movable.position.y -= 3));
    }
  }

  if (keys.d.pressed && keys.lastkey === "d") {
    player.moving = true;
    player.image = player.sprites.right;

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i];
      if (
        rectangularCollisions({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y,
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
      movables.forEach((movable) => (movable.position.x -= 3));
    }
  }
};
