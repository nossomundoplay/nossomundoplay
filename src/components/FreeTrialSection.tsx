import { Button } from "@/components/ui/button";
import { Play, Clock, Shield, Zap } from "lucide-react";

const FreeTrialSection = () => {
  const whatsappLink = "https://wa.me/5511916783168?text=Olá! 🎬 Quero Conhecer as Opções de Testes de 6h.";

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(142_70%_45%_/_0.1)_0%,_transparent_70%)]" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Teste 100% Gratuito</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ainda com <span className="text-gradient-primary">Dúvidas</span>?
            <br />
            <span className="text-foreground">Teste Grátis por 6 Horas!</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experimente todo o nosso catálogo sem pagar nada. 
            Sem cartão de crédito, sem compromisso. Você só assina se gostar!
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-foreground">Sem cartão</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-foreground">Ativação imediata</span>
            </div>
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5 text-primary" />
              <span className="text-foreground">Acesso completo</span>
            </div>
          </div>

          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="xl" className="animate-pulse-glow text-lg px-12">
              <Play className="w-6 h-6 mr-2" />
              QUERO MEU TESTE GRÁTIS
            </Button>
          </a>

          <p className="mt-6 text-sm text-muted-foreground">
            Mais de 1.000 testes ativados hoje • Vagas limitadas
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeTrialSection;
