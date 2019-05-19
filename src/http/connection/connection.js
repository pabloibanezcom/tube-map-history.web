
import axios from '../axios';

export default class Connection {

  // Get connections by year range in town
  static getConnectionsByYearRange = (town, yearTo) => {
    return axios.get(`${town}/connection/year/${yearTo}`);
  }

  // Add connection
  static addConnection = (connection) => {
    return axios.post(`connection/add`, connection);
  }

  // Remove connection
  static removeConnection = (connectionId) => {
    return axios.delete(`connection/${connectionId}`);
  }

}