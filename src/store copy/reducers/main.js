import * as actionTypes from 'actions/main/actionTypes';
import { updateObject } from 'shared/utility';

const initialState = {
  year: null,
  previousYear: null,
  maxYearLoaded: null,
  countries: null,
  town: null,
  lines: [],
  stations: [],
  connections: [],
  selectedLine: null,
  selectedStation: null,
  mapState: null,
  sideBarState: {
    open: false,
    mode: 'main',
    initiate: false
  },
  loading: false
};

const startLoading = (state) => {
  return updateObject(state, { loading: true });
};

const stopLoading = (state) => {
  return updateObject(state, { loading: false });
};

const loadInitSuccess = (state, action) => {
  return updateObject(stopLoading(state),
    {
      year: action.year,
      maxYearLoaded: action.year,
      town: action.data.town,
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

const getLineDetailsSuccess = (state, action) => {
  const sideBarState = { ...state.sideBarState, mode: 'line', open: true };
  return updateObject(stopLoading(state),
    {
      sideBarState,
      selectedLine: action.selectedLine
    });
};

const getStationDetailsSuccess = (state, action) => {
  const sideBarState = { ...state.sideBarState, mode: 'station', open: true };
  return updateObject(stopLoading(state),
    {
      sideBarState,
      selectedStation: action.station
    });
}

const getCountriesSuccess = (state, action) => {
  return updateObject(stopLoading(state),
    {
      countries: action.countries,
    });
}

const setMapState = (state, action) => {
  return updateObject(state,
    {
      mapState: action.mapState
    });
}

const setSideBarState = (state, action) => {
  return updateObject(state,
    {
      sideBarState: action.sideBarState
    });
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_INIT_START: return startLoading(state, action);
    case actionTypes.LOAD_INIT_SUCCESS: return loadInitSuccess(state, action);
    case actionTypes.LOAD_INIT_FAIL: return stopLoading(state, action);
    case actionTypes.CHANGE_YEAR_START: return startLoading(state, action);
    case actionTypes.CHANGE_YEAR_SUCCESS: return changeYearSuccess(state, action);
    case actionTypes.CHANGE_YEAR_FAIL: return stopLoading(state, action);
    case actionTypes.GET_LINE_DETAILS_START: return startLoading(state, action);
    case actionTypes.GET_LINE_DETAILS_SUCCESS: return getLineDetailsSuccess(state, action);
    case actionTypes.GET_LINE_DETAILS_FAIL: return stopLoading(state, action);
    case actionTypes.GET_STATION_DETAILS_START: return startLoading(state, action);
    case actionTypes.GET_STATION_DETAILS_SUCCESS: return getStationDetailsSuccess(state, action);
    case actionTypes.GET_STATION_DETAILS_FAIL: return stopLoading(state, action);
    case actionTypes.SET_MAP_STATE: return setMapState(state, action);
    case actionTypes.SET_SIDE_BAR_STATE: return setSideBarState(state, action);
    case actionTypes.GET_COUNTRIES_START: return startLoading(state, action);
    case actionTypes.GET_COUNTRIES_SUCCESS: return getCountriesSuccess(state, action);
    case actionTypes.GET_COUNTRIES_FAIL: return stopLoading(state, action);
    default: return state;
  }
};