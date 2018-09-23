import axios from 'axios';
import * as actionTypes from './actionTypes';

export const yearChanged = (year, previousYear, maxYearLoaded) => {
  return dispatch => {
    dispatch(setYear(year));
    const loadStationYears = checkIfLoadStations(year, maxYearLoaded);
    if (loadStationYears) {
      dispatch(loadStations(loadStationYears.yearTo, loadStationYears.yearFrom));
    }
  }
}

export const toggleYearSelector = () => {
  return {
    type: actionTypes.TOGGLE_YEAR_SELECTOR
  };
}

const setYear = (year) => {
  return {
    type: actionTypes.SET_YEAR,
    year: year
  };
}

const loadStationsSuccess = (data, year) => {
  return {
    type: actionTypes.LOAD_STATIONS_SUCCESS,
    stations: data.stations,
    connections: data.connections,
    year: year
  };
};

const loadStationsFail = (error) => {
  return {
    type: actionTypes.LOAD_STATIONS_FAIL,
    error: error
  };
};

const loadStationsStart = () => {
  return {
    type: actionTypes.LOAD_STATIONS_START
  };
};

const loadStations = (yearTo, yearFrom) => {
  const yearFromUrl = yearFrom ? `/${yearFrom}` : '';
  return dispatch => {
    dispatch(loadStationsStart());
    axios.all([
      axios.get(`${process.env.REACT_APP_API_URL}/station/year/${yearTo}${yearFromUrl}`),
      axios.get(`${process.env.REACT_APP_API_URL}/connection/year/${yearTo}${yearFromUrl}`)])
      .then(axios.spread((stationsResponse, connectionsResponse) => {
        dispatch(loadStationsSuccess({ stations: stationsResponse.data, connections: connectionsResponse.data }));
      }))
      .catch(err => {
        dispatch(loadStationsFail(err));
      });
  };
};


const checkIfLoadStations = (year, maxYearLoaded) => {
  return year > maxYearLoaded || !maxYearLoaded ? { yearTo: year, yearFrom: maxYearLoaded + 1 } : null;
}