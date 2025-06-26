// src/pages/HomeTreinador.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsuarioLogado } from '@/utils/auth';
import LogoEVPC from '/assets/logo-evpc.png';
import DashboardResumoTreinador from '@/components/admin/DashboardResumoTreinador';
import api from '@/services/api'; 

const HomeTreinador = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [torneios, setTorneios] = useState([]);

  useEffect(() => {
    const usuario = getUsuarioLogado();
    if (usuario?.perfil === 'treinador') {
      setNome(usuario.nome);
      buscarTorneios();
    } else {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  const buscarTorneios = async () => {
    try {
      const res = await api.get('/admin/torneios');
      setTorneios(res.data);
    } catch (error) {
      console.error('Erro ao buscar torneios:', error);
      setTorneios([]); 
    }
  };

  return (
    <div className="min-h-screen bg-[url('/assets/bg-praia.png')] bg-cover bg-center flex flex-col items-center justify-center px-4">
      <div className='bg-white/30 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-4xl text-center space-y-6 border border-white/20'>
        <img src={LogoEVPC} alt='Logo EVPC' className='w-20 h-20 mx-auto' />
        <h2 className='text-2xl font-bold text-blue-800'>Bem-vindo, {nome?.split(' ')[0]} 👋</h2>
        <p className='text-blue-900 font-medium'>Escolha uma das opções abaixo:</p>

        {/* Mostrar botão se não houver torneios */}
        {torneios.length === 0 && (
          <div className='text-center mt-4'>
            <p className='text-sm text-gray-600 mb-2'>Nenhum torneio cadastrado ainda.</p>
            <Link
              to='/criar-torneio'
              className='bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition'
            >
              Criar Novo Torneio
            </Link>
          </div>
        )}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'>
          <Link
            to='/sorteio'
            className='glass-button bg-yellow-400 hover:bg-yellow-300 text-blue-900'
          >
            Torneio Amador
          </Link>
          <Link to='/torneio' className='glass-button bg-blue-600 hover:bg-blue-700 text-white'>
            Torneio Oficial
          </Link>
          <Link
            to='/participar'
            className='glass-button bg-purple-600 hover:bg-purple-700 text-white'
          >
            Ver Inscrições
          </Link>
        </div>
      </div>
      <DashboardResumoTreinador />
    </div>
  );
};

export default HomeTreinador;
