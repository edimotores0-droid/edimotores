import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5521970611681?text=Olá! Vim através do site e gostaria de agendar um serviço.",
      "_blank"
    );
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-hover bg-[#25D366] hover:bg-[#20BD5A] text-white p-0 animate-fade-in"
      size="icon"
    >
      <MessageSquare className="h-6 w-6" />
    </Button>
  );
};

export default FloatingWhatsApp;
