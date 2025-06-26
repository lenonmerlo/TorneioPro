// src/components/ButtonExportPDF.jsx
import { exportarChavesParaPDF } from '@/utils/exportarChavesParaPDF';

function ButtonExportPDF({
  chavesDupla,
  chavesTrio,
  chavesQuarteto,
  titulo = 'Chaves Sorteadas - Torneio Oficial',
}) {
  const handleExport = () => {
    const temChaves = chavesDupla || chavesTrio || chavesQuarteto;

    if (!temChaves) {
      alert('Nenhuma chave foi sorteada ainda.');
      return;
    }

    const chaves = {};
    if (chavesDupla) chaves['Duplas'] = chavesDupla;
    if (chavesTrio) chaves['Trios'] = chavesTrio;
    if (chavesQuarteto) chaves['Quartetos'] = chavesQuarteto;

    exportarChavesParaPDF({ titulo, chaves });
  };

  return (
    <button
      onClick={handleExport}
      className='bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-xl shadow'
    >
      Exportar Chaves em PDF
    </button>
  );
}

export default ButtonExportPDF;
