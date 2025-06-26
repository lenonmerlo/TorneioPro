// src/components/layout/Header.jsx
import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'; // Importe useLocation

function Header() {
  const navigate = useNavigate();
  const location = useLocation(); // Inicialize useLocation
  const [tipoUsuario, setTipoUsuario] = useState(localStorage.getItem('perfil'));
  const [nomeUsuario, setNomeUsuario] = useState(localStorage.getItem('nomeUsuario'));
  const [showDropdown, setShowDropdown] = useState(false);

  // Função para atualizar o estado de autenticação
  const updateAuthState = () => {
    setTipoUsuario(localStorage.getItem('perfil'));
    setNomeUsuario(localStorage.getItem('nomeUsuario'));
  };

  useEffect(() => {
    // Chama updateAuthState na montagem do componente e sempre que a rota mudar
    updateAuthState();

    // Ouve por mudanças no localStorage (para mudanças em outras abas/janelas)
    window.addEventListener('storage', updateAuthState);

    // Função para fechar o dropdown ao clicar fora
    const handleClickOutside = (event) => {
      if (showDropdown && !event.target.closest('.dropdown-container')) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Limpa os listeners quando o componente é desmontado para evitar memory leaks
    return () => {
      window.removeEventListener('storage', updateAuthState);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown, location.pathname]); // Adicione location.pathname como dependência

  const handleLogout = () => {
    localStorage.clear();
    // Atualiza o estado do Header imediatamente
    updateAuthState();
    navigate('/');
  };

  // Verifica se o usuário está logado
  const isLoggedIn = tipoUsuario === 'atleta' || tipoUsuario === 'treinador';

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="bg-blue-800 border-b-4 border-yellow-400">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold text-yellow-400">EVPC Torneio</h1>

        <ul className="flex gap-6 text-sm md:text-base items-center">
          {/* Menu do Treinador */}
          {tipoUsuario === 'treinador' && (
            <>
              <li>
                <Link to="/home-treinador" className="hover:text-yellow-400 transition duration-200">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/participar" className="hover:text-yellow-400 transition duration-200">
                  Nova Inscrição
                </Link>
              </li>
              <li>
                <Link to="/sorteio" className="hover:text-yellow-400 transition duration-200">
                  Torneio Amador
                </Link>
              </li>
              <li>
                <Link to="/torneio" className="hover:text-yellow-400 transition duration-200">
                  Torneio Oficial
                </Link>
              </li>
            </>
          )}

          {/* Menu do Atleta */}
          {tipoUsuario === 'atleta' && (
            <>
              <li>
                <Link to="/home-aluno" className="hover:text-yellow-400 transition duration-200">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sorteio" className="hover:text-yellow-400 transition duration-200">
                  Torneio Amador
                </Link>
              </li>
              <li>
                <Link to="/torneio" className="hover:text-yellow-400 transition duration-200">
                  Torneio Oficial
                </Link>
              </li>
            </>
          )}

          {/* Se não estiver logado → Mostrar Dropdown */}
          {!isLoggedIn && (
            <li className='relative dropdown-container'>
              <button
                onClick={toggleDropdown}
                className='bg-yellow-400 text-blue-800 font-semibold py-1 px-4 rounded hover:bg-yellow-500'
              >
                Entrar
              </button>
              {showDropdown && (
                <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md text-black z-50'>
                  <Link
                    to='/login-atleta'
                    className='block px-4 py-2 hover:bg-yellow-100'
                    onClick={() => setShowDropdown(false)}
                  >
                    Login Atleta
                  </Link>
                  <Link
                    to='/login-treinador'
                    className='block px-4 py-2 hover:bg-yellow-100'
                    onClick={() => setShowDropdown(false)}
                  >
                    Login Treinador
                  </Link>
                  <hr className='my-1' />
                  <Link
                    to='/cadastro-atleta'
                    className='block px-4 py-2 hover:bg-yellow-100'
                    onClick={() => setShowDropdown(false)}
                  >
                    Cadastrar Atleta
                  </Link>
                  <Link
                    to='/cadastro-treinador'
                    className='block px-4 py-2 hover:bg-yellow-100'
                    onClick={() => setShowDropdown(false)}
                  >
                    Cadastrar Treinador
                  </Link>
                </div>
              )}
            </li>
          )}

          {/* Nome do usuário */}
          {isLoggedIn && nomeUsuario && (
            <li className="text-yellow-300 text-xs md:text-sm font-medium hidden sm:block">
              Olá, {nomeUsuario.split(' ')[0]}
            </li>
          )}

          {/* Botão de Logout */}
          {isLoggedIn && (
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md text-xs md:text-sm"
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
