import * as actionTypes from './actionTypes';

export const getTownStart = (town) => {
  return {
    type: actionTypes.GET_TOWN_START,
    town
  };
};

export const getTownSuccess = (town) => {
  return {
    type: actionTypes.GET_TOWN_SUCCESS,
    town
  };
};

export const getTownFail = (error) => {
  return {
    type: actionTypes.GET_TOWN_FAIL,
    error: error
  };
};
