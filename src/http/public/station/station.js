import axios from '../axios';

export default class Station {
  // Get stations by year range in draft - Auth
  static getStationsWithAuth = draftId => {
    return axios.get(`${draftId}/private/stations`);
  };

  // Get stations by year range in draft - Public
  static getStations = draftId => {
    return axios.get(`${draftId}/stations`);
  };
}
