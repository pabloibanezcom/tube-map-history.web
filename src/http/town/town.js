import axios from '../axios';

export default class Town {
  static getTowns = () => {
    return axios.get('towns');
  }

  static getTownInfo = (town) => {
    return axios.get(`town/${town}`);
  }
}
