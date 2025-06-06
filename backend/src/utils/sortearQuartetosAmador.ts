type Atleta = {
  nome: string;
  genero: 'masculino' | 'feminino';
  nivel: 'iniciante' | 'intermediario' | 'avancado';
};

type Quarteto = {
  atletas: Atleta[];
  reserva?: Atleta[];
};

export function sortearQuartetosAmador(atletas: Atleta[]): { quartetos: Quarteto[], reservas: Atleta[] } {
  const homensNivel1 = embaralhar(atletas.filter(a => a.genero === 'masculino' && (a.nivel === 'intermediario' || a.nivel === 'avancado')));
  const homensNivel2 = embaralhar(atletas.filter(a => a.genero === 'masculino' && a.nivel === 'iniciante'));
  const mulheresNivel1 = embaralhar(atletas.filter(a => a.genero === 'feminino' && (a.nivel === 'intermediario' || a.nivel === 'avancado')));
  const mulheresNivel2 = embaralhar(atletas.filter(a => a.genero === 'feminino' && a.nivel === 'iniciante'));

  const quartetos: Quarteto[] = [];

  while (
    homensNivel1.length > 0 &&
    homensNivel2.length > 0 &&
    mulheresNivel1.length > 0 &&
    mulheresNivel2.length > 0
  ) {
    const quarteto: Atleta[] = [
      homensNivel1.pop()!,
      homensNivel2.pop()!,
      mulheresNivel1.pop()!,
      mulheresNivel2.pop()!
    ];
    quartetos.push({ atletas: quarteto });
  }

  // Atletas restantes
  const reservas: Atleta[] = [
    ...homensNivel1,
    ...homensNivel2,
    ...mulheresNivel1,
    ...mulheresNivel2
  ];

  return { quartetos, reservas };
}

// Função auxiliar para embaralhar arrays
function embaralhar<T>(array: T[]): T[] {
  return array
    .map((item) => ({ item, ordem: Math.random() }))
    .sort((a, b) => a.ordem - b.ordem)
    .map(({ item }) => item);
}
