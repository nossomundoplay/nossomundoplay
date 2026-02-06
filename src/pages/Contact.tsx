import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Clock, MapPin, Send, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Resposta em até 5 minutos",
    action: "Iniciar Conversa",
    href: "https://wa.me/5511916783168?text=Olá! Gostaria de mais informações sobre o serviço de IPTV.",
    highlight: true,
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "suporte@iptvpremium.com",
    action: "Enviar E-mail",
    href: "mailto:suporte@iptvpremium.com",
    highlight: false,
  },
];

const supportHours = [
  { day: "Segunda a Sexta", hours: "24 horas" },
  { day: "Sábado", hours: "24 horas" },
  { day: "Domingo", hours: "24 horas" },
  { day: "Feriados", hours: "24 horas" },
];

const locations = [
  { flag: "🇧🇷", country: "Brasil", timezone: "GMT-3" },
  { flag: "🇺🇸", country: "Estados Unidos", timezone: "GMT-5" },
  { flag: "🇵🇹", country: "Portugal", timezone: "GMT+0" },
  { flag: "🇨🇦", country: "Canadá", timezone: "GMT-5" },
];

const Contact = () => {
  const whatsappLink = "https://wa.me/5511916783168?text=Olá! Gostaria de mais informações sobre o serviço de IPTV.";

  return (
    <Layout>
      <Helmet>
        <title>Contato | Fale Conosco - IPTV Premium</title>
        <meta name="description" content="Entre em contato com nossa equipe de suporte 24/7. Atendimento via WhatsApp com resposta em até 5 minutos. Estamos prontos para ajudar!" />
        <link rel="canonical" href="https://nova-stream-spot.lovable.app/contato" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Fale <span className="text-gradient-primary">Conosco</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você. Escolha o canal de sua preferência 
              e entraremos em contato rapidamente.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center p-8 rounded-2xl transition-all group ${
                  method.highlight
                    ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary shadow-glow"
                    : "glass-card hover:border-primary/50"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${
                    method.highlight ? "bg-primary/30" : "bg-primary/10"
                  } group-hover:scale-110 transition-transform`}
                >
                  <method.icon className="w-8 h-8 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground mb-2">{method.title}</h2>
                <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                <Button variant={method.highlight ? "whatsapp" : "outline"} size="sm">
                  {method.action}
                </Button>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
              Envie sua Mensagem
            </h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Nome</label>
                  <input
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">E-mail</label>
                  <input
                    type="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none text-foreground"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">WhatsApp</label>
                <input
                  type="tel"
                  placeholder="+55 (11) 99999-9999"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none text-foreground"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Assunto</label>
                <select className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none text-foreground">
                  <option value="">Selecione um assunto</option>
                  <option value="teste">Quero fazer o teste grátis</option>
                  <option value="suporte">Suporte técnico</option>
                  <option value="duvida">Dúvida sobre planos</option>
                  <option value="pagamento">Questões de pagamento</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Escreva sua mensagem aqui..."
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:outline-none text-foreground resize-none"
                />
              </div>
              <Button variant="whatsapp" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Support Hours & Locations */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Support Hours */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">Horário de Atendimento</h2>
              </div>
              <div className="glass-card rounded-xl p-6">
                <div className="space-y-4">
                  {supportHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="text-primary font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    ⚡ Tempo médio de resposta: <span className="text-primary font-medium">5 minutos</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-bold text-foreground">Países Atendidos</h2>
              </div>
              <div className="glass-card rounded-xl p-6">
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{location.flag}</span>
                        <span className="text-foreground">{location.country}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{location.timezone}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    🌍 Atendimento em <span className="text-primary font-medium">português</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16">
        <div className="container px-4 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Prefere Falar Agora?
          </h2>
          <p className="text-muted-foreground mb-6">
            Nossa equipe está online e pronta para atender você pelo WhatsApp
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" size="xl" className="animate-pulse-glow">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chamar no WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
