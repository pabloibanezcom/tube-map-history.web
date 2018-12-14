import axios from '../axios';
import * as httpBodies from './main.json';

export const getCityInfo = () => {
  return axios.get('city/1');
}

export const loadLines = () => {
  return axios.post('line', httpBodies.loadLines);
}

export const loadLine = (lineId) => {
  return axios.get(`line/${lineId}`);
}

export const loadStations = (yearTo, yearFrom) => {
  const yearFromUrl = yearFrom ? `/${yearFrom}` : '';
  return axios.get(`station/year/${yearTo}${yearFromUrl}`);
}

export const getStation = (stationId) => {
  return axios.get(`station/${stationId}`);
}

export const loadConnections = (yearTo, yearFrom) => {
  const yearFromUrl = yearFrom ? `/${yearFrom}` : '';
  return axios.get(`connection/year/${yearTo}${yearFromUrl}`);
}