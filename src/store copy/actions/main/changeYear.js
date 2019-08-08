import * as actionTypes from './actionTypes';

export const changeYearStart = (townId, year, previousYear, maxYearLoaded) => {
  return {
    type: actionTypes.CHANGE_YEAR_START,
    townId,
    year,
    previousYear,
    maxYearLoaded
  };
};

export const changeYearSuccess = (year, previousYear, data) => {
  return {
    type: actionTypes.CHANGE_YEAR_SUCCESS,
    year,
    previousYear,
    data
  };
}

export const changeYearFail = (error) => {
  return {
    type: actionTypes.CHANGE_YEAR_FAIL,
    error
  };
};
