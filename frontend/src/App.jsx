// src/app.jsx

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import InscricaoTorneioAmador from '@/pages/amador/InscricaoTorneioAmador';
import TorneioAmador from '@/pages/amador/TorneioAmador';
import CriarTorneio from '@/pages/CriarTorneio';
import Home from '@/pages/Home';
import Homeatleta from '@/pages/Homeatleta';
import HomeTreinador from '@/pages/HomeTreinador';
import InscricaoOficial from '@/pages/oficial/InscricaoOficial';
import TorneioOficial from '@/pages/oficial/TorneioOficial';
import Participar from '@/pages/Participar';
import Cadastroatleta from '@/pages/usuario/Cadastroatleta';
import Cadastrotreinador from '@/pages/usuario/Cadastrotreinador';
import Loginatleta from '@/pages/usuario/Loginatleta';
import Logintreinador from '@/pages/usuario/Logintreinador';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[url('/assets/bg-praia.png')] bg-cover bg-center bg-no-repeat">
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login-atleta' element={<Loginatleta />} />
            <Route path='/cadastro-atleta' element={<Cadastroatleta />} />
            <Route path='/home-atleta' element={<Homeatleta />} />
            <Route path='/home-treinador' element={<HomeTreinador />} />
            <Route path='/criar-torneio' element={<CriarTorneio />} />
            <Route path='/login-treinador' element={<Logintreinador />} />
            <Route path='/cadastro-treinador' element={<Cadastrotreinador />} />
            <Route path='/participar' element={<Participar />} />
            <Route path='/inscricao' element={<InscricaoTorneioAmador />} />
            <Route path='/sorteio' element={<TorneioAmador />} />
            <Route path='/torneio' element={<TorneioOficial />} />
            <Route path='/inscricao-oficial' element={<InscricaoOficial />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
