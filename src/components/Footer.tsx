import { Tv, Shield, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border/50">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Tv className="w-5 h-5 text-primary" />
            </div>
            <span className="font-heading font-bold text-xl text-foreground">IPTV Premium</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Site Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4" />
              <span>Dados Protegidos</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} IPTV Premium. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
