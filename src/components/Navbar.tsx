import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import carLogo from "@/assets/car-logo-transparent.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5521970611681?text=Olá! Vim através do site e gostaria de agendar um serviço.",
      "_blank"
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-sm shadow-lg"
          : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img src={carLogo} alt="Logo Edimotors" className="h-10 w-10" />
              <span className="text-2xl font-bold text-primary-foreground">
                Edimotors
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 text-primary-foreground hover:text-accent transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 text-primary-foreground hover:text-accent transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("why-choose")}
              className="px-4 py-2 text-primary-foreground hover:text-accent transition-colors font-medium"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="px-4 py-2 text-primary-foreground hover:text-accent transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 text-primary-foreground hover:text-accent transition-colors font-medium"
            >
              Contato
            </button>
          </div>

          {/* Contact Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-accent/90 text-accent-foreground border-0"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = "tel:+5521970611681"}
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
            >
              <Phone className="w-4 h-4 mr-2" />
              Ligar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="px-4 py-2 text-left text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-4 py-2 text-left text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("why-choose")}
                className="px-4 py-2 text-left text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                Diferenciais
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="px-4 py-2 text-left text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-4 py-2 text-left text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                Contato
              </button>
              <div className="pt-2 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleWhatsAppClick}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground border-0"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.location.href = "tel:+5521970611681"}
                  className="w-full bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Ligar Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
