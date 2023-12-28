import * as THREE from "three";

const observers = [];

function addObserver(observer) {
  observers.push(observer);
}

function notifyObservers(time) {
  observers.forEach((observer) => observer.update(time));
}

function initScene() {
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  renderer.render(scene, camera);

  let animation = () => {};

  const setAnimation = (newAnimation) => {
    animation = newAnimation;
  };

  renderer.setAnimationLoop((time) => {
    animation(time);
    notifyObservers(time);
    renderer.render(scene, camera);
  });

  window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return { scene, camera, renderer, setAnimation };
}

export { addObserver, initScene };
