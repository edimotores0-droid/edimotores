<<<<<<< HEAD
import whatsappLogo from "@/assets/whatsapp.png";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5521970611681?text=Olá! Vim através do site e gostaria de agendar um serviço.",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-20 w-20 bg-transparent p-0 border-none cursor-pointer hover:scale-110 transition-transform duration-300 animate-fade-in focus:outline-none"
    >
      <img 
        src={whatsappLogo} 
        alt="WhatsApp" 
        className="h-full w-full object-contain drop-shadow-2xl" 
      />
    </button>
  );
};

=======
import whatsappLogo from "@/assets/whatsapp.png";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5521970611681?text=Olá! Vim através do site e gostaria de agendar um serviço.",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-20 w-20 bg-transparent p-0 border-none cursor-pointer hover:scale-110 transition-transform duration-300 animate-fade-in focus:outline-none"
    >
      <img 
        src={whatsappLogo} 
        alt="WhatsApp" 
        className="h-full w-full object-contain drop-shadow-2xl" 
      />
    </button>
  );
};

>>>>>>> f9a692b6b20089f7db0b98fc82ebfffaaac78dc2
export default FloatingWhatsApp;