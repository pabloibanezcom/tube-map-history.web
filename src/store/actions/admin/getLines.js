import * as actionTypes from './actionTypes';

export const getLinesStart = (town) => {
  return {
    type: actionTypes.GET_LINES_START,
    town
  };
};

export const getLinesSuccess = (lines) => {
  return {
    type: actionTypes.GET_LINES_SUCCESS,
    lines
  };
};

export const getLinesFail = (error) => {
  return {
    type: actionTypes.GET_LINES_FAIL,
    error
  };
};
