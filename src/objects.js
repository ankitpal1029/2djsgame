import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants";

export class Sprite {
  constructor({ _position, _image, _c, _frames = { max: 1 } }) {
    this.position = _position;
    this.image = _image;
    this.c = _c;
    this.frames = _frames;
    this.image.onload = () => {
      this.width = this.image.width / this.frames.max;
      this.height = this.image.height;
    };
  }

  draw() {
    this.c.drawImage(
      this.image,
      0,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,

      this.image.width / this.frames.max,
      this.image.height
    );
  }
}

export class Boundary {
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
    this.c.fillStyle = "rgba(255,0,0,0)";
    this.c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
