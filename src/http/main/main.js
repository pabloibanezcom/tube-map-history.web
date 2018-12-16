import axios from '../axios';

export const getTown = (town) => {
  return axios.get(`town/${town}`);
}

export const getLines = (townId) => {
  return axios.get(`${townId}/lines`);
}

export const getLine = (lineId) => {
  return axios.get(`line/${lineId}`);
}

export const loadStations = (townId, yearTo, yearFrom) => {
  const yearFromUrl = yearFrom ? `/${yearFrom}` : '';
  return axios.get(`${townId}/station/year/${yearTo}${yearFromUrl}`);
}

export const getStation = (stationId) => {
  return axios.get(`station/${stationId}`);
}

export const loadConnections = (townId, yearTo, yearFrom) => {
  const yearFromUrl = yearFrom ? `/${yearFrom}` : '';
  return axios.get(`${townId}/connection/year/${yearTo}${yearFromUrl}`);
}