import * as actionTypes from './actionTypes';

export const setSideBarState = (sideBarState) => {
  return {
    type: actionTypes.SET_SIDE_BAR_STATE,
    sideBarState
  };
}