// C:\Users\lenon\Development\evpc-torneio\frontend\src\pages\login\CadastroProfessor.jsx
import { useState } from 'react';
import Input from '@/components/form/Input';
import { useNavigate, Link } from 'react-router-dom';
import api from '@/services/api';

function CadastroProfessor() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState('sucesso'); // 'sucesso' ou 'erro'

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.senha !== form.confirmarSenha) {
      setMensagem('As senhas não coincidem!');
      setTipoMensagem('erro');
      return;
    }

    try {
      const response = await api.post('/auth/register', {
        nome: form.nome,
        email: form.email,
        senha: form.senha,
        perfil: 'treinador'
      });

      console.log('Cadastro de treinador bem-sucedido:', response.data);
      setMensagem('Cadastro realizado com sucesso! Redirecionando para login...');
      setTipoMensagem('sucesso');

      setTimeout(() => navigate('/login-professor'), 2000);
    } catch (error) {
      console.error('Erro no cadastro de treinador:', error.response?.data || error.message);
      setMensagem('Erro ao cadastrar. Verifique seus dados ou tente novamente mais tarde.');
      setTipoMensagem('erro');
    }
  };

  return (
    <div className="min-h-screen bg-[url('/assets/bg-praia.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-800 mb-4 text-center">Cadastro de Treinador</h1>

        {mensagem && (
          <div
            className={`mb-4 text-sm font-semibold text-center px-4 py-2 rounded-md border ${
              tipoMensagem === 'sucesso'
                ? 'bg-green-100 text-green-800 border-green-300'
                : 'bg-red-100 text-red-800 border-red-300'
            }`}
          >
            {mensagem}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <Input label="Nome completo" name="nome" value={form.nome} onChange={handleChange} />
          <Input label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
          <Input label="Senha" name="senha" type="password" value={form.senha} onChange={handleChange} />
          <Input
            label="Confirmar Senha"
            name="confirmarSenha"
            type="password"
            value={form.confirmarSenha}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold mt-4"
          >
            Cadastrar
          </button>
        </form>

        <p className="text-sm text-blue-800 mt-4 text-center">
          Já tem uma conta?
          <Link to="/login-professor" className="text-purple-700 font-semibold hover:underline ml-1">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default CadastroProfessor;
