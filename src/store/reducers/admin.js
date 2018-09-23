import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  stations: [],
  connections: [],
  loading: false
};

const searchStationsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const searchStationsSuccess = (state, action) => {
  return updateObject(state, {
    stations: action.stations,
    loading: false
  });
};

const searchConnectionsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const searchConnectionsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const searchConnectionsSuccess = (state, action) => {
  return updateObject(state, {
    connections: action.connections,
    loading: false
  });
};

const searchStationsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const editStationStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const editStationSuccess = (state, action) => {
  return updateObject(state, { loading: false });
};

const editStationFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const addConnectionStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const addConnectionSuccess = (state, action) => {
  return updateObject(state, { loading: false });
};

const addConnectionFail = (state, action) => {
  return updateObject(state, { loading: false });
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADMIN_SEARCH_STATIONS_START: return searchStationsStart(state, action);
    case actionTypes.ADMIN_SEARCH_STATIONS_SUCCESS: return searchStationsSuccess(state, action);
    case actionTypes.ADMIN_SEARCH_STATIONS_FAIL: return searchStationsFail(state, action);
    case actionTypes.ADMIN_SEARCH_CONNECTIONS_START: return searchConnectionsStart(state, action);
    case actionTypes.ADMIN_SEARCH_CONNECTIONS_SUCCESS: return searchConnectionsSuccess(state, action);
    case actionTypes.ADMIN_SEARCH_CONNECTIONS_FAIL: return searchConnectionsFail(state, action);
    case actionTypes.ADMIN_EDIT_STATION_START: return editStationStart(state, action);
    case actionTypes.ADMIN_EDIT_STATION_SUCCESS: return editStationSuccess(state, action);
    case actionTypes.ADMIN_EDIT_STATION_FAIL: return editStationFail(state, action);
    case actionTypes.ADMIN_ADD_CONNECTION_START: return addConnectionStart(state, action);
    case actionTypes.ADMIN_ADD_CONNECTION_SUCCESS: return addConnectionSuccess(state, action);
    case actionTypes.ADMIN_ADD_CONNECTION_FAIL: return addConnectionFail(state, action);
    default: return state;
  }
};
