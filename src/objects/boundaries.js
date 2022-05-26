import { Boundary } from "../classes";
import { OFFSET } from "../constants";
import { collisions } from "../data/collisions";
import { c } from "../init.canvas";

const boundaries = [];
const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, i + 70));
}

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025) {
      boundaries.push(
        new Boundary({
          _position: {
            x: j * Boundary.width + OFFSET.x,
            y: i * Boundary.height + OFFSET.y,
          },
          _c: c,
        })
      );
    }
  });
});

export { boundaries };
