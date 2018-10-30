import { add, search, update } from '../operations';

const searchStationsParams = require('./defaultParams/searchStations.json');

export const addConnection = (connection) => {
  return add('connection', connection);
}

export const editStation = (station) => {
  return update('station', station);
}

export const searchStations = (searchParams) => {
  return search('station', { ...searchParams, populate: searchStationsParams.populate });
}
