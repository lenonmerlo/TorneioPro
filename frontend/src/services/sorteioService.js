// src/services/sorteioService.js

import api from './api';

export const dispararSorteioAmador = async (torneioId, flexivel = true) => {
  const response = await api.post(`/sorteio/amador/${torneioId}`, { flexivel });
  return response.data;
};

export const buscarResultadoSorteioAmador = async (torneioId) => {
  const response = await api.get(`/sorteio/amador/${torneioId}`);
  return response.data;
};
