import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { MessageSquare, Award, Eye, Heart, Wrench } from "lucide-react";

const Sobre = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5521970611681?text=Olá! Gostaria de conhecer melhor a oficina.",
      "_blank"
    );
  };

  const values = [
    { icon: Award, title: "Experiência", description: "Mais de 30 anos no ramo automotivo" },
    { icon: Eye, title: "Transparência", description: "Explicamos tudo antes de fazer" },
    { icon: Heart, title: "Honestidade", description: "Só fazemos o necessário" },
    { icon: Wrench, title: "Qualidade", description: "Equipamentos modernos e profissionais" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-center">
              Sobre a Edimotores
            </h1>
            
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border mb-12">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A <strong className="text-foreground">Edimotores</strong> nasceu da experiência de mais de 
                <strong className="text-accent"> 30 anos</strong> de trabalho contínuo no ramo automotivo. 
                São três décadas atendendo milhares de clientes com serviços de alto padrão, 
                honestidade e cuidado extremo com cada veículo.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Aqui, você fala diretamente com o <strong className="text-foreground">mecânico responsável</strong>, 
                que explica cada etapa do serviço, mostra as peças, apresenta o diagnóstico real 
                e faz apenas o que precisa ser feito — nada além disso.
              </p>

              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg">
                <p className="text-foreground font-medium text-lg">
                  "Nosso compromisso é simples: qualidade, confiança e respeito ao seu bolso."
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-8 text-foreground text-center">
              Nossos Valores
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                Venha conhecer nossa oficina!
              </p>
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold"
                onClick={handleWhatsAppClick}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Falar pelo WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Sobre;
