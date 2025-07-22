import { useState } from 'react';
import axios from 'axios';
import { getUsuarioLogado } from '@/utils/auth';

function CriarTorneio() {
  const [formData, setFormData] = useState({
    nome: '',
    data: '',
    local: '',
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensagem('');

    try {
      const { token } = getUsuarioLogado();

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/torneios`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMensagem(`✅ Torneio "${response.data.nome}" criado com sucesso!`);
      setFormData({ nome: '', data: '', local: '' });
    } catch (error) {
      setMensagem(`❌ Erro: ${error.response?.data?.erro || 'Erro ao criar torneio'}`);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 mt-24 bg-white/60 backdrop-blur-md rounded-2xl shadow-lg border border-white/30">
      <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Criar Novo Torneio</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome do Torneio"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          required
        />

        <input
          type="date"
          name="data"
          value={formData.data}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
          required
        />

        <input
          type="text"
          name="local"
          value={formData.local}
          onChange={handleChange}
          placeholder="Local do Torneio"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Criar Torneio
        </button>
      </form>

      {mensagem && (
        <p className="mt-6 text-center text-lg font-medium text-blue-700 select-none">{mensagem}</p>
      )}
    </div>
  );
}

export default CriarTorneio;
