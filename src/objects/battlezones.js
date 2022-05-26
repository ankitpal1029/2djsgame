import { Boundary } from "../classes";
import { OFFSET } from "../constants";
import { battleZonesData } from "../data/battlezones";
import { c } from "../init.canvas";

const battleZonesMap = [];
for (let i = 0; i < battleZonesData.length; i += 70) {
  battleZonesMap.push(battleZonesData.slice(i, i + 70));
}
console.log(battleZonesMap);

const battleZones = [];

battleZonesMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025) {
      battleZones.push(
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

export { battleZones };
