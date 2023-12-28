import * as THREE from "three";

import { sLightParams } from "./constants";

const spotLight = new THREE.SpotLight(
  sLightParams.color,
  sLightParams.intensity,
  sLightParams.distance,
  sLightParams.angle,
  sLightParams.penumbra,
  sLightParams.decay
);

spotLight.position.set(
  sLightParams.position.x,
  sLightParams.position.y,
  sLightParams.position.z
);

spotLight.target.position.set(
  sLightParams.target.x,
  sLightParams.target.y,
  sLightParams.target.z
);

const spotLightHelper = new THREE.SpotLightHelper(spotLight);
spotLightHelper.visible = false;
spotLight.helper = spotLightHelper;

const spotLightObserver = {
  update() {
    spotLight.color.set(sLightParams.color);
    spotLight.intensity = sLightParams.intensity;
    spotLight.distance = sLightParams.distance;
    spotLight.angle = sLightParams.angle;
    spotLight.penumbra = sLightParams.penumbra;
    spotLight.decay = sLightParams.decay;
    spotLightHelper.visible = sLightParams.helper;

    spotLight.position.set(
      sLightParams.position.x,
      sLightParams.position.y,
      sLightParams.position.z
    );

    spotLight.target.position.set(
      sLightParams.target.x,
      sLightParams.target.y,
      sLightParams.target.z
    );
  },
};

export { spotLight, spotLightObserver };
