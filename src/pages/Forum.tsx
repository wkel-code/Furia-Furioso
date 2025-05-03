
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatbotWidget from '../components/ChatbotWidget';

const Forum = () => {
  useEffect(() => {
    document.title = "FURIA Fan Site | Fórum dos Fãs";
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="pt-20 min-h-screen bg-furia-dark">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Fórum dos Fãs
          </h1>
          
          <div className="text-furia-light space-y-6 max-w-3xl">
            <p>
              Esta página conterá o fórum de discussão para os fãs da FURIA compartilharem suas opiniões,
              análises e comemorarem juntos as vitórias do time.
            </p>
            <p>
              Página em construção. Em breve, o fórum estará disponível para interação entre fãs.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
      <ChatbotWidget />
    </>
  );
};

export default Forum;
