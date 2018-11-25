import * as actionTypes from './actionTypes';

export const setSelectedStation = (selectedStation, mapState) => {
  return {
    type: actionTypes.SET_SELECTED_STATION,
    selectedStation: selectedStation,
    mapState: mapState
  };
}