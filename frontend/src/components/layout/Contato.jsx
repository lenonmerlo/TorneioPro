// src/components/layout/Contato.jsx
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

const ContatoTorneioPro = () => (
  <section className="mt-20 px-6 py-12 max-w-4xl mx-auto text-center rounded-2xl shadow-lg bg-gradient-to-br from-yellow-50 via-white to-blue-50 border border-blue-100">
    <h2 className="text-3xl font-bold text-blue-900 mb-4">🌞 Fale com a equipe do TorneioPro</h2>
    <p className="text-blue-800 mb-6 text-lg">
      Entre em contato conosco pelas redes sociais ou diretamente pelo WhatsApp.  
      Estamos prontos para ajudar você a organizar torneios incríveis! 🏐✨
    </p>

    <div className="flex justify-center gap-8 flex-wrap">
      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 bg-green-100 hover:bg-green-200 text-green-800 font-medium rounded-xl shadow transition"
      >
        <FaWhatsapp className="text-2xl" /> WhatsApp
      </a>
      <a
        href="https://www.instagram.com/torneiopro"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 bg-pink-100 hover:bg-pink-200 text-pink-700 font-medium rounded-xl shadow transition"
      >
        <FaInstagram className="text-2xl" /> Instagram
      </a>
      <a
        href="mailto:contato@torneiopro.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-5 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium rounded-xl shadow transition"
      >
        <FaEnvelope className="text-2xl" /> Email
      </a>
    </div>
  </section>
);

export default ContatoTorneioPro;
