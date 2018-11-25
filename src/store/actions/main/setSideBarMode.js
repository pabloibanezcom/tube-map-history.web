import * as actionTypes from './actionTypes';

export const setSideBarMode = (sideBarMode) => {
  return {
    type: actionTypes.SET_SIDE_BAR_MODE,
    sideBarMode: sideBarMode
  };
}