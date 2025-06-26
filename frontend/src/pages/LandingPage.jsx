// src/pages/LandingPage.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsuarioLogado } from '@/utils/auth';
import LogoEVPC from '/assets/logo-evpc.png';
import fundo from '../../public/assets/bg-praia.png'; // nova imagem de fundo

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = getUsuarioLogado();
    const perfil = usuario?.perfil;
    const token = usuario?.token;

    if (token && perfil === 'atleta') navigate('/home-atleta');
    else if (token && perfil === 'treinador') navigate('/home-treinador');
  }, []);

  return (
    <main
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
        <div className="bg-white/90 rounded-xl p-8 shadow-xl max-w-xl w-full space-y-6">
          <img src={LogoEVPC} alt="Logo EVPC" className="w-24 h-24 mx-auto" />
          <h1 className="text-3xl font-bold text-blue-800">Bem-vindo ao Torneio EVPC</h1>
          <p className="text-blue-700">
            O sistema digital de gerenciamento dos torneios oficiais e amadores da EVPC.
          </p>
          <p className="text-blue-700 font-medium">
            Clique em "Entrar" no topo da página para fazer login ou cadastro.
          </p>
        </div>
      </section>

      {/* Sobre */}
      <section className="mt-16 px-4 max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-md p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-2">Sobre a EVPC</h2>
        <p className="text-blue-800">
          A Escola de Vôlei Praia da Costa tem como objetivo promover o esporte com qualidade,
          organização e inclusão. Com torneios para todos os níveis e idades, a EVPC incentiva a
          prática esportiva e a formação de atletas e cidadãos.
        </p>
      </section>

      {/* Eventos */}
      <section className="mt-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">Próximos Eventos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/90 p-4 rounded-xl shadow-md text-blue-800">
            <h3 className="font-semibold text-lg">Torneio Amador - Julho</h3>
            <p>Data: 14/07/2025<br />Categorias: Iniciante e Intermediário</p>
          </div>
          <div className="bg-white/90 p-4 rounded-xl shadow-md text-blue-800">
            <h3 className="font-semibold text-lg">Torneio Oficial - Agosto</h3>
            <p>Data: 18/08/2025<br />Categorias: Dupla, Trio e Quarteto</p>
          </div>
          <div className="bg-white/90 p-4 rounded-xl shadow-md text-blue-800">
            <h3 className="font-semibold text-lg">Festival de Verão</h3>
            <p>Data: 01/09/2025<br />Atividades, brincadeiras e partidas mistas</p>
          </div>
        </div>
      </section>

      <div className="h-24" /> {/* Espaço inferior */}
    </main>
  );
};

export default LandingPage;