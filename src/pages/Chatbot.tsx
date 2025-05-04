
import { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Send, Bot, BarChart, Calendar, Users } from 'lucide-react';

// Types
type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "image" | "stats" | "schedule";
  imageUrl?: string;
  statsData?: any;
  scheduleData?: any;
};

type UpcomingGame = {
  opponent: string;
  tournament: string;
  date: string;
  time: string;
  importance: "high" | "medium" | "low";
};

type PlayerStat = {
  name: string;
  role: string;
  rating: number;
  kd: number;
  headshots: number;
  mapsPlayed: number;
};

// Static data
const upcomingGames: UpcomingGame[] = [
  { 
    opponent: "Team Liquid", 
    tournament: "ESL Pro League Season 19", 
    date: "12/05/2025", 
    time: "15:00", 
    importance: "high" 
  },
  { 
    opponent: "Natus Vincere", 
    tournament: "BLAST Premier Spring Final", 
    date: "18/05/2025", 
    time: "13:30", 
    importance: "medium" 
  },
  { 
    opponent: "G2 Esports", 
    tournament: "IEM Summer 2025", 
    date: "24/05/2025", 
    time: "17:00", 
    importance: "high" 
  },
];

const playerStats: PlayerStat[] = [
  { name: "KSCERATO", role: "Rifler", rating: 1.23, kd: 1.35, headshots: 58.7, mapsPlayed: 187 },
  { name: "yuurih", role: "Rifler", rating: 1.18, kd: 1.28, headshots: 52.3, mapsPlayed: 187 },
  { name: "arT", role: "AWPer/IGL", rating: 0.98, kd: 0.95, headshots: 39.1, mapsPlayed: 187 },
  { name: "drop", role: "Support", rating: 1.05, kd: 1.06, headshots: 45.8, mapsPlayed: 175 },
  { name: "saffee", role: "AWPer", rating: 1.13, kd: 1.21, headshots: 32.5, mapsPlayed: 143 }
];

const achievements = [
  "Títulos Principais (Vitórias) ✅",
  "- ESL Pro League Season 12 (North America) – 2020: Campeã na região das Américas",
  "- DreamHack Open Winter 2020: Campeã (venceram a Heroic na final)",
  "- ESEA Season 31: Global Challenge – 2019: Campeã global, derrotando a Team Singularity",
  "- ESL One: Road to Rio (Américas) – 2020: Campeã da região das Américas",
  "",
  "Vice-campeonatos e Boas Colocações 🥈",
  "- DreamHack Masters Spring 2020: Vice-campeã (perdeu para a BIG na final)",
  "- BLAST Premier: Spring 2020: 3º lugar",
  "- Intel Extreme Masters (IEM) Beijing 2020: 4º lugar",
  "- ESL Pro League Season 13 – 2021: Top 4",
  "",
  "Majors 🏆",
  "- PGL Major Stockholm 2021: Top 8 (melhor colocação de uma equipe brasileira pós-pandemia)"
];

const Chatbot = () => {
  useEffect(() => {
    document.title = "FURIA Fan Site | Chatbot Interativo";
  }, []);
  
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Eu sou o FURIA Bot, assistente virtual para os fãs da FURIA. Como posso ajudar hoje? Para suporte personalizado, acesse nosso WhatsApp: https://wa.me/5511993404466",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const generateStatsMessage = (): Message => {
    return {
      id: messages.length + 2,
      text: "Aqui estão as estatísticas atuais dos jogadores da FURIA:",
      sender: "bot",
      timestamp: new Date(),
      type: "stats",
      statsData: playerStats
    };
  };

  const generateScheduleMessage = (): Message => {
    return {
      id: messages.length + 2,
      text: "Confira os próximos jogos da FURIA:",
      sender: "bot",
      timestamp: new Date(),
      type: "schedule",
      scheduleData: upcomingGames
    };
  };

  const generateAchievementsMessage = (): Message => {
    return {
      id: messages.length + 2,
      text: `Conquistas da FURIA CS:GO:\n\n${achievements.join('\n')}`,
      sender: "bot",
      timestamp: new Date(),
    };
  };

  const generateImageMessage = (url: string, caption: string): Message => {
    return {
      id: messages.length + 2,
      text: caption,
      sender: "bot",
      timestamp: new Date(),
      type: "image",
      imageUrl: url
    };
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
    setIsLoading(true);
    
    // AI-like response generation
    setTimeout(() => {
      const userQuestion = inputMessage.toLowerCase();
      let botResponses: Message[] = [];
      
      // Generate responses based on message content for a more conversational feel
      if (userQuestion.includes("oi") || userQuestion.includes("olá") || userQuestion.includes("ola") || userQuestion.includes("e aí")) {
        botResponses.push({
          id: messages.length + 2,
          text: "Olá! Como posso ajudar você hoje? Quer saber sobre jogadores, campeonatos, estatísticas ou próximos jogos da FURIA?",
          sender: "bot",
          timestamp: new Date(),
        });
      } 
      else if (userQuestion.includes("jogadores") || userQuestion.includes("estatística") || userQuestion.includes("estatisticas") || userQuestion.includes("stats") || userQuestion.includes("desempenho")) {
        botResponses.push(generateStatsMessage());
      }
      else if (userQuestion.includes("próximo") || userQuestion.includes("proximo") || userQuestion.includes("jogo") || userQuestion.includes("agenda") || userQuestion.includes("calendário") || userQuestion.includes("calendario")) {
        botResponses.push(generateScheduleMessage());
      }
      else if (userQuestion.includes("título") || userQuestion.includes("titulo") || userQuestion.includes("campeonato") || userQuestion.includes("ganhou") || userQuestion.includes("conquistas") || userQuestion.includes("achievements")) {
        botResponses.push(generateAchievementsMessage());
      }
      else if (userQuestion.includes("quem é") || userQuestion.includes("quem foi") || userQuestion.includes("jogador")) {
        if (userQuestion.includes("kscerato")) {
          botResponses.push({
            id: messages.length + 2,
            text: "Kaike 'KSCERATO' Cerato é um dos principais jogadores da FURIA, conhecido por seu talento excepcional com rifles. Ele se destaca por sua consistência e habilidade de clutch em momentos decisivos.",
            sender: "bot",
            timestamp: new Date(),
          });
          botResponses.push(generateImageMessage(
            "https://static.hltv.org/images/galleries/1693-full/1575738541.3263.jpeg",
            "KSCERATO em ação pela FURIA"
          ));
        } else if (userQuestion.includes("yuurih")) {
          botResponses.push({
            id: messages.length + 2,
            text: "Yuri 'yuurih' Santos é um dos pilares da FURIA, com um estilo de jogo versátil e inteligente. Ele é frequentemente elogiado por sua capacidade de adaptação e tomada de decisões rápidas durante as partidas.",
            sender: "bot",
            timestamp: new Date(),
          });
          botResponses.push(generateImageMessage(
            "https://static.hltv.org/images/galleries/13154-medium/1571016335.6666.jpeg",
            "yuurih representando a FURIA em torneios internacionais"
          ));
        } else if (userQuestion.includes("art") || userQuestion.includes("arT")) {
          botResponses.push({
            id: messages.length + 2,
            text: "Andrei 'arT' Piovezan é o capitão da FURIA, conhecido por seu estilo agressivo como AWPer. Ele é essencial para a estratégia da equipe, liderando com sua ousadia e criatividade tática.",
            sender: "bot",
            timestamp: new Date(),
          });
          botResponses.push(generateImageMessage(
            "https://static.hltv.org/images/galleries/12209-medium/1571016335.6666.jpeg",
            "arT, capitão da FURIA CS:GO"
          ));
        } else {
          botResponses.push({
            id: messages.length + 2,
            text: "A FURIA conta com jogadores talentosos como KSCERATO, yuurih, arT, drop e saffee. Sobre qual jogador específico você gostaria de saber mais?",
            sender: "bot",
            timestamp: new Date(),
          });
          botResponses.push(generateImageMessage(
            "https://www.vpesports.com/wp-content/uploads/2020/08/FURIA-ESL-ONE-COLOGNE-2020.jpg",
            "Line-up da FURIA CS:GO"
          ));
        }
      }
      else if (userQuestion.includes("fundada") || userQuestion.includes("história") || userQuestion.includes("historia")) {
        botResponses.push({
          id: messages.length + 2,
          text: "A FURIA Esports foi fundada em 2017 por Jaime Pádua e André Akkari. A organização começou com um time de CS:GO e rapidamente se expandiu para outros jogos. O time de CS:GO ganhou reconhecimento internacional em 2019, quando subiu no ranking mundial da HLTV de #58 para #7 em apenas alguns meses!",
          sender: "bot",
          timestamp: new Date(),
        });
        botResponses.push(generateImageMessage(
          "https://cdn.draft5.gg/images/competitions/pgl-stockholm-2021-furia-feature.jpg",
          "FURIA em competição internacional"
        ));
      }
      else if (userQuestion.includes("treina") || userQuestion.includes("treino")) {
        botResponses.push({
          id: messages.length + 2,
          text: "A FURIA tem um regime de treino intensivo que inclui cerca de 8 horas diárias de prática. Isso envolve treinos táticos, análise de demos de adversários, e sessões de prática individual para aprimoramento de habilidades específicas. A equipe também conta com apoio psicológico para manter o foco e a saúde mental.",
          sender: "bot",
          timestamp: new Date(),
        });
      }
      else if (userQuestion.includes("whatsapp") || userQuestion.includes("contato") || userQuestion.includes("falar")) {
        botResponses.push({
          id: messages.length + 2,
          text: "Você pode entrar em contato com a FURIA através do WhatsApp oficial: https://wa.me/5511993404466",
          sender: "bot",
          timestamp: new Date(),
        });
      }
      else {
        // Fallback responses
        botResponses.push({
          id: messages.length + 2,
          text: "Não tenho informações específicas sobre isso. Posso ajudar com estatísticas de jogadores, próximos jogos, conquistas ou informações sobre jogadores específicos. Para atendimento personalizado, utilize nosso WhatsApp: https://wa.me/5511993404466",
          sender: "bot",
          timestamp: new Date(),
        });
      }
      
      setIsLoading(false);
      
      // Add each response with a small delay between them for a more natural feeling
      botResponses.forEach((response, index) => {
        setTimeout(() => {
          setMessages(prev => [...prev, response]);
        }, index * 800);
      });
      
    }, 1000);
  };

  // Render different message types
  const renderMessageContent = (message: Message) => {
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
                {message.statsData.map((player: PlayerStat, i: number) => (
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
        </div>
      );
    } else if (message.type === "schedule" && message.scheduleData) {
      return (
        <div>
          <p className="mb-2">{message.text}</p>
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
                {message.scheduleData.map((game: UpcomingGame, i: number) => (
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
    <>
      <Navbar />
      
      <div className="pt-20 min-h-screen bg-furia-dark">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Chatbot Interativo
          </h1>
          
          <div className="text-furia-light space-y-6 max-w-3xl mb-8">
            <p>
              Converse com o FURIA Bot e tire suas dúvidas sobre a equipe, jogadores, campeonatos e estatísticas.
              Este chatbot é enriquecido com dados atualizados sobre a FURIA CS:GO.
            </p>
            <p className="text-furia-accent">
              Experimente pedir por estatísticas de jogadores, próximos jogos, conquistas ou informações sobre jogadores específicos.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-furia-dark/50 border border-furia-gray/20 rounded-lg shadow-lg backdrop-blur-sm">
              {/* Chat header */}
              <div className="p-4 border-b border-furia-gray/20 flex items-center">
                <Bot className="text-furia-accent mr-2" size={24} />
                <h3 className="font-display text-xl font-semibold">FURIA Bot</h3>
                <span className="ml-2 text-xs bg-furia-accent/20 text-furia-accent px-2 py-0.5 rounded-full">Beta</span>
              </div>
              
              {/* Chat messages */}
              <div className="p-4 h-[400px] overflow-y-auto flex flex-col space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
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
                      {renderMessageContent(message)}
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>
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
              
              {/* Input */}
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
                  Precisa de ajuda personalizada? Contate-nos pelo <a href="https://wa.me/5511993404466" target="_blank" rel="noopener noreferrer" className="text-furia-accent hover:underline">WhatsApp</a>
                </p>
              </form>
            </div>
          </div>
          
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
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Chatbot;
