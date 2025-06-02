export function exportarChavesParaCSV(chaves) {
  let csv = 'Chave,Equipe\n';

  Object.entries(chaves).forEach(([chave, grupos]) => {
    grupos.forEach(dupla => {
      const nomes = dupla.map(atleta => atleta.nome).join(' & ');
      csv += `${chave},${nomes}\n`;
    });
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'equipes_sorteadas.csv';
  a.click();
  URL.revokeObjectURL(url);
}
