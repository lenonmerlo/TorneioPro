// src/services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://torneio-evpc.onrender.com/api',
});

export default api;
