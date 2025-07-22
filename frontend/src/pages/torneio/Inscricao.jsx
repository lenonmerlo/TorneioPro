import { useState } from 'react';
import FormAtleta from './components/FormAtleta';
import FormEquipe from './components/FormEquipe';

const Inscricao = () => {
  const [tipoInscricao, setTipoInscricao] = useState('individual'); // valores: 'individual', 'dupla', 'quarteto'

  return (
    <div className="max-w-lg mx-auto p-8 mt-24 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-white/30">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Inscrição no Torneio</h1>

      <div className="mb-6 flex justify-center gap-4">
        <button
          onClick={() => setTipoInscricao('individual')}
          className={`py-2 px-4 rounded-lg font-semibold transition ${
            tipoInscricao === 'individual' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Individual
        </button>
        <button
          onClick={() => setTipoInscricao('dupla')}
          className={`py-2 px-4 rounded-lg font-semibold transition ${
            tipoInscricao === 'dupla' ? 'bg-yellow-400 text-blue-900' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Dupla
        </button>
        <button
          onClick={() => setTipoInscricao('quarteto')}
          className={`py-2 px-4 rounded-lg font-semibold transition ${
            tipoInscricao === 'quarteto' ? 'bg-purple-700 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Quarteto
        </button>
      </div>

      {tipoInscricao === 'individual' && <FormAtleta />}
      {(tipoInscricao === 'dupla' || tipoInscricao === 'quarteto') && (
        <FormEquipe tipo={tipoInscricao} />
      )}
    </div>
  );
};

export default Inscricao;
