// src/pages/InscricaoOficial.jsx
import { useState } from "react";
import FormDupla from "../components/inscricao/FormDupla";
import FormTrio from "../components/inscricao/FormTrio";
import FormQuarteto from "../components/inscricao/FormQuarteto";

const InscricaoOficial = () => {
  const [tipoEquipe, setTipoEquipe] = useState("dupla");

  const renderFormulario = () => {
    switch (tipoEquipe) {
      case "dupla":
        return <FormDupla />;
      case "trio":
        return <FormTrio />;
      case "quarteto":
        return <FormQuarteto />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[url('/assets/bg-praia.png')] bg-cover bg-center bg-no-repeat py-10 px-4">
      <div className="max-w-4xl mx-auto text-center mb-8 bg-white/90 p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">Inscrição para o Torneio Oficial</h1>
        <p className="text-gray-700">Escolha o tipo de equipe e preencha os dados corretamente.</p>

        <div className="flex justify-center mt-6 space-x-4">
          {["dupla", "trio", "quarteto"].map((tipo) => (
            <button
              key={tipo}
              onClick={() => setTipoEquipe(tipo)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                tipoEquipe === tipo
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-blue-600 text-blue-600"
              }`}
            >
              {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">{renderFormulario()}</div>
    </div>
  );
};

export default InscricaoOficial;
