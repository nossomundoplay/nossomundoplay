import { useEffect, useState } from "react";
import { Users, Tv, Film, Trophy } from "lucide-react";

const stats = [
  { icon: Users, value: 47852, label: "Clientes Ativos", suffix: "+" },
  { icon: Tv, value: 20000, label: "Canais ao Vivo", suffix: "+" },
  { icon: Film, value: 80000, label: "Filmes e Séries", suffix: "+" },
  { icon: Trophy, value: 99, label: "Satisfação", suffix: "%" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString('pt-BR')}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-secondary/50 border-y border-border/50">
      <div className="container px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
