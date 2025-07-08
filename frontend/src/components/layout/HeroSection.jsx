import LogoEVPC from '/assets/logo-torneiopro.png';

const HeroSection = () => (
  <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 bg-black/40 backdrop-brightness-75">
    <img src={LogoEVPC} alt="Logo EVPC" className="w-36 h-36 mb-6 drop-shadow-lg" />
    <h1 className="text-4xl md:text-5xl font-bold text-white">TorneioPro</h1>
    <p className="text-white text-lg mt-4 max-w-xl">
      Plataforma para gerenciamento de torneios de Vôlei de Praia
    </p>
    <p className="text-yellow-300 mt-2 font-medium">
      Clique em <strong>"Acesse o Sistema"</strong> para login ou cadastro.
    </p>
  </section>
);

export default HeroSection;
