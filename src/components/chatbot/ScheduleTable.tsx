
import { Calendar } from "lucide-react";
import { UpcomingGame } from "../../data/chatbotData";

interface ScheduleTableProps {
  scheduleData: UpcomingGame[];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ scheduleData }) => {
  return (
    <div className="overflow-x-auto bg-furia-gray/10 rounded-lg p-2 mt-2">
      <div className="flex items-center gap-2 mb-2 text-furia-accent">
        <Calendar size={18} />
        <span className="font-medium">Calendário de Partidas</span>
      </div>
      <table className="w-full text-xs sm:text-sm">
        <thead>
          <tr className="border-b border-furia-gray/20">
            <th className="text-left p-1">Adversário</th>
            <th className="text-left p-1">Torneio</th>
            <th className="text-center p-1">Data</th>
            <th className="text-center p-1">Horário</th>
          </tr>
        </thead>
        <tbody>
          {scheduleData.map((game, i) => (
            <tr key={i} className="border-b border-furia-gray/10">
              <td className="p-1 font-medium">vs. {game.opponent}</td>
              <td className="p-1">{game.tournament}</td>
              <td className="p-1 text-center">{game.date}</td>
              <td className="p-1 text-center">{game.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-xs text-furia-gray italic">Horários no fuso de Brasília (GMT-3)</p>
    </div>
  );
};

export default ScheduleTable;
