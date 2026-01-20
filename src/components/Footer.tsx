<<<<<<< HEAD
import { Phone, MessageSquare, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Edimotores</h3>
            <p className="text-primary-foreground/80">
              30 anos de experiência e confiança.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-primary-foreground/80 hover:text-accent transition-colors">Início</Link>
              <Link to="/servicos" className="block text-primary-foreground/80 hover:text-accent transition-colors">Serviços</Link>
              <Link to="/sobre" className="block text-primary-foreground/80 hover:text-accent transition-colors">Sobre</Link>
              <Link to="/contato" className="block text-primary-foreground/80 hover:text-accent transition-colors">Contato</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(21) 97061-1681</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Pilares, Rio de Janeiro - RJ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>© {currentYear} Edimotores. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======
import { Phone, MessageSquare, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Edimotores</h3>
            <p className="text-primary-foreground/80">
              30 anos de experiência e confiança.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-primary-foreground/80 hover:text-accent transition-colors">Início</Link>
              <Link to="/servicos" className="block text-primary-foreground/80 hover:text-accent transition-colors">Serviços</Link>
              <Link to="/sobre" className="block text-primary-foreground/80 hover:text-accent transition-colors">Sobre</Link>
              <Link to="/contato" className="block text-primary-foreground/80 hover:text-accent transition-colors">Contato</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>(21) 97061-1681</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Pilares, Rio de Janeiro - RJ</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>© {currentYear} Edimotores. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
>>>>>>> f9a692b6b20089f7db0b98fc82ebfffaaac78dc2
