import * as actionTypes from './actionTypes';

export const addStationStart = (town, station) => {
  return {
    type: actionTypes.ADD_STATION_START,
    town,
    station
  };
};

export const addStationSuccess = () => {
  return {
    type: actionTypes.ADD_STATION_SUCCESS
  };
};

export const addStationFail = (error) => {
  return {
    type: actionTypes.ADD_STATION_FAIL,
    error: error
  };
};
