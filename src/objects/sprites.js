import { Sprite } from "../classes";
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  OFFSET,
  PLAYER_HEIGHT,
  PLAYER_WIDTH,
} from "../constants";
import { c } from "../init.canvas";
import { foregroundImage } from "../textures/foreground";
import { image } from "../textures/map";
import {
  playerDownImage,
  playerLeftImage,
  playerRightImage,
  playerUpImage,
} from "../textures/player";

export const background = new Sprite({
  _position: {
    x: OFFSET.x,
    y: OFFSET.y,
  },
  _image: image,
  _c: c,
});

export const foreground = new Sprite({
  _position: {
    x: OFFSET.x,
    y: OFFSET.y,
  },
  _image: foregroundImage,
  _c: c,
});

export const player = new Sprite({
  _position: {
    x: CANVAS_WIDTH / 2 - PLAYER_WIDTH / 2 / 4,
    y: CANVAS_HEIGHT / 2 - PLAYER_HEIGHT / 2,
  },
  _image: playerDownImage,
  _c: c,
  _frames: { max: 4 },
  _sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    right: playerRightImage,
    down: playerDownImage,
  },
});
