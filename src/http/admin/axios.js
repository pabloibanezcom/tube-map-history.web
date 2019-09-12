import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_ADMIN_API_URL,
});

if (localStorage.getItem('auth')) {
  instance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('auth')}`;
}

export default instance;