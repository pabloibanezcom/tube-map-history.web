import * as actionTypes from './actionTypes';

export const getLineDetailsSuccess = (data) => {
  return {
    type: actionTypes.GET_LINE_DETAILS_SUCCESS,
    selectedLine: data
  };
};

export const getLineDetailsFail = (error) => {
  return {
    type: actionTypes.GET_LINE_DETAILS_FAIL,
    error
  };
};

export const getLineDetailsStart = (lineId) => {
  return {
    type: actionTypes.GET_LINE_DETAILS_START,
    lineId
  };
};