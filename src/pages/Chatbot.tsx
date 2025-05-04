
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatHeader from '../components/chatbot/ChatHeader';
import ChatMessages from '../components/chatbot/ChatMessages';
import ChatInput from '../components/chatbot/ChatInput';
import TimelineInfo from '../components/chatbot/TimelineInfo';
import { Message } from '../data/chatbotData';
import { generateBotResponse } from '../utils/chatbotUtils';

const Chatbot = () => {
  useEffect(() => {
    document.title = "FURIA Fan Site | Chatbot Interativo";
  }, []);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Eu sou o FURIA Bot, assistente virtual para os fãs da FURIA. Como posso ajudar hoje? Para suporte personalizado, acesse nosso WhatsApp: https://wa.me/5511993404466",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (inputMessage: string) => {
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    
    // AI-like response generation
    setTimeout(() => {
      const botResponses = generateBotResponse(inputMessage, messages);
      setIsLoading(false);
      
      // Add each response with a small delay between them for a more natural feeling
      botResponses.forEach((response, index) => {
        setTimeout(() => {
          setMessages(prev => [...prev, response]);
        }, index * 800);
      });
      
    }, 1000);
  };

  return (
    <>
      <Navbar />
      
      <div className="pt-20 min-h-screen bg-furia-dark">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Chatbot Interativo
          </h1>
          
          <div className="text-furia-light space-y-6 max-w-3xl mb-8">
            <p>
              Converse com o FURIA Bot e tire suas dúvidas sobre a equipe, jogadores, campeonatos e estatísticas.
              Este chatbot é enriquecido com dados atualizados sobre a FURIA CS:GO.
            </p>
            <p className="text-furia-accent">
              Experimente pedir por estatísticas de jogadores, próximos jogos, conquistas ou informações sobre jogadores específicos.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-furia-dark/50 border border-furia-gray/20 rounded-lg shadow-lg backdrop-blur-sm">
              {/* Chat components */}
              <ChatHeader />
              <ChatMessages 
                messages={messages}
                isLoading={isLoading}
              />
              <ChatInput 
                onSendMessage={handleSendMessage}
                isLoading={isLoading}
              />
            </div>
          </div>
          
          <TimelineInfo />
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Chatbot;
