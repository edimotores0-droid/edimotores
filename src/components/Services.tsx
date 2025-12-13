import { 
  Wrench, 
  Gauge, 
  Settings, 
  Wind, 
  Droplets, 
  Car,
  Zap,
  CheckCircle,
  Camera
} from "lucide-react";
import mecanicaGeralImg from "@/assets/service-mecanica-geral.jpg";
import diagnosticoImg from "@/assets/service-diagnostico.jpg";
import revisaoImg from "@/assets/service-revisao.jpg";
import alinhamentoImg from "@/assets/service-alinhamento.jpg";
import freiosImg from "@/assets/service-freios.jpg";
import arCondicionadoImg from "@/assets/service-ar-condicionado.jpg";
import eletricaImg from "@/assets/service-eletrica.jpg";
import checkupImg from "@/assets/service-checkup.jpg";
import avaliacaoImg from "@/assets/service-avaliacao.jpg";

const services = [
  { icon: Wrench, title: "Mecânica Geral Completa", description: "Reparos e manutenções em todos os sistemas", image: mecanicaGeralImg },
  { icon: Gauge, title: "Diagnóstico Eletrônico", description: "Identificação precisa de problemas", image: diagnosticoImg },
  { icon: Settings, title: "Revisão Preventiva", description: "Manutenção programada completa", image: revisaoImg },
  { icon: Car, title: "Alinhamento e Balanceamento", description: "Geometria e suspensão ajustadas", image: alinhamentoImg },
  { icon: Droplets, title: "Sistema de Freios", description: "Segurança em primeiro lugar", image: freiosImg },
  { icon: Wind, title: "Ar-Condicionado", description: "Manutenção e recarga", image: arCondicionadoImg },
  { icon: Zap, title: "Elétrica Automotiva", description: "Diagnóstico e reparos elétricos", image: eletricaImg },
  { icon: CheckCircle, title: "Check-up Gratuito", description: "Primeira visita sem compromisso", image: checkupImg },
  { icon: Camera, title: "Avaliação Fotográfica", description: "Antes e depois documentado", image: avaliacaoImg },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Nossos Serviços
        </h2>
        <div className="h-1 w-24 bg-accent mx-auto mb-4"></div>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Atendemos carros nacionais e importados com equipamentos modernos e diagnóstico avançado
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300 border border-border group hover:border-accent overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent/90 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-primary/5 border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-foreground text-center">
            Serviços Adicionais Inclusos
          </h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">Troca de óleo e filtros</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">Sistema de arrefecimento</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">Câmbio automático (troca de fluido)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" />
              <span className="text-muted-foreground">Injeção eletrônica</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
