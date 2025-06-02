// src/components/inscricao/FormDupla.jsx
import { useState } from "react";

const FormDupla = () => {
  const [formData, setFormData] = useState({
    nomeEquipe: "",
    atleta1: "",
    generoAtleta1: "",
    atleta2: "",
    generoAtleta2: "",
  });

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
          ${
            selectedValue === opt.value
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
    console.log("Dados da Dupla:", formData);
    alert("Inscrição enviada com sucesso!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-6 space-y-4 w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-center text-blue-600">Inscrição - Dupla</h2>

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
          className="mt-1 block w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 shadow-sm"
        />
      </div>

      {[1, 2].map((num) => (
        <div key={num}>
          <label htmlFor={`atleta${num}`} className="block text-sm font-medium text-gray-700">
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
            className="mt-1 block w-full rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 shadow-sm"
          />

          <label className="block text-sm font-medium text-gray-700 mt-2">Gênero do(a) Atleta {num}</label>
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
