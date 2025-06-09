import React, { useState } from "react";
import api from "@/services/api";

const FormTrio = () => {
  const [formData, setFormData] = useState({
    nomeEquipe: "",
    atleta1: "",
    generoAtleta1: "",
    atleta2: "",
    generoAtleta2: "",
    atleta3: "",
    generoAtleta3: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/equipes", {
        nome: formData.nomeEquipe || null,
        tipo: "trio",
        integrantes: [
          { nome: formData.atleta1, genero: formData.generoAtleta1 },
          { nome: formData.atleta2, genero: formData.generoAtleta2 },
          { nome: formData.atleta3, genero: formData.generoAtleta3 },
        ],
      });

      setMensagemSucesso("✅ Inscrição enviada com sucesso!");
      setTimeout(() => setMensagemSucesso(""), 5000);

      setFormData({
        nomeEquipe: "",
        atleta1: "",
        generoAtleta1: "",
        atleta2: "",
        generoAtleta2: "",
        atleta3: "",
        generoAtleta3: "",
      });

      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Erro ao enviar inscrição:", error);
      alert("Erro ao enviar inscrição. Tente novamente.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 space-y-4 w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-center text-blue-600">Inscrição - Trio</h2>

      {mensagemSucesso && (
        <div className="text-green-700 bg-green-100 border border-green-300 px-4 py-3 rounded-lg text-center font-medium shadow">
          {mensagemSucesso}
        </div>
      )}

      <div>
        <label htmlFor="nomeEquipe" className="block text-sm font-medium text-gray-700 mb-1">
          Nome da Equipe (opcional)
        </label>
        <input
          type="text"
          id="nomeEquipe"
          name="nomeEquipe"
          placeholder="Ex: Areia Brava"
          value={formData.nomeEquipe}
          onChange={handleChange}
          className="block w-full h-10 px-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 shadow-sm"
        />
      </div>

      {[1, 2, 3].map((num) => (
        <div key={num} className="space-y-2 mb-4">
          <div>
            <label htmlFor={`atleta${num}`} className="block text-sm font-medium text-gray-700 mb-1">
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

          <label className="block text-sm font-medium text-gray-700">Gênero do(a) Atleta {num}</label>
          {renderGeneroButtons(`generoAtleta${num}`, formData[`generoAtleta${num}`])}
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
      >
        Enviar Inscrição
      </button>
    </form>
  );
};

export default FormTrio;
