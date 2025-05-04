
// Types
export type UpcomingGame = {
  opponent: string;
  tournament: string;
  date: string;
  time: string;
  importance: "high" | "medium" | "low";
};

export type PlayerStat = {
  name: string;
  role: string;
  rating: number;
  kd: number;
  headshots: number;
  mapsPlayed: number;
};

export type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "image" | "stats" | "schedule";
  imageUrl?: string;
  statsData?: PlayerStat[];
  scheduleData?: UpcomingGame[];
};

// Static data
export const upcomingGames: UpcomingGame[] = [
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

export const playerStats: PlayerStat[] = [
  { name: "KSCERATO", role: "Rifler", rating: 1.23, kd: 1.35, headshots: 58.7, mapsPlayed: 187 },
  { name: "yuurih", role: "Rifler", rating: 1.18, kd: 1.28, headshots: 52.3, mapsPlayed: 187 },
  { name: "arT", role: "AWPer/IGL", rating: 0.98, kd: 0.95, headshots: 39.1, mapsPlayed: 187 },
  { name: "drop", role: "Support", rating: 1.05, kd: 1.06, headshots: 45.8, mapsPlayed: 175 },
  { name: "saffee", role: "AWPer", rating: 1.13, kd: 1.21, headshots: 32.5, mapsPlayed: 143 }
];

export const achievements = [
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

export const WHATSAPP_URL = "https://wa.me/5511993404466";
