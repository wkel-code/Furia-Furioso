
import { useState } from "react";
import { Images, X } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

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

  // Updated media data with the new uploaded FURIA CS:GO images
  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: "image",
      thumbnail: "/lovable-uploads/724bdace-ba9a-4346-a6a4-09dd4588eb22.png",
      title: "Torcida da FURIA",
      description: "Torcedores celebrando com bandeiras da FURIA durante um evento de CS:GO",
    },
    {
      id: 2,
      type: "image",
      thumbnail: "/lovable-uploads/83c84f5b-b338-4090-90e3-f410a09bc20a.png",
      title: "#FURIA - Torcida Organizada",
      description: "Multidão de fãs com bandeiras e instrumentos apoiando a FURIA em campeonato",
    },
    {
      id: 3,
      type: "image",
      thumbnail: "/lovable-uploads/80092bd4-7ce8-47a6-8e4f-71a29b505091.png",
      title: "Pro Player em Ação",
      description: "Jogador profissional da FURIA concentrado durante partida importante",
    },
    {
      id: 4,
      type: "image",
      thumbnail: "/lovable-uploads/32bb370c-0d0d-4226-8862-44a82ed50811.png",
      title: "FURIA Campeã",
      description: "Time da FURIA levantando troféu após vitória em campeonato internacional",
    },
    {
      id: 5,
      type: "image",
      thumbnail: "/lovable-uploads/c544872c-4e0e-4709-9d9b-df655bfb9059.png",
      title: "FURIA Elisa Masters",
      description: "Jogadores da FURIA celebrando a conquista do título Elisa Masters",
    },
    {
      id: 6,
      type: "image",
      thumbnail: "/lovable-uploads/36d5c3e1-e60f-4433-97b3-ac600851a4db.png",
      title: "Jogador FURIA",
      description: "Close em jogador com o distintivo da FURIA representando o time",
    },
    {
      id: 7,
      type: "image",
      thumbnail: "/lovable-uploads/d9046df9-50a0-43ec-b0b4-63693298cc7c.png",
      title: "Arena FURIA",
      description: "Vista panorâmica de arena lotada durante campeonato da FURIA",
    },
    {
      id: 8,
      type: "image",
      thumbnail: "/lovable-uploads/0977c389-9121-48c6-83ca-b34bc01bfaa6.png",
      title: "Equipe em Celebração",
      description: "Jogadores da FURIA celebrando com os fãs após vitória importante",
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
          Jogadas épicas, vitórias memoráveis e o apoio da torcida que não para de crescer.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured Carousel Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <h3 className="font-display text-2xl font-bold mb-8 text-center">Destaques FURIA</h3>
          
          <Carousel className="max-w-3xl mx-auto">
            <CarouselContent>
              {mediaItems.map((item) => (
                <CarouselItem key={`carousel-${item.id}`}>
                  <div className="p-2">
                    <div className="overflow-hidden rounded-lg">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full aspect-video object-cover"
                        loading="lazy"
                      />
                      <div className="bg-furia-dark/80 p-4">
                        <h4 className="font-display text-lg font-semibold">{item.title}</h4>
                        <p className="text-furia-gray text-sm mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
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
