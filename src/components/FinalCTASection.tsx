import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Clock, Users } from "lucide-react";
import { useEffect, useState } from "react";

const FinalCTASection = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Quero saber mais sobre o IPTV!";
  
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 33,
  });

  const [viewersCount, setViewersCount] = useState(127);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 2;
              minutes = 59;
              seconds = 59;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewersCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_hsl(142_70%_45%_/_0.15)_0%,_transparent_50%)]" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Counter */}
          <div className="glass-card inline-flex items-center gap-4 px-6 py-3 rounded-full mb-8">
            <Clock className="w-5 h-5 text-destructive animate-pulse" />
            <span className="text-foreground font-medium">Oferta expira em:</span>
            <div className="flex gap-2">
              <div className="bg-destructive/20 px-3 py-1 rounded-lg">
                <span className="font-heading font-bold text-destructive">{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
              <span className="text-destructive font-bold">:</span>
              <div className="bg-destructive/20 px-3 py-1 rounded-lg">
                <span className="font-heading font-bold text-destructive">{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
              <span className="text-destructive font-bold">:</span>
              <div className="bg-destructive/20 px-3 py-1 rounded-lg">
                <span className="font-heading font-bold text-destructive">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Não Perca Mais <span className="text-gradient-primary">Tempo</span>
            <br />
            <span className="text-foreground">Comece a Assistir Agora!</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Clique no botão abaixo e fale conosco pelo WhatsApp. 
            Atendimento imediato, sem robôs!
          </p>

          {/* Live Viewers */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground">
              <strong className="text-foreground">{viewersCount}</strong> pessoas visualizando agora
            </span>
          </div>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="xl" className="animate-pulse-glow text-lg px-12 mb-4">
              <MessageCircle className="w-6 h-6 mr-2" />
              FALAR NO WHATSAPP
            </Button>
          </a>

          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Atendimento 24 horas • Resposta em até 5 minutos
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
