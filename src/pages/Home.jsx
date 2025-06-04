// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import LogoEVPC from '/assets/logo-evpc.png';
import React from 'react';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
      <div className="bg-white/90 rounded-xl p-8 shadow-xl max-w-xl w-full space-y-6">
        <img src={LogoEVPC} alt="Logo EVPC" className="w-24 h-24 mx-auto" />
        <h2 className="text-2xl font-bold text-blue-800">Painel do Professor</h2>

        <div className="grid grid-cols-1 gap-4">
          <Link to="/inscricao" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            📋 Ver Inscrições (Amador)
          </Link>
          <Link to="/inscricao-oficial" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            📋 Ver Inscrições (Oficial)
          </Link>
          <Link to="/sorteio" className="bg-yellow-400 text-blue-900 py-2 rounded hover:bg-yellow-300">
            🧮 Realizar Sorteios
          </Link>
          <Link to="/torneio" className="bg-yellow-400 text-blue-900 py-2 rounded hover:bg-yellow-300">
            🗂️ Organizar Chaves
          </Link>
          <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
            ⬇️ Exportar Dados
          </button>
          <button className="bg-red-600 text-white py-2 rounded hover:bg-red-700">
            🧹 Limpar Registros
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
