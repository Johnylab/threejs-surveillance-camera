import * as THREE from "three";

import { shellParams } from "./constants";
import background from "/img/sci-fi-lab.jpg";

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(background);
texture.wrapS = THREE.RepeatWrapping;
texture.repeat.x = -1;

const shellGeometry = new THREE.SphereGeometry(
  shellParams.radius,
  shellParams.widthSegments,
  shellParams.heightSegments,
  shellParams.phiStart,
  shellParams.phiLength,
  shellParams.thetaStart,
  shellParams.thetaLength
);

const shellMaterial = new THREE.MeshPhongMaterial({
  map: texture,
  side: THREE.BackSide,
});

const shell = new THREE.Mesh(shellGeometry, shellMaterial);

export { shell };
