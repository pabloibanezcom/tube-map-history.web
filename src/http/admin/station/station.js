import axios from '../axios';

const defaultPagination = require('../defaultParams/pagination.json');
const searchStationsParams = require('../defaultParams/searchStations.json');

export default class Station {

  // Search stations
  static search = (draftId, searchParams, pagination) => {
    return axios.post(`${draftId}/station/search`, {
      filter: searchParams.filter,
      sort: { name: 1 },
      select: searchParams.select || searchStationsParams.select,
      populate: searchParams.populate || searchStationsParams.populate,
      pagination: pagination || defaultPagination
    });
  }

  // Get full info from station
  static get = (stationId) => {
    return axios.get(`station/${stationId}`);
  }

  // Add station
  static add = (draftId, station) => {
    return axios.post(`${draftId}/station`, station);
  }

  // Update station
  static update = (station) => {
    return axios.put(`station/${station._id}`, station);
  }

  // Delete station
  static delete = (stationId) => {
    return axios.delete(`station/${stationId}`);
  }
}
