import * as actionTypes from './actionTypes';

export const searchLinesSuccess = (data) => {
  return {
    type: actionTypes.SEARCH_LINES_SUCCESS,
    results: data.elements,
    pagination: data.pagination
  };
};

export const searchLinesFail = (error) => {
  return {
    type: actionTypes.SEARCH_LINES_FAIL,
    error
  };
};

export const searchLinesStart = (searchParams, pagination) => {
  return {
    type: actionTypes.SEARCH_LINES_START,
    searchParams,
    pagination
  };
};