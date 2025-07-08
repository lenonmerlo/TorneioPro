// 📁 src/services/torneioAmadorService.js

import api from './api';

/**
 * Dispara o sorteio do Torneio Amador
 * POST /api/torneio-amador/:torneioId
 */
export const dispararSorteioAmador = async (torneioId, flexivel = true) => {
  const response = await api.post(`/torneio-amador/${torneioId}`, { flexivel });
  return response.data;
};

/**
 * Busca o resultado do sorteio do Torneio Amador
 * GET /api/torneio-amador/:torneioId
 */
export const buscarResultadoSorteioAmador = async (torneioId) => {
  const response = await api.get(`/torneio-amador/${torneioId}`);
  return response.data;
};
