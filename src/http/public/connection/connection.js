
import axios from '../axios';

export default class Connection {

  // Get connections by year range in draft - Auth
  static getConnectionsWithAuth = (draftId, yearTo, yearFrom) => {
    return axios.get(`${draftId}/private/connection/year/${yearTo}/${yearFrom}`);
  }

  // Get connections by year range in draft - Public
  static getConnections = (draftId, yearTo, yearFrom) => {
    return axios.get(`${draftId}/connection/year/${yearTo}/${yearFrom}`);
  }

}