import axios from '../axios';
import { add, update } from '../operations';

const searchStationsParams = require('./defaultParams/searchStations.json');

export const addConnection = (connection) => {
  return add('connection', connection);
}

export const editStation = (station) => {
  return update('station', station);
}

export const searchStations = (searchParams) => {
  return axios.post('station', {
    filter: searchParams,
    limit: searchStationsParams.limit,
    populate: searchStationsParams.populate
  });
}
