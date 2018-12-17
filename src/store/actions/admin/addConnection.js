import * as actionTypes from './actionTypes';

export const addConnectionSuccess = (connection) => {
  return {
    type: actionTypes.ADD_CONNECTION_SUCCESS
  };
};

export const addConnectionFail = (error) => {
  return {
    type: actionTypes.ADD_CONNECTION_FAIL,
    error: error
  };
};

export const addConnectionStart = (connection) => {
  return {
    type: actionTypes.ADD_CONNECTION_START,
    connection: connection
  };
};