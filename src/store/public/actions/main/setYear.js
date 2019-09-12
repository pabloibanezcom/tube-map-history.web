import * as actionTypes from './actionTypes';

export const setYear = (year) => {
  return {
    type: actionTypes.SET_YEAR,
    year
  };
};
