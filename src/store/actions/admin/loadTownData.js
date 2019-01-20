import * as actionTypes from './actionTypes';

export const loadTownDataStart = (town) => {
  return {
    type: actionTypes.LOAD_TOWN_DATA_START,
    town
  };
};

export const loadTownDataSuccess = (townData) => {
  return {
    type: actionTypes.LOAD_TOWN_DATA_SUCCESS,
    townData
  };
};

export const loadTownDataFail = (error) => {
  return {
    type: actionTypes.LOAD_TOWN_DATA_FAIL,
    error
  };
};
