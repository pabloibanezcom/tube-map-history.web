import * as actionTypes from './actionTypes';

export const changeYearSuccess = (year, previousYear, data) => {
  return {
    type: actionTypes.CHANGE_YEAR_SUCCESS,
    year: year,
    previousYear: previousYear,
    data: data
  };
}

export const changeYearFail = (error) => {
  return {
    type: actionTypes.CHANGE_YEAR_FAIL,
    error: error
  };
};

export const changeYearStart = (year, previousYear, maxYearLoaded) => {
  return {
    type: actionTypes.CHANGE_YEAR_START,
    year: year,
    previousYear: previousYear,
    maxYearLoaded: maxYearLoaded
  };
};
