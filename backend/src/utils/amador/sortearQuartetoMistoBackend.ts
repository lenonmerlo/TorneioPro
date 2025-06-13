// 📁 backend/src/utils/amador/sortearQuartetoMistoBackend.ts
// 🔁 UTILITÁRIO | NÃO É UMA ROTA DIRETA
// Lógica do sorteio equilibrado de quartetos mistos para o Torneio Amador
// Tipo usado só para o sorteio (estrutura mínima necessária)

type Atleta = {
  id: number;
  nome: string;
  genero: string;
  nivel: string | null;
};

export interface SorteioResultado {
  quartetos: Atleta[][];
  flexibilizados: Atleta[][];
  reservas: Record<string, Atleta[]>;
  sobraram: Atleta[];
}

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function sortearQuartetoMistoBackend(atletas: Atleta[], options: { flexivel?: boolean } = {}): SorteioResultado {
  const { flexivel = false } = options;
  const homensIniciantes: Atleta[] = [];
  const homensIntermediarios: Atleta[] = [];
  const mulheresIniciantes: Atleta[] = [];
  const mulheresIntermediarios: Atleta[] = [];

  // Categorização por gênero e nível
  shuffleArray(atletas).forEach((a) => {
    const genero = a.genero.toLowerCase();
    const nivel = a.nivel?.toLowerCase();

    if (genero === 'masculino') {
      if (nivel === 'iniciante') homensIniciantes.push(a);
      else homensIntermediarios.push(a);
    } else if (genero === 'feminino') {
      if (nivel === 'iniciante') mulheresIniciantes.push(a);
      else mulheresIntermediarios.push(a);
    }
  });

  const quartetos: Atleta[][] = [];
  const flexibilizados: Atleta[][] = [];

  // Monta quartetos perfeitos
  while (
    homensIniciantes.length &&
    homensIntermediarios.length &&
    mulheresIniciantes.length &&
    mulheresIntermediarios.length
  ) {
    quartetos.push([
      homensIniciantes.pop()!,
      homensIntermediarios.pop()!,
      mulheresIniciantes.pop()!,
      mulheresIntermediarios.pop()!
    ]);
  }

  let restantes = [
    ...homensIniciantes,
    ...homensIntermediarios,
    ...mulheresIniciantes,
    ...mulheresIntermediarios
  ];

  if (flexivel) {
    shuffleArray(restantes);
    while (restantes.length >= 4) {
      const time: Atleta[] = [];
      for (let i = 0; i < 4; i++) {
        time.push(restantes.shift()!);
      }
      flexibilizados.push(time);
    }
  }

  const reservas: Record<string, Atleta[]> = {};
  const todosTimes = [...quartetos, ...flexibilizados];
  const aindaSobrando: Atleta[] = [];

  // Aloca reservas nos times
  restantes.forEach((reserva) => {
    let melhorIndice = -1;
    let melhorDiferenca = Infinity;
    let menorReservas = Infinity;

    todosTimes.forEach((time, idx) => {
      const id = idx < quartetos.length ? `q${idx}` : `f${idx - quartetos.length}`;
      const reservasDoTime = reservas[id] || [];
      const countIniciantes = time.filter((a) => a.nivel === 'iniciante').length;
      const countIntermediarios = time.length - countIniciantes;
      const alvo = reserva.nivel === 'iniciante' ? countIntermediarios : countIniciantes;
      const diff = Math.abs(alvo - 2);

      if (diff < melhorDiferenca || (diff === melhorDiferenca && reservasDoTime.length < menorReservas)) {
        melhorDiferenca = diff;
        melhorIndice = idx;
        menorReservas = reservasDoTime.length;
      }
    });

    if (melhorIndice >= 0) {
      const id = melhorIndice < quartetos.length ? `q${melhorIndice}` : `f${melhorIndice - quartetos.length}`;
      if (!reservas[id]) reservas[id] = [];
      reservas[id].push(reserva);
    } else {
      aindaSobrando.push(reserva);
    }
  });

  return { quartetos, flexibilizados, reservas, sobraram: aindaSobrando };
}
