import * as actionTypes from './actionTypes';

export const searchStationsStart = (town, searchParams, pagination) => {
  return {
    type: actionTypes.SEARCH_STATIONS_START,
    town,
    searchParams,
    pagination
  };
};

export const searchStationsSuccess = (data) => {
  return {
    type: actionTypes.SEARCH_STATIONS_SUCCESS,
    results: data.elements,
    pagination: data.pagination
  };
};

export const searchStationsFail = (error) => {
  return {
    type: actionTypes.SEARCH_STATIONS_FAIL,
    error: error
  };
};
