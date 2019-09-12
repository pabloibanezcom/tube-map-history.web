import * as actionTypes from './actionTypes';

export const initMapStart = (townUrl, year) => {
  return {
    type: actionTypes.INIT_MAP_START,
    townUrl,
    year
  };
};

export const initMapSuccess = (town, year, draft, stations) => {
  return {
    type: actionTypes.INIT_MAP_SUCCESS,
    town,
    year,
    draft,
    stations
  };
};

export const initMapFail = (error) => {
  return {
    type: actionTypes.INIT_MAP_FAIL,
    error
  };
};