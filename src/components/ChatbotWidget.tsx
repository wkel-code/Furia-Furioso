
import { useState } from "react";
import { MessageCircle, Send, X, Image, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Olá! Sou o FURIA Bot. Como posso ajudar você hoje? Se preferir falar com um atendente humano, acesse nosso WhatsApp: https://wa.me/5511993404466",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulating bot response after a delay
    setTimeout(() => {
      const responseOptions = [
        "Desculpe, não consigo processar essa informação agora. Para mais detalhes, entre em contato com nossa equipe pelo WhatsApp: https://wa.me/5511993404466",
        "Você pode encontrar mais informações sobre isso na seção 'Sobre a FURIA'. Caso precise de ajuda adicional, contate-nos pelo WhatsApp: https://wa.me/5511993404466",
        "Estamos trabalhando para melhorar nossas respostas. Para atendimento personalizado, utilize nosso WhatsApp: https://wa.me/5511993404466",
        "Esta funcionalidade está em desenvolvimento. Para assistência imediata, use nosso canal de WhatsApp: https://wa.me/5511993404466"
      ];

      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        content: responseOptions[Math.floor(Math.random() * responseOptions.length)],
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat bubble button */}
      <button
        className={`fixed bottom-4 right-4 z-40 bg-furia-accent text-furia-dark p-3 rounded-full shadow-lg hover:bg-furia-accent/90 transition-all ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        onClick={() => setIsOpen(true)}
        aria-label="Open chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat widget */}
      <div
        className={`fixed bottom-4 right-4 z-40 w-80 sm:w-96 bg-furia-dark border border-furia-gray/20 rounded-lg shadow-xl flex flex-col transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12 pointer-events-none"
        }`}
        style={{ maxHeight: "calc(100vh - 32px)" }}
      >
        {/* Chat header */}
        <div className="bg-furia-dark p-4 border-b border-furia-gray/20 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-furia-accent w-8 h-8 rounded-full flex items-center justify-center mr-2">
              <MessageCircle size={18} className="text-furia-dark" />
            </div>
            <div>
              <h3 className="font-bold text-furia-light">FURIA Bot</h3>
              <p className="text-xs text-furia-gray">Chat Beta</p>
            </div>
          </div>
          <button
            className="text-furia-gray hover:text-furia-light"
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Chat messages */}
        <div
          className="flex-1 overflow-y-auto p-4 space-y-4"
          style={{ maxHeight: "300px" }}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 ${
                  message.sender === "user"
                    ? "bg-furia-accent text-furia-dark"
                    : "bg-furia-gray/20 text-furia-light"
                }`}
              >
                <p>{message.content}</p>
                <div className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-furia-gray/20 text-furia-light max-w-[80%] rounded-lg px-4 py-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-furia-gray animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-furia-gray animate-pulse delay-75"></div>
                  <div className="w-2 h-2 rounded-full bg-furia-gray animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* WhatsApp contact link */}
        <div className="px-4 py-2 border-t border-furia-gray/20">
          <a 
            href="https://wa.me/5511993404466" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm text-furia-accent hover:underline py-1"
          >
            <ExternalLink size={14} />
            Contato Inteligente FURIA via WhatsApp
          </a>
        </div>

        {/* Chat input */}
        <div className="p-4 border-t border-furia-gray/20">
          <div className="flex items-center">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua mensagem..."
                className="w-full bg-furia-gray/10 border border-furia-gray/20 rounded-full px-4 py-2 focus:outline-none focus:border-furia-accent text-furia-light"
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-furia-gray hover:text-furia-accent"
                aria-label="Add image"
              >
                <Image size={18} />
              </button>
            </div>
            <Button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="ml-2 bg-furia-accent hover:bg-furia-accent/90 text-furia-dark p-2 rounded-full"
              aria-label="Send message"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatbotWidget;
