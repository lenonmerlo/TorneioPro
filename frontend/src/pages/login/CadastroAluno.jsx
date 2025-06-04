import { useState } from 'react';
import Input from '@/components/form/Input';
import { useNavigate, Link } from 'react-router-dom';

function CadastroAluno() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: implementar chamada de API para cadastro real
    console.log('Dados enviados:', form);
    navigate('/login-aluno');
  };

  return (
    <div className="min-h-screen bg-[url('/assets/bg-praia.png')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-800 mb-4 text-center">Cadastro de Atleta</h1>
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
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-blue-900 py-3 rounded-lg font-semibold mt-4"
          >
            Cadastrar
          </button>
        </form>

        <p className="text-sm text-blue-800 mt-4 text-center">
          Já tem uma conta?
          <Link to="/login-aluno" className="text-yellow-600 font-semibold hover:underline ml-1">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default CadastroAluno;
