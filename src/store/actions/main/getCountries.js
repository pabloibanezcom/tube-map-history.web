import * as actionTypes from './actionTypes';

export const getCountriesStart = () => {
  return {
    type: actionTypes.GET_COUNTRIES_START
  };
};

export const getCountriesSuccess = (countries) => {
  return {
    type: actionTypes.GET_COUNTRIES_SUCCESS,
    countries: countries
  };
};

export const getCountriesFail = (error) => {
  return {
    type: actionTypes.GET_COUNTRIES_FAIL,
    error: error
  };
};

