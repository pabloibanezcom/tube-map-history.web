import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tube-map-history-api-dev.herokuapp.com/api'
});

export default instance;