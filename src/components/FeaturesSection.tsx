import { Zap, Shield, Clock, Headphones, RefreshCw, Wifi, Server, Star } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Zero Travamentos",
    description: "Servidores premium de alta performance em múltiplos data centers",
  },
  {
    icon: Shield,
    title: "100% Seguro",
    description: "Conexão criptografada e proteção total dos seus dados",
  },
  {
    icon: Clock,
    title: "Ativação Imediata",
    description: "Receba seu acesso em até 5 minutos após o pagamento",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Atendimento humanizado via WhatsApp a qualquer hora",
  },
  {
    icon: RefreshCw,
    title: "Atualizações Diárias",
    description: "Novos filmes e séries adicionados todos os dias",
  },
  {
    icon: Wifi,
    title: "Funciona em Qualquer Internet",
    description: "Otimizado para conexões a partir de 10MB",
  },
  {
    icon: Server,
    title: "Multi Telas",
    description: "Assista em até 3 dispositivos simultaneamente",
  },
  {
    icon: Star,
    title: "Garantia de 7 Dias",
    description: "Satisfação garantida ou seu dinheiro de volta",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Por Que <span className="text-gradient-primary">Escolher</span> a Gente?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Diferenciais que fazem a diferença na sua experiência
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-b from-secondary/50 to-transparent border border-border/50 hover:border-primary/30 transition-all group"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
