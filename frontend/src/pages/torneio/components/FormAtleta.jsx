import { useState } from 'react';
import axios from 'axios';
import { getUsuarioLogado } from '@/utils/auth';

const FormAtleta = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');

    try {
      const { token } = getUsuarioLogado();

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/participacoes`, // endpoint para inscrição individual
        { nome, email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMensagem(`✅ Inscrição realizada com sucesso!`);
      setNome('');
      setEmail('');
    } catch (error) {
      setMensagem(`❌ Erro: ${error.response?.data?.erro || 'Erro ao realizar inscrição'}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome completo"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
      >
        Inscrever-se
      </button>
      {mensagem && (
        <p className="mt-4 text-center text-blue-700 font-medium select-none">{mensagem}</p>
      )}
    </form>
  );
};

export default FormAtleta;
