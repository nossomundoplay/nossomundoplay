import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, Star, Flame, Crown, Shield, Headphones, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";

const plans = [
  {
    name: "Mensal",
    price: "29,90",
    period: "/mês",
    description: "Ideal para testar o serviço",
    features: [
      "+20.000 canais ao vivo",
      "+80.000 filmes e séries",
      "Qualidade até 4K Ultra HD",
      "3 telas simultâneas",
      "Suporte 24/7 via WhatsApp",
      "Sem fidelidade ou multas",
      "Guia de programação (EPG)",
      "Atualizações automáticas",
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
    originalPrice: "R$ 89,70",
    description: "Mais escolhido pelos clientes",
    features: [
      "Tudo do plano mensal",
      "Economia de 25%",
      "Prioridade no suporte técnico",
      "Lista personalizada de canais",
      "Atualizações VIP antecipadas",
      "Backup automático de configurações",
      "Acesso a conteúdo exclusivo",
      "Instalação remota gratuita",
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
    originalPrice: "R$ 358,80",
    description: "Melhor custo-benefício",
    features: [
      "Tudo do trimestral",
      "Economia de 48%",
      "Suporte prioritário VIP",
      "2 meses grátis inclusos",
      "Acesso beta a novidades",
      "Garantia estendida de qualidade",
      "Multi-idiomas disponíveis",
      "Configuração em múltiplos dispositivos",
    ],
    popular: false,
    icon: Crown,
    badge: "MELHOR OFERTA",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Garantia de 7 Dias",
    description: "Se não gostar, devolvemos seu dinheiro sem burocracia",
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Equipe técnica sempre disponível para ajudar",
  },
  {
    icon: Zap,
    title: "Ativação Imediata",
    description: "Seu acesso é liberado em poucos minutos após o pagamento",
  },
];

const Plans = () => {
  const whatsappLink = "https://wa.me/5511916783168?text=Olá! 🎬 Quero assinar o plano ";

  return (
    <Layout>
      <Helmet>
        <title>Planos IPTV Premium | Preços e Assinaturas - Teste Grátis 6h</title>
        <meta name="description" content="Confira nossos planos de IPTV com preços a partir de R$20,83/mês. Canais ao vivo, filmes e séries em 4K. Teste grátis por 6 horas. Sem fidelidade." />
        <link rel="canonical" href="https://nova-stream-spot.lovable.app/planos" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Escolha o <span className="text-gradient-primary">Plano Ideal</span> Para Você
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Assine com segurança e comece a assistir em minutos. 
              Todos os planos incluem teste grátis de 6 horas.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
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
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                      plan.popular
                        ? "bg-gradient-to-r from-[hsl(142_70%_45%)] to-[hsl(142_70%_55%)] text-white"
                        : "bg-gradient-to-r from-[hsl(45_100%_50%)] to-[hsl(45_100%_65%)] text-[hsl(222_47%_6%)]"
                    }`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div className="text-center mb-6">
                  <div
                    className={`w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4 ${
                      plan.popular ? "bg-primary/30" : "bg-primary/10"
                    }`}
                  >
                    <plan.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-foreground">{plan.name}</h2>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <div className="text-center mb-6">
                  {plan.originalPrice && (
                    <p className="text-sm text-muted-foreground line-through">{plan.originalPrice}</p>
                  )}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold text-muted-foreground">R$</span>
                    <span className="text-5xl font-heading font-bold text-foreground">{plan.price}</span>
                  </div>
                  <span className="text-muted-foreground">{plan.period}</span>
                  {plan.pricePerMonth && (
                    <p className="text-sm text-primary mt-1 font-medium">{plan.pricePerMonth}</p>
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
                  <Button variant={plan.popular ? "whatsapp" : "outline"} size="lg" className="w-full">
                    Assinar Agora
                  </Button>
                </a>
              </div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {guarantees.map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-secondary/30">
        <div className="container px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Formas de Pagamento
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Aceitamos diversas formas de pagamento para sua comodidade
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💳</span>
              <span>Cartão de Crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📱</span>
              <span>PIX (com desconto)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📄</span>
              <span>Boleto Bancário</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Plans;
