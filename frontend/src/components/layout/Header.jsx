// src/components/layout/Header.jsx
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const [tipoUsuario, setTipoUsuario] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');

  useEffect(() => {
    const perfil = localStorage.getItem('perfil');
    const nome = localStorage.getItem('nomeUsuario');
    if (perfil) setTipoUsuario(perfil);
    if (nome) setNomeUsuario(nome);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <header className='bg-blue-800 border-b-4 border-yellow-400'>
      <nav className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white'>
        <h1 className='text-xl font-bold text-yellow-400'>EVPC Torneio</h1>

        <ul className='flex gap-6 text-sm md:text-base items-center'>
          {/* Menu do Treinador */}
          {tipoUsuario === 'treinador' && (
            <>
              <li>
                <Link
                  to='/home-treinador'
                  className='hover:text-yellow-400 transition duration-200'
                >
                  Início
                </Link>
              </li>
              <li>
                <Link to='/participar' className='hover:text-yellow-400 transition duration-200'>
                  Nova Inscrição
                </Link>
              </li>
              <li>
                <Link to='/sorteio' className='hover:text-yellow-400 transition duration-200'>
                  Torneio Amador
                </Link>
              </li>
              <li>
                <Link to='/torneio' className='hover:text-yellow-400 transition duration-200'>
                  Torneio Oficial
                </Link>
              </li>
            </>
          )}

          {/* Menu do Atleta */}
          {tipoUsuario === 'atleta' && (
            <>
              <li>
                <Link to='/home-aluno' className='hover:text-yellow-400 transition duration-200'>
                  Início
                </Link>
              </li>
              <li>
                <Link to='/sorteio' className='hover:text-yellow-400 transition duration-200'>
                  Torneio Amador
                </Link>
              </li>
              <li>
                <Link to='/torneio' className='hover:text-yellow-400 transition duration-200'>
                  Torneio Oficial
                </Link>
              </li>
            </>
          )}

          {/* Nome do usuário */}
          {nomeUsuario && (tipoUsuario === 'atleta' || tipoUsuario === 'treinador') && (
            <li className='text-yellow-300 text-xs md:text-sm font-medium hidden sm:block'>
              Olá, {nomeUsuario.split(' ')[0]}
            </li>
          )}

          {/* Botão de Logout */}
          {(tipoUsuario === 'atleta' || tipoUsuario === 'treinador') && (
            <li>
              <button
                onClick={handleLogout}
                className='bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-xs md:text-sm'
              >
                Sair
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
