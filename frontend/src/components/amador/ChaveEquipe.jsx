import React from 'react';

function ChaveEquipe({ chave, grupos }) {
  return (
    <div className='border border-yellow-500 rounded-xl p-4 bg-white/80 shadow'>
      <h2 className='text-xl font-bold text-yellow-600 mb-2 flex items-center gap-2'>
        <span role='img' aria-label='vôlei'>
          🏐
        </span>{' '}
        Chave {chave}
      </h2>
      <ul className='space-y-2'>
        {grupos.map((dupla, idx) => (
          <li key={idx} className='text-blue-900'>
            {dupla.map((atleta) => atleta.nome).join(' & ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChaveEquipe;
