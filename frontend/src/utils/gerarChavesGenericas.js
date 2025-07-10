export function gerarChavesGenericas(times, preferencia = 4) {
  const embaralhados = [...times].sort(() => 0.5 - Math.random());

  const distribuir = (porChave) => {
    const chaves = {};
    let idx = 0;

    for (let i = 0; i < embaralhados.length; i += porChave) {
      const grupo = embaralhados.slice(i, i + porChave);
      const letra = String.fromCharCode(65 + idx); // A, B, C...
      chaves[letra] = grupo;
      idx++;
    }

    const ultimaLetra = String.fromCharCode(65 + idx - 1);
    const ultimaChave = chaves[ultimaLetra];
    if (ultimaChave.length < 3 && porChave === 4) return null;

    return chaves;
  };

  const comQuatro = distribuir(4);
  if (comQuatro) return comQuatro;

  return distribuir(3);
}
