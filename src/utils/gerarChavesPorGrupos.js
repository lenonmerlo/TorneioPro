// src/utils/gerarChavesPorGrupos.js

export function gerarChavesPorGrupos(times, tamanhoChave = 3) {
  const embaralhados = [...times].sort(() => 0.5 - Math.random());
  const chaves = {};
  let chaveAtual = 0;

  for (let i = 0; i < embaralhados.length; i++) {
    const chaveNome = String.fromCharCode(65 + chaveAtual);

    if (!chaves[chaveNome]) {
      chaves[chaveNome] = [];
    }

    chaves[chaveNome].push(embaralhados[i]);

    if (chaves[chaveNome].length >= tamanhoChave) {
      chaveAtual++;
    }
  }

  return chaves;
}
