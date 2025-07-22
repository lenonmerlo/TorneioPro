import React from 'react';

const ListaTimes = ({ times }) => {
  if (!times || times.length === 0) {
    return <p className="text-center text-gray-600">Nenhum time inscrito ainda.</p>;
  }

  return (
    <div className="space-y-4">
      {times.map((time, index) => (
        <div
          key={time.id || index}
          className="bg-white/70 backdrop-blur p-4 rounded-lg shadow border border-gray-200"
        >
          <h4 className="font-semibold text-blue-800 mb-2">
            Time {index + 1} {time.nome ? `- ${time.nome}` : ''}
          </h4>
          <ul className="list-disc list-inside text-gray-700">
            {time.atletas?.map((atleta, i) => (
              <li key={i}>
                {atleta.nome} ({atleta.email})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListaTimes;
