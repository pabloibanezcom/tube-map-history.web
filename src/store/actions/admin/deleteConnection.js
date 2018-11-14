import * as actionTypes from './actionTypes';

export const deleteConnectionSuccess = (connection) => {
  return {
    type: actionTypes.DELETE_CONNECTION_SUCCESS
  };
};

export const deleteConnectionFail = (error) => {
  return {
    type: actionTypes.DELETE_CONNECTION_FAIL,
    error: error
  };
};

export const deleteConnectionStart = (connection) => {
  return {
    type: actionTypes.DELETE_CONNECTION_START,
    connection: connection
  };
};