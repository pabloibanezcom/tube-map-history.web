import * as actionTypes from './actionTypes';

export const searchConnectionsSuccess = (connections) => {
  return {
    type: actionTypes.SEARCH_CONNECTIONS_SUCCESS,
    connections
  };
};

export const searchConnectionsFail = (error) => {
  return {
    type: actionTypes.SEARCH_CONNECTIONS_FAIL,
    error
  };
};

export const searchConnectionsStart = () => {
  return {
    type: actionTypes.SEARCH_CONNECTIONS_START
  };
};