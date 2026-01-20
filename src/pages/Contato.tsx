import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, MapPin, Clock } from "lucide-react";

const Contato = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5521970611681?text=Olá! Vim pelo site e gostaria de agendar um serviço.",
      "_blank"
    );
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+5521970611681";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center">
              Contato
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Entre em contato ou venha nos visitar
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                className="text-lg px-10 py-8 h-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare className="mr-3 h-6 w-6" />
                Chamar no WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-10 py-8 h-auto font-bold"
                onClick={handlePhoneClick}
              >
                <Phone className="mr-3 h-6 w-6" />
                Ligar Agora
              </Button>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card p-8 rounded-xl border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Endereço</h3>
                <p className="text-muted-foreground">
                  Pilares, Rio de Janeiro - RJ
                </p>
              </div>

              <div className="bg-card p-8 rounded-xl border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">Horário</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 13h
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.356!2d-43.3!3d-22.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU0JzAwLjAiUyA0M8KwMTgnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Edimotores"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Contato;
