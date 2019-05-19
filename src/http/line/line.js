import axios from '../axios';

export default class Line {

  // Get lines in town
  static getLines = (town) => {
    return axios.get(`${town}/lines`);
  }

  // Get full info from line
  static getFullInfoLine = (lineId) => {
    return axios.get(`line/${lineId}`);
  }
}
