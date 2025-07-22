import { useState } from 'react';
import api from '@/services/api';

const FormEquipe = ({ tipo }) => {
  const numAtletas = tipo === 'dupla' ? 2 : 4;

  const [atletas, setAtletas] = useState(
    Array(numAtletas).fill({ nome: '', email: '', genero: '', nivel: '' })
  );
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (index, field, value) => {
    const novosAtletas = [...atletas];
    novosAtletas[index] = { ...novosAtletas[index], [field]: value };
    setAtletas(novosAtletas);
  };

  const validarCampos = () => {
    return atletas.every(a => 
      a.nome.trim() !== '' &&
      a.email.trim() !== '' &&
      a.genero.trim() !== '' &&
      a.nivel.trim() !== ''
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');

    if (!validarCampos()) {
      setMensagem('❌ Por favor, preencha todos os campos de todos os atletas.');
      return;
    }

    setLoading(true);

    try {
      // Buscar torneio ativo
      const resTorneio = await api.get('/torneios/ativo');
      const torneioId = resTorneio.data?.id;
      if (!torneioId) {
        setMensagem('❌ Nenhum torneio ativo disponível no momento.');
        setLoading(false);
        return;
      }

      // Criar atletas
      const atletasCriados = await Promise.all(
        atletas.map(async (atleta) => {
          const res = await api.post('/atletas', atleta);
          return res.data;
        })
      );

      // Extrair ids dos atletas
      const atletasIds = atletasCriados.map(a => a.atleta.id);

      // Nome da equipe
      const nomeEquipe = `Equipe ${tipo.charAt(0).toUpperCase() + tipo.slice(1)} - ${Date.now()}`;

      // Criar equipe
      await api.post('/equipes', {
        nome: nomeEquipe,
        tipo,
        torneioId,
        atletasIds,
      });

      setMensagem('✅ Equipe inscrita com sucesso!');
      setAtletas(Array(numAtletas).fill({ nome: '', email: '', genero: '', nivel: '' }));
    } catch (error) {
      console.error('Erro ao inscrever equipe:', error.response?.data || error.message);
      setMensagem(`❌ Erro: ${error.response?.data?.message || 'Erro ao inscrever equipe'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {atletas.map((atleta, idx) => (
        <div key={idx} className="space-y-2">
          <input
            type="text"
            value={atleta.nome}
            onChange={(e) => handleChange(idx, 'nome', e.target.value)}
            placeholder={`Nome do Atleta ${idx + 1}`}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            required
          />
          <input
            type="email"
            value={atleta.email}
            onChange={(e) => handleChange(idx, 'email', e.target.value)}
            placeholder={`E-mail do Atleta ${idx + 1}`}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            required
          />
          <select
            value={atleta.genero}
            onChange={(e) => handleChange(idx, 'genero', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            required
          >
            <option value="">Selecione o Gênero</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
          <select
            value={atleta.nivel}
            onChange={(e) => handleChange(idx, 'nivel', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            required
          >
            <option value="">Selecione o Nível</option>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario/avancado">Intermediário/Avançado</option>
          </select>
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className={`w-full ${
          tipo === 'dupla'
            ? 'bg-yellow-400 hover:bg-yellow-300 text-blue-900'
            : 'bg-purple-600 hover:bg-purple-700 text-white'
        } font-semibold py-3 rounded-lg transition disabled:opacity-50`}
      >
        {loading ? 'Enviando...' : 'Inscrever Equipe'}
      </button>

      {mensagem && (
        <p
          className="mt-4 text-center font-medium select-none"
          style={{ color: tipo === 'dupla' ? '#1E40AF' : '#FFFFFF' }}
        >
          {mensagem}
        </p>
      )}
    </form>
  );
};

export default FormEquipe;
