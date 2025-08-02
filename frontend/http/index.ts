import axios from 'axios';

const $api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:4000',
});

$api.interceptors.request.use(config => {
  config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`;
  return config;
});

export default $api;
