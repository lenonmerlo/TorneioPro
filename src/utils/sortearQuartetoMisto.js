export function sortearQuartetoMisto(atletas, { flexivel = false } = {}) {
  const homensIniciantes = [];
  const homensIntermediarios = [];
  const mulheresIniciantes = [];
  const mulheresIntermediarios = [];

  atletas.forEach((atleta) => {
    const { genero, nivel } = atleta;

    if (genero === 'masculino') {
      if (nivel === 'iniciante') homensIniciantes.push(atleta);
      else homensIntermediarios.push(atleta);
    } else if (genero === 'feminino') {
      if (nivel === 'iniciante') mulheresIniciantes.push(atleta);
      else mulheresIntermediarios.push(atleta);
    }
  });

  const quartetos = [];

  // Montar quartetos perfeitos
  while (
    homensIniciantes.length &&
    homensIntermediarios.length &&
    mulheresIniciantes.length &&
    mulheresIntermediarios.length
  ) {
    quartetos.push([
      homensIniciantes.pop(),
      homensIntermediarios.pop(),
      mulheresIniciantes.pop(),
      mulheresIntermediarios.pop(),
    ]);
  }

  let restantes = [
    ...homensIniciantes,
    ...homensIntermediarios,
    ...mulheresIniciantes,
    ...mulheresIntermediarios,
  ];

  const flexibilizados = [];

  if (flexivel) {
    while (restantes.length >= 4) {
      const time = [];

      for (let i = 0; i < 4; i++) {
        const index = Math.floor(Math.random() * restantes.length);
        time.push(restantes.splice(index, 1)[0]);
      }

      flexibilizados.push(time);
    }
  }

  // 🔄 Alocar reservas nos times
  const reservas = {}; // { "q0": [], "f2": [] }
  const todosTimes = [...quartetos, ...flexibilizados];
  const aindaSobrando = [];

  restantes.forEach((reserva) => {
    let melhorIndice = -1;
    let melhorDiferenca = Infinity;
    let menorReservas = Infinity;

    todosTimes.forEach((time, idx) => {
      const id = idx < quartetos.length ? `q${idx}` : `f${idx - quartetos.length}`;
      const reservasDoTime = reservas[id] || [];

      // Perfil do time base
      const countIniciantes = time.filter((a) => a.nivel === 'iniciante').length;
      const countIntermediarios = time.length - countIniciantes;

      const alvo = reserva.nivel === 'iniciante' ? countIntermediarios : countIniciantes;
      const diff = Math.abs(alvo - 2); // ideal seria 2x2

      if (
        diff < melhorDiferenca ||
        (diff === melhorDiferenca && reservasDoTime.length < menorReservas)
      ) {
        melhorDiferenca = diff;
        melhorIndice = idx;
        menorReservas = reservasDoTime.length;
      }
    });

    if (melhorIndice >= 0) {
      const id = melhorIndice < quartetos.length
        ? `q${melhorIndice}`
        : `f${melhorIndice - quartetos.length}`;

      if (!reservas[id]) reservas[id] = [];
      reservas[id].push(reserva);
    } else {
      aindaSobrando.push(reserva);
    }
  });

  return {
    quartetos,
    flexibilizados,
    reservas,
    sobraram: aindaSobrando,
  };
}
