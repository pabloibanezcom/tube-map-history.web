import * as actionTypes from './actionTypes';

export const loadInitSuccess = (year, data) => {
  return {
    type: actionTypes.LOAD_INIT_SUCCESS,
    year,
    data
  };
};

export const loadInitFail = (error) => {
  return {
    type: actionTypes.LOAD_INIT_FAIL,
    error
  };
};

export const loadInitStart = (town, year) => {
  return {
    type: actionTypes.LOAD_INIT_START,
    town,
    year
  };
};