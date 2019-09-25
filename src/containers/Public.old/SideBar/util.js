const modes = require('./side-bar-modes.json');

export const getPrevSideBarMode = mode => {
  return getPrevSideBar(mode, 'prev');
};

export const getPrevSideBarModeLabel = mode => {
  return getPrevSideBar(mode, 'prevLabel');
};

const getPrevSideBar = (mode, property) => {
  if (!mode) {
    return null;
  }
  return modes.find(m => m.mode === mode)[property];
};
