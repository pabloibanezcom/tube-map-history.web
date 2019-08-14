import * as actionTypes from './actionTypes';

export const searchLinesStart = (searchParams, pagination) => {
  return {
    type: actionTypes.SEARCH_LINES_START,
    searchParams,
    pagination
  };
};

export const searchLinesSuccess = (lines) => {
  return {
    type: actionTypes.SEARCH_LINES_SUCCESS,
    lines
  };
};

export const searchLinesFail = (error) => {
  return {
    type: actionTypes.SEARCH_LINES_FAIL,
    error
  };
};