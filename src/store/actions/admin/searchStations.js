import * as actionTypes from './actionTypes';

export const searchStationsSuccess = (data) => {
  return {
    type: actionTypes.SEARCH_STATIONS_SUCCESS,
    stations: data.elements,
    pagination: data.pagination
  };
};

export const searchStationsFail = (error) => {
  return {
    type: actionTypes.SEARCH_STATIONS_FAIL,
    error: error
  };
};

export const searchStationsStart = (searchParams, pagination) => {
  return {
    type: actionTypes.SEARCH_STATIONS_START,
    searchParams: searchParams,
    pagination: pagination
  };
};