
import { BarChart } from "lucide-react";
import { PlayerStat } from "../../data/chatbotData";

interface StatsTableProps {
  statsData: PlayerStat[];
}

const StatsTable: React.FC<StatsTableProps> = ({ statsData }) => {
  return (
    <div className="overflow-x-auto bg-furia-gray/10 rounded-lg p-2 mt-2">
      <div className="flex items-center gap-2 mb-2 text-furia-accent">
        <BarChart size={18} />
        <span className="font-medium">Estatísticas dos Jogadores</span>
      </div>
      <table className="w-full text-xs sm:text-sm">
        <thead>
          <tr className="border-b border-furia-gray/20">
            <th className="text-left p-1">Jogador</th>
            <th className="text-left p-1">Função</th>
            <th className="text-center p-1">Rating</th>
            <th className="text-center p-1">K/D</th>
            <th className="text-center p-1">HS%</th>
            <th className="text-center p-1">Mapas</th>
          </tr>
        </thead>
        <tbody>
          {statsData.map((player, i) => (
            <tr key={i} className="border-b border-furia-gray/10">
              <td className="p-1 font-medium">{player.name}</td>
              <td className="p-1">{player.role}</td>
              <td className="p-1 text-center">{player.rating.toFixed(2)}</td>
              <td className="p-1 text-center">{player.kd.toFixed(2)}</td>
              <td className="p-1 text-center">{player.headshots}%</td>
              <td className="p-1 text-center">{player.mapsPlayed}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-xs text-furia-gray italic">Estatísticas dos últimos 3 meses</p>
    </div>
  );
};

export default StatsTable;
