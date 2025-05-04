
import { Users, BarChart } from "lucide-react";

const TimelineInfo: React.FC = () => {
  return (
    <div className="mt-12 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-furia-gray/5 border border-furia-gray/10 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="text-furia-accent" />
            <h3 className="font-display text-xl font-semibold">Linha do Tempo FURIA</h3>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex">
              <div className="flex-shrink-0 w-12">2017</div>
              <div>Fundação da FURIA Esports</div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 w-12">2018</div>
              <div>Primeiras participações em torneios internacionais</div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 w-12">2019</div>
              <div>Ascensão internacional, de #58 para #7 no ranking HLTV</div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 w-12">2020</div>
              <div>Conquista da ESL Pro League Season 12 (NA) e DreamHack Open Winter</div>
            </li>
            <li className="flex">
              <div className="flex-shrink-0 w-12">2021</div>
              <div>Top 8 no PGL Major Stockholm</div>
            </li>
          </ul>
        </div>
        
        <div className="bg-furia-gray/5 border border-furia-gray/10 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <BarChart className="text-furia-accent" />
            <h3 className="font-display text-xl font-semibold">Dados Rápidos</h3>
          </div>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between">
              <div className="text-furia-gray">Fundação:</div>
              <div className="font-medium">2017</div>
            </li>
            <li className="flex justify-between">
              <div className="text-furia-gray">Fundadores:</div>
              <div className="font-medium">Jaime Pádua e André Akkari</div>
            </li>
            <li className="flex justify-between">
              <div className="text-furia-gray">Melhor ranking mundial:</div>
              <div className="font-medium">#3 (HLTV)</div>
            </li>
            <li className="flex justify-between">
              <div className="text-furia-gray">Títulos principais:</div>
              <div className="font-medium">4</div>
            </li>
            <li className="flex justify-between">
              <div className="text-furia-gray">Participações em Major:</div>
              <div className="font-medium">5</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelineInfo;
