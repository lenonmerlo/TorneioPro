function Footer() {
  return (
    <footer className="bg-blue-800 text-white text-center py-4 mt-12">
      <p className="text-sm">
        © {new Date().getFullYear()} EVPC - Escola de Vôlei Praia da Costa. Todos os direitos reservados.
      </p>
      <p className="text-sm">
        Desenvolvido por Lenon Merlo
      </p>
    </footer>
  );
}

export default Footer;
