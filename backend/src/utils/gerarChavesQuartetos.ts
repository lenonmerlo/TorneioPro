type Atleta = {
  nome: string;
  genero: 'masculino' | 'feminino';
  nivel: 'iniciante' | 'intermediario' | 'avancado';
};

type Quarteto = {
  atletas: Atleta[];
};

type Chaves = Record<string, Quarteto[]>;

export function gerarChavesQuartetos(quartetos: Quarteto[], limitePorChave = 4): Chaves {
  const embaralhados = embaralhar(quartetos);
  const chaves: Chaves = {};
  let contador = 0;

  embaralhados.forEach((quarteto, index) => {
    const chave = String.fromCharCode(65 + Math.floor(contador / limitePorChave)); // A, B, C...
    if (!chaves[chave]) chaves[chave] = [];
    chaves[chave].push(quarteto);
    contador++;
  });

  return chaves;
}

function embaralhar<T>(array: T[]): T[] {
  return array
    .map((item) => ({ item, ordem: Math.random() }))
    .sort((a, b) => a.ordem - b.ordem)
    .map(({ item }) => item);
}
