import { Phone, MessageSquare, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Edimotors</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              30 anos de experiência, tecnologia e confiança ao seu lado.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contato</h4>
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

          <div>
            <h4 className="font-semibold mb-4 text-lg">Horário</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 13h</p>
              <p className="mt-4 text-accent font-semibold">
                Atendimento pelo WhatsApp 24/7
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>© {currentYear} Edimotors - Mecânica Edimilson. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
