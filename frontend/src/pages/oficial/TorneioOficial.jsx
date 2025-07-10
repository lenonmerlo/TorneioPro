import ButtonExportPDF from '@/components/amador/ButtonExportPDF';
import api from '@/services/api';
import { gerarChavesGenericas } from "@/utils/gerarChavesGenericas";
import { useEffect, useState } from 'react';

const TABS = ['Duplas', 'Trios', 'Quartetos'];

function TorneioOficial() {
  const [duplas, setDuplas] = useState([]);
  const [trios, setTrios] = useState([]);
  const [quartetos, setQuartetos] = useState([]);

  const [chavesDupla, setChavesDupla] = useState(null);
  const [chavesTrio, setChavesTrio] = useState(null);
  const [chavesQuarteto, setChavesQuarteto] = useState(null);

  useEffect(() => {
    carregarInscricoes();
  }, []);

  const carregarInscricoes = async () => {
    try {
      const [resDuplas, resTrios, resQuartetos] = await Promise.all([
        api.get('/equipe-oficial?tipo=dupla'),
        api.get('/equipe-oficial?tipo=trio'),
        api.get('/equipe-oficial?tipo=quarteto'),
      ]);

      const formatar = (dados) =>
        dados.map((equipe) => ({
          id: equipe.id,
          nome: equipe.nome || equipe.integrantes.map((i) => i.nome).join(' & '),
          atletas: equipe.integrantes.map((i, idx) => ({
            id: `${equipe.id}-${idx + 1}`,
            nome: i.nome,
          })),
        }));

      setDuplas(formatar(resDuplas.data));
      setTrios(formatar(resTrios.data));
      setQuartetos(formatar(resQuartetos.data));
    } catch (error) {
      console.error('Erro ao carregar equipes:', error);
      alert('Erro ao carregar inscrições oficiais.');
    }
  };

  const sortear = (equipes, tamanho, setResultado) => {
    if (!equipes.length) return;
    const chaves = gerarChavesGenericas(equipes, tamanho);
    setResultado(chaves);
  };

  const renderSecao = (tipo, equipes, chaves, sortearFn) => (
    <section className='secao-chaves mb-12'>
      <h2 className='text-2xl font-bold text-blue-900 mb-4 text-center'>{tipo} Cadastradas</h2>
      {equipes.length === 0 ? (
        <p className='text-center text-gray-600'>Nenhuma equipe cadastrada.</p>
      ) : (
        <>
          <ul className='grid gap-4 md:grid-cols-2 max-w-4xl mx-auto mb-6'>
            {equipes.map((equipe) => (
              <li key={equipe.id} className='bg-white p-4 rounded-xl border shadow'>
                <h3 className='font-semibold text-blue-800 mb-2'>{equipe.nome}</h3>
                <ul className='text-blue-900 list-disc list-inside text-sm'>
                  {equipe.atletas.map((a) => (
                    <li key={a.id}>{a.nome}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className='text-center mb-8'>
            <button
              onClick={sortearFn}
              className='bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold py-2 px-6 rounded-xl shadow'
            >
              Sortear Chaves
            </button>
          </div>
        </>
      )}

      {chaves && (
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {Object.entries(chaves).map(([chave, equipes]) => (
            <div
              key={chave}
              className='p-4 bg-purple-50 rounded-xl border border-purple-300 shadow'
            >
              <h3 className='text-lg font-semibold text-blue-900 mb-2'>Chave {chave}</h3>
              <ul className='text-blue-900 space-y-2'>
                {equipes.map((equipe) => (
                  <li key={equipe.id}>
                    <strong>{equipe.nome}</strong>
                    <ul className='text-sm list-disc list-inside text-blue-900-700 pl-4'>
                      {equipe.atletas.map((a) => (
                        <li key={a.id}>{a.nome}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );

  return (
    <div className='min-h-screen flex flex-col'>
      <main className='flex-grow p-4 md:p-8 bg-white/70 backdrop-blur-sm mx-4 my-6 rounded-xl shadow-lg'>
        <div id='logo-pdf' className='flex items-center justify-center mb-6'>
          <img src='/assets/logo-torneiopro.png' alt='Logo EVPC' className='h-10' />
        </div>

        <h1 className='text-3xl font-bold text-blue-800 text-center mb-8'>Torneio Oficial</h1>

        {renderSecao('Duplas', duplas, chavesDupla, () => sortear(duplas, 3, setChavesDupla))}
        {renderSecao('Trios', trios, chavesTrio, () => sortear(trios, 3, setChavesTrio))}
        {renderSecao('Quartetos', quartetos, chavesQuarteto, () =>
          sortear(quartetos, 4, setChavesQuarteto),
        )}

        <div className='text-center mt-12'>
          <ButtonExportPDF
            chavesDupla={chavesDupla}
            chavesTrio={chavesTrio}
            chavesQuarteto={chavesQuarteto}
          />
        </div>
      </main>
    </div>
  );
}

export default TorneioOficial;
