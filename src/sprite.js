export class Sprite {
  constructor({ _position, _image, _c }) {
    this.position = _position;
    this.image = _image;
    this.c = _c;
  }

  draw() {
    this.c.drawImage(this.image, this.position.x, this.position.y);
  }
}
