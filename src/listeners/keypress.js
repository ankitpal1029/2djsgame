import { keys } from "../control/keys";

export const KeyPressListeners = () => {
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
};
