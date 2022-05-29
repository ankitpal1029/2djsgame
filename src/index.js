import { KeyPressListeners } from "./listeners/keypress";
import { background, foreground, player } from "./objects/sprites";
import { boundaries } from "./objects/boundaries";
import { battleZones } from "./objects/battlezones";
import { updateLoop } from "./control/updateloop";
import gsap from "gsap";

// gsap.to("#overlappingDiv", {
//   opacity: 1,
//   repeat: 3,
//   yoyo: true,
//   duration: 0.4,
// });
console.log(gsap);

const movables = [background, ...boundaries, foreground, ...battleZones];

const animate = () => {
  const animationId = window.requestAnimationFrame(animate);
  background.draw();
  battleZones.forEach((battleZone) => battleZone.draw());
  boundaries.forEach((boundary) => {
    boundary.draw();
  });
  player.draw();
  foreground.draw();

  console.log(animationId);
  updateLoop(player, boundaries, movables, battleZones, animationId);
};
KeyPressListeners();
animate();
