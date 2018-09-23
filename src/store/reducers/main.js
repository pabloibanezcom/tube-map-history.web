import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  year: null,
  previousYear: null,
  maxYearLoaded: null,
  stations: [],
  connections: [],
  loading: false,
  showYearSelector: true
};

const setYear = (state, action) => {
  const previousYear = state.year;
  const maxYearLoaded = state.maxYearLoaded < action.year ? { maxYearLoaded: action.year } : null;
  return updateObject(state, { year: action.year, previousYear, ...maxYearLoaded });
}

const loadStationsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const loadStationsSuccess = (state, action) => {
  const maxYearObj = action.year > state.maxYearLoaded ? { maxYearLoaded: action.year } : null;
  const mergedStations = [...state.stations].concat(action.stations);
  const mergedConnections = [...state.connections].concat(action.connections);
  return updateObject(state,
    {
      ...maxYearObj,
      stations: [...mergedStations],
      connections: [...mergedConnections],
      loading: false
    });
};

const loadStationsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const toggleYearSelector = (state, action) => {
  const currentShowYearSelector = state.showYearSelector;
  return updateObject(state, { showYearSelector: !currentShowYearSelector });
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_YEAR: return setYear(state, action);
    case actionTypes.LOAD_STATIONS_START: return loadStationsStart(state, action);
    case actionTypes.LOAD_STATIONS_SUCCESS: return loadStationsSuccess(state, action);
    case actionTypes.LOAD_STATIONS_FAIL: return loadStationsFail(state, action);
    case actionTypes.TOGGLE_YEAR_SELECTOR: return toggleYearSelector(state, action);
    default: return state;
  }
};
