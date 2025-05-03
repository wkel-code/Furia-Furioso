
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background noise overlay */}
      <div className="absolute inset-0 bg-noise"></div>
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-furia-dark via-furia-dark to-furia-dark/90"></div>
      
      {/* Accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-furia-accent to-transparent"></div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gradient animate-pulse-subtle">FURIA</span> 
            <span className="block mt-2">ESPORTS</span>
          </h1>
          <p className="text-furia-gray text-lg md:text-xl mb-8 max-w-2xl">
            Bem-vindo ao portal oficial dos fãs da FURIA. Acompanhe jogadas épicas, 
            conheça os jogadores e viva uma experiência totalmente personalizada.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/my-experience" className="button-primary">Comece sua experiência</Link>
            <Link to="/about" className="button-secondary">Conheça os jogadores</Link>
          </div>
        </div>
      </div>
      
      {/* Scroll down button */}
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-furia-light hover:text-furia-accent transition-colors"
        aria-label="Scroll Down"
      >
        <ArrowDown className="animate-bounce" size={28} />
      </button>
    </div>
  );
};

export default Hero;
