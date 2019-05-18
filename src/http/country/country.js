import axios from '../axios';

export default class Country {
  static getCountries = () => {
    return axios.get(`countries`);
  }
}
