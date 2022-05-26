import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants";

let canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

export { c };
