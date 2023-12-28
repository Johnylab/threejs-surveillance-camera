import * as dat from "dat.gui";

const gui = new dat.GUI();

const guiObserver = {
  update() {
    gui.updateDisplay();
  },
};

function addGuiFolder(name, params, options) {
  const folder = gui.addFolder(name);
  folder.open();

  for (const key in options) {
    const { type, label, args = [], onChange = () => {} } = options[key];
    (type === "color"
      ? folder.addColor(params, key)
      : folder.add(params, key, ...args)
    )
      .name(label || key)
      .onChange(onChange);
  }
}

export { addGuiFolder, guiObserver };
