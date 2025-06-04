// src/pages/login/LoginAluno.jsx
import { useState } from 'react';
import Input from '@/components/form/Input';
import { useNavigate, Link } from 'react-router-dom';


function LoginAluno() {
  const [form, setForm] = useState({ email: '', senha: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: fazer login real com API
    navigate('/participar');
  };

  return (
    <div className="min-h-screen bg-[url('/assets/bg-praia.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-800 mb-4 text-center">Login do Atleta</h1>
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
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold mt-4"
          >
            Entrar
          </button>
          <p className="text-sm text-blue-800 mt-4 text-center">
            Ainda não tem conta?
            <Link to="/cadastro-aluno" className="text-yellow-600 font-semibold hover:underline ml-1">
                Cadastre-se
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}

export default LoginAluno;
