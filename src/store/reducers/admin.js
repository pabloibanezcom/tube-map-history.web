import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/admin/actionTypes';

const initialState = {
  stations: [],
  connections: [],
  pagination: null,
  searchParams: null,
  loading: false
};

const startLoading = (state) => {
  return updateObject(state, { loading: true });
};

const stopLoading = (state) => {
  return updateObject(state, { loading: false });
};

const searchStationsStart = (state, action) => {
  return updateObject(state, {
    searchParams: updateObject(state.searchParams, { stations: action.searchParams }),
    loading: true
  });
}

const searchStationsSuccess = (state, action) => {
  return updateObject(state, {
    stations: action.stations,
    pagination: action.pagination,
    loading: false
  });
};

const searchConnectionsSuccess = (state, action) => {
  return updateObject(state, {
    connections: action.connections,
    loading: false
  });
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_STATIONS_START: return searchStationsStart(state, action);
    case actionTypes.SEARCH_STATIONS_SUCCESS: return searchStationsSuccess(state, action);
    case actionTypes.SEARCH_STATIONS_FAIL: return stopLoading(state);
    case actionTypes.SEARCH_CONNECTIONS_START: return startLoading(state);
    case actionTypes.SEARCH_CONNECTIONS_SUCCESS: return searchConnectionsSuccess(state, action);
    case actionTypes.SEARCH_CONNECTIONS_FAIL: return stopLoading(state);
    case actionTypes.EDIT_STATION_START: return startLoading(state);
    case actionTypes.EDIT_STATION_SUCCESS: return stopLoading(state);
    case actionTypes.EDIT_STATION_FAIL: return stopLoading(state);
    case actionTypes.ADD_CONNECTION_START: return startLoading(state);
    case actionTypes.ADD_CONNECTION_SUCCESS: return stopLoading(state);
    case actionTypes.ADD_CONNECTION_FAIL: return stopLoading(state);
    default: return state;
  }
};
