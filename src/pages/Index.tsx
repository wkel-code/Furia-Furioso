
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, MessageSquare, HeartHandshake } from 'lucide-react';
import Hero from '../components/Hero';
import GallerySection from '../components/Gallery';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatbotWidget from '../components/ChatbotWidget';

const Index = () => {
  useEffect(() => {
    document.title = "FURIA Fan Site | Home";
  }, []);

  const features = [
    {
      icon: <Users size={32} className="text-furia-accent" />,
      title: "Comunidade de Fãs",
      description: "Conecte-se com outros fãs da FURIA de todo o Brasil e compartilhe sua paixão pelo time."
    },
    {
      icon: <MessageSquare size={32} className="text-furia-accent" />,
      title: "Chatbot Inteligente",
      description: "Tire dúvidas, obtenha estatísticas e descubra curiosidades sobre a equipe com nosso chatbot."
    },
    {
      icon: <HeartHandshake size={32} className="text-furia-accent" />,
      title: "Experiência Personalizada",
      description: "Conteúdo adaptado aos seus interesses e preferências para uma experiência única."
    }
  ];

  return (
    <>
      <Navbar />
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-furia-dark to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Uma nova maneira de viver a <span className="text-gradient">FURIA</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="furia-card p-6 flex flex-col items-center text-center hover:border-furia-accent/30 transition-colors">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-furia-gray">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/my-experience" className="button-primary inline-flex items-center">
              Começar minha experiência
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      <GallerySection />
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-furia-dark to-black relative">
        <div className="absolute inset-0 bg-noise opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Junte-se à comunidade <span className="text-gradient">FURIA</span>
            </h2>
            <p className="text-furia-gray text-lg md:text-xl mb-8">
              Crie sua conta agora e tenha acesso a conteúdos exclusivos, interaja com outros fãs
              e viva uma experiência totalmente personalizada.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="button-primary">Criar Conta</button>
              <Link to="/about" className="button-secondary">
                Conhecer mais
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <ChatbotWidget />
    </>
  );
};

export default Index;
