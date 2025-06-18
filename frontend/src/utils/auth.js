// src/utils/auth.js
import api from '@/services/api';

export function getUsuarioLogado() {
  const token = localStorage.getItem('authToken');
  const nome = localStorage.getItem('nomeUsuario');
  const perfil = localStorage.getItem('tipoUsuario');

  if (token && perfil) {
    return { token, nome, perfil };
  }

  return null;
}

export function logout() {
  localStorage.clear();
  delete api.defaults.headers.common['Authorization'];
}