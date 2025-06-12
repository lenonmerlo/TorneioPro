import { useState } from "react";
import api from "../../services/api";
import FormDupla from "../../components/oficial/FormDupla";
import FormTrio from "../../components/oficial/FormTrio";
import FormQuarteto from "../../components/oficial/FormQuarteto";


const InscricaoOficial = () => {
  const [tipoEquipe, setTipoEquipe] = useState("dupla");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (formData) => {
    try {
      await api.post("/equipe-oficial", {
        nome: formData.nomeEquipe,
        tipo: tipoEquipe,
        atletas: [
          { nome: formData.atleta1, genero: formData.generoAtleta1 },
          { nome: formData.atleta2, genero: formData.generoAtleta2 },
          formData.atleta3 && { nome: formData.atleta3, genero: formData.generoAtleta3 },
          formData.atleta4 && { nome: formData.atleta4, genero: formData.generoAtleta4 },
        ].filter(Boolean)
      });

      setMensagem("Equipe cadastrada com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar equipe:", error);
      setMensagem("Erro ao cadastrar equipe. Tente novamente.");
    }
  };

  const renderFormulario = () => {
    switch (tipoEquipe) {
      case "dupla":
        return <FormDupla onSubmit={handleSubmit} />;
      case "trio":
        return <FormTrio onSubmit={handleSubmit} />;
      case "quarteto":
        return <FormQuarteto onSubmit={handleSubmit} />;
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

      <div className="mt-6">{mensagem && <p className="text-center text-green-600 font-semibold">{mensagem}</p>}</div>
      <div className="mt-2">{renderFormulario()}</div>
    </div>
  );
};

export default InscricaoOficial;
