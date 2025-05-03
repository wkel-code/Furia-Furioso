
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Send, Bot } from 'lucide-react';

const Chatbot = () => {
  useEffect(() => {
    document.title = "FURIA Fan Site | Chatbot Interativo";
  }, []);
  
  type Message = {
    id: number;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
  };
  
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Eu sou o FURIA Bot, assistente virtual para os fãs da FURIA. Como posso ajudar hoje?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    
    // Simulated bot response - in a real app, this would be an API call
    setTimeout(() => {
      const botResponses = [
        "A FURIA Esports foi fundada em 2017 e rapidamente se tornou uma das principais equipes do Brasil!",
        "O time atual de CS:GO da FURIA inclui jogadores talentosos como KSCERATO, yuurih, entre outros.",
        "O próximo torneio da FURIA será anunciado em breve. Fique ligado nas nossas redes sociais!",
        "A FURIA tem uma das melhores torcidas do mundo do esports. Juntos somos mais fortes!",
        "Você sabia que a FURIA tem equipes em vários jogos além do CS:GO?",
      ];
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botMessage]);
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
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-furia-dark/50 border border-furia-gray/20 rounded-lg shadow-lg backdrop-blur-sm">
              {/* Chat header */}
              <div className="p-4 border-b border-furia-gray/20 flex items-center">
                <Bot className="text-furia-accent mr-2" size={24} />
                <h3 className="font-display text-xl font-semibold">FURIA Bot</h3>
              </div>
              
              {/* Chat messages */}
              <div className="p-4 h-96 overflow-y-auto flex flex-col space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.sender === "user"
                          ? "bg-furia-accent text-furia-dark"
                          : "bg-furia-gray/20 text-furia-light"
                      }`}
                    >
                      <p>{message.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Input */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-furia-gray/20">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Pergunte algo sobre a FURIA..."
                    className="flex-1 bg-furia-gray/10 text-furia-light rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-furia-accent"
                  />
                  <button
                    type="submit"
                    className="bg-furia-accent text-furia-dark p-3 rounded hover:bg-furia-accent/90"
                    disabled={!inputMessage.trim()}
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
            
            <div className="mt-8 text-furia-gray text-center text-sm">
              <p>
                Este é um chatbot simulado para demonstração. Em um site real, seria integrado com uma IA como GPT ou Dialogflow.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Chatbot;
