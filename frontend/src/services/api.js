// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  // Rotas que exigem token
  const rotasProtegidas = ['/usuarios', '/auth', '/admin', '/amador/equipes'];

  const url = config.url || '';

  const rotaRequerToken = rotasProtegidas.some((rota) =>
    url.startsWith(rota)
  );

  if (token && rotaRequerToken) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
