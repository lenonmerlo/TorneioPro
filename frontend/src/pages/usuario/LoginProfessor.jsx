
import Input from '@/components/usuario/Input';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import api from '@/services/api';

function LoginProfessor() {
  const [form, setForm] = useState({ email: '', senha: '' });
  const [mensagem, setMensagem] = useState('');
  const [tipoMensagem, setTipoMensagem] = useState('sucesso'); // 'sucesso' ou 'erro'
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/auth/login', {
        email: form.email,
        senha: form.senha
      });

      const { token, perfil, nome } = response.data;

      localStorage.setItem('authToken', token);
      localStorage.setItem('perfil', perfil);
      localStorage.setItem('emailUsuario', form.email);
      localStorage.setItem('nomeUsuario', nome);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      console.log('Login de treinador bem-sucedido:', response.data);
      setMensagem('Login realizado com sucesso! Redirecionando...');
      setTipoMensagem('sucesso');

      setTimeout(() => navigate('/home-treinador'), 2000); // Redireciona para a home ou dashboard
    } catch (error) {
      console.error('Erro no login de treinador:', error.response?.data || error.message);
      setMensagem('Erro ao fazer login. Verifique suas credenciais.');
      setTipoMensagem('erro');
    }
  };

  return (
    <div className="min-h-screen bg-[url('/assets/bg-praia.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-800 mb-4 text-center">Login do Treinador</h1>

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

        <form onSubmit={handleLogin}>
          <Input
            label="Email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            label="Senha"
            name="senha"
            type="password"
            value={form.senha}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-lg font-semibold mt-4"
          >
            Entrar
          </button>
          <p className="text-sm text-blue-800 mt-4 text-center">
            Ainda não tem conta?
            <Link to="/cadastro-professor" className="text-purple-700 font-semibold hover:underline ml-1">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginProfessor;
