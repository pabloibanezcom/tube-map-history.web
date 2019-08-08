import * as actionTypes from './actionTypes';

export const setMapState = (mapState) => {
  return {
    type: actionTypes.SET_MAP_STATE,
    mapState
  };
}

