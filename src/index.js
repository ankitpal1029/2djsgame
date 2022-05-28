import { KeyPressListeners } from "./listeners/keypress";
import { background, foreground, player } from "./objects/sprites";
import { boundaries } from "./objects/boundaries";
import { battleZones } from "./objects/battlezones";
import { updateLoop } from "./control/updateloop";

const movables = [background, ...boundaries, foreground, ...battleZones];

const animate = () => {
  window.requestAnimationFrame(animate);
  background.draw();
  battleZones.forEach((battleZone) => battleZone.draw());
  boundaries.forEach((boundary) => {
    boundary.draw();
  });
  player.draw();
  foreground.draw();

  updateLoop(player, boundaries, movables, battleZones);
};
KeyPressListeners();
animate();
