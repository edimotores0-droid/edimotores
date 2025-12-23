import { Button } from "@/components/ui/button";
import { MapPin, Phone, MessageSquare, Clock } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5521970611681";
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento.";
  
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    );
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:+${whatsappNumber}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Entre em Contato
        </h2>
        <div className="h-1 w-24 bg-accent mx-auto mb-16"></div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Localização</h3>
                    <p className="text-muted-foreground">
                      Bairro Pilares<br />
                      Rio de Janeiro - RJ<br />
                      Brasil
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                    <p className="text-muted-foreground">
                      (21) 97061-1681
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Horário</h3>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 13h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-primary p-8 rounded-lg shadow-hover flex flex-col justify-center items-center text-center">
              <MessageSquare className="w-16 h-16 text-primary-foreground mb-6" />
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Agende seu serviço agora!
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Atendimento rápido pelo WhatsApp. Receba seu orçamento sem compromisso.
              </p>
              <div className="space-y-3 w-full">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={handleWhatsAppClick}
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chamar no WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20"
                  onClick={handlePhoneClick}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Ligar Agora
                </Button>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-card rounded-lg shadow-card border border-border overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58811.17784890399!2d-43.32867299999999!3d-22.8782015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997c3b7c6e6d5f%3A0x7d7d7f5f5f5f5f5f!2sPilares%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Edimotores"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
