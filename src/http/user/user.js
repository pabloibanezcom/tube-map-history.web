
import axios from '../axios';

export default class User {
  static signUp = (email, password, name) => {
    return axios.post(`signup?email=${email}&password=${password}&name=${name}`);
  }

  static login = (email, password) => {
    return axios.get(`login?email=${email}&password=${password}`);
  }

  static getUserInfo = () => {
    return axios.get(`user`);
  }
}