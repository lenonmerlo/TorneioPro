import { useState } from 'react';
import axios from 'axios';
import { getUsuarioLogado } from '@/utils/auth';

const FormEquipe = ({ tipo }) => {
  // tipo: 'dupla' ou 'quarteto'
  // definindo o número de atletas baseado no tipo
  const numAtletas = tipo === 'dupla' ? 2 : 4;

  // cria um array de atletas no estado, com objetos vazios
  const [atletas, setAtletas] = useState(Array(numAtletas).fill({ nome: '', email: '' }));

  const [mensagem, setMensagem] = useState('');

  const handleChange = (index, field, value) => {
    const novosAtletas = [...atletas];
    novosAtletas[index] = { ...novosAtletas[index], [field]: value };
    setAtletas(novosAtletas);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');

    try {
      const { token } = getUsuarioLogado();

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/participacoes/equipe`, // endpoint para equipe
        { tipo, atletas },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMensagem(`✅ Equipe inscrita com sucesso!`);
      setAtletas(Array(numAtletas).fill({ nome: '', email: '' }));
    } catch (error) {
      setMensagem(`❌ Erro: ${error.response?.data?.erro || 'Erro ao inscrever equipe'}`);
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
        </div>
      ))}

      <button
        type="submit"
        className={`w-full ${
          tipo === 'dupla' ? 'bg-yellow-400 hover:bg-yellow-300 text-blue-900' : 'bg-green-600 hover:bg-green-700 text-white'
        } font-semibold py-3 rounded-lg transition`}
      >
        Inscrever Equipe
      </button>

      {mensagem && (
        <p className="mt-4 text-center font-medium select-none" style={{ color: tipo === 'dupla' ? '#1E40AF' : '#FFFFFF' }}>
          {mensagem}
        </p>
      )}
    </form>
  );
};

export default FormEquipe;
