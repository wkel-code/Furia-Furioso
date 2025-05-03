
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatbotWidget from '../components/ChatbotWidget';

const About = () => {
  useEffect(() => {
    document.title = "FURIA Fan Site | Sobre a FURIA";
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="pt-20 min-h-screen bg-furia-dark">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Sobre a FURIA
          </h1>
          
          <div className="text-furia-light space-y-6 max-w-3xl mb-8">
            <p className="text-lg">
              A FURIA Esports é uma das organizações de esportes eletrônicos mais respeitadas e bem-sucedidas do Brasil, 
              com presença e reconhecimento internacional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="furia-card p-6">
              <h2 className="font-display text-2xl font-bold mb-4 text-furia-accent">História</h2>
              <div className="space-y-4">
                <p>
                  Fundada em 2017 por Jaime "raizen" Pádua e André Akkari, a FURIA rapidamente se estabeleceu como uma 
                  das organizações de maior sucesso na América Latina.
                </p>
                <p>
                  O que começou como um projeto ambicioso se transformou em uma potência dos esports, com equipes competitivas 
                  em diversos jogos, mas com destaque especial para Counter-Strike.
                </p>
                <p>
                  Em pouco tempo, a FURIA conseguiu construir uma base sólida de fãs apaixonados e se consolidou no cenário 
                  internacional, participando dos principais campeonatos do mundo.
                </p>
              </div>
            </div>
            
            <div className="furia-card p-6">
              <h2 className="font-display text-2xl font-bold mb-4 text-furia-accent">Filosofia</h2>
              <div className="space-y-4">
                <p>
                  A FURIA é conhecida por seu compromisso com o desenvolvimento de talentos brasileiros, apostando em jovens 
                  jogadores e dando a eles a oportunidade de crescer no cenário competitivo.
                </p>
                <p>
                  O trabalho em equipe, a dedicação e a busca constante pela excelência são valores fundamentais da organização.
                </p>
                <p>
                  Além do sucesso competitivo, a FURIA se destaca pela forma como gerencia a carreira de seus atletas e pela 
                  preocupação com o bem-estar físico e mental de todos os membros da equipe.
                </p>
              </div>
            </div>
          </div>
          
          <div className="furia-card p-6 mb-12">
            <h2 className="font-display text-2xl font-bold mb-4 text-furia-accent">Elenco de CS:GO</h2>
            <div className="space-y-6">
              <p>
                O time de Counter-Strike da FURIA é reconhecido globalmente por seu estilo de jogo agressivo e inovador. 
                Com uma mistura de jogadores experientes e jovens talentos, a equipe tem conquistado resultados expressivos 
                em competições internacionais.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-furia-dark/50 p-4 rounded-lg border border-furia-gray/20">
                  <h3 className="font-display font-bold text-furia-accent">KSCERATO</h3>
                  <p className="text-furia-gray">Kaike Cerato</p>
                  <p className="text-sm mt-1">Rifler e uma das principais estrelas do time</p>
                </div>
                
                <div className="bg-furia-dark/50 p-4 rounded-lg border border-furia-gray/20">
                  <h3 className="font-display font-bold text-furia-accent">yuurih</h3>
                  <p className="text-furia-gray">Yuri Santos</p>
                  <p className="text-sm mt-1">Rifler com incrível habilidade mecânica</p>
                </div>
                
                <div className="bg-furia-dark/50 p-4 rounded-lg border border-furia-gray/20">
                  <h3 className="font-display font-bold text-furia-accent">arT</h3>
                  <p className="text-furia-gray">Andrei Piovezan</p>
                  <p className="text-sm mt-1">Capitão e AWPer, conhecido por seu estilo agressivo</p>
                </div>
                
                <div className="bg-furia-dark/50 p-4 rounded-lg border border-furia-gray/20">
                  <h3 className="font-display font-bold text-furia-accent">drop</h3>
                  <p className="text-furia-gray">André Abreu</p>
                  <p className="text-sm mt-1">Suporte e clutcher da equipe</p>
                </div>
                
                <div className="bg-furia-dark/50 p-4 rounded-lg border border-furia-gray/20">
                  <h3 className="font-display font-bold text-furia-accent">chelo</h3>
                  <p className="text-furia-gray">Marcelo Cespedes</p>
                  <p className="text-sm mt-1">Rifler com ampla experiência competitiva</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="furia-card p-6">
            <h2 className="font-display text-2xl font-bold mb-4 text-furia-accent">Conquistas</h2>
            <ul className="space-y-4">
              <li className="border-l-4 border-furia-accent pl-4 py-2">
                <h3 className="font-semibold">ESL Pro League Season 12</h3>
                <p className="text-furia-gray">Vice-campeão - 2020</p>
              </li>
              <li className="border-l-4 border-furia-accent pl-4 py-2">
                <h3 className="font-semibold">DreamHack Masters Spring</h3>
                <p className="text-furia-gray">Vice-campeão - 2020</p>
              </li>
              <li className="border-l-4 border-furia-accent pl-4 py-2">
                <h3 className="font-semibold">BLAST Premier: Spring</h3>
                <p className="text-furia-gray">3º lugar - 2020</p>
              </li>
              <li className="border-l-4 border-furia-accent pl-4 py-2">
                <h3 className="font-semibold">ESL One: Road to Rio</h3>
                <p className="text-furia-gray">Campeão América do Norte - 2020</p>
              </li>
              <li className="border-l-4 border-furia-accent pl-4 py-2">
                <h3 className="font-semibold">ESEA Season 31</h3>
                <p className="text-furia-gray">Campeão Global - 2019</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
      <ChatbotWidget />
    </>
  );
};

export default About;
