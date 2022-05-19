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

const background = new Sprite({
  _position: {
    x: -785,
    y: -600,
  },
  _image: image,
  _c: c,
});

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
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

  if (keys.w.pressed && keys.lastkey === "w") background.position.y += 3;
  if (keys.a.pressed && keys.lastkey === "a") background.position.x += 3;
  if (keys.s.pressed && keys.lastkey === "s") background.position.y -= 3;
  if (keys.d.pressed && keys.lastkey === "d") background.position.x -= 3;
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
