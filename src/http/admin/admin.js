import axios from '../axios';
import { add, deleteOp, update } from '../operations';

const defaultPagination = require('./defaultParams/pagination.json');
const searchStationsParams = require('./defaultParams/searchStations.json');

export const getLines = (townId) => {
  return axios.get(`${townId}/lines`);
}

export const addConnection = (connection) => {
  return add('connection', connection);
}

export const deleteConnection = (connection) => {
  return deleteOp('connection', connection);
}

export const editStation = (station) => {
  return update('station', station);
}

export const search = (model, searchParams, pagination) => {
  return axios.post(`${model}/search`, {
    filter: searchParams,
    populate: searchStationsParams.populate,
    pagination: pagination || defaultPagination
  });
}

