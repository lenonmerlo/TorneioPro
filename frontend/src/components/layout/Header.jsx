import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUsuarioLogado } from '@/utils/auth';

function Header() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const dados = getUsuarioLogado();
    setUsuario(dados);
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const tipoUsuario = usuario?.perfil;

  return (
    <header className="bg-blue-800 border-b-4 border-yellow-400">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold text-yellow-400">EVPC Torneio</h1>

        <ul className="flex gap-6 items-center text-sm md:text-base">
          {/* Treinador */}
          {tipoUsuario === 'treinador' && (
            <>
              <li><Link to="/" className="hover:text-yellow-400">Início</Link></li>
              <li><Link to="/participar" className="hover:text-yellow-400">Participar</Link></li>
              <li><Link to="/sorteio" className="hover:text-yellow-400">Torneio Amador</Link></li>
              <li><Link to="/torneio" className="hover:text-yellow-400">Torneio Oficial</Link></li>
            </>
          )}

          {/* Atleta */}
          {tipoUsuario === 'atleta' && (
            <>
              <li><Link to="/sorteio" className="hover:text-yellow-400">Torneio Amador</Link></li>
              <li><Link to="/torneio" className="hover:text-yellow-400">Torneio Oficial</Link></li>
            </>
          )}

          {/* Logout */}
          {tipoUsuario && (
            <li>
              <button
                onClick={handleLogout}
                className="bg-yellow-400 text-blue-900 px-3 py-1 rounded hover:bg-yellow-300 font-semibold"
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
