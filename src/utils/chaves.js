// src/utils/chaves.js

export function gerarChavesPorGrupos(equipes, tipo = "dupla") {
  const chaves = {};
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const tamanhoChave = 4;
  const totalChaves = Math.ceil(equipes.length / tamanhoChave);

  for (let i = 0; i < totalChaves; i++) {
    const letra = letras[i];
    chaves[letra] = [];
  }

  equipes.forEach((equipe, idx) => {
    const letra = letras[idx % totalChaves];
    chaves[letra].push(equipe);
  });

  return chaves;
}
