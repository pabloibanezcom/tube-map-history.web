import axios from '../axios';

const defaultPagination = require('./defaultParams/pagination.json');
const searchStationsParams = require('./defaultParams/searchStations.json');

export default class Station {
  static searchStations = (town, searchParams, pagination) => {
    return axios.post(`${town}/station/search`, {
      filter: searchParams,
      sort: { name: 1 },
      populate: searchStationsParams.populate,
      pagination: pagination || defaultPagination
    });
  }

  static addStation = (town, station) => {
    return axios.post(`${town}/station`, station);
  }

  static updateStation = (town, station) => {
    return axios.put(`${town}/station/${station._id}`, station);
  }
}
