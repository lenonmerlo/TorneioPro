import axios from 'axios';
import { useState } from 'react';


const FormAtleta = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    genero: '',
    nivel: '',
  });
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setMensagem('');

  try {
    // Chamada sem token, porque não precisa estar logado
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/atletas`, // endpoint para criar participação
      form
    );

    setMensagem('✅ Inscrição realizada com sucesso!');
    setForm({ nome: '', email: '', genero: '', nivel: '' });
  } catch (error) {
    setMensagem(`❌ Erro: ${error.response?.data?.erro || 'Erro ao realizar inscrição'}`);
  }
};


  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
        placeholder="Nome completo"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        required
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="E-mail"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        required
      />
      <select
        name="genero"
        value={form.genero}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        required
      >
        <option value="">Selecione o Gênero</option>
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
      </select>
      <select
        name="nivel"
        value={form.nivel}
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
        required
      >
        <option value="">Selecione o Nível</option>
        <option value="iniciante">Iniciante</option>
        <option value="intermediario/avancado">Intermediário/Avançado</option>
      </select>

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
