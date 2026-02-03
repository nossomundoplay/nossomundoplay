import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá! Quero saber mais sobre o IPTV!";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-[hsl(142_70%_45%)] to-[hsl(142_70%_55%)] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  );
};

export default FloatingWhatsApp;
