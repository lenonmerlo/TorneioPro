// src/pages/Homeatleta.jsx
import { getUsuarioLogado } from '@/utils/auth';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoTorneioPro from '/assets/logo-torneiopro.png';

const Homeatleta = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');

  useEffect(() => {
    const usuario = getUsuarioLogado();
    if (!usuario || usuario.perfil !== 'atleta') {
      navigate('/', { replace: true });
    } else {
      setNome(usuario.nome);
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[url('/assets/bg-praia.png')] bg-cover bg-center flex flex-col items-center justify-center px-4">
      <div className="bg-white/30 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-4xl text-center space-y-6 border border-white/20">
        <img src={LogoTorneioPro} alt="Logo TorneioPro" className="w-20 h-20 mx-auto" />
        <h2 className="text-2xl font-bold text-blue-800">Bem-vindo, {nome?.split(' ')[0]} 👋</h2>
        <p className="text-blue-900 font-medium">Escolha uma das opções abaixo:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <Link to="/participar" className="glass-button bg-blue-600 hover:bg-blue-700 text-white">
            Participar do Torneio
          </Link>
          <Link to="/torneio" className="glass-button bg-yellow-400 hover:bg-yellow-300 text-blue-900">
            TorneioPro
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homeatleta;
