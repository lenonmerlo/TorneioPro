import { useState } from 'react';
import axios from 'axios';
import { getUsuarioLogado } from '@/utils/auth';

function CriarTorneio() {
  const [formData, setFormData] = useState({
    nome: '',
    tipo: '',
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
      setFormData({ nome: '', tipo: '', data: '', local: '' });
    } catch (error) {
      setMensagem(`❌ Erro: ${error.response?.data?.erro || 'Erro ao criar torneio'}`);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Criar Novo Torneio</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome do Torneio"
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Selecione o Tipo</option>
          <option value="amador">Amador</option>
          <option value="oficial">Oficial</option>
        </select>
        <input
          type="date"
          name="data"
          value={formData.data}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="local"
          value={formData.local}
          onChange={handleChange}
          placeholder="Local do Torneio"
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Criar Torneio
        </button>
      </form>

      {mensagem && <p className="mt-4 text-center text-blue-700">{mensagem}</p>}
    </div>
  );
}

export default CriarTorneio;
