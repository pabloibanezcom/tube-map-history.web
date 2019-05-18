import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/admin/actionTypes';

const initialState = {
  user: null,
  town: null,
  towns: [],
  lines: [],
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

const getUserSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    user: action.user
  }
};

const getTownsSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    towns: action.towns
  }
};

const getTownSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    town: action.town
  }
};

const searchStart = (state, action, model) => {
  const updatedProperties = {
    loading: true
  }
  if (action.searchParams) {
    updatedProperties.searchParams = updateObject(state.searchParams, { [model]: action.searchParams })
  }
  return updateObject(state, updatedProperties);
}

const searchSuccess = (state, action, model) => {
  return updateObject(state, {
    results: action.results,
    currentResulsType: model,
    pagination: action.pagination,
    loading: false
  });
};

const loadStationsPanelSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    lines: action.data.lines
  }
}

const checkActionType = (action, type) => {
  return action.endsWith(type);
}

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_STATIONS_PANEL_SUCCESS: return loadStationsPanelSuccess(state, action);
    case actionTypes.GET_USER_SUCCESS: return getUserSuccess(state, action);
    case actionTypes.GET_TOWNS_SUCCESS: return getTownsSuccess(state, action);
    case actionTypes.GET_TOWN_SUCCESS: return getTownSuccess(state, action);
    case actionTypes.SEARCH_LINES_START: return searchStart(state, action, 'lines');
    case actionTypes.SEARCH_LINES_SUCCESS: return searchSuccess(state, action, 'lines');
    case actionTypes.SEARCH_STATIONS_START: return searchStart(state, action, 'stations');
    case actionTypes.SEARCH_STATIONS_SUCCESS: return searchSuccess(state, action, 'stations');
    case actionTypes.SEARCH_CONNECTIONS_START: return searchStart(state, action, 'connections');
    case actionTypes.SEARCH_CONNECTIONS_SUCCESS: return searchSuccess(state, action, 'connections');
    case actionTypes.UPLOAD_TOWN_DATA_START: return startLoading(state, action);
    case actionTypes.UPLOAD_TOWN_DATA_SUCCESS: return stopLoading(state, action);
    case actionTypes.UPLOAD_TOWN_DATA_FAIL: return stopLoading(state, action);
    // Default ones
    case checkActionType(action.type, 'START'): return startLoading(state);
    case checkActionType(action.type, 'SUCCESS'): return stopLoading(state);
    case checkActionType(action.type, 'FAIL'): return stopLoading(state);
    default: return state;
  }
};
