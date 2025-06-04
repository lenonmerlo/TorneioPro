import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import InscricaoOficial from '@/pages/InscricaoOficial';
import InscricaoTorneioAmador from '@/pages/InscricaoTorneioAmador';
import Participar from '@/pages/Participar';
import TorneioAmador from '@/pages/TorneioAmador';
import TorneioOficial from '@/pages/TorneioOficial';
import LoginAluno from '@/pages/login/LoginAluno';
import CadastroAluno from '@/pages/login/CadastroAluno';
import LoginProfessor from '@/pages/login/LoginProfessor';
import CadastroProfessor from '@/pages/login/CadastroProfessor';
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
