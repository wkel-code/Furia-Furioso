
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatbotWidget from '../components/ChatbotWidget';
import { User, Settings, Share } from 'lucide-react';

const MyExperience = () => {
  useEffect(() => {
    document.title = "FURIA Fan Site | Minha Experiência FURIA";
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="pt-20 min-h-screen bg-furia-dark">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Minha Experiência FURIA
          </h1>
          
          <div className="max-w-3xl mb-12">
            <p className="text-furia-gray text-lg">
              Aqui você poderá personalizar sua experiência e receber conteúdos adaptados ao seu perfil.
              Crie sua conta para começar.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="furia-card p-6 hover:border-furia-accent/30 transition-colors">
              <User className="text-furia-accent mb-4" size={32} />
              <h3 className="font-display text-xl font-semibold mb-2">Perfil Personalizado</h3>
              <p className="text-furia-gray">
                Crie seu perfil de fã e compartilhe suas experiências e fotos com a comunidade FURIA.
              </p>
            </div>
            
            <div className="furia-card p-6 hover:border-furia-accent/30 transition-colors">
              <Settings className="text-furia-accent mb-4" size={32} />
              <h3 className="font-display text-xl font-semibold mb-2">Preferências de Conteúdo</h3>
              <p className="text-furia-gray">
                Defina suas preferências para receber conteúdos específicos sobre os jogadores e campeonatos favoritos.
              </p>
            </div>
            
            <div className="furia-card p-6 hover:border-furia-accent/30 transition-colors">
              <Share className="text-furia-accent mb-4" size={32} />
              <h3 className="font-display text-xl font-semibold mb-2">Conexão com Redes Sociais</h3>
              <p className="text-furia-gray">
                Conecte suas redes sociais para uma experiência ainda mais personalizada e compartilhamento facilitado.
              </p>
            </div>
          </div>
          
          <div className="max-w-xl mx-auto p-8 furia-card border border-furia-accent/30">
            <h3 className="font-display text-2xl font-bold mb-6 text-center">Crie sua conta</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-furia-light mb-1">Nome</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 bg-furia-gray/10 border border-furia-gray/20 rounded focus:outline-none focus:ring-1 focus:ring-furia-accent text-furia-light"
                  placeholder="Seu nome" 
                />
              </div>
              
              <div>
                <label className="block text-furia-light mb-1">E-mail</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 bg-furia-gray/10 border border-furia-gray/20 rounded focus:outline-none focus:ring-1 focus:ring-furia-accent text-furia-light"
                  placeholder="seu-email@exemplo.com" 
                />
              </div>
              
              <div>
                <label className="block text-furia-light mb-1">Senha</label>
                <input 
                  type="password" 
                  className="w-full px-4 py-2 bg-furia-gray/10 border border-furia-gray/20 rounded focus:outline-none focus:ring-1 focus:ring-furia-accent text-furia-light"
                  placeholder="********" 
                />
              </div>
              
              <div>
                <button type="submit" className="w-full button-primary mt-4">
                  Criar Conta
                </button>
              </div>
              
              <div className="text-center text-furia-gray text-sm">
                <p>
                  Já tem conta? <a href="#" className="text-furia-accent hover:underline">Faça login</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
      <ChatbotWidget />
    </>
  );
};

export default MyExperience;
