import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Users, Award, Clock, Globe, Heart, Shield, Zap, Target } from "lucide-react";
import { Helmet } from "react-helmet-async";

const stats = [
  { icon: Users, value: "50.000+", label: "Clientes Satisfeitos" },
  { icon: Award, value: "5+", label: "Anos de Experiência" },
  { icon: Clock, value: "24/7", label: "Suporte Disponível" },
  { icon: Globe, value: "4", label: "Países Atendidos" },
];

const values = [
  {
    icon: Heart,
    title: "Foco no Cliente",
    description: "Cada decisão que tomamos tem o cliente no centro. Sua satisfação é nossa prioridade número um.",
  },
  {
    icon: Shield,
    title: "Confiabilidade",
    description: "Investimos constantemente em infraestrutura para garantir um serviço estável e de alta qualidade.",
  },
  {
    icon: Zap,
    title: "Inovação",
    description: "Estamos sempre buscando novas tecnologias e melhorias para oferecer a melhor experiência.",
  },
  {
    icon: Target,
    title: "Transparência",
    description: "Sem letras miúdas, sem surpresas. Prezamos pela honestidade em todas as nossas relações.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "O Início",
    description: "Começamos como um pequeno projeto focado em oferecer qualidade e bom atendimento.",
  },
  {
    year: "2020",
    title: "Expansão Nacional",
    description: "Crescemos organicamente através de recomendações, alcançando todas as regiões do Brasil.",
  },
  {
    year: "2022",
    title: "Internacionalização",
    description: "Expandimos para atender a comunidade lusófona nos EUA, Portugal e Canadá.",
  },
  {
    year: "2024",
    title: "Liderança de Mercado",
    description: "Consolidamos nossa posição como referência em qualidade e atendimento no segmento.",
  },
];

const About = () => {
  const whatsappLink = "https://wa.me/5511916783168?text=Olá! 🎬 Quero Conhecer as Opções de Testes de 6h.";

  return (
    <Layout>
      <Helmet>
        <title>Sobre Nós | IPTV Premium - Entretenimento de Qualidade</title>
        <meta name="description" content="Conheça a história do IPTV Premium. Mais de 50.000 clientes satisfeitos em 4 países. Comprometidos com qualidade, inovação e atendimento excepcional." />
        <link rel="canonical" href="https://nova-stream-spot.lovable.app/sobre" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sobre o <span className="text-gradient-primary">IPTV Premium</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Somos uma empresa dedicada a transformar a forma como você consome entretenimento. 
              Nossa missão é oferecer acesso a conteúdo de qualidade, com tecnologia de ponta 
              e um atendimento que faz a diferença.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 glass-card rounded-2xl">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-heading text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Nossa <span className="text-gradient-primary">Missão</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Acreditamos que entretenimento de qualidade deve ser acessível a todos. 
                  Por isso, trabalhamos incansavelmente para oferecer a melhor experiência 
                  de streaming, com um catálogo diversificado que atende a todos os gostos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nosso compromisso vai além do conteúdo: investimos em tecnologia de ponta, 
                  mantemos uma equipe de suporte dedicada 24/7 e buscamos constantemente 
                  melhorar nossos serviços com base no feedback dos clientes.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="p-4 glass-card rounded-xl">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{value.title}</h3>
                    <p className="text-xs text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Nossa <span className="text-gradient-primary">Trajetória</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uma jornada de crescimento construída com dedicação e confiança dos nossos clientes
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-6 mb-8 last:mb-0">
                {/* Connector Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-6 top-14 w-0.5 h-16 bg-gradient-to-b from-primary to-primary/20" />
                )}

                {/* Year Badge */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <span className="text-primary font-heading font-bold text-sm">{item.year}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 glass-card rounded-xl p-5">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Presença <span className="text-gradient-primary">Global</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Atendemos clientes em 4 países com a mesma qualidade e dedicação
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { flag: "🇧🇷", name: "Brasil" },
              { flag: "🇺🇸", name: "Estados Unidos" },
              { flag: "🇵🇹", name: "Portugal" },
              { flag: "🇨🇦", name: "Canadá" },
            ].map((country, index) => (
              <div key={index} className="text-center p-6 glass-card rounded-2xl">
                <span className="text-4xl mb-3 block">{country.flag}</span>
                <p className="font-heading font-semibold text-foreground">{country.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Faça Parte da Nossa <span className="text-gradient-primary">Família</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Junte-se a mais de 50.000 clientes satisfeitos e descubra uma nova forma de assistir TV
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="xl" className="animate-pulse-glow">
              Começar Teste Grátis
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
