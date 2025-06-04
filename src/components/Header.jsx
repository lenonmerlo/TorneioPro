import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return (
    <header className="bg-blue-800 border-b-4 border-yellow-400">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold text-yellow-400">EVPC Torneio</h1>
        <ul className="flex gap-6 text-sm md:text-base">

          {isAdmin && (
            <li>
              <Link to="/" className="hover:text-yellow-400 transition duration-200">
                Início
              </Link>
            </li>
          )}

          <li>
            <Link to="/participar" className="hover:text-yellow-400 transition duration-200">
              Participar
            </Link>
          </li>

          {isAdmin && (
            <>
              <li>
                <Link to="/inscricao" className="hover:text-yellow-400 transition duration-200">
                  Inscrição Amador
                </Link>
              </li>
              <li>
                <Link to="/sorteio" className="hover:text-yellow-400 transition duration-200">
                  Torneio Amador
                </Link>
              </li>
              <li>
                <Link to="/inscricao-oficial" className="hover:text-yellow-400 transition duration-200">
                  Inscrição Oficial
                </Link>
              </li>
              <li>
                <Link to="/torneio" className="hover:text-yellow-400 transition duration-200">
                  Torneio Oficial
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
