import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/admin/actionTypes';

const initialState = {
  results: [],
  currentResulsType: null,
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

const searchStart = (state, action, model) => {
  return updateObject(state, {
    searchParams: updateObject(state.searchParams, { [model]: action.searchParams }),
    loading: true
  });
}

const searchSuccess = (state, action, model) => {
  return updateObject(state, {
    results: action.results,
    currentResulsType: model,
    pagination: action.pagination,
    loading: false
  });
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_LINES_START: return searchStart(state, action, 'lines');
    case actionTypes.SEARCH_LINES_SUCCESS: return searchSuccess(state, action, 'lines');
    case actionTypes.SEARCH_LINES_FAIL: return stopLoading(state);
    case actionTypes.SEARCH_STATIONS_START: return searchStart(state, action, 'stations');
    case actionTypes.SEARCH_STATIONS_SUCCESS: return searchSuccess(state, action, 'stations');
    case actionTypes.SEARCH_STATIONS_FAIL: return stopLoading(state);
    case actionTypes.SEARCH_CONNECTIONS_START: return searchStart(state, action, 'connections');
    case actionTypes.SEARCH_CONNECTIONS_SUCCESS: return searchSuccess(state, action, 'connections');
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
