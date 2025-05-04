
import { useState } from "react";
import { Images, X, Video } from "lucide-react";

type MediaItem = {
  id: number;
  type: "image";
  thumbnail: string;
  title: string;
  description: string;
};

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Updated media data with direct links to reliable images of FURIA CS:GO
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: "image",
      thumbnail: "/lovable-uploads/cd961942-460d-4fe8-acdc-156c36e32658.png",
      title: "FURIA vs Astralis - ESL Pro League",
      description: "Time FURIA enfrentando a Astralis na ESL Pro League Season 14",
    },
    {
      id: 2,
      type: "image",
      thumbnail: "https://www.vpesports.com/wp-content/uploads/2020/08/FURIA-ESL-ONE-COLOGNE-2020.jpg",
      title: "Equipe FURIA CS:GO",
      description: "Line-up da FURIA Esports na divisão de Counter-Strike durante ESL One Cologne",
    },
    {
      id: 3,
      type: "image",
      thumbnail: "https://cdn.draft5.gg/images/competitions/pgl-stockholm-2021-furia-feature.jpg",
      title: "FURIA no PGL Major Stockholm",
      description: "Momento da FURIA no PGL Major Stockholm 2021",
    },
    {
      id: 4,
      type: "image",
      thumbnail: "https://valorant.draft5.gg/wp-content/uploads/2022/01/FURIA-11.jpg",
      title: "Comemorando a Vitória",
      description: "Jogadores da FURIA celebrando após vitória em partida decisiva",
    },
    {
      id: 5,
      type: "image",
      thumbnail: "https://static.hltv.org/images/galleries/1693-full/1575738541.3263.jpeg",
      title: "KSCERATO - Destaques",
      description: "KSCERATO, um dos principais jogadores da FURIA em CS:GO",
    },
    {
      id: 6,
      type: "image",
      thumbnail: "https://cdn.gamemeca.com/gmdata/0000/174/613/furia_1.jpg",
      title: "FURIA - Top Plays 2023",
      description: "Jogadores da FURIA em ação durante campeonato internacional",
    },
    {
      id: 7,
      type: "image",
      thumbnail: "https://www.theloadout.com/wp-content/sites/theloadout/2021/02/furia-logo.jpg",
      title: "DreamHack Open Winter 2020",
      description: "FURIA na conquista do título da DreamHack Open Winter 2020",
    },
    {
      id: 8,
      type: "image",
      thumbnail: "https://static.hltv.org/images/galleries/12209-medium/1571016335.6666.jpeg",
      title: "arT - Momentos de Clutch",
      description: "Capitão arT durante partidas importantes representando a FURIA",
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
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Failed to load image: ${item.thumbnail}`);
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/640x360/090909/FFBA49?text=FURIA+CS:GO";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                <p className="text-furia-gray mt-1 text-sm">{item.description}</p>
                <div className="mt-2 flex items-center text-sm">
                  <span className="flex items-center text-furia-light">
                    <Images size={14} className="mr-1" /> Imagem
                  </span>
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
              <img 
                src={selectedItem.thumbnail} 
                alt={selectedItem.title} 
                className="w-full rounded"
                loading="eager"
                onError={(e) => {
                  console.error(`Failed to load modal image: ${selectedItem.thumbnail}`);
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/1280x720/090909/FFBA49?text=FURIA+CS:GO";
                }}
              />
              <p className="mt-4 text-furia-gray">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
