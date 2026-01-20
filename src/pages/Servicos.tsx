import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { MessageSquare, Wrench, Gauge, Settings, Droplets, Wind, Zap, Car, CheckCircle, Camera, Thermometer, Star } from "lucide-react";

// Service images
import serviceMotor from "@/assets/service-motor_1.png";
import serviceSuspensao from "@/assets/service-suspensao.jpg";
import servicePneu from "@/assets/service-pneu.jpg";
import serviceBalanceamento from "@/assets/service-balanceamento.jpg";
import serviceAlinhamento from "@/assets/service-alinhamento-destaque.png";

const services = [
  { 
    icon: Car, 
    title: "Alinhamento e Balanceamento", 
    description: "Nossa especialidade! Geometria e suspensão ajustadas com equipamentos de última geração para dirigibilidade perfeita.",
    image: serviceAlinhamento,
    featured: true
  },
  { 
    icon: Wrench, 
    title: "Mecânica Geral", 
    description: "Reparos completos em motor, câmbio, embreagem e demais sistemas mecânicos.",
    image: serviceMotor,
    featured: false
  },
  { 
    icon: Settings, 
    title: "Suspensão", 
    description: "Amortecedores, molas, pivôs, bandejas e todo sistema de suspensão.",
    image: serviceSuspensao,
    featured: false
  },
  { 
    icon: Gauge, 
    title: "Diagnóstico Eletrônico", 
    description: "Identificação precisa de problemas com scanner profissional.",
    image: serviceBalanceamento,
    featured: false
  },
  { 
    icon: Droplets, 
    title: "Freios", 
    description: "Pastilhas, discos, fluido e todo sistema de frenagem.",
    image: servicePneu,
    featured: false
  },
  { 
    icon: Wind, 
    title: "Ar-Condicionado", 
    description: "Manutenção, recarga de gás e higienização.",
    image: null,
    featured: false
  },
  { 
    icon: Thermometer, 
    title: "Arrefecimento", 
    description: "Radiador, bomba d'água, mangueiras e termostato.",
    image: null,
    featured: false
  },
  { 
    icon: Zap, 
    title: "Elétrica Automotiva", 
    description: "Bateria, alternador, motor de partida e sistema elétrico.",
    image: null,
    featured: false
  },
];

const additionalServices = [
  { icon: CheckCircle, title: "Check-up Gratuito", description: "Avaliação completa na primeira visita" },
  { icon: Camera, title: "Relatório Fotográfico", description: "Fotos do antes e depois pelo WhatsApp" },
];

const Servicos = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5521970611681?text=Olá! Gostaria de saber mais sobre os serviços.",
      "_blank"
    );
  };

  const featuredService = services.find(s => s.featured);
  const otherServices = services.filter(s => !s.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Nossos Serviços
            </h1>
            <p className="text-xl text-muted-foreground">
              Atendemos carros nacionais e importados com equipamentos modernos e diagnóstico preciso.
            </p>
          </div>

          {/* Featured Service - Alinhamento */}
          {featuredService && (
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 border-2 border-accent rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    {featuredService.image && (
                      <img 
                        src={featuredService.image} 
                        alt={featuredService.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      Especialidade
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                      <featuredService.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      {featuredService.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      {featuredService.description}
                    </p>
                    <Button 
                      size="lg" 
                      className="w-fit bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                      onClick={handleWhatsAppClick}
                    >
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Agendar Alinhamento
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {otherServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl border border-border overflow-hidden hover:border-accent/50 hover:shadow-lg transition-all"
                >
                  {service.image ? (
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="h-40 bg-muted flex items-center justify-center">
                      <Icon className="w-16 h-16 text-muted-foreground/30" />
                    </div>
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Services */}
          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
              Serviços Adicionais Inclusos
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {additionalServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-secondary/10 p-5 rounded-xl flex items-start gap-4"
                  >
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{service.title}</h4>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-primary rounded-2xl p-10 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Precisa de um serviço?
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              Entre em contato e agende seu horário!
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold"
              onClick={handleWhatsAppClick}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Agendar pelo WhatsApp
            </Button>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Servicos;
