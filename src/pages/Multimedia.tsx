
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatbotWidget from '../components/ChatbotWidget';
import GallerySection from '../components/Gallery';

const Multimedia = () => {
  useEffect(() => {
    document.title = "FURIA Fan Site | CS:GO Multimídia";
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="pt-20 min-h-screen bg-furia-dark">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            CS:GO Multimídia
          </h1>
          
          <div className="text-furia-light space-y-6 max-w-3xl mb-12">
            <p className="text-lg">
              Explore nossa coleção exclusiva de fotos e vídeos do time de Counter-Strike da FURIA Esports.
            </p>
            <p>
              Acompanhe os melhores momentos da nossa equipe em competições nacionais e internacionais,
              incluindo highlights dos jogadores, entrevistas exclusivas e bastidores das competições.
            </p>
          </div>
          
          <GallerySection />
        </div>
      </div>
      
      <Footer />
      <ChatbotWidget />
    </>
  );
};

export default Multimedia;
