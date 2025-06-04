import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gerarChavesPorGrupos } from '@/utils/gerarChavesPorGrupos';
import { sortearQuartetoMisto } from '@/utils/sortearQuartetoMisto';
import ButtonExportPDF from '@/components/ButtonExportPDF';

function TorneioAmador() {
  const [resultado, setResultado] = useState(null);
  const [usarFlexivel, setUsarFlexivel] = useState(false);
  const [chaves, setChaves] = useState(null);
  const [atletas, setAtletas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem('atletas')) || [];
    setAtletas(dados);

    if (dados.length < 4) {
      alert('Cadastre pelo menos 4 atletas para realizar o sorteio.');
      navigate('/inscricao-amador');
    }
  }, [navigate]);

  const handleSortear = () => {
    const resultadoSorteio = sortearQuartetoMisto(atletas, { flexivel: usarFlexivel });
    setResultado(resultadoSorteio);
    setChaves(null);
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
    const chavesSorteadas = gerarChavesPorGrupos(todosOsTimes, 3);
    setChaves(chavesSorteadas);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-4 md:p-8 bg-white/70 backdrop-blur-sm mx-4 my-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-6">Torneio Amador – Sorteio de Equipes</h1>

        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 mb-6">
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

          <button
            onClick={() => alert(JSON.stringify(atletas, null, 2))}
            className="text-sm text-blue-700 underline"
          >
            Visualizar atletas inscritos
          </button>

          <button
            onClick={() => {
              if (confirm('Deseja realmente limpar os atletas cadastrados?')) {
                localStorage.removeItem('atletas');
                window.location.reload();
              }
            }}
            className="text-sm text-red-600 underline"
          >
            Limpar atletas
          </button>
        </div>

        {resultado && (
          <div className="space-y-8">
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
          <>
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

            <div className="text-center mt-8">
              <ButtonExportPDF
                chavesDupla={null}
                chavesTrio={null}
                chavesQuarteto={chaves}
                titulo="Chaves Sorteadas - Torneio Amador"
              />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default TorneioAmador;
