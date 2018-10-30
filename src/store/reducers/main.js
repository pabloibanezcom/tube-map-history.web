import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/main/actionTypes';

const initialState = {
  year: null,
  previousYear: null,
  maxYearLoaded: null,
  lines: [],
  selectedLine: null,
  stations: [],
  connections: [],
  loading: false
};

const startLoading = (state, action) => {
  return updateObject(state, { loading: true });
};

const stopLoading = (state, action) => {
  return updateObject(state, { loading: false });
};

const loadInitSuccess = (state, action) => {
  return updateObject(stopLoading(state),
    {
      year: action.year,
      maxYearLoaded: action.year,
      lines: action.data.lines,
      stations: action.data.stations,
      connections: action.data.connections
    });
};

const changeYearSuccess = (state, action) => {
  const dataObject = action.data ? {
    stations: [...state.stations].concat(action.data.stations),
    connections: [...state.connections].concat(action.data.connections),
  } : {};
  return updateObject(stopLoading(state),
    Object.assign({},
      dataObject,
      {
        year: action.year,
        previousYear: action.previousYear,
        maxYearLoaded: action.year > state.maxYearLoaded ? action.year : state.maxYearLoaded
      })
  );
};

const loadLineDetailsSuccess = (state, action) => {
  return updateObject(stopLoading(state),
    {
      selectedLine: action.selectedLine
    });
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_INIT_START: return startLoading(state, action);
    case actionTypes.LOAD_INIT_SUCCESS: return loadInitSuccess(state, action);
    case actionTypes.LOAD_INIT_FAIL: return stopLoading(state, action);
    case actionTypes.CHANGE_YEAR_START: return startLoading(state, action);
    case actionTypes.CHANGE_YEAR_SUCCESS: return changeYearSuccess(state, action);
    case actionTypes.CHANGE_YEAR_FAIL: return stopLoading(state, action);
    case actionTypes.LOAD_LINE_DETAILS_START: return startLoading(state, action);
    case actionTypes.LOAD_LINE_DETAILS_SUCCESS: return loadLineDetailsSuccess(state, action);
    case actionTypes.LOAD_LINE_DETAILS_FAIL: return stopLoading(state, action);
    default: return state;
  }
};
