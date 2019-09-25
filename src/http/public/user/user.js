import axios from '../axios';

export default class User {
  // Login
  static login = (email, password) => {
    return axios.get(`login?email=${email}&password=${password}`);
  };

  // SignUp
  static signUp = (email, password, name) => {
    return axios.post(`signup?email=${email}&password=${password}&name=${name}`);
  };
}
