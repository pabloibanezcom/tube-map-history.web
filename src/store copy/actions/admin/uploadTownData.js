import * as actionTypes from './actionTypes';

export const uploadTownDataStart = (town, file) => {
  return {
    type: actionTypes.UPLOAD_TOWN_DATA_START,
    town,
    file
  };
};

export const uploadTownDataSuccess = () => {
  return {
    type: actionTypes.UPLOAD_TOWN_DATA_SUCCESS
  };
};

export const uploadTownDataFail = (error) => {
  return {
    type: actionTypes.UPLOAD_TOWN_DATA_FAIL,
    error
  };
};
