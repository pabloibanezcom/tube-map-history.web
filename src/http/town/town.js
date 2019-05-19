import axios from '../axios';

export default class Town {

  // Get towns
  static getTowns = () => {
    return axios.get('towns');
  }

  // Get town info
  static getTownInfo = (town) => {
    return axios.get(`town/${town}`);
  }
}
