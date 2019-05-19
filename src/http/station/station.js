import axios from '../axios';

const defaultPagination = require('./defaultParams/pagination.json');
const searchStationsParams = require('./defaultParams/searchStations.json');

export default class Station {

  // Search stations
  static searchStations = (town, searchParams, pagination) => {
    return axios.post(`${town}/station/search`, {
      filter: searchParams,
      sort: { name: 1 },
      populate: searchStationsParams.populate,
      pagination: pagination || defaultPagination
    });
  }

  // Get stations by year range in town
  static getStationsByYearRange = (town, yearTo) => {
    return axios.get(`${town}/station/year/${yearTo}`);
  }

  // Get station full data
  static getStation = (stationId) => {
    return axios.get(`station/${stationId}`);
  }

  // Add station
  static addStation = (town, station) => {
    return axios.post(`${town}/station`, station);
  }

  // Update station
  static updateStation = (town, station) => {
    return axios.put(`${town}/station/${station._id}`, station);
  }
}
