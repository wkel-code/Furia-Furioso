
import { useRef, useEffect } from "react";
import { Message } from "../../data/chatbotData";
import MessageItem from "./MessageItem";

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="p-4 h-[500px] overflow-y-auto flex flex-col space-y-4 scroll-smooth">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
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
  );
};

export default ChatMessages;
