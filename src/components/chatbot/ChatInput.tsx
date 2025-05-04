
import { useState } from "react";
import { Send } from "lucide-react";
import { WHATSAPP_URL } from "../../data/chatbotData";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading }) => {
  const [inputMessage, setInputMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    onSendMessage(inputMessage);
    setInputMessage("");
  };

  return (
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
          disabled={!inputMessage.trim() || isLoading}
        >
          <Send size={20} />
        </button>
      </div>
      <p className="mt-2 text-xs text-center text-furia-gray">
        Precisa de ajuda personalizada? Contate-nos pelo{" "}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-furia-accent hover:underline">
          WhatsApp
        </a>
      </p>
    </form>
  );
};

export default ChatInput;
