
import api from '@/services/api';
import { useState } from 'react';

const FormDupla = () => {
  const [formData, setFormData] = useState({
    nomeEquipe: '',
    atleta1: '',
    generoAtleta1: '',
    nivelAtleta1: 'iniciante', // Adicionado nível padrão para teste
    emailAtleta1: '', // Adicionado email
    atleta2: '',
    generoAtleta2: '',
    nivelAtleta2: 'iniciante', // Adicionado nível padrão para teste
    emailAtleta2: '', // Adicionado email
    torneioId: 1, // Adicionado torneioId fixo para teste. Em um cenário real, isso viria de um input ou contexto.
  });

  const [mensagemSucesso, setMensagemSucesso] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generoOptions = [
    { value: 'masculino', label: '🧔 Masculino' },
    { value: 'feminino', label: '👩 Feminino' },
    { value: 'nao-informado', label: '⚪ Prefere não informar' },
  ];

  const renderGeneroButtons = (fieldName, selectedValue) => (
    <div className='flex flex-wrap gap-2'>
      {generoOptions.map((opt) => (
        <label
          key={opt.value}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer text-sm font-medium
            ${
              selectedValue === opt.value
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
            }`}
        >
          <input
            type='radio'
            name={fieldName}
            value={opt.value}
            checked={selectedValue === opt.value}
            onChange={handleChange}
            className='hidden'
          />
          {opt.label}
        </label>
      ))}
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulação de criação de atletas para obter IDs. Em um cenário real, os atletas já existiriam ou seriam criados previamente.
      const atleta1Response = await api.post('/amador/atletas', {
        nome: formData.atleta1,
        genero: formData.generoAtleta1,
        email: formData.emailAtleta1,
        nivel: formData.nivelAtleta1,
      });
      const atleta2Response = await api.post('/amador/atletas', {
        nome: formData.atleta2,
        genero: formData.generoAtleta2,
        email: formData.emailAtleta2,
        nivel: formData.nivelAtleta2,
      });

      const atletaIds = [atleta1Response.data.atleta.id, atleta2Response.data.atleta.id];

      await api.post('/oficial/equipes', {
        nome: formData.nomeEquipe || null,
        tipo: 'dupla',
        torneioId: formData.torneioId,
        atletaIds: atletaIds,
      });

      setMensagemSucesso('✅ Inscrição enviada com sucesso!');
      setTimeout(() => setMensagemSucesso(''), 5000);

      setFormData({
        nomeEquipe: '',
        atleta1: '',
        generoAtleta1: '',
        nivelAtleta1: 'iniciante',
        emailAtleta1: '',
        atleta2: '',
        generoAtleta2: '',
        nivelAtleta2: 'iniciante',
        emailAtleta2: '',
        torneioId: 1,
      });

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Erro ao enviar inscrição:', error);
      alert('Erro ao enviar inscrição. Tente novamente.');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white shadow-md rounded-xl p-6 space-y-4 w-full max-w-xl mx-auto'
    >
      <h2 className='text-2xl font-semibold text-center text-blue-600'>Inscrição - Dupla</h2>

      {mensagemSucesso && (
        <div className='text-green-700 bg-green-100 border border-green-300 px-4 py-3 rounded-lg text-center font-medium shadow'>
          {mensagemSucesso}
        </div>
      )}

      <div>
        <label htmlFor='nomeEquipe' className='block text-sm font-medium text-gray-700'>
          Nome da Equipe (opcional)
        </label>
        <input
          type='text'
          id='nomeEquipe'
          name='nomeEquipe'
          placeholder='Ex: Os Furacões da Areia'
          value={formData.nomeEquipe}
          onChange={handleChange}
          className='block w-full h-10 px-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 shadow-sm'
        />
      </div>

      {[1, 2].map((num) => (
        <div key={num} className='space-y-2 mb-4'>
          <label htmlFor={`atleta${num}`} className='block text-sm font-medium text-gray-700 ml-1'>
            Nome do(a) Atleta {num}
          </label>
          <input
            type='text'
            id={`atleta${num}`}
            name={`atleta${num}`}
            placeholder='Digite o nome completo'
            value={formData[`atleta${num}`]}
            onChange={handleChange}
            required
            className='block w-full h-10 px-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 shadow-sm'
          />

          <label htmlFor={`emailAtleta${num}`} className='block text-sm font-medium text-gray-700 ml-1'>
            Email do(a) Atleta {num}
          </label>
          <input
            type='email'
            id={`emailAtleta${num}`}
            name={`emailAtleta${num}`}
            placeholder='Digite o email'
            value={formData[`emailAtleta${num}`]}
            onChange={handleChange}
            required
            className='block w-full h-10 px-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 shadow-sm'
          />

          <label className='block text-sm font-medium text-gray-700'>
            Gênero do(a) Atleta {num}
          </label>
          {renderGeneroButtons(`generoAtleta${num}`, formData[`generoAtleta${num}`])}

          <label htmlFor={`nivelAtleta${num}`} className='block text-sm font-medium text-gray-700 ml-1'>
            Nível do(a) Atleta {num}
          </label>
          <select
            id={`nivelAtleta${num}`}
            name={`nivelAtleta${num}`}
            value={formData[`nivelAtleta${num}`]}
            onChange={handleChange}
            required
            className='block w-full h-10 px-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 shadow-sm'
          >
            <option value='iniciante'>Iniciante</option>
            <option value='intermediario'>Intermediário</option>
            <option value='avancado'>Avançado</option>
          </select>
        </div>
      ))}

      <button
        type='submit'
        className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200'
      >
        Enviar Inscrição
      </button>
    </form>
  );
};

export default FormDupla;
