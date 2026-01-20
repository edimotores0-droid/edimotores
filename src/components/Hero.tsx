<<<<<<< HEAD
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Play } from "lucide-react";
import heroImage from "@/assets/mechanic-hero.png";
import videoThumbnail from "@/assets/hero-video-thumbnail.jpg";
import carLogo from "@/assets/car-logo.png";

const Hero = () => {
  const whatsappNumber = "5521970611681";
  const whatsappMessage = "Olá! Gostaria de agendar um serviço na Edimotores.";
  
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mecânico Edimotores"
          className="w-full h-full object-cover object-[center_15%] md:object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/98 via-primary/95 to-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl text-primary-foreground/90 font-light">
              30 anos de experiência, tecnologia e confiança ao seu lado
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Manutenção completa, diagnóstico preciso e atendimento transparente. 
              Seu carro nas mãos de um especialista com três décadas de tradição.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-6">
              <Button 
                variant="default" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-hover font-bold"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare className="mr-2 h-6 w-6" />
                Agendar pelo WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-secondary/20 hover:border-secondary"
                onClick={handlePhoneClick}
              >
                <Phone className="mr-2 h-6 w-6" />
                (21) 97061-1681
              </Button>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src={videoThumbnail} 
                alt="Vídeo da Mecânica Edimilson"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                  <Play className="w-10 h-10 text-secondary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            <p className="text-center text-primary-foreground/70 mt-4 text-sm">
              Clique para conhecer nossa oficina
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
=======
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Play } from "lucide-react";
import heroImage from "@/assets/mechanic-hero.png";
import videoThumbnail from "@/assets/hero-video-thumbnail.jpg";
import carLogo from "@/assets/car-logo.png";

const Hero = () => {
  const whatsappNumber = "5521970611681";
  const whatsappMessage = "Olá! Gostaria de agendar um serviço na Edimotores.";
  
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mecânico Edimotores"
          className="w-full h-full object-cover object-[center_15%] md:object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/98 via-primary/95 to-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl text-primary-foreground/90 font-light">
              30 anos de experiência, tecnologia e confiança ao seu lado
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80">
              Manutenção completa, diagnóstico preciso e atendimento transparente. 
              Seu carro nas mãos de um especialista com três décadas de tradição.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-6">
              <Button 
                variant="default" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-hover font-bold"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare className="mr-2 h-6 w-6" />
                Agendar pelo WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-secondary/20 hover:border-secondary"
                onClick={handlePhoneClick}
              >
                <Phone className="mr-2 h-6 w-6" />
                (21) 97061-1681
              </Button>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src={videoThumbnail} 
                alt="Vídeo da Mecânica Edimilson"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                  <Play className="w-10 h-10 text-secondary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            <p className="text-center text-primary-foreground/70 mt-4 text-sm">
              Clique para conhecer nossa oficina
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
>>>>>>> f9a692b6b20089f7db0b98fc82ebfffaaac78dc2
