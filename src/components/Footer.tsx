import { Tv, Shield, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  pages: [
    { label: "Home", href: "/" },
    { label: "Planos", href: "/planos" },
    { label: "Como Funciona", href: "/como-funciona" },
    { label: "FAQ", href: "/faq" },
  ],
  company: [
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ],
};

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border/50">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Tv className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading font-bold text-xl text-foreground">IPTV Premium</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              A melhor experiência de streaming com qualidade premium. Canais ao vivo, filmes e séries 
              em HD, Full HD e 4K. Atendemos Brasil, Estados Unidos, Portugal e Canadá.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Site Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>Dados Protegidos</span>
              </div>
            </div>
          </div>

          {/* Pages Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Navegação</h4>
            <ul className="space-y-2">
              {footerLinks.pages.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} IPTV Premium. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>🇧🇷 Brasil</span>
            <span>🇺🇸 EUA</span>
            <span>🇵🇹 Portugal</span>
            <span>🇨🇦 Canadá</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
