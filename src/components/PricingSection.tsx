import { Button } from "@/components/ui/button";
import { Check, Star, Flame, Crown } from "lucide-react";

const plans = [
  {
    name: "Mensal",
    price: "39,90",
    period: "/mês",
    description: "Ideal para testar",
    features: [
      "+20.000 canais ao vivo",
      "+80.000 filmes e séries",
      "Qualidade até 4K",
      "3 telas simultâneas",
      "Suporte 24/7",
      "Sem fidelidade",
    ],
    popular: false,
    icon: Star,
    badge: null,
  },
  {
    name: "Trimestral",
    price: "89,90",
    period: "/trimestre",
    pricePerMonth: "R$ 29,97/mês",
    description: "Mais escolhido",
    features: [
      "Tudo do plano mensal",
      "25% de economia",
      "Prioridade no suporte",
      "Lista personalizada",
      "Atualizações VIP",
      "Backup automático",
    ],
    popular: true,
    icon: Flame,
    badge: "MAIS VENDIDO",
  },
  {
    name: "Anual",
    price: "249,90",
    period: "/ano",
    pricePerMonth: "R$ 20,83/mês",
    description: "Melhor custo-benefício",
    features: [
      "Tudo do trimestral",
      "48% de economia",
      "Suporte prioritário VIP",
      "2 meses grátis",
      "Acesso beta features",
      "Garantia estendida",
    ],
    popular: false,
    icon: Crown,
    badge: "MELHOR OFERTA",
  },
];

const PricingSection = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Quero assinar o plano ";

  return (
    <section id="planos" className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Escolha Seu <span className="text-gradient-primary">Plano</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Preços imbatíveis com a melhor qualidade do mercado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-8 transition-all ${
                plan.popular 
                  ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary scale-105 shadow-glow" 
                  : "glass-card hover:border-primary/50"
              }`}
            >
              {plan.badge && (
                <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                  plan.popular 
                    ? "bg-gradient-to-r from-[hsl(142_70%_45%)] to-[hsl(142_70%_55%)] text-white" 
                    : "bg-gradient-to-r from-[hsl(45_100%_50%)] to-[hsl(45_100%_65%)] text-[hsl(222_47%_6%)]"
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                  plan.popular ? "bg-primary/30" : "bg-primary/10"
                }`}>
                  <plan.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-bold text-muted-foreground">R$</span>
                  <span className="text-5xl font-heading font-bold text-foreground">{plan.price}</span>
                </div>
                <span className="text-muted-foreground">{plan.period}</span>
                {plan.pricePerMonth && (
                  <p className="text-sm text-primary mt-1">{plan.pricePerMonth}</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href={`${whatsappLink}${plan.name}`} target="_blank" rel="noopener noreferrer" className="block">
                <Button 
                  variant={plan.popular ? "whatsapp" : "outline"} 
                  size="lg" 
                  className="w-full"
                >
                  Assinar Agora
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
