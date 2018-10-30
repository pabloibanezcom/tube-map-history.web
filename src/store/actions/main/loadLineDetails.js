import * as actionTypes from './actionTypes';

export const loadLineDetailsSuccess = (data) => {
  return {
    type: actionTypes.LOAD_LINE_DETAILS_SUCCESS,
    selectedLine: data
  };
};

export const loadLineDetailsFail = (error) => {
  return {
    type: actionTypes.LOAD_LINE_DETAILS_FAIL,
    error: error
  };
};

export const loadLineDetailsStart = (lineId) => {
  return {
    type: actionTypes.LOAD_LINE_DETAILS_START,
    lineId: lineId
  };
};