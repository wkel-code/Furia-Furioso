
import { Bot, MessageSquareIcon, Trophy } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

const ChatHeader: React.FC = () => {
  return (
    <div className="p-4 border-b border-furia-gray/20 flex items-center justify-between backdrop-blur-sm bg-furia-dark/50">
      <div className="flex items-center">
        <div className="bg-furia-accent rounded-full p-1.5 mr-3">
          <Bot className="text-furia-dark" size={22} />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold flex items-center">
            FURIA Bot
            <span className="ml-2 text-xs bg-furia-accent/20 text-furia-accent px-2 py-0.5 rounded-full">
              AI Powered
            </span>
          </h3>
          <p className="text-xs text-furia-gray">Assistente virtual para fãs da FURIA Esports</p>
        </div>
      </div>
      
      <div className="flex space-x-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="text-furia-gray bg-furia-gray/10 p-1.5 rounded-full hover:bg-furia-gray/20">
                <Trophy size={16} />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Informações em tempo real sobre o cenário CS:GO</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a 
                href="https://wa.me/5511993404466" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-furia-gray bg-furia-gray/10 p-1.5 rounded-full hover:bg-furia-gray/20"
              >
                <MessageSquareIcon size={16} />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Suporte oficial via WhatsApp</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default ChatHeader;
