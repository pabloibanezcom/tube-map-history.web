import * as actionTypes from './actionTypes';

export const editStationSuccess = (station) => {
  return {
    type: actionTypes.EDIT_STATION_SUCCESS,
    station: station
  };
};

export const editStationFail = (error) => {
  return {
    type: actionTypes.EDIT_STATION_FAIL,
    error: error
  };
};

export const editStationStart = (station) => {
  return {
    type: actionTypes.EDIT_STATION_START,
    station: station
  };
};