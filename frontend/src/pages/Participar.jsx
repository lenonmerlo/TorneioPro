// src/pages/Participar.jsx
import { Link } from 'react-router-dom';
import LogoTorneioPro from '/assets/logo-torneiopro.png';

const Participar = () => {
  return (
    <section className='flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4'>
      <div className='bg-white/90 rounded-xl p-8 shadow-xl max-w-md w-full space-y-6'>
        <img src={LogoTorneioPro} alt='Logo TorneioPro' className='w-20 h-20 mx-auto' />
        <h3 className='text-xl font-bold text-blue-800'>
          Bem-vindo(a). Participe do <span className="text-yellow-500">TorneioPro</span>
        </h3>
        <p className='text-sm text-gray-600'>Escolha seu tipo de inscrição abaixo:</p>

        <div className='grid gap-3'>
          <Link to='/inscricao' className='bg-blue-600 text-white py-2 rounded hover:bg-blue-700'>
            Torneio Amador (Individual)
          </Link>
          <Link
            to='/inscricao-oficial?tipo=dupla'
            className='bg-yellow-400 text-blue-900 py-2 rounded hover:bg-yellow-300'
          >
            Torneio Oficial (Dupla)
          </Link>
          <Link
            to='/inscricao-oficial?tipo=trio'
            className='bg-yellow-400 text-blue-900 py-2 rounded hover:bg-yellow-300'
          >
            Torneio Oficial (Trio)
          </Link>
          <Link
            to='/inscricao-oficial?tipo=quarteto'
            className='bg-yellow-400 text-blue-900 py-2 rounded hover:bg-yellow-300'
          >
            Torneio Oficial (Quarteto)
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Participar;
