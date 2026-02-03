import { XCircle, ArrowRight, CheckCircle } from "lucide-react";

const painPoints = [
  {
    problem: "Travamentos constantes",
    solution: "Servidores premium anti-travamento",
  },
  {
    problem: "Preços abusivos de TV por assinatura",
    solution: "Planos a partir de R$25/mês",
  },
  {
    problem: "Conteúdo limitado e repetitivo",
    solution: "+80.000 opções sempre atualizadas",
  },
  {
    problem: "Qualidade de imagem ruim",
    solution: "HD, Full HD e 4K disponíveis",
  },
  {
    problem: "Esportes só em pacotes caros",
    solution: "Todos os canais de esportes inclusos",
  },
  {
    problem: "Contratos longos e multas",
    solution: "Sem fidelidade, cancele quando quiser",
  },
];

const PainPointsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Cansado de <span className="text-destructive">Problemas</span> com sua TV?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nós entendemos sua frustração. Veja como resolvemos cada um deles:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {painPoints.map((item, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <p className="text-muted-foreground line-through">{item.problem}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-center my-3">
                <ArrowRight className="w-5 h-5 text-primary animate-pulse" />
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">{item.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
