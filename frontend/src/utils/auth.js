// src/utils/auth.js
import api from '@/services/api';

export function getUsuarioLogado() {
  const token = localStorage.getItem('authToken');
  const nome = localStorage.getItem('nomeUsuario');
  const tipo = localStorage.getItem('perfil');

  if (token && perfil) {
    return { token, nome, tipo };
  }

  return null;
}

export function logout() {
  localStorage.clear();
  delete api.defaults.headers.common['Authorization'];
}