
import { Bot } from "lucide-react";

const ChatHeader: React.FC = () => {
  return (
    <div className="p-4 border-b border-furia-gray/20 flex items-center">
      <Bot className="text-furia-accent mr-2" size={24} />
      <h3 className="font-display text-xl font-semibold">FURIA Bot</h3>
      <span className="ml-2 text-xs bg-furia-accent/20 text-furia-accent px-2 py-0.5 rounded-full">Beta</span>
    </div>
  );
};

export default ChatHeader;
