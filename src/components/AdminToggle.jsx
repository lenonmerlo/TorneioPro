// src/components/AdminToggle.jsx
import { useState, useEffect } from "react";

const AdminToggle = () => {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") === "true");

  const handleToggle = () => {
    const novoValor = !isAdmin;
    setIsAdmin(novoValor);
    if (novoValor) {
      localStorage.setItem("isAdmin", "true");
      alert("Modo professor ativado!");
    } else {
      localStorage.removeItem("isAdmin");
      alert("Modo professor desativado!");
    }
    // Força o recarregamento da página para aplicar a visibilidade no Header
    window.location.reload();
  };

  return (
    <div className="fixed bottom-4 right-4 text-xs opacity-60 hover:opacity-100 transition">
      <button
        onClick={handleToggle}
        className="bg-yellow-400 text-blue-900 font-semibold px-3 py-1 rounded shadow hover:bg-yellow-300"
      >
        {isAdmin ? "Sair do Modo Professor" : "Entrar como Professor"}
      </button>
    </div>
  );
};

export default AdminToggle;
