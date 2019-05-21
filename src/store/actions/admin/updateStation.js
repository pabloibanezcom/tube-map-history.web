import * as actionTypes from './actionTypes';

export const updateStationStart = (town, station) => {
  return {
    type: actionTypes.UPDATE_STATION_START,
    town,
    station
  };
};

export const updateStationSuccess = (station) => {
  return {
    type: actionTypes.UPDATE_STATION_SUCCESS,
    station
  };
};

export const updateStationFail = (error) => {
  return {
    type: actionTypes.UPDATE_STATION_FAIL,
    error
  };
};

