// src/utils/auth.js

export function getUsuarioLogado() {
  const token = localStorage.getItem('authToken');
  const nome = localStorage.getItem('nomeUsuario');
  const perfil = localStorage.getItem('tipoUsuario');

  if (token && perfil) {
    return { token, nome, perfil };
  }

  return null;
}
