import * as actionTypes from './actionTypes';

export const searchStationsStart = (searchParams, pagination) => {
  return {
    type: actionTypes.SEARCH_STATIONS_START,
    searchParams,
    pagination
  };
};

export const searchStationsSuccess = (stations) => {
  return {
    type: actionTypes.SEARCH_STATIONS_SUCCESS,
    stations
  };
};

export const searchStationsFail = (error) => {
  return {
    type: actionTypes.SEARCH_STATIONS_FAIL,
    error
  };
};