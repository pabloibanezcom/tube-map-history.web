import axios from '../axios';

export default class Town {
  static getTownInfo = (town) => {
    return axios.get(`town/${town}`);
  }
}
