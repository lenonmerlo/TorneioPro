// src/app.jsx

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Home from '@/pages/Home';
import InscricaoOficial from '@/pages/oficial/InscricaoOficial';
import InscricaoTorneioAmador from '@/pages/amador/InscricaoTorneioAmador';
import Participar from '@/pages/Participar';
import TorneioAmador from '@/pages/amador/TorneioAmador';
import TorneioOficial from '@/pages/oficial/TorneioOficial';
import LoginAluno from '@/pages/usuario/LoginAluno';
import CadastroAluno from '@/pages/usuario/CadastroAluno';
import LoginProfessor from '@/pages/usuario/LoginProfessor';
import CadastroProfessor from '@/pages/usuario/CadastroProfessor';
import HomeAluno from '@/pages/HomeAluno';
import HomeTreinador from '@/pages/HomeTreinador';
import CriarTorneio from '@/pages/CriarTorneio';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[url('/assets/bg-praia.png')] bg-cover bg-center bg-no-repeat">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login-aluno" element={<LoginAluno />} />
            <Route path="/cadastro-aluno" element={<CadastroAluno />} />
            <Route path="/home-aluno" element={<HomeAluno />} />
            <Route path="/home-treinador" element={<HomeTreinador />} />
            <Route path="/criar-torneio" element={<CriarTorneio />} />
            <Route path="/login-professor" element={<LoginProfessor />} />
            <Route path="/cadastro-professor" element={<CadastroProfessor />} />
            <Route path="/participar" element={<Participar />} />
            <Route path="/inscricao" element={<InscricaoTorneioAmador />} />
            <Route path="/sorteio" element={<TorneioAmador />} />
            <Route path="/torneio" element={<TorneioOficial />} />
            <Route path="/inscricao-oficial" element={<InscricaoOficial />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
