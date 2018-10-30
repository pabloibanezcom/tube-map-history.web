import * as actionTypes from './actionTypes';

export const loadInitSuccess = (year, data) => {
  return {
    type: actionTypes.LOAD_INIT_SUCCESS,
    year: year,
    data: data
  };
};

export const loadInitFail = (error) => {
  return {
    type: actionTypes.LOAD_INIT_FAIL,
    error: error
  };
};

export const loadInitStart = (year) => {
  return {
    type: actionTypes.LOAD_INIT_START,
    year: year
  };
};