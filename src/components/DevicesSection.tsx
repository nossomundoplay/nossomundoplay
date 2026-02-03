import { Smartphone, Tablet, Monitor, Tv, Laptop, Gamepad2 } from "lucide-react";

const devices = [
  { icon: Smartphone, name: "Celular", description: "Android e iOS" },
  { icon: Tablet, name: "Tablet", description: "Todos os modelos" },
  { icon: Monitor, name: "Smart TV", description: "Samsung, LG, etc" },
  { icon: Tv, name: "TV Box", description: "Qualquer modelo" },
  { icon: Laptop, name: "Computador", description: "Windows e Mac" },
  { icon: Gamepad2, name: "Fire Stick", description: "Amazon Fire TV" },
];

const DevicesSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Compatível com <span className="text-gradient-primary">Todos</span> Dispositivos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Assista onde e quando quiser. Sem limites.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {devices.map((device, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/50 hover:-translate-y-2 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <device.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{device.name}</h3>
              <p className="text-xs text-muted-foreground">{device.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevicesSection;
