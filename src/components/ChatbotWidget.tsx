
import { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X, MinusCircle } from "lucide-react";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Eu sou o FURIA Bot, assistente virtual para os fãs da FURIA. Como posso ajudar hoje?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to the bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const toggleChat = () => {
    if (isMinimized) {
      setIsMinimized(false);
      return;
    }
    setIsOpen(!isOpen);
  };

  const minimizeChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(true);
  };

  const closeChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);
    
    // AI-like response generation
    setTimeout(() => {
      const userQuestion = inputMessage.toLowerCase();
      let botResponse = "";
      
      // Generate responses based on message content for a more conversational feel
      if (userQuestion.includes("oi") || userQuestion.includes("olá") || userQuestion.includes("ola") || userQuestion.includes("e aí")) {
        botResponse = "Olá! Como posso ajudar você hoje? Quer saber sobre jogadores, campeonatos ou estatísticas da FURIA?";
      } 
      else if (userQuestion.includes("quem é") || userQuestion.includes("quem foi") || userQuestion.includes("jogador")) {
        if (userQuestion.includes("kscerato")) {
          botResponse = "Kaike 'KSCERATO' Cerato é um dos principais jogadores da FURIA, conhecido por seu talento excepcional com rifles. Ele se destaca por sua consistência e habilidade de clutch em momentos decisivos.";
        } else if (userQuestion.includes("yuurih")) {
          botResponse = "Yuri 'yuurih' Santos é um dos pilares da FURIA, com um estilo de jogo versátil e inteligente. Ele é frequentemente elogiado por sua capacidade de adaptação e tomada de decisões rápidas durante as partidas.";
        } else if (userQuestion.includes("art") || userQuestion.includes("arT")) {
          botResponse = "Andrei 'arT' Piovezan é o capitão da FURIA, conhecido por seu estilo agressivo como AWPer. Ele é essencial para a estratégia da equipe, liderando com sua ousadia e criatividade tática.";
        } else {
          botResponse = "A FURIA conta com jogadores talentosos como KSCERATO, yuurih, arT, entre outros. Sobre qual jogador específico você gostaria de saber mais?";
        }
      }
      else if (userQuestion.includes("quando") && (userQuestion.includes("próximo") || userQuestion.includes("proximo") || userQuestion.includes("jogo"))) {
        botResponse = "O próximo jogo da FURIA será contra a Team Liquid na ESL Pro League Season 17, marcado para este final de semana. Vai ser um jogo decisivo para a classificação no grupo!";
      }
      else if (userQuestion.includes("título") || userQuestion.includes("titulo") || userQuestion.includes("campeonato") || userQuestion.includes("ganhou")) {
        botResponse = "A FURIA conquistou vários títulos importantes, incluindo o ESEA Season 36: Premier Division - North America, a IEM Beijing-Haidian 2020 North America, e foi vice-campeã em diversos torneios de elite como a ESL Pro League Season 12 e a DreamHack Masters Spring 2020.";
      }
      else if (userQuestion.includes("fundada") || userQuestion.includes("história") || userQuestion.includes("historia")) {
        botResponse = "A FURIA Esports foi fundada em 2017 por Jaime Pádua e André Akkari. A organização começou com um time de CS:GO e rapidamente se expandiu para outros jogos. O time de CS:GO ganhou reconhecimento internacional em 2019, quando subiu no ranking mundial da HLTV de #58 para #7 em apenas alguns meses!";
      }
      else if (userQuestion.includes("quantos jogos") || userQuestion.includes("estatística") || userQuestion.includes("estatisticas")) {
        botResponse = "Nos últimos 12 meses, a FURIA teve um desempenho de aproximadamente 65% de vitórias em mapas jogados em competições oficiais. A equipe se destaca especialmente nos mapas Nuke e Mirage, onde mantém uma taxa de vitória acima de 70%.";
      }
      else if (userQuestion.includes("treina") || userQuestion.includes("treino")) {
        botResponse = "A FURIA tem um regime de treino intensivo que inclui cerca de 8 horas diárias de prática. Isso envolve treinos táticos, análise de demos de adversários, e sessões de prática individual para aprimoramento de habilidades específicas. A equipe também conta com apoio psicológico para manter o foco e a saúde mental.";
      }
      else {
        // Fallback responses that seem more intelligent than random quotes
        const fallbackResponses = [
          "Interessante sua pergunta sobre " + inputMessage.split(" ").slice(0,3).join(" ") + "... A FURIA tem trabalhado bastante nesse aspecto, com foco em melhorar constantemente o desempenho da equipe.",
          "Sobre " + inputMessage.split(" ").slice(0,2).join(" ") + ", a filosofia da FURIA sempre foi apostar no talento brasileiro e desenvolver jogadores para o cenário internacional.",
          "Essa é uma questão importante! A FURIA tem uma abordagem única quando se trata de " + inputMessage.split(" ").slice(-2).join(" ") + ", diferente de muitas organizações internacionais.",
          "Analisando o contexto do que você perguntou, a FURIA tem demonstrado crescimento constante desde 2019, principalmente após a chegada do coach guerri.",
          "Considerando sua pergunta, posso dizer que a estratégia da FURIA para 2025 envolve expandir ainda mais sua presença global, mantendo a essência brasileira que a caracteriza."
        ];
        
        botResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
      }
      
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setIsLoading(false);
      setMessages((prev) => [...prev, botMessage]);
    }, 1500);
  };

  return (
    <>
      {/* Chat button */}
      <button
        onClick={toggleChat}
        className={`fixed z-40 flex items-center ${
          isMinimized
            ? "bottom-4 right-4 bg-furia-accent text-furia-dark p-3 rounded-full hover:bg-furia-accent/90"
            : "bottom-4 right-4 bg-furia-accent text-furia-dark py-3 px-4 rounded-full hover:bg-furia-accent/90"
        } transition-all shadow-lg`}
      >
        <MessageSquare size={isMinimized ? 24 : 20} />
        {!isMinimized && (
          <span className="ml-2 font-semibold">Chat com FURIA Bot</span>
        )}
      </button>

      {/* Chat window */}
      {isOpen && !isMinimized && (
        <div className="fixed bottom-20 right-4 z-40 w-80 sm:w-96 bg-furia-dark border border-furia-gray/20 rounded-lg shadow-xl flex flex-col animate-slide-in">
          {/* Header */}
          <div className="p-4 border-b border-furia-gray/20 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageSquare size={20} className="text-furia-accent" />
              <h3 className="font-display font-semibold">FURIA Bot</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={minimizeChat}
                className="text-furia-gray hover:text-furia-light"
                aria-label="Minimize"
              >
                <MinusCircle size={18} />
              </button>
              <button
                onClick={closeChat}
                className="text-furia-gray hover:text-furia-light"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>
          
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto max-h-96 flex flex-col space-y-4">
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
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-furia-gray/20 text-furia-light max-w-[80%] p-3 rounded-lg">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-furia-accent rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-furia-accent rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-furia-accent rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-furia-gray/20">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Pergunte algo sobre a FURIA..."
                className="flex-1 bg-furia-gray/10 text-furia-light rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-furia-accent"
              />
              <button
                type="submit"
                className="bg-furia-accent text-furia-dark p-2 rounded-full hover:bg-furia-accent/90 transition-colors"
                disabled={!inputMessage.trim() || isLoading}
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;
