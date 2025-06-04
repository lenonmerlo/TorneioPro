import React from "react";
import { useState } from "react";

const FormDupla = () => {
  const [formData, setFormData] = useState({
    nomeEquipe: "",
    atleta1: "",
    generoAtleta1: "",
    atleta2: "",
    generoAtleta2: "",
  });

  const [mensagemSucesso, setMensagemSucesso] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generoOptions = [
    { value: "masculino", label: "🧔 Masculino" },
    { value: "feminino", label: "👩 Feminino" },
    { value: "nao-informado", label: "⚪ Prefere não informar" },
  ];

  const renderGeneroButtons = (fieldName, selectedValue) => (
    <div className="flex flex-wrap gap-2">
      {generoOptions.map((opt) => (
        <label
          key={opt.value}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer text-sm font-medium
          ${selectedValue === opt.value
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
            }`}
        >
          <input
            type="radio"
            name={fieldName}
            value={opt.value}
            checked={selectedValue === opt.value}
            onChange={handleChange}
            className="hidden"
          />
          {opt.label}
        </label>
      ))}
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    // Salvar no localStorage
    const inscricoes = JSON.parse(localStorage.getItem("inscricoesDupla")) || [];
    localStorage.setItem("inscricoesDupla", JSON.stringify([...inscricoes, formData]));

    // Mostrar mensagem
    setMensagemSucesso("✅ Inscrição enviada com sucesso!");
    setTimeout(() => setMensagemSucesso(""), 5000);

    // Limpar formulário
    setFormData({
      nomeEquipe: "",
      atleta1: "",
      generoAtleta1: "",
      atleta2: "",
      generoAtleta2: "",
    });

    // Scroll para o topo (opcional)
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 space-y-4 w-full max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-semibold text-center text-blue-600">Inscrição - Dupla</h2>

      {mensagemSucesso && (
        <div className="text-green-700 bg-green-100 border border-green-300 px-4 py-3 rounded-lg text-center font-medium shadow">
          {mensagemSucesso}
        </div>
      )}

      <div>
        <label htmlFor="nomeEquipe" className="block text-sm font-medium text-gray-700">
          Nome da Equipe (opcional)
        </label>
        <input
          type="text"
          id="nomeEquipe"
          name="nomeEquipe"
          placeholder="Ex: Os Furacões da Areia"
          value={formData.nomeEquipe}
          onChange={handleChange}
          className="block w-full h-10 px-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 shadow-sm"
        />
      </div>

      {[1, 2].map((num) => (
        <div key={num} className="space-y-2 mb-4">
          <div className="space-y-1">
            <label htmlFor={`atleta${num}`} className="block text-sm font-medium text-gray-700 ml-1">
              Nome do(a) Atleta {num}
            </label>
            <input
              type="text"
              id={`atleta${num}`}
              name={`atleta${num}`}
              placeholder="Digite o nome completo"
              value={formData[`atleta${num}`]}
              onChange={handleChange}
              required
              className="block w-full h-10 px-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 shadow-sm"
            />

          </div>

          <label className="block text-sm font-medium text-gray-700">
            Gênero do(a) Atleta {num}
          </label>
          {renderGeneroButtons(`generoAtleta${num}`, formData[`generoAtleta${num}`])}
        </div>
      ))}


      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Enviar Inscrição
      </button>
    </form>
  );
};

export default FormDupla;
