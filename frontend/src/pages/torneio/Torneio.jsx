import { useEffect, useState } from 'react';
import api from '@/services/api';
import ListaTimes from './components/ListaTimes';

const Torneio = () => {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    const fetchTimes = async () => {
      setLoading(true);
      setErro('');
      try {
        const response = await api.get('/equipes'); // Ajuste a rota conforme seu backend
        setTimes(response.data);
      } catch (error) {
        setErro('Erro ao carregar times. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchTimes();
  }, []);

  if (loading) return <p className="text-center text-blue-900">Carregando times...</p>;
  if (erro) return <p className="text-center text-red-600">{erro}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-24 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-white/30">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Visualização do Torneio</h1>
      <ListaTimes times={times} />
    </div>
  );
};

export default Torneio;
