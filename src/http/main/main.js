import axios from '../axios';

export const getCityInfo = () => {
  return axios.get('city/1');
}

export const getLines = () => {
  return axios.get('line/all');
}

export const getLine = (lineId) => {
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