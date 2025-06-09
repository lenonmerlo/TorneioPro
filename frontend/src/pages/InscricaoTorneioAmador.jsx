import { useState } from 'react';
import api from '@/services/api'; // já configurado com baseURL

function InscricaoTorneioAmador() {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [nivel, setNivel] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !genero || !nivel) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const email = localStorage.getItem('emailUsuario'); // ainda vamos usar para associar

      await api.post('/atletas', {
        nome,
        genero,
        nivel,
        email,
      });

      setMensagem('Inscrição enviada com sucesso!');
      setNome('');
      setGenero('');
      setNivel('');
    } catch (error) {
      console.error('Erro ao enviar inscrição:', error);
      setMensagem('Erro ao enviar inscrição. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center px-4 py-12 md:py-24">
        <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl p-10 max-w-xl w-full text-center mx-4">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Inscrição de Atleta</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
            <label className="font-semibold text-blue-900">Nome:</label>
            <input
              type="text"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome completo"
            />

            <label className="font-semibold text-blue-900">Gênero:</label>
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
            >
              <option value="">Selecione o gênero</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>

            <label className="font-semibold text-blue-900">Nível:</label>
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={nivel}
              onChange={(e) => setNivel(e.target.value)}
            >
              <option value="">Selecione o nível</option>
              <option value="iniciante">Iniciante</option>
              <option value="intermediario">Intermediário / Avançado</option>
            </select>

            <button
              type="submit"
              className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-xl shadow transition duration-200 ease-in-out hover:scale-105"
            >
              Enviar Inscrição
            </button>

            {mensagem && (
              <p className="mt-4 text-sm font-medium text-blue-800 text-center">{mensagem}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default InscricaoTorneioAmador;
