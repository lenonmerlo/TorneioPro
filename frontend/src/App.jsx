// src/app.jsx

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import CriarTorneio from '@/pages/CriarTorneio';
import LandingPage from '@/pages/LandingPage';
import HomeTreinador from '@/pages/HomeTreinador';

import Participar from '@/pages/Participar';
import Cadastrotreinador from '@/pages/usuario/Cadastrotreinador';
import Logintreinador from '@/pages/usuario/Logintreinador';

// Novas páginas unificadas para torneios
import Inscricao from '@/pages/torneio/Inscricao';
import Torneio from '@/pages/torneio/Torneio';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[url('/assets/bg-praia.png')] bg-cover bg-center bg-no-repeat">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />

            {/* Público */}
            <Route path="/participar" element={<Participar />} />
            <Route path="/inscricao" element={<Inscricao />} />

            {/* Treinador */}
            <Route path="/login-treinador" element={<Logintreinador />} />
            <Route path="/cadastro-treinador" element={<Cadastrotreinador />} />
            <Route path="/home-treinador" element={<HomeTreinador />} />
            <Route path="/criar-torneio" element={<CriarTorneio />} />

            {/* Torneios */}
            <Route path="/torneio" element={<Torneio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
