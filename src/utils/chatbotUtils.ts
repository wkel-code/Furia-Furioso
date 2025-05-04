
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

// Enhanced bot responses with more complete information
export const generateBotResponse = (
  userMessage: string,
  messages: Message[]
): Message[] => {
  const userQuestion = userMessage.toLowerCase();
  const botResponses: Message[] = [];
  
  if (userQuestion.includes("oi") || userQuestion.includes("olá") || userQuestion.includes("ola") || userQuestion.includes("e aí")) {
    botResponses.push({
      id: messages.length + 2,
      text: "Olá! Sou o FURIA Bot, assistente virtual oficial para os fãs da FURIA Esports. Estou aqui para responder suas perguntas sobre nosso time de CS:GO, compartilhar estatísticas dos jogadores, informar sobre próximos jogos, conquistas, e muito mais. Como posso ajudar você hoje?",
      sender: "bot",
      timestamp: new Date(),
    });
  } 
  else if (userQuestion.includes("jogadores") || userQuestion.includes("estatística") || userQuestion.includes("estatisticas") || userQuestion.includes("stats") || userQuestion.includes("desempenho")) {
    botResponses.push({
      id: messages.length + 2,
      text: "A FURIA possui um dos lineups mais talentosos do cenário competitivo de CS:GO. Nossos jogadores têm se destacado consistentemente em competições internacionais, com performances impressionantes em diversos torneios. Confira as estatísticas atuais dos nossos players:",
      sender: "bot",
      timestamp: new Date(),
    });
    botResponses.push(generateStatsMessage(messages));
    
    botResponses.push({
      id: messages.length + 3,
      text: "KSCERATO e yuurih são considerados os pilares ofensivos do time, com ratings consistentemente acima de 1.15, enquanto arT, nosso capitão, lidera com estratégias agressivas características do estilo FURIA. Sua pergunta é sobre algum jogador específico ou aspecto particular das estatísticas?",
      sender: "bot",
      timestamp: new Date(),
    });
  }
  else if (userQuestion.includes("próximo") || userQuestion.includes("proximo") || userQuestion.includes("jogo") || userQuestion.includes("agenda") || userQuestion.includes("calendário") || userQuestion.includes("calendario")) {
    botResponses.push({
      id: messages.length + 2,
      text: "A FURIA tem uma agenda competitiva intensa pela frente, com participações nos principais torneios do cenário internacional de CS:GO. Nossa equipe está se preparando intensamente para esses confrontos, com bootcamps e sessões estratégicas diárias. Aqui estão os próximos desafios:",
      sender: "bot",
      timestamp: new Date(),
    });
    botResponses.push(generateScheduleMessage(messages));
    
    botResponses.push({
      id: messages.length + 3,
      text: "Os jogos contra Team Liquid e G2 Esports serão especialmente importantes para nossa classificação no ranking mundial. Nossa equipe técnica está analisando detalhadamente o estilo de jogo desses adversários para preparar estratégias eficientes. Você planeja assistir a algum desses jogos?",
      sender: "bot",
      timestamp: new Date(),
    });
  }
  else if (userQuestion.includes("título") || userQuestion.includes("titulo") || userQuestion.includes("campeonato") || userQuestion.includes("ganhou") || userQuestion.includes("conquistas") || userQuestion.includes("achievements")) {
    botResponses.push({
      id: messages.length + 2,
      text: "A FURIA tem construído um legado impressionante no cenário competitivo de CS:GO desde sua fundação. Com títulos importantes e performances consistentes em eventos de alto nível, a organização brasileira se estabeleceu como uma potência global. Veja nosso histórico de conquistas:",
      sender: "bot",
      timestamp: new Date(),
    });
    botResponses.push(generateAchievementsMessage(messages));
    
    botResponses.push({
      id: messages.length + 3,
      text: "Além desses resultados, a equipe tem mostrado evolução constante, especialmente na adaptação ao meta atual do CS:GO. Nossa conquista no DreamHack Open Winter 2020 foi um momento especialmente memorável, com uma final emocionante contra a Heroic. Você acompanhou algum desses torneios?",
      sender: "bot",
      timestamp: new Date(),
    });
    
    botResponses.push(generateImageMessage(
      messages,
      "/lovable-uploads/c544872c-4e0e-4709-9d9b-df655bfb9059.png",
      "Time da FURIA celebrando após vitória em torneio internacional"
    ));
  }
  else if (userQuestion.includes("quem é") || userQuestion.includes("quem foi") || userQuestion.includes("jogador")) {
    if (userQuestion.includes("kscerato")) {
      botResponses.push({
        id: messages.length + 2,
        text: "Kaike 'KSCERATO' Cerato é um dos jogadores mais talentosos do cenário brasileiro e internacional de CS:GO. Nascido em 2 de maio de 1999, ele se juntou à FURIA em 2018 e rapidamente se destacou como um rifler excepcional.",
        sender: "bot",
        timestamp: new Date(),
      });
      botResponses.push({
        id: messages.length + 3,
        text: "KSCERATO é conhecido por sua precisão impressionante, especialmente com o rifle AK-47, além de sua capacidade de clutch em momentos decisivos. Com um headshot percentage consistentemente acima de 55%, ele é considerado um dos melhores aimers da América Latina. Sua capacidade de manter a calma em situações de pressão o torna um jogador absolutamente fundamental para a FURIA.",
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
        text: "Yuri 'yuurih' Santos é um dos talentos mais brilhantes do CS:GO brasileiro. Nascido em 4 de junho de 1999, ele se juntou à FURIA em 2017 e se desenvolveu como um jogador extremamente versátil e confiável.",
        sender: "bot",
        timestamp: new Date(),
      });
      botResponses.push({
        id: messages.length + 3,
        text: "yuurih se destaca por sua capacidade de adaptação a diferentes posições e funções dentro do time. Seu estilo de jogo inteligente combina excelente aim com uma compreensão profunda da mecânica do jogo. Ele é especialmente efetivo em situações de retake e pós-planta, frequentemente convertendo rounds aparentemente perdidos em vitórias para a FURIA. Considerado por muitos analistas como um jogador completo, yuurih continua evoluindo e ampliando seu impacto nas partidas.",
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
        text: "Andrei 'arT' Piovezan é o capitão e In-Game Leader (IGL) da FURIA, nascido em 25 de julho de 1996. Seu estilo de liderança inovador e agressivo revolucionou o modo como o CS:GO brasileiro é visto internacionalmente.",
        sender: "bot",
        timestamp: new Date(),
      });
      botResponses.push({
        id: messages.length + 3,
        text: "Como AWPer e IGL, arT desenvolveu um estilo único que prioriza agressividade e decisões rápidas, criando o que muitos chamam de 'FURIA style'. Ele é reconhecido por fazer jogadas inesperadas e de alto risco que frequentemente surpreendem os adversários. Sua liderança inspirou uma geração de jogadores brasileiros e transformou a FURIA em uma equipe temida globalmente por seu jogo imprevisível e dinâmico. Além de suas habilidades táticas, arT também é conhecido por seu carisma e capacidade de manter o time motivado mesmo em situações adversas.",
        sender: "bot",
        timestamp: new Date(),
      });
      botResponses.push(generateImageMessage(
        messages,
        "/lovable-uploads/80092bd4-7ce8-47a6-8e4f-71a29b505091.png",
        "arT, capitão da FURIA CS:GO, concentrado durante partida"
      ));
    } else {
      botResponses.push({
        id: messages.length + 2,
        text: "A FURIA Esports conta com um elenco de jogadores extremamente talentosos no CS:GO. O lineup atual inclui:",
        sender: "bot",
        timestamp: new Date(),
      });
      botResponses.push({
        id: messages.length + 3,
        text: "• Andrei 'arT' Piovezan - Capitão e AWPer, conhecido por seu estilo agressivo e liderança inovadora\n• Kaike 'KSCERATO' Cerato - Rifler com precisão excepcional e um dos melhores aimers da América Latina\n• Yuri 'yuurih' Santos - Jogador versátil com excelente game sense e adaptabilidade\n• André 'drop' Abreu - Support player sólido que traz estabilidade ao time\n• Rafael 'saffee' Costa - AWPer talentoso com grande potencial ofensivo\n\nSobre qual jogador específico você gostaria de saber mais detalhes?",
        sender: "bot",
        timestamp: new Date(),
      });
      botResponses.push(generateImageMessage(
        messages,
        "/lovable-uploads/32bb370c-0d0d-4226-8862-44a82ed50811.png",
        "Line-up atual da FURIA CS:GO"
      ));
    }
  }
  else if (userQuestion.includes("fundada") || userQuestion.includes("história") || userQuestion.includes("historia")) {
    botResponses.push({
      id: messages.length + 2,
      text: "A FURIA Esports foi fundada em 2017 pelos empresários Jaime Pádua e André Akkari, um dos jogadores de poker mais bem-sucedidos do Brasil. A organização nasceu com a visão de revolucionar os esports brasileiros e levar talentos nacionais ao reconhecimento mundial.",
      sender: "bot",
      timestamp: new Date(),
    });
    botResponses.push({
      id: messages.length + 3,
      text: "O time de CS:GO da FURIA teve uma ascensão meteórica em 2019, quando subiu no ranking mundial da HLTV de #58 para #7 em apenas alguns meses, um feito sem precedentes para uma equipe brasileira. Essa ascensão foi marcada por performances impressionantes em torneios como ECS Season 7 Finals e DreamHack Masters Dallas 2019.\n\nDesde então, a FURIA se estabeleceu como uma organização de elite no cenário competitivo, representando o Brasil nas maiores competições internacionais e inspirando uma nova geração de jogadores. A filosofia da organização de desenvolver talentos jovens e investir em infraestrutura de ponta tem sido fundamental para seu sucesso contínuo.",
      sender: "bot",
      timestamp: new Date(),
    });
    botResponses.push(generateImageMessage(
      messages,
      "/lovable-uploads/83c84f5b-b338-4090-90e3-f410a09bc20a.png",
      "Torcida da FURIA em evento internacional de CS:GO"
    ));
  }
  else if (userQuestion.includes("treina") || userQuestion.includes("treino")) {
    botResponses.push({
      id: messages.length + 2,
      text: "A FURIA mantém um dos regimes de treinamento mais intensivos e estruturados do cenário competitivo de CS:GO. A rotina diária de treino dos jogadores inclui aproximadamente 8-10 horas dedicadas ao aprimoramento de habilidades individuais e coletivas.",
      sender: "bot",
      timestamp: new Date(),
    });
    botResponses.push({
      id: messages.length + 3,
      text: "O programa de treinamento da FURIA é dividido em várias etapas:\n\n1. Sessões individuais de aim training e reflexos (2-3 horas diárias)\n2. Análise de demos de adversários e estudo tático (1-2 horas)\n3. Práticas de execuções e estratégias específicas para cada mapa (2 horas)\n4. Scrims (partidas de treino) contra outras equipes profissionais (3-4 horas)\n5. Revisão das partidas com análise de erros e acertos (1 hora)\n\nAlém disso, a organização investe fortemente em suporte psicológico, preparação física e nutricional. Os jogadores contam com uma equipe multidisciplinar incluindo psicólogo esportivo, fisioterapeuta e nutricionista, garantindo que estejam no melhor estado físico e mental para as competições.",
      sender: "bot",
      timestamp: new Date(),
    });
  }
  else if (userQuestion.includes("torcida") || userQuestion.includes("fans") || userQuestion.includes("fãs")) {
    botResponses.push({
      id: messages.length + 2,
      text: "A torcida da FURIA é conhecida como uma das mais apaixonadas e fiéis do cenário de esports brasileiro. O crescimento da fanbase tem sido exponencial desde as primeiras conquistas internacionais do time em 2019.",
      sender: "bot",
      timestamp: new Date(),
    });
    botResponses.push({
      id: messages.length + 3,
      text: "Os fãs da FURIA são famosos por sua presença vibrante nas arenas, com cânticos, bandeiras e um apoio incondicional mesmo nos momentos mais desafiadores. Eventos como a BLAST Premier e Majors frequentemente contam com setores dominados pelo preto característico da torcida da FURIA.\n\nA organização mantém uma relação próxima com seus fãs através de conteúdo exclusivo nas redes sociais, encontros com jogadores e transmissões ao vivo. A comunidade FURIA Fanclub organiza watch parties para os jogos importantes e mantém grupos ativos de discussão sobre o desempenho do time.",
      sender: "bot",
      timestamp: new Date(),
    });
    botResponses.push(generateImageMessage(
      messages,
      "/lovable-uploads/724bdace-ba9a-4346-a6a4-09dd4588eb22.png",
      "Torcedores da FURIA celebrando durante campeonato"
    ));
    botResponses.push(generateImageMessage(
      messages,
      "/lovable-uploads/d9046df9-50a0-43ec-b0b4-63693298cc7c.png",
      "Arena lotada de fãs durante campeonato da FURIA"
    ));
  }
  else if (userQuestion.includes("whatsapp") || userQuestion.includes("contato") || userQuestion.includes("falar")) {
    botResponses.push({
      id: messages.length + 2,
      text: "Para entrar em contato direto com a FURIA Esports, você pode utilizar o WhatsApp oficial da organização: https://wa.me/5511993404466",
      sender: "bot",
      timestamp: new Date(),
    });
    botResponses.push({
      id: messages.length + 3,
      text: "Através deste canal, você pode tirar dúvidas sobre produtos oficiais, ingressos para eventos, oportunidades de parceria, ou qualquer outra questão relacionada à FURIA. Nossa equipe de atendimento está disponível de segunda a sexta, das 9h às 18h (horário de Brasília).\n\nVocê também pode acompanhar a FURIA nas redes sociais para notícias e atualizações em tempo real:\n• Instagram: @furiagg\n• Twitter: @FURIA\n• YouTube: FURIA Esports",
      sender: "bot",
      timestamp: new Date(),
    });
  }
  else if (userQuestion.includes("mapa") || userQuestion.includes("mapas")) {
    botResponses.push({
      id: messages.length + 2,
      text: "A FURIA tem um mapa pool diversificado no CS:GO, com performances notáveis em diferentes cenários. Historicamente, a equipe desenvolveu estilos distintos para cada mapa do pool competitivo.",
      sender: "bot",
      timestamp: new Date(),
    });
    botResponses.push({
      id: messages.length + 3,
      text: "Análise do mapa pool atual da FURIA:\n\n• Nuke: Considerado um dos mapas mais fortes da FURIA, com taxa de vitória acima de 70%. O time desenvolveu estratégias inovadoras tanto no lado CT quanto TR.\n\n• Vertigo: Outro mapa de excelência, onde o estilo agressivo do arT e a coordenação da equipe se destacam, especialmente no lado TR.\n\n• Inferno: Mapa sólido onde a FURIA costuma apresentar um CT side bastante robusto, com setups variados.\n\n• Ancient: Um mapa em evolução para a equipe, com estratégias ainda sendo refinadas, mas já mostrando bom desempenho.\n\n• Mirage: Historicamente um mapa forte para o time, com execuções rápidas e bem coordenadas no bombsite A.\n\n• Overpass: Um mapa que tem apresentado resultados mistos recentemente, mas onde a equipe já teve performances memoráveis.\n\nEm campeonatos recentes, a FURIA tem priorizado Nuke e Vertigo como seus mapas de pick, enquanto geralmente bane Dust2 e Anubis.",
      sender: "bot",
      timestamp: new Date(),
    });
  }
  else {
    // Enhanced fallback responses with follow-up questions
    const fallbackResponses = [
      "Não tenho informações específicas sobre isso, mas posso ajudar com estatísticas dos jogadores, próximos jogos, conquistas da FURIA ou detalhes sobre jogadores específicos. O que você gostaria de saber?",
      
      "Essa é uma pergunta interessante! Embora eu não tenha dados específicos sobre isso no momento, posso compartilhar informações sobre o desempenho atual da FURIA, conquistas recentes ou nossos próximos desafios. Qual desses tópicos te interessa mais?",
      
      "Ainda não possuo essa informação em minha base de dados, mas estou continuamente aprendendo! Posso te ajudar com detalhes sobre o time atual da FURIA, nossa história no cenário competitivo ou estatísticas dos jogadores. O que você prefere?",
      
      "Para essa pergunta específica, recomendo entrar em contato diretamente com a FURIA através do WhatsApp oficial: https://wa.me/5511993404466. Enquanto isso, posso te contar sobre nossos últimos resultados ou próximos torneios. Gostaria de saber sobre algum desses temas?"
    ];
    
    // Randomly select one of the improved fallback responses
    const randomResponse = fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
    
    botResponses.push({
      id: messages.length + 2,
      text: randomResponse,
      sender: "bot",
      timestamp: new Date(),
    });
    
    // Add a follow-up suggestion
    botResponses.push({
      id: messages.length + 3,
      text: "Você pode perguntar sobre tópicos como:\n• Estatísticas dos jogadores\n• Próximos jogos\n• Conquistas e títulos\n• História da FURIA\n• Informações sobre jogadores específicos (KSCERATO, yuurih, arT)\n• Regime de treinamento do time",
      sender: "bot",
      timestamp: new Date(),
    });
  }
  
  return botResponses;
};
