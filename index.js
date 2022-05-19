let canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = "./assets/tiled/PelletTown.png";

const playerImage = new Image();
playerImage.src = "./assets/playerDown.png";

image.onload = () => {
  c.drawImage(image, -785, -650);
  playerImage.onload = () => {
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
  };
};

window.addEventListener("keydown", (e) => {
  console.log(e.key);
});
