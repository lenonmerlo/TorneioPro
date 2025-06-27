import LogoEVPC from '/assets/logo-evpc.png';

const HeroSection = () => (
  <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 bg-black/40 backdrop-brightness-75">
    <img src={LogoEVPC} alt="Logo EVPC" className="w-32 h-32 mb-6 drop-shadow-lg" />
    <h1 className="text-4xl md:text-5xl font-bold text-white">Torneio EVPC</h1>
    <p className="text-white text-lg mt-4 max-w-xl">
      Plataforma oficial de gerenciamento dos torneios de Vôlei de Praia da Costa.
    </p>
    <p className="text-yellow-300 mt-2 font-medium">
      Clique em <strong>"Acesse o Sistema"</strong> para login ou cadastro.
    </p>
  </section>
);

export default HeroSection;
