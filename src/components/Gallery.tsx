
import { useState } from "react";
import { Gallery as GalleryIcon, Play, X } from "lucide-react";

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

  // Placeholder media data - in a real app, this would come from an API
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: "image",
      thumbnail: "https://source.unsplash.com/1470071459604-3b5ec3a7fe05",
      title: "Vitória no Major",
      description: "FURIA celebrando sua vitória no Major de CS:GO",
    },
    {
      id: 2,
      type: "image",
      thumbnail: "https://source.unsplash.com/1526374965328-7f61d4dc18c5",
      title: "Concentração Total",
      description: "Jogadores se concentrando antes da partida decisiva",
    },
    {
      id: 3,
      type: "video",
      thumbnail: "https://source.unsplash.com/1487058792275-0ad4aaf24ca7",
      title: "Highlights ESL Pro League",
      description: "Melhores momentos da FURIA na ESL Pro League",
    },
    {
      id: 4,
      type: "image",
      thumbnail: "https://source.unsplash.com/1501854140801-50d01698950b",
      title: "Treino Tático",
      description: "Equipe durante sessão de treino tático",
    },
    {
      id: 5,
      type: "video",
      thumbnail: "https://source.unsplash.com/1500673922987-e212871fec22",
      title: "Entrevista Exclusiva",
      description: "Entrevista com os jogadores após classificação",
    },
  ];

  const openModal = (item: MediaItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section className="py-16 bg-furia-dark relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <GalleryIcon className="text-furia-accent" size={28} />
          <h2 className="font-display text-3xl font-bold">Momentos FURIA</h2>
        </div>
        
        <p className="text-furia-gray mb-10 max-w-2xl">
          Explore os momentos mais marcantes da FURIA nos principais campeonatos de CS:GO. 
          Jogadas épicas, vitórias memoráveis e bastidores exclusivos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaItems.map((item) => (
            <div 
              key={item.id} 
              className="furia-card group cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-furia-dark/40 p-4 rounded-full">
                      <Play size={24} className="text-furia-accent" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="text-furia-gray mt-1 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <button className="button-secondary">Ver Mais</button>
        </div>
      </div>
      
      {/* Modal for media view */}
      {selectedItem && (
        <div className="fixed inset-0 bg-furia-dark/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="max-w-4xl w-full bg-furia-dark border border-furia-gray/20 rounded-lg overflow-hidden">
            <div className="p-4 flex justify-between items-center border-b border-furia-gray/20">
              <h3 className="font-display text-xl">{selectedItem.title}</h3>
              <button 
                onClick={closeModal}
                className="text-furia-gray hover:text-furia-light"
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
                />
              ) : (
                <div className="relative aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center bg-furia-gray/20 rounded">
                    <Play size={48} className="text-furia-accent" />
                    <p className="absolute bottom-4 text-sm text-furia-light">Vídeo simulado - Em uma aplicação real, aqui seria exibido o vídeo</p>
                  </div>
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
