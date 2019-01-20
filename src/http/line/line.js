import axios from '../axios';

export default class Line {
  static getLines = (town) => {
    return axios.get(`${town}/lines`);
  }

  static getFullInfoLine = (lineId) => {
    return axios.get(`line/${lineId}`);
  }
}
