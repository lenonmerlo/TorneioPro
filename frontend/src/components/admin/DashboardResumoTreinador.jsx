import { useEffect, useState } from 'react';
import api from '@/services/api';

function DashboardResumoTreinador() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
  const fetchDados = async () => {
    try {
      const response = await api.get('/admin/dashboard');
      console.log('Dados do dashboard:', response.data);
      setDados(response.data);
    } catch (err) {
      console.error('Erro ao buscar dados do dashboard:', err.response || err.message);
    }
  };

  fetchDados();
}, []);


  if (!dados) return <p className="text-center text-blue-900">Carregando dados...</p>;

  return (
    <section className="mt-10 space-y-8">
      {/* Resumo em Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <Card titulo="Atletas" valor={dados.totalAtletas} cor="blue" />
        <Card titulo="Equipes" valor={dados.totalEquipes} cor="purple" />
        <Card titulo="Partidas" valor={dados.totalPartidas} cor="green" />
      </div>

      {/* Últimos Torneios */}
      <div className="bg-white/70 backdrop-blur p-4 rounded-xl shadow">
        <h3 className="text-xl font-bold text-blue-800 mb-2">Últimos Torneios Criados</h3>
        <ul className="text-blue-900 list-disc list-inside">
          {dados.torneiosRecentes.map((t) => (
            <li key={t.id}>
              {t.nome} • {new Date(t.data).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>

      {/* Últimos Resultados */}
      <div className="bg-white/70 backdrop-blur p-4 rounded-xl shadow">
        <h3 className="text-xl font-bold text-blue-800 mb-2">Últimos Resultados</h3>
        <ul className="text-blue-900 list-inside">
          {dados.ultimosResultados.map((r) => (
            <li key={r.partidaId} className="mb-1">
              {r.equipe1} {r.pontosEquipe1} x {r.pontosEquipe2} {r.equipe2} → Vencedor:{' '}
              <strong>{r.vencedor || 'Empate'}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Card({ titulo, valor, cor }) {
  const cores = {
    blue: 'bg-blue-100 text-blue-800',
    purple: 'bg-purple-100 text-purple-800',
    green: 'bg-green-100 text-green-800',
  };

  return (
    <div className={`p-4 rounded-xl shadow border ${cores[cor]}`}>
      <h4 className="text-sm font-semibold">{titulo}</h4>
      <p className="text-2xl font-bold">{valor}</p>
    </div>
  );
}

export default DashboardResumoTreinador;
