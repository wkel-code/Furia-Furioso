
import { useState } from "react";
import { Images, Play, X, Video } from "lucide-react";

type MediaItem = {
  id: number;
  type: "image" | "video";
  thumbnail: string;
  source?: string;
  title: string;
  description: string;
};

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Updated media data with real FURIA CS:GO content
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: "image",
      thumbnail: "https://i.ibb.co/H4LFCyL/furia-major-stage.jpg",
      title: "FURIA vs Astralis - ESL Pro League",
      description: "Time FURIA enfrentando a Astralis na ESL Pro League Season 14",
    },
    {
      id: 2,
      type: "image",
      thumbnail: "https://i.ibb.co/Dfbp97z/furia-team.jpg",
      title: "Equipe FURIA CS:GO",
      description: "Line-up atual da FURIA Esports na divisão de Counter-Strike",
    },
    {
      id: 3,
      type: "video",
      thumbnail: "https://i.ibb.co/9yrZjnv/furia-major.jpg",
      source: "https://www.youtube.com/embed/sqSC4gvRNoU?autoplay=1",
      title: "FURIA no PGL Major Stockholm",
      description: "Melhores momentos da FURIA no PGL Major Stockholm 2021",
    },
    {
      id: 4,
      type: "image",
      thumbnail: "https://i.ibb.co/jgK4BWD/furia-celebration.jpg",
      title: "Comemorando a Vitória",
      description: "Jogadores da FURIA celebrando após vitória em partida decisiva",
    },
    {
      id: 5,
      type: "video",
      thumbnail: "https://i.ibb.co/Qn0m6Fz/furia-highlight.jpg",
      source: "https://www.youtube.com/embed/M-P4QwWKmsE?autoplay=1",
      title: "KSCERATO - Highlights",
      description: "Momentos impressionantes do KSCERATO pelos torneios de CS:GO",
    },
    {
      id: 6,
      type: "video",
      thumbnail: "https://i.ibb.co/m5xMJkw/furia-fragmovie.jpg",
      source: "https://www.youtube.com/embed/2gQqR9H_xYs?autoplay=1",
      title: "FURIA - Top Plays 2023",
      description: "Compilação das melhores jogadas da FURIA em 2023",
    },
    {
      id: 7,
      type: "image",
      thumbnail: "https://i.ibb.co/K6NVxwV/furia-trophy.jpg",
      title: "Conquista do Campeonato",
      description: "FURIA erguendo o troféu após conquista importante",
    },
    {
      id: 8,
      type: "video",
      thumbnail: "https://i.ibb.co/28j4f5D/furia-clutch.jpg",
      source: "https://www.youtube.com/embed/qDQm9urCvUo?autoplay=1",
      title: "arT - Momentos de Clutch",
      description: "Jogadas decisivas do capitão arT em momentos cruciais",
    },
  ];

  const openModal = (item: MediaItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling while modal is open
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  return (
    <section className="py-16 bg-furia-dark relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <Images className="text-furia-accent" size={28} />
          <h2 className="font-display text-3xl font-bold">FURIA CS:GO</h2>
        </div>
        
        <p className="text-furia-gray mb-10 max-w-2xl">
          Explore os momentos mais marcantes da FURIA nos principais campeonatos de CS:GO. 
          Jogadas épicas, vitórias memoráveis e bastidores exclusivos do nosso time.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item) => (
            <div 
              key={item.id} 
              className="furia-card group cursor-pointer transform transition-all duration-300 hover:translate-y-[-5px]"
              onClick={() => openModal(item)}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  onError={(e) => {
                    // Fallback image if the main one fails to load
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/640x360/090909/FFBA49?text=FURIA+CS:GO";
                  }}
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-furia-dark/40 p-4 rounded-full">
                      <Play size={32} className="text-furia-accent" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="text-furia-gray mt-1 text-sm">{item.description}</p>
                <div className="mt-2 flex items-center text-sm">
                  {item.type === "video" ? (
                    <span className="flex items-center text-furia-accent">
                      <Video size={14} className="mr-1" /> Vídeo
                    </span>
                  ) : (
                    <span className="flex items-center text-furia-light">
                      <Images size={14} className="mr-1" /> Imagem
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="button-secondary">Ver Mais</button>
        </div>
      </div>
      
      {/* Modal for media view */}
      {isModalOpen && selectedItem && (
        <div 
          className="fixed inset-0 bg-furia-dark/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => closeModal()}
        >
          <div 
            className="max-w-4xl w-full bg-furia-dark border border-furia-gray/20 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 flex justify-between items-center border-b border-furia-gray/20">
              <h3 className="font-display text-xl">{selectedItem.title}</h3>
              <button 
                onClick={closeModal}
                className="text-furia-gray hover:text-furia-light p-2 rounded-full hover:bg-furia-gray/10 transition-colors"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              {selectedItem.type === "image" ? (
                <img 
                  src={selectedItem.thumbnail} 
                  alt={selectedItem.title} 
                  className="w-full rounded"
                  onError={(e) => {
                    // Fallback image if the main one fails to load
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/1280x720/090909/FFBA49?text=FURIA+CS:GO";
                  }}
                />
              ) : (
                <div className="relative aspect-video">
                  {selectedItem.source ? (
                    <iframe
                      src={selectedItem.source}
                      title={selectedItem.title}
                      className="w-full h-full rounded"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-furia-gray/20 rounded">
                      <Play size={48} className="text-furia-accent" />
                      <p className="absolute bottom-4 text-sm text-furia-light">Vídeo indisponível</p>
                    </div>
                  )}
                </div>
              )}
              <p className="mt-4 text-furia-gray">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
