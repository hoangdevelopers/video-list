import axios from 'axios';

const API = axios.create({
  baseURL: 'localhost',
  headers: {
    accept: 'application/json',
  },
});

export default API;
