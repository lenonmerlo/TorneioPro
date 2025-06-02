import { useState } from 'react';
import { sortearQuartetoMisto } from '@/utils/sortearQuartetoMisto';
import { gerarChavesPorGrupos } from '@/utils/gerarChavesPorGrupos';

function SorteioAleatorio() {
  const [resultado, setResultado] = useState(null);
  const [usarFlexivel, setUsarFlexivel] = useState(false);
  const [chaves, setChaves] = useState(null);

  const handleSortear = () => {
    const atletas = JSON.parse(localStorage.getItem('atletas')) || [];
    const resultadoSorteio = sortearQuartetoMisto(atletas, { flexivel: usarFlexivel });
    setResultado(resultadoSorteio);
    setChaves(null); // resetar chaves após novo sorteio
  };

  const handleSortearChaves = () => {
    if (!resultado) return;

    const timesPerfeitos = resultado.quartetos.map((atletas, idx) => ({
      nome: `Time ${String.fromCharCode(65 + idx)}`,
      atletas,
    }));

    const timesFlex = resultado.flexibilizados.map((atletas, idx) => ({
      nome: `Time ${String.fromCharCode(65 + resultado.quartetos.length + idx)}`,
      atletas,
    }));

    const todosOsTimes = [...timesPerfeitos, ...timesFlex];

    const chavesSorteadas = gerarChavesPorGrupos(todosOsTimes, 3); // 3 por chave
    setChaves(chavesSorteadas);
  };

  const getTimeLabel = (index) => String.fromCharCode(65 + index);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-4 md:p-8 bg-white/70 backdrop-blur-sm mx-4 my-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-6">Sorteio: Quarteto Misto</h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6">
          <button
            onClick={handleSortear}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-2 px-6 rounded-xl shadow"
          >
            Sortear Equipes
          </button>

          <label className="flex items-center gap-2 text-blue-900 font-medium">
            <input
              type="checkbox"
              checked={usarFlexivel}
              onChange={(e) => setUsarFlexivel(e.target.checked)}
              className="w-4 h-4"
            />
            Flexibilizar sorteio
          </label>

          {resultado && (
            <button
              onClick={handleSortearChaves}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl shadow"
            >
              Sortear Chaves
            </button>
          )}
        </div>

        {resultado && (
          <div className="space-y-8">
            {/* Quarteto Perfeito */}
            <section>
              <h2 className="text-xl font-bold text-green-700 mb-2">Quartetos Perfeitos</h2>
              {resultado.quartetos.length === 0 ? (
                <p className="text-gray-600">Nenhum quarteto foi formado com as regras exatas.</p>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {resultado.quartetos.map((time, idx) => {
                    const reservas = resultado.reservas[`q${idx}`] || [];
                    const label = String.fromCharCode(65 + idx);
                    return (
                      <div key={idx} className="p-4 bg-white rounded-xl border shadow">
                        <h3 className="font-semibold text-blue-800 mb-2">Time {label}</h3>
                        <ul className="text-blue-900 space-y-1">
                          {time.map((atleta) => (
                            <li key={atleta.id}>• {atleta.nome} ({atleta.genero}, {atleta.nivel})</li>
                          ))}
                        </ul>
                        {reservas.length > 0 && (
                          <div className="mt-3">
                            <p className="text-sm font-semibold text-gray-600">Reservas:</p>
                            <ul className="text-gray-700 text-sm list-disc list-inside">
                              {reservas.map((res) => (
                                <li key={res.id}>{res.nome} ({res.genero}, {res.nivel})</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </section>

            {/* Flexibilizados */}
            {usarFlexivel && resultado.flexibilizados.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-yellow-700 mb-2">Quartetos Flexibilizados</h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {resultado.flexibilizados.map((time, idx) => {
                    const reservas = resultado.reservas[`f${idx}`] || [];
                    const label = String.fromCharCode(65 + resultado.quartetos.length + idx);
                    return (
                      <div key={idx} className="p-4 bg-yellow-50 rounded-xl border border-yellow-400 shadow">
                        <h3 className="font-semibold text-yellow-800 mb-2">Time {label}</h3>
                        <ul className="text-yellow-900 space-y-1">
                          {time.map((atleta) => (
                            <li key={atleta.id}>• {atleta.nome} ({atleta.genero}, {atleta.nivel})</li>
                          ))}
                        </ul>
                        {reservas.length > 0 && (
                          <div className="mt-3">
                            <p className="text-sm font-semibold text-yellow-700">Reservas:</p>
                            <ul className="text-yellow-800 text-sm list-disc list-inside">
                              {reservas.map((res) => (
                                <li key={res.id}>{res.nome} ({res.genero}, {res.nivel})</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Sobraram */}
            {resultado.sobraram.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-red-700 mb-2">Atletas que sobraram</h2>
                <ul className="text-red-800 space-y-1">
                  {resultado.sobraram.map((atleta) => (
                    <li key={atleta.id}>• {atleta.nome} ({atleta.genero}, {atleta.nivel})</li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}


        {chaves && (
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">Chaves Sorteadas</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(chaves).map(([chave, times]) => (
                <div key={chave} className="p-4 bg-purple-50 rounded-xl border border-purple-300 shadow">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Chave {chave}</h3>
                  <ul className="text-purple-900 space-y-1">
                    {times.map((time, idx) => (
                      <li key={idx}>
                        <strong>{time.nome}</strong>
                        <ul className="pl-4 list-disc text-sm text-purple-700">
                          {time.atletas.map((a) => (
                            <li key={a.id}>{a.nome} ({a.genero}, {a.nivel})</li>
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

export default SorteioAleatorio;
