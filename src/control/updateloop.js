import { rectangularCollisions } from "./collisions";
import { keys } from "./keys";
import gsap from "gsap";

const battle = {
  initiated: false,
};

export const updateLoop = (
  player,
  boundaries,
  movables,
  battleZones,
  animationId
) => {
  let moving = true;
  player.moving = false;

  if (battle.initiated) return;

  // battle zone
  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
    for (let i = 0; i < battleZones.length; i++) {
      const battleZone = battleZones[i];
      //   console.log(battleZone);
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone.position.x + battleZone.width
        ) -
          Math.max(player.position.x, battleZone.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone.position.y + battleZone.height
        ) -
          //   console.log(player.position.x, battleZone.position);
          Math.max(player.position.y, battleZone.position.y));

      if (
        rectangularCollisions({
          rectangle1: player,
          rectangle2: battleZone,
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        battle.initiated < 0.1
      ) {
        console.log("battle activated");
        window.cancelAnimationFrame(animationId);
        battle.initiated = true;
        gsap.to("#overlappingDiv", {
          opacity: 1,
          repeat: 3,
          yoyo: true,
          duration: 0.4,
          onComplete() {
            gsap.to("#overlappingDiv", {
              opacity: 1,
              duration: 0.4,
              onComplete() {
                animateBattle();
              },
            });
            // activate new animation loop
            // deactivate current animation loop
          },
        });
        break;
      }
    }
  }

  // collisions
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

const animateBattle = () => {
  window.requestAnimationFrame(animateBattle);
  console.log("animate battle");
};
