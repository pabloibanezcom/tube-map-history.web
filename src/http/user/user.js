
import axios from '../axios';

export default class User {

  // Login
  static login = (email, password) => {
    return axios.get(`login?email=${email}&password=${password}`);
  }

  // SignUp
  static signUp = (email, password, name) => {
    return axios.post(`signup?email=${email}&password=${password}&name=${name}`);
  }

  // Get user info (A)
  static getUserInfo = () => {
    return axios.get(`user`);
  }

  // Assign town role to user (A)
  static assignTownRoleToUser = (userId, town, role) => {
    return axios.put(`user/town/role/${userId}/${town}`, { role });
  }


}