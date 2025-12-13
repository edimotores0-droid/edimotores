import { Phone, MessageSquare, Clock } from "lucide-react";

const ContactBar = () => {
  return (
    <div className="bg-accent text-accent-foreground py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="font-semibold">Fixo:</span>
            <a href="tel:+5521970611681" className="hover:underline">
              (21) 97061-1681
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            <span className="font-semibold">WhatsApp 24/7:</span>
            <a
              href="https://wa.me/5521970611681"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              (21) 97061-1681
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="font-semibold">Seg-Sáb:</span>
            <span>8h às 18h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
