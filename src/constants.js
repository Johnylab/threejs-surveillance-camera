const animationParams = {
  direction: 1,
  speed: 1,
  range: 0.25,
  rotation: 0,
};

const animationOptions = {
  direction: {
    label: "Direction",
    args: [-1, 1, 1],
  },
  speed: {
    label: "Speed",
    args: [0, 10, 0.1],
  },
  range: {
    label: "Range",
    args: [0, 1, 0.01],
  },
  rotation: {
    label: "Rotation",
    args: [-1.5, 1.5, 0.001],
  },
};

const shellParams = {
  radius: 50,
  widthSegments: 10,
  heightSegments: 10,
  phiStart: 0.58,
  phiLength: 1.97,
  thetaStart: 1.17,
  thetaLength: 0.8,
};

const sLightParams = {
  color: 0xffffff,
  intensity: 9,
  distance: 65,
  angle: 1,
  penumbra: 1,
  decay: 0,
  position: {
    x: 0,
    y: 0,
    z: 0,
  },
  target: {
    x: 0,
    y: 0,
    z: 50,
  },
};

const sLightOptions = {
  color: {
    label: "Color",
    type: "color",
  },
  intensity: {
    label: "Intensity",
    args: [0, 10, 0.1],
  },
  distance: {
    label: "Distance",
    args: [50, 100, 1],
  },
  angle: {
    label: "Angle",
    args: [0, 1.57, 0.01],
  },
  penumbra: {
    label: "Penumbra",
    args: [0, 1, 0.01],
  },
  decay: {
    label: "Decay",
    args: [0, 2, 0.1],
  },
};

export {
  animationParams,
  animationOptions,
  shellParams,
  sLightParams,
  sLightOptions,
};
