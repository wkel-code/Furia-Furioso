
import { Message, playerStats, upcomingGames, achievements } from "../data/chatbotData";

export const generateStatsMessage = (messages: Message[]): Message => {
  return {
    id: messages.length + 2,
    text: "Aqui estão as estatísticas atuais dos jogadores da FURIA:",
    sender: "bot",
    timestamp: new Date(),
    type: "stats",
    statsData: playerStats
  };
};

export const generateScheduleMessage = (messages: Message[]): Message => {
  return {
    id: messages.length + 2,
    text: "Confira os próximos jogos da FURIA:",
    sender: "bot",
    timestamp: new Date(),
    type: "schedule",
    scheduleData: upcomingGames
  };
};

export const generateAchievementsMessage = (messages: Message[]): Message => {
  return {
    id: messages.length + 2,
    text: `Conquistas da FURIA CS:GO:\n\n${achievements.join('\n')}`,
    sender: "bot",
    timestamp: new Date(),
  };
};

export const generateImageMessage = (
  messages: Message[], 
  url: string, 
  caption: string
): Message => {
  return {
    id: messages.length + 2,
    text: caption,
    sender: "bot",
    timestamp: new Date(),
    type: "image",
    imageUrl: url
  };
};

export const generateBotResponse = (
  userMessage: string,
  messages: Message[]
): Message[] => {
  const userQuestion = userMessage.toLowerCase();
  const botResponses: Message[] = [];
  
  if (userQuestion.includes("oi") || userQuestion.includes("olá") || userQuestion.includes("ola") || userQuestion.includes("e aí")) {
    botResponses.push({
      id: messages.length + 2,
      text: "Olá! Como posso ajudar você hoje? Quer saber sobre jogadores, campeonatos, estatísticas ou próximos jogos da FURIA?",
      sender: "bot",
      timestamp: new Date(),
    });
  } 
  else if (userQuestion.includes("jogadores") || userQuestion.includes("estatística") || userQuestion.includes("estatisticas") || userQuestion.includes("stats") || userQuestion.includes("desempenho")) {
    botResponses.push(generateStatsMessage(messages));
  }
  else if (userQuestion.includes("próximo") || userQuestion.includes("proximo") || userQuestion.includes("jogo") || userQuestion.includes("agenda") || userQuestion.includes("calendário") || userQuestion.includes("calendario")) {
    botResponses.push(generateScheduleMessage(messages));
  }
  else if (userQuestion.includes("título") || userQuestion.includes("titulo") || userQuestion.includes("campeonato") || userQuestion.includes("ganhou") || userQuestion.includes("conquistas") || userQuestion.includes("achievements")) {
    botResponses.push(generateAchievementsMessage(messages));
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
        messages,
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
        messages,
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
        messages,
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
        messages,
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
      messages,
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
  
  return botResponses;
};
