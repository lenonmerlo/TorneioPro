import { useEffect, useState } from 'react';
import { gerarChavesPorGrupos } from '@/utils/gerarChavesPorGrupos';

function TorneioOficial() {
  const [duplas, setDuplas] = useState([]);
  const [chaves, setChaves] = useState(null);

  useEffect(() => {
    const duplasSalvas = JSON.parse(localStorage.getItem('duplas')) || [];
    setDuplas(duplasSalvas);
  }, []);

  const handleSortearChaves = () => {
    if (duplas.length === 0) return;
    const resultado = gerarChavesPorGrupos(duplas, 3); // até 3 duplas por chave
    setChaves(resultado);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-4 md:p-8 bg-white/70 backdrop-blur-sm mx-4 my-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-6">Torneio Oficial</h1>

        <section className="max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">Duplas Cadastradas</h2>
          {duplas.length === 0 ? (
            <p className="text-center text-gray-600">Nenhuma dupla cadastrada ainda.</p>
          ) : (
            <ul className="grid gap-4 md:grid-cols-2">
              {duplas.map((dupla) => (
                <li key={dupla.id} className="bg-white p-4 rounded-xl border shadow">
                  <h3 className="font-semibold text-blue-800 mb-2">{dupla.nome}</h3>
                  <ul className="text-blue-900 list-disc list-inside text-sm">
                    {dupla.atletas.map((a) => (
                      <li key={a.id}>{a.nome}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </section>

        {duplas.length > 0 && (
          <div className="text-center mb-10">
            <button
              onClick={handleSortearChaves}
              className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-2 px-6 rounded-xl shadow"
            >
              Sortear Chaves
            </button>
          </div>
        )}

        {chaves && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Chaves Sorteadas</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(chaves).map(([chave, duplasNaChave]) => (
                <div key={chave} className="p-4 bg-purple-50 rounded-xl border border-purple-300 shadow">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Chave {chave}</h3>
                  <ul className="text-blue-900 space-y-2">
                    {duplasNaChave.map((dupla) => (
                      <li key={dupla.id}>
                        <strong>{dupla.nome}</strong>
                        <ul className="text-sm list-disc list-inside text-blue-900-700 pl-4">
                          {dupla.atletas.map((a) => (
                            <li key={a.id}>{a.nome}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default TorneioOficial;
