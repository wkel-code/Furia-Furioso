
import { Message } from "../../data/chatbotData";
import StatsTable from "./StatsTable";
import ScheduleTable from "./ScheduleTable";

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const renderMessageContent = () => {
    if (message.type === "image" && message.imageUrl) {
      return (
        <div>
          <p className="mb-2">{message.text}</p>
          <img 
            src={message.imageUrl} 
            alt={message.text}
            className="rounded-lg max-h-60 object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x300/151515/FFBA49?text=FURIA";
            }}
          />
        </div>
      );
    } else if (message.type === "stats" && message.statsData) {
      return (
        <div>
          <p className="mb-2">{message.text}</p>
          <StatsTable statsData={message.statsData} />
        </div>
      );
    } else if (message.type === "schedule" && message.scheduleData) {
      return (
        <div>
          <p className="mb-2">{message.text}</p>
          <ScheduleTable scheduleData={message.scheduleData} />
        </div>
      );
    } else {
      // Handle special formatting for achievement lists
      if (message.text.includes("Conquistas da FURIA CS:GO:")) {
        const lines = message.text.split('\n');
        return (
          <div className="whitespace-pre-line">
            <p className="font-semibold">{lines[0]}</p>
            {lines.slice(2).map((line, i) => (
              <p key={i} className={`${line.startsWith('-') ? 'pl-4' : 'font-medium mt-2'}`}>
                {line}
              </p>
            ))}
          </div>
        );
      }
      // Regular text message
      return <span className="whitespace-pre-line">{message.text}</span>;
    }
  };

  return (
    <div
      className={`flex ${
        message.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[85%] p-3 rounded-lg ${
          message.sender === "user"
            ? "bg-furia-accent text-furia-dark"
            : "bg-furia-gray/20 text-furia-light"
        }`}
      >
        {renderMessageContent()}
        <span className="text-xs opacity-70 mt-1 block">
          {message.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
};

export default MessageItem;
