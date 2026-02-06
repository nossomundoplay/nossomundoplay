import { Button } from "@/components/ui/button";
import { Play, Zap, Tv, Shield, CheckCircle, MessageCircle, Star, Users, Clock, Globe } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const whatsappLink = "https://wa.me/5511916783168?text=Olá! 🎬 Quero Conhecer as Opções de Testes de 6h.";

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[150px] z-10" />

    <div className="container relative z-20 px-4 py-20 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6 animate-pulse">
          <span className="text-sm font-medium text-primary">Oferta por tempo limitado</span>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Teste IPTV</span>
          <br />
          <span className="text-gradient-primary">Grátis por 6 Horas</span>
          <br />
          <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">Sem Compromisso</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Assista canais ao vivo, filmes e séries com qualidade 
          <span className="text-foreground font-semibold"> HD, Full HD e 4K</span>. 
          Funciona em qualquer dispositivo, sem travamentos.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
          {[
            { icon: Tv, text: "+20.000 Canais" },
            { icon: Play, text: "+80.000 Filmes e Séries" },
            { icon: Zap, text: "Sem Travamentos" },
            { icon: Shield, text: "Suporte 24/7" }
          ].map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm md:text-base">
              <benefit.icon className="w-5 h-5 text-primary" />
              <span className="text-foreground">{benefit.text}</span>
            </div>
          ))}
        </div>

        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <Button variant="whatsapp" size="xl" className="animate-pulse-glow group">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            QUERO TESTAR AGORA
          </Button>
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <span>✓ Sem cartão de crédito</span>
          <span>✓ Ativação em 5 minutos</span>
          <span>✓ Funciona em todos dispositivos</span>
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
      <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
        <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
      </div>
    </div>
  </section>
);

// Stats Section
const StatsSection = () => (
  <section className="py-16 bg-secondary/30">
    <div className="container px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {[
          { icon: Users, value: "50.000+", label: "Clientes Ativos" },
          { icon: Tv, value: "20.000+", label: "Canais ao Vivo" },
          { icon: Play, value: "80.000+", label: "Filmes e Séries" },
          { icon: Globe, value: "4", label: "Países Atendidos" },
        ].map((stat, index) => (
          <div key={index} className="text-center p-4">
            <div className="w-12 h-12 mx-auto rounded-xl bg-primary/20 flex items-center justify-center mb-3">
              <stat.icon className="w-6 h-6 text-primary" />
            </div>
            <p className="font-heading text-2xl md:text-3xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Benefits Section
const BenefitsSection = () => (
  <section className="py-20">
    <div className="container px-4">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Por Que Escolher o <span className="text-gradient-primary">IPTV Premium</span>?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Oferecemos a melhor experiência de streaming com qualidade, estabilidade e suporte real
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          {
            icon: Zap,
            title: "Servidores Estáveis",
            description: "Infraestrutura premium com 99,9% de uptime. Assista sem travamentos ou quedas.",
          },
          {
            icon: Shield,
            title: "Suporte 24 Horas",
            description: "Equipe técnica disponível via WhatsApp para resolver qualquer problema rapidamente.",
          },
          {
            icon: Tv,
            title: "Qualidade 4K Ultra HD",
            description: "Conteúdo em alta definição para você aproveitar cada detalhe da sua programação.",
          },
          {
            icon: Clock,
            title: "Ativação Imediata",
            description: "Seu acesso é liberado em poucos minutos após o teste ou pagamento.",
          },
          {
            icon: Users,
            title: "3 Telas Simultâneas",
            description: "Toda a família pode assistir ao mesmo tempo em dispositivos diferentes.",
          },
          {
            icon: Globe,
            title: "Conteúdo Internacional",
            description: "Canais e filmes de diversos países, incluindo Brasil, EUA, Portugal e mais.",
          },
        ].map((benefit, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl glass-card hover:border-primary/50 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
              <benefit.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
            <p className="text-muted-foreground text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// How It Works Section
const HowItWorksSection = () => (
  <section className="py-20 bg-secondary/30">
    <div className="container px-4">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Como <span className="text-gradient-primary">Funciona</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Comece a assistir em 3 passos simples
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[
          {
            step: "01",
            icon: MessageCircle,
            title: "Solicite o Teste",
            description: "Entre em contato pelo WhatsApp e peça seu acesso de teste gratuito.",
          },
          {
            step: "02",
            icon: Play,
            title: "Receba o Acesso",
            description: "Em até 5 minutos você recebe os dados para começar a assistir.",
          },
          {
            step: "03",
            icon: Tv,
            title: "Aproveite!",
            description: "Assista por 6 horas grátis e conheça todo o conteúdo disponível.",
          },
        ].map((item, index) => (
          <div key={index} className="text-center relative">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
              <item.icon className="w-8 h-8 text-primary" />
            </div>
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 text-4xl font-heading font-bold text-primary/20">
              {item.step}
            </span>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/como-funciona">
          <Button variant="outline" size="lg">
            Ver Guia Completo
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

// Testimonials Section
const TestimonialsSection = () => (
  <section className="py-20">
    <div className="container px-4">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          O Que Nossos <span className="text-gradient-primary">Clientes</span> Dizem
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Milhares de clientes satisfeitos em 4 países
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          {
            name: "Carlos Silva",
            location: "São Paulo, BR",
            text: "Finalmente um serviço de IPTV que não trava! Uso há 8 meses e estou muito satisfeito. O suporte é excelente.",
            rating: 5,
          },
          {
            name: "Maria Santos",
            location: "Lisboa, PT",
            text: "Moro em Portugal e consigo assistir todos os canais brasileiros. A qualidade é impressionante, parece TV a cabo.",
            rating: 5,
          },
          {
            name: "João Oliveira",
            location: "Toronto, CA",
            text: "O melhor custo-benefício que encontrei. Cancelei minha TV a cabo e economizo muito. Recomendo!",
            rating: 5,
          },
        ].map((testimonial, index) => (
          <div key={index} className="p-6 rounded-2xl glass-card">
            <div className="flex gap-1 mb-4">
              {Array(testimonial.rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
            </div>
            <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
            <div>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Pricing Preview Section
const PricingPreviewSection = () => (
  <section className="py-20 bg-secondary/30">
    <div className="container px-4">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Planos a Partir de <span className="text-gradient-primary">R$ 20,83/mês</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Escolha o plano ideal para você. Todos incluem teste grátis de 6 horas.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {[
          { name: "Mensal", price: "29,90", highlight: false },
          { name: "Trimestral", price: "89,90", highlight: true, badge: "Mais Vendido" },
          { name: "Anual", price: "249,90", highlight: false },
        ].map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl text-center min-w-[200px] ${
              plan.highlight
                ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary"
                : "glass-card"
            }`}
          >
            {plan.badge && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground mb-3">
                {plan.badge}
              </span>
            )}
            <h3 className="font-heading text-lg font-bold text-foreground">{plan.name}</h3>
            <p className="text-2xl font-heading font-bold text-foreground mt-2">
              R$ {plan.price}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/planos">
          <Button variant="whatsapp" size="lg">
            Ver Todos os Planos
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

// FAQ Preview Section
const FAQPreviewSection = () => (
  <section className="py-20">
    <div className="container px-4">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Perguntas <span className="text-gradient-primary">Frequentes</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {[
          {
            q: "O que é IPTV?",
            a: "IPTV é uma tecnologia que transmite TV pela internet. Você acessa canais ao vivo, filmes e séries através de um aplicativo.",
          },
          {
            q: "Preciso de internet muito rápida?",
            a: "Não! A partir de 10 Mbps você já consegue assistir em HD. Para 4K, recomendamos 25 Mbps.",
          },
          {
            q: "Em quantos dispositivos posso assistir?",
            a: "Todos os planos permitem até 3 conexões simultâneas em dispositivos diferentes.",
          },
        ].map((faq, index) => (
          <div key={index} className="p-5 rounded-xl glass-card">
            <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              {faq.q}
            </h3>
            <p className="text-muted-foreground text-sm pl-7">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/faq">
          <Button variant="outline" size="lg">
            Ver Todas as Perguntas
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

// Final CTA Section
const FinalCTASection = () => (
  <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
    <div className="container px-4 text-center">
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Pronto Para <span className="text-gradient-primary">Testar Grátis</span>?
      </h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
        Sem cartão de crédito, sem compromisso. Teste por 6 horas e descubra 
        a melhor experiência de streaming.
      </p>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <Button variant="whatsapp" size="xl" className="animate-pulse-glow">
          <MessageCircle className="w-5 h-5 mr-2" />
          COMEÇAR TESTE GRÁTIS
        </Button>
      </a>
      <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
        <span>✓ Ativação em 5 minutos</span>
        <span>✓ Suporte 24/7</span>
        <span>✓ Cancele quando quiser</span>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <>
      <Helmet>
        <title>IPTV Premium | Teste Grátis 6h - Canais, Filmes e Séries em 4K</title>
        <meta name="description" content="Teste IPTV grátis por 6 horas sem compromisso. +20.000 canais ao vivo, +80.000 filmes e séries em HD, Full HD e 4K. Sem travamentos. Suporte 24/7. Atendemos Brasil, EUA, Portugal e Canadá." />
        <meta name="keywords" content="IPTV, teste grátis IPTV, IPTV Brasil, IPTV Portugal, canais ao vivo, filmes online, séries online, streaming 4K, TV por internet" />
        <link rel="canonical" href="https://nova-stream-spot.lovable.app/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="IPTV Premium - Teste Grátis 6 Horas" />
        <meta property="og:description" content="Assista canais, filmes, séries e esportes com qualidade 4K sem travamentos. Teste grátis por 6 horas!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nova-stream-spot.lovable.app/" />
        <meta property="og:image" content="https://nova-stream-spot.lovable.app/og-image.jpg" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="pt_PT" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPTV Premium - Teste Grátis 6 Horas" />
        <meta name="twitter:description" content="Assista canais, filmes, séries e esportes com qualidade 4K sem travamentos." />

        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "IPTV Premium",
            "url": "https://nova-stream-spot.lovable.app",
            "description": "Serviço de IPTV premium com teste grátis de 6 horas",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://nova-stream-spot.lovable.app/blog?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "IPTV Premium",
            "url": "https://nova-stream-spot.lovable.app",
            "logo": "https://nova-stream-spot.lovable.app/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+55-11-91678-3168",
              "contactType": "customer service",
              "availableLanguage": ["Portuguese", "English"]
            },
            "sameAs": []
          })}
        </script>
      </Helmet>

      <Header />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <StatsSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <PricingPreviewSection />
        <FAQPreviewSection />
        <FinalCTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default Index;
