import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, Download, Play, CheckCircle, Smartphone, Tablet, Monitor, Tv, Laptop, Gamepad2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Entre em Contato",
    description: "Clique no botão do WhatsApp e solicite seu teste grátis. Nossa equipe responde em até 5 minutos.",
    details: ["Atendimento 24 horas", "Resposta rápida", "Sem burocracia"],
  },
  {
    number: "02",
    icon: Download,
    title: "Instale o Aplicativo",
    description: "Receba as instruções de instalação para seu dispositivo. É simples e leva apenas 2 minutos.",
    details: ["Guia passo a passo", "Suporte na instalação", "Compatível com todos os dispositivos"],
  },
  {
    number: "03",
    icon: Play,
    title: "Comece a Assistir",
    description: "Acesse todo o conteúdo imediatamente. Canais ao vivo, filmes, séries e muito mais em alta qualidade.",
    details: ["Acesso instantâneo", "Qualidade HD, Full HD e 4K", "Conteúdo ilimitado"],
  },
];

const devices = [
  { icon: Smartphone, name: "Celular", description: "Android e iOS" },
  { icon: Tablet, name: "Tablet", description: "Todos os modelos" },
  { icon: Monitor, name: "Smart TV", description: "Samsung, LG, TCL, etc" },
  { icon: Tv, name: "TV Box", description: "Qualquer modelo" },
  { icon: Laptop, name: "Computador", description: "Windows e Mac" },
  { icon: Gamepad2, name: "Fire Stick", description: "Amazon Fire TV" },
];

const requirements = [
  {
    title: "Conexão de Internet",
    items: ["Mínimo: 10 Mbps para HD", "Recomendado: 25 Mbps para 4K", "Conexão estável (cabo ou Wi-Fi 5GHz)"],
  },
  {
    title: "Dispositivos Compatíveis",
    items: ["Smart TVs com sistema Android", "Celulares e tablets", "Computadores e notebooks", "TV Box e Fire Stick"],
  },
  {
    title: "Aplicativos Suportados",
    items: ["IPTV Smarters Pro", "TiviMate", "SS IPTV", "Perfect Player", "VLC Media Player"],
  },
];

const HowItWorks = () => {
  const whatsappLink = "https://wa.me/5511916783168?text=Olá! 🎬 Quero Conhecer as Opções de Testes de 6h.";

  return (
    <Layout>
      <Helmet>
        <title>Como Funciona o IPTV Premium | Guia Completo de Instalação</title>
        <meta name="description" content="Aprenda como funciona nosso serviço de IPTV em 3 passos simples. Instalação fácil, suporte técnico 24/7 e acesso imediato a todo o conteúdo." />
        <link rel="canonical" href="https://nova-stream-spot.lovable.app/como-funciona" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Como <span className="text-gradient-primary">Funciona</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Em apenas 3 passos simples você começa a assistir seus programas favoritos 
              com a melhor qualidade do mercado
            </p>
          </div>

          {/* Steps */}
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6 mb-12 last:mb-0">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-20 w-0.5 h-24 bg-gradient-to-b from-primary to-primary/20" />
                )}

                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-primary font-heading font-bold text-lg">{step.number}</span>
                    <h2 className="font-heading text-xl font-bold text-foreground">{step.title}</h2>
                  </div>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="xl" className="animate-pulse-glow">
                <MessageCircle className="w-5 h-5 mr-2" />
                Começar Teste Grátis Agora
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Devices Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Dispositivos <span className="text-gradient-primary">Compatíveis</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Assista em qualquer lugar, a qualquer hora, em qualquer dispositivo
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {devices.map((device, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:-translate-y-2 transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <device.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{device.name}</h3>
                <p className="text-xs text-muted-foreground text-center">{device.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Requisitos <span className="text-gradient-primary">Técnicos</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tudo que você precisa para aproveitar ao máximo nosso serviço
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {requirements.map((req, index) => (
              <div key={index} className="glass-card rounded-2xl p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">{req.title}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
