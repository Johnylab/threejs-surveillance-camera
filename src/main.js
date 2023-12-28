import {
  animationOptions,
  animationParams,
  sLightOptions,
  sLightParams,
  shellParams,
} from "./constants.js";
import { addGuiFolder, guiObserver } from "./gui.js";
import { addObserver, initScene } from "./scene.js";
import { shell } from "./shell.js";
import { spotLight, spotLightObserver } from "./spotLight.js";

const { scene, camera, setAnimation } = initScene();

scene.add(spotLight);
scene.add(shell);

addGuiFolder("Animation", animationParams, animationOptions);
addGuiFolder("Light", sLightParams, sLightOptions);
addObserver(guiObserver);
addObserver(spotLightObserver);

// Uncomment this if using OrbitControls
// camera.position.z = -1;
camera.lookAt(0, 0, 50); // look ahead

setAnimation(() => {
  const cameraRotationY = camera.rotation.y;
  const { phiStart, phiLength } = shellParams;
  const { direction, speed, range } = animationParams;
  const maxRotation = (phiLength - phiStart) * range;

  let newCameraRotationY = cameraRotationY + (speed * direction) / 1000;
  camera.rotation.y = newCameraRotationY;

  if (newCameraRotationY > maxRotation || newCameraRotationY < -maxRotation) {
    animationParams.direction = -direction;
  }

  animationParams.rotation = camera.rotation.y;
});
