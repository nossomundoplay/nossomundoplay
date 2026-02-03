import { Button } from "@/components/ui/button";
import { Play, Zap, Tv, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  const whatsappLink = "https://wa.me/5511916783168?text=Olá! 🎬 Quero Conhecer as Opções de Testes de 6h.";
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }} />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-10" />
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/20 rounded-full blur-[150px] z-10" />

      <div className="container relative z-20 px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6 animate-pulse">
            
            <span className="text-sm font-medium text-primary">Oferta por tempo limitado</span>
          </div>

          {/* Main Title */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">TESTE IPTV</span>
            <br />
            <span className="text-gradient-primary">GRÁTIS 6H</span>
            <br />
            <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">SEM COMPROMISSO</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Assista canais, filmes, séries e esportes com qualidade 
            <span className="text-foreground font-semibold"> HD, Full HD e 4K</span> sem travamentos.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
            {[{
            icon: Tv,
            text: "+20.000 Canais"
          }, {
            icon: Play,
            text: "+80.000 Filmes e Séries"
          }, {
            icon: Zap,
            text: "Sem Travamentos"
          }, {
            icon: Shield,
            text: "100% Seguro"
          }].map((benefit, index) => <div key={index} className="flex items-center gap-2 text-sm md:text-base">
                <benefit.icon className="w-5 h-5 text-primary" />
                <span className="text-foreground">{benefit.text}</span>
              </div>)}
          </div>

          {/* CTA Button */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="xl" className="animate-pulse-glow group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              QUERO TESTAR AGORA
            </Button>
          </a>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>✓ Sem cartão de crédito</span>
            <span>✓ Ativação imediata</span>
            <span>✓ Suporte 24/7</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;