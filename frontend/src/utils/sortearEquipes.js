// src/utils/sortearEquipes.js

export function sortearEquipes(atletas) {
  const embaralhar = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const misturados = embaralhar(atletas);

  const equipes = [];
  for (let i = 0; i < misturados.length; i += 2) {
    const dupla = misturados.slice(i, i + 2);
    if (dupla.length === 2) {
      equipes.push(dupla);
    }
  }
  return equipes;
}
