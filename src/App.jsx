import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdminToggle from '@/components/AdminToggle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Participar from '@/pages/Participar';
import InscricaoJogador from '@/pages/InscricaoJogador';
import SorteioAleatorio from '@/pages/SorteioAleatorio';
import TorneioOficial from '@/pages/TorneioOficial';
import InscricaoOficial from '@/pages/InscricaoOficial';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[url('/assets/bg-praia.png')] bg-cover bg-center bg-no-repeat">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/participar" element={<Participar />} />
            <Route path="/inscricao" element={<InscricaoJogador />} />
            <Route path="/sorteio" element={<SorteioAleatorio />} />
            <Route path="/torneio" element={<TorneioOficial />} />
            <Route path="/inscricao-oficial" element={<InscricaoOficial />} />
          </Routes>
        </main>
        <Footer />
        <AdminToggle />
      </div>
    </Router>
  );
}

export default App;
