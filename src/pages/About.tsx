
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatbotWidget from '../components/ChatbotWidget';

const About = () => {
  useEffect(() => {
    document.title = "FURIA Fan Site | Sobre a FURIA";
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="pt-20 min-h-screen bg-furia-dark">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Sobre a FURIA
          </h1>
          
          <div className="text-furia-light space-y-6 max-w-3xl">
            <p>
              Esta página conterá informações detalhadas sobre a equipe FURIA, incluindo sua história,
              jogadores, conquistas e muito mais.
            </p>
            <p>
              Página em construção. Em breve, conteúdo completo sobre a FURIA Esports.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
      <ChatbotWidget />
    </>
  );
};

export default About;
