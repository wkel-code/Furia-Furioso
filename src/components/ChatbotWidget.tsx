
import { useState } from "react";
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
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Eu sou o FURIA Bot, assistente virtual para os fãs da FURIA. Como posso ajudar hoje?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

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
                className="bg-furia-accent text-furia-dark p-2 rounded-full hover:bg-furia-accent/90"
                disabled={!inputMessage.trim()}
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
