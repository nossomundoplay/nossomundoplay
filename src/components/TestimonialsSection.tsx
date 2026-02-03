import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "Incrível! Nunca mais tive travamentos. Assisto jogos ao vivo sem problemas. Melhor investimento que fiz!",
    avatar: "CS",
  },
  {
    name: "Ana Paula Santos",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Cancelei minha TV a cabo que pagava R$300. Agora pago muito menos e tenho muito mais conteúdo. Recomendo!",
    avatar: "AP",
  },
  {
    name: "Roberto Oliveira",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "O suporte é excepcional! Tive uma dúvida às 2h da manhã e me responderam em 5 minutos. Nota 10!",
    avatar: "RO",
  },
  {
    name: "Juliana Costa",
    location: "Curitiba, PR",
    rating: 5,
    text: "Testei por 6 horas e já assinei o plano anual. A qualidade 4K é impressionante, parece cinema!",
    avatar: "JC",
  },
  {
    name: "Fernando Mendes",
    location: "Salvador, BA",
    rating: 5,
    text: "Uso há 8 meses sem nenhum problema. Toda a família assiste ao mesmo tempo em dispositivos diferentes.",
    avatar: "FM",
  },
  {
    name: "Patrícia Lima",
    location: "Fortaleza, CE",
    rating: 5,
    text: "Finalmente encontrei um serviço confiável! As séries são atualizadas muito rápido. Estou apaixonada!",
    avatar: "PL",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            O Que Nossos <span className="text-gradient-primary">Clientes</span> Dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mais de 47.000 clientes satisfeitos em todo o Brasil
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[hsl(45_100%_60%)] text-[hsl(45_100%_60%)]" />
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
