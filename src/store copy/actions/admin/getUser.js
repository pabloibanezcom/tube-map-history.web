import * as actionTypes from './actionTypes';

export const getUserStart = () => {
  return {
    type: actionTypes.GET_USER_START
  };
};

export const getUserSuccess = (user) => {
  return {
    type: actionTypes.GET_USER_SUCCESS,
    user
  };
};

export const getUserFail = (error) => {
  return {
    type: actionTypes.GET_USER_FAIL,
    error
  };
};
