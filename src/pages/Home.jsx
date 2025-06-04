// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import LogoEVPC from '/assets/logo-evpc.png';
import React from 'react';

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
      <div className="bg-white/90 rounded-xl p-8 shadow-xl max-w-xl w-full space-y-6">
        <img src={LogoEVPC} alt="Logo EVPC" className="w-24 h-24 mx-auto" />
        <h2 className="text-2xl font-bold text-blue-800">Bem-vindo ao Torneio EVPC</h2>
        <p className="text-blue-700">Escolha abaixo como deseja acessar o sistema:</p>

        <div className="grid grid-cols-1 gap-4">
          <Link
            to="/login-aluno"
            className="bg-yellow-400 text-blue-900 py-3 rounded-xl font-semibold hover:bg-yellow-300"
          >
            👥 Sou Atleta
          </Link>
          <Link
            to="/login-professor"
            className="bg-purple-700 text-white py-3 rounded-xl font-semibold hover:bg-purple-800"
          >
            🧑‍🏫 Sou Treinador
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
