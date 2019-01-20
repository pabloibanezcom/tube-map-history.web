import * as actionTypes from './actionTypes';

export const loadStationsPanelStart = (town) => {
  return {
    type: actionTypes.LOAD_STATIONS_PANEL_START,
    town
  };
};

export const loadStationsPanelSuccess = (data) => {
  return {
    type: actionTypes.LOAD_STATIONS_PANEL_SUCCESS,
    data
  };
};

export const loadStationsPanelFail = (error) => {
  return {
    type: actionTypes.LOAD_STATIONS_PANEL_FAIL,
    error
  };
};
