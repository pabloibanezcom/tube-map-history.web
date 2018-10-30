import * as actionTypes from './actionTypes';

export const searchStationsSuccess = (stations) => {
  return {
    type: actionTypes.SEARCH_STATIONS_SUCCESS,
    stations: stations
  };
};

export const searchStationsFail = (error) => {
  return {
    type: actionTypes.SEARCH_STATIONS_FAIL,
    error: error
  };
};

export const searchStationsStart = (searchParams) => {
  return {
    type: actionTypes.SEARCH_STATIONS_START,
    searchParams: searchParams
  };
};