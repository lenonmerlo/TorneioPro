import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsuarioLogado } from '@/utils/auth';
import fundo from '/assets/bg-praia.png?url';

import HeroSection from '@/components/layout/HeroSection';
import SobreEVPC from '@/components/layout/SobreEVPC';
import EventoCard from '@/components/layout/EventoCard';
import ContatoEVPC from '../components/layout/ContatoEVPC';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = getUsuarioLogado();
    const { token, perfil } = usuario || {};
    if (token && perfil === 'atleta') navigate('/home-atleta');
    else if (token && perfil === 'treinador') navigate('/home-treinador');
  }, []);

  return (
    <main
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <HeroSection />
      <SobreEVPC />

      <section className="py-16 px-6 bg-gradient-to-b from-yellow-50 via-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Próximos Eventos</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <EventoCard
              titulo="Torneio Amador - Julho"
              data="📅 14/07/2025"
              info="🏐 Iniciante e Intermediário"
              borderColor="border-yellow-400"
            />
            <EventoCard
              titulo="Torneio Oficial - Agosto"
              data="📅 18/08/2025"
              info="👥 Dupla, Trio e Quarteto"
              borderColor="border-blue-500"
            />
            <EventoCard
              titulo="Festival de Verão"
              data="📅 01/09/2025"
              info="🎉 Brincadeiras e partidas mistas"
              borderColor="border-pink-500"
            />
          </div>
        </div>
      </section>
      <ContatoEVPC />

      <div className="h-20" />
    </main>
  );
};

export default LandingPage;
