import { Tv, Film, Clapperboard, Trophy, Music, Baby, Globe, Radio } from "lucide-react";

const contentCategories = [
  {
    icon: Tv,
    title: "Canais ao Vivo",
    items: ["Globo, SBT, Record, Band", "Canais de Notícias", "Documentários", "Variedades"],
    count: "20.000+",
  },
  {
    icon: Film,
    title: "Filmes",
    items: ["Lançamentos 2024", "Clássicos", "Ação e Aventura", "Comédia"],
    count: "50.000+",
  },
  {
    icon: Clapperboard,
    title: "Séries",
    items: ["Netflix Originals", "HBO Max", "Amazon Prime", "Disney+"],
    count: "30.000+",
  },
  {
    icon: Trophy,
    title: "Esportes",
    items: ["Futebol ao Vivo", "UFC e Lutas", "NBA e Basquete", "Fórmula 1"],
    count: "500+",
  },
  {
    icon: Baby,
    title: "Infantil",
    items: ["Discovery Kids", "Cartoon Network", "Nick Jr", "Disney Channel"],
    count: "1.000+",
  },
  {
    icon: Music,
    title: "Música",
    items: ["MTV", "VH1", "Multishow", "Shows ao Vivo"],
    count: "200+",
  },
  {
    icon: Globe,
    title: "Internacionais",
    items: ["Canais USA", "Europa", "Portugal", "América Latina"],
    count: "5.000+",
  },
  {
    icon: Radio,
    title: "Adulto (+18)",
    items: ["Canais Premium", "Acesso Bloqueado", "Controle Parental", "Senha Individual"],
    count: "200+",
  },
];

const ContentSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tudo que Você <span className="text-gradient-primary">Quer Assistir</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O maior catálogo de conteúdo do Brasil. Atualizações diárias.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {contentCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition-all group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-2xl font-heading font-bold text-primary">{category.count}</span>
              </div>
              
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{category.title}</h3>
              
              <ul className="space-y-2">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
