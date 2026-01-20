import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Wrench, Gauge, Settings, Droplets, MapPin, Clock, Award, Eye, DollarSign, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/mechanic-hero.png";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5521970611681?text=Olá! Gostaria de agendar um serviço.",
      "_blank"
    );
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+5521970611681";
  };

  const services = [
    { icon: Settings, title: "Alinhamento", featured: true },
    { icon: Wrench, title: "Mecânica Geral", featured: false },
    { icon: Gauge, title: "Diagnóstico", featured: false },
    { icon: Droplets, title: "Freios e Suspensão", featured: false },
  ];

  const trustPoints = [
    { icon: Award, title: "30+ anos de experiência", description: "Três décadas de trabalho e confiança" },
    { icon: Eye, title: "Transparência total", description: "Mostramos tudo antes de fazer" },
    { icon: DollarSign, title: "Preço justo", description: "Só fazemos o que precisa" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Mecânico Edimotores"
            className="w-full h-full object-cover object-[center_15%] md:object-[center_25%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/98 via-primary/95 to-primary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
              Mecânica de confiança há mais de 30 anos
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Diagnóstico preciso, atendimento transparente e preço justo. Seu carro em boas mãos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Agendar pelo WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10"
                onClick={handlePhoneClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                (21) 97061-1681
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Principais Serviços
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl text-center border transition-colors ${
                    service.featured 
                      ? 'bg-accent/10 border-accent' 
                      : 'bg-card border-border hover:border-accent/50'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    service.featured ? 'bg-accent' : 'bg-accent/10'
                  }`}>
                    <Icon className={`w-7 h-7 ${service.featured ? 'text-accent-foreground' : 'text-accent'}`} />
                  </div>
                  <h3 className="font-semibold text-foreground">{service.title}</h3>
                  {service.featured && (
                    <span className="text-xs text-accent font-medium mt-1 block">★ Especialidade</span>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/servicos">
              <Button variant="outline" className="group">
                Ver todos os serviços
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Por que confiar na Edimotores?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Section with Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Localização
            </h2>
            <p className="text-xl text-muted-foreground mb-2">Pilares, Rio de Janeiro - RJ</p>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              Seg-Sex: 8h às 18h | Sáb: 8h às 13h
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.123456!2d-43.305!3d-22.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDUyJzQ4LjAiUyA0M8KwMTgnMTguMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Edimotores"
              className="w-full"
            />
          </div>

          <div className="text-center mt-8">
            <Link to="/contato">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <MapPin className="mr-2 h-5 w-5" />
                Ver endereço completo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-primary-foreground">
              Fale conosco agora
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 h-auto bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10"
                onClick={handlePhoneClick}
              >
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
