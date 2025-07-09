import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsuarioLogado } from '@/utils/auth';
import fundo from '/assets/bg-praia.png?url';

import HeroSection from '@/components/layout/HeroSection';
import Sobre from '@/components/layout/Sobre';
import EventoCard from '@/components/layout/EventoCard';
import ContatoTorneioPro from '@/components/layout/Contato';
import OndasAnimadas from '@/components/layout/OndasAnimadas';
import api from '@/services/api';

const LandingPage = () => {
  const navigate = useNavigate();
  const [torneios, setTorneios] = useState([]);

  useEffect(() => {
    const usuario = getUsuarioLogado();
    const { token, perfil } = usuario || {};

    if (token && perfil === 'treinador') {
      navigate('/home-treinador');
    }
  }, []);

  useEffect(() => {
    const carregarTorneios = async () => {
      try {
        const resposta = await api.get('/usuarios/torneios');
        const hoje = new Date();
        hoje.setHours(0, 0, 0, 0); 

        const futurosOuAtivos = resposta.data.filter(torneio => {
          const dataTorneio = new Date(torneio.data);
          dataTorneio.setHours(0, 0, 0, 0); 
          return dataTorneio >= hoje;
        });

        setTorneios(futurosOuAtivos);
      } catch (error) {
        console.error('Erro ao carregar torneios:', error);
      }
    };

    carregarTorneios();
  }, []);

  return (
    <main
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <HeroSection />
      <Sobre />

      <section className="py-16 px-6 bg-gradient-to-b from-yellow-50 via-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Próximos Eventos</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {torneios.length > 0 ? (
              torneios.map((torneio) => (
                <EventoCard
                  key={torneio.id}
                  titulo={torneio.nome}
                  data={`📅 ${new Date(torneio.data).toLocaleDateString('pt-BR')}`}
                  info={`📍 ${torneio.local || 'Local a definir'}`}
                  borderColor={
                    torneio.tipo === 'AMADOR' ? 'border-yellow-400' : 'border-blue-500'
                  }
                />
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                Nenhum torneio futuro disponível no momento.
              </p>
            )}
          </div>
        </div>
      </section>

      <ContatoTorneioPro />
      <OndasAnimadas />
      <div className="h-20" />
    </main>
  );
};

export default LandingPage;
