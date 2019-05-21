import * as actionTypes from './actionTypes';

export const getStationDetailsSuccess = (station) => {
  return {
    type: actionTypes.GET_STATION_DETAILS_SUCCESS,
    station
  };
};

export const getStationDetailsFail = (error) => {
  return {
    type: actionTypes.GET_STATION_DETAILS_FAIL,
    error
  };
};

export const getStationDetailsStart = (stationId) => {
  return {
    type: actionTypes.GET_STATION_DETAILS_START,
    stationId
  };
};