
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatbotWidget from '../components/ChatbotWidget';
import { User, Settings, Share, Mail, Lock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const MyExperience = () => {
  useEffect(() => {
    document.title = "FURIA Fan Site | Minha Experiência FURIA";
  }, []);

  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isLoading, setIsLoading] = useState(false);
  
  // Function to validate form
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!isLogin && !name) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres';
    }
    
    if (!isLogin && password !== confirmPassword) {
      newErrors.confirmPassword = 'As senhas não conferem';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        
        if (isLogin) {
          toast({
            title: "Login realizado com sucesso!",
            description: `Bem-vindo novamente, ${email}!`,
          });
        } else {
          toast({
            title: "Conta criada com sucesso!",
            description: "Sua conta foi criada e você já pode começar a utilizar todos os recursos!",
          });
        }
        
        // Reset form
        if (!isLogin) {
          setName('');
        }
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      }, 1500);
    }
  };

  return (
    <>
      <Navbar />
      
      <div className="pt-20 min-h-screen bg-furia-dark">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gradient">
            Minha Experiência FURIA
          </h1>
          
          <div className="max-w-3xl mb-12">
            <p className="text-furia-gray text-lg">
              Aqui você poderá personalizar sua experiência e receber conteúdos adaptados ao seu perfil.
              {isLogin ? ' Faça login para continuar.' : ' Crie sua conta para começar.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="furia-card p-6 hover:border-furia-accent/30 transition-colors">
              <User className="text-furia-accent mb-4" size={32} />
              <h3 className="font-display text-xl font-semibold mb-2">Perfil Personalizado</h3>
              <p className="text-furia-gray">
                Crie seu perfil de fã e compartilhe suas experiências e fotos com a comunidade FURIA.
              </p>
            </div>
            
            <div className="furia-card p-6 hover:border-furia-accent/30 transition-colors">
              <Settings className="text-furia-accent mb-4" size={32} />
              <h3 className="font-display text-xl font-semibold mb-2">Preferências de Conteúdo</h3>
              <p className="text-furia-gray">
                Defina suas preferências para receber conteúdos específicos sobre os jogadores e campeonatos favoritos.
              </p>
            </div>
            
            <div className="furia-card p-6 hover:border-furia-accent/30 transition-colors">
              <Share className="text-furia-accent mb-4" size={32} />
              <h3 className="font-display text-xl font-semibold mb-2">Conexão com Redes Sociais</h3>
              <p className="text-furia-gray">
                Conecte suas redes sociais para uma experiência ainda mais personalizada e compartilhamento facilitado.
              </p>
            </div>
          </div>
          
          <div className="max-w-xl mx-auto p-8 furia-card border border-furia-accent/30">
            <h3 className="font-display text-2xl font-bold mb-6 text-center">
              {isLogin ? "Acessar minha conta" : "Criar minha conta"}
            </h3>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              {!isLogin && (
                <div>
                  <label className="block text-furia-light mb-1">Nome</label>
                  <Input 
                    type="text" 
                    className="bg-furia-gray/10 border border-furia-gray/20 text-furia-light focus:border-furia-accent"
                    placeholder="Seu nome" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>
              )}
              
              <div>
                <label className="block text-furia-light mb-1">E-mail</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-furia-gray" />
                  <Input 
                    type="email" 
                    className="pl-10 bg-furia-gray/10 border border-furia-gray/20 text-furia-light focus:border-furia-accent"
                    placeholder="seu-email@exemplo.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-furia-light mb-1">Senha</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-furia-gray" />
                  <Input 
                    type="password" 
                    className="pl-10 bg-furia-gray/10 border border-furia-gray/20 text-furia-light focus:border-furia-accent"
                    placeholder="********" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.password}
                  </p>
                )}
              </div>
              
              {!isLogin && (
                <div>
                  <label className="block text-furia-light mb-1">Confirmar Senha</label>
                  <Input 
                    type="password" 
                    className="bg-furia-gray/10 border border-furia-gray/20 text-furia-light focus:border-furia-accent"
                    placeholder="********" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle size={12} className="mr-1" />
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              )}
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full button-primary mt-4"
                  disabled={isLoading}
                >
                  {isLoading ? 
                    'Processando...' : 
                    (isLogin ? 'Entrar' : 'Criar Conta')}
                </Button>
              </div>
              
              <div className="text-center text-furia-gray text-sm">
                <p>
                  {isLogin ? 'Não tem uma conta?' : 'Já tem conta?'} 
                  <button 
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-furia-accent hover:underline ml-1"
                  >
                    {isLogin ? 'Criar uma conta' : 'Faça login'}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
      <ChatbotWidget />
    </>
  );
};

export default MyExperience;
