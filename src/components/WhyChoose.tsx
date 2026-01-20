<<<<<<< HEAD
import { Award, Eye, Zap, Clock, Heart, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "30 anos de experiência prática",
    description: "Atendimento direto com um mecânico chefe que vive o dia a dia da oficina há décadas."
  },
  {
    icon: Eye,
    title: "Transparência total",
    description: "Mostramos peças, explicamos diagnósticos, enviamos fotos e relatórios no WhatsApp."
  },
  {
    icon: Zap,
    title: "Equipamentos modernos",
    description: "Diagnóstico eletrônico preciso e serviços realizados com ferramentas profissionais."
  },
  {
    icon: Clock,
    title: "Agilidade na execução",
    description: "Muitos serviços são concluídos no mesmo dia, sem enrolação."
  },
  {
    icon: Heart,
    title: "Atendimento personalizado",
    description: "Aqui, cada cliente é tratado como parceria de longo prazo."
  },
  {
    icon: DollarSign,
    title: "Honestidade acima de tudo",
    description: "Só fazemos o necessário. Nada de extras ou surpresas na conta."
  }
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Por que escolher a Edimotores?
        </h2>
        <div className="h-1 w-24 bg-accent mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-card hover:shadow-hover transition-all duration-300 border border-border"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
=======
import { Award, Eye, Zap, Clock, Heart, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "30 anos de experiência prática",
    description: "Atendimento direto com um mecânico chefe que vive o dia a dia da oficina há décadas."
  },
  {
    icon: Eye,
    title: "Transparência total",
    description: "Mostramos peças, explicamos diagnósticos, enviamos fotos e relatórios no WhatsApp."
  },
  {
    icon: Zap,
    title: "Equipamentos modernos",
    description: "Diagnóstico eletrônico preciso e serviços realizados com ferramentas profissionais."
  },
  {
    icon: Clock,
    title: "Agilidade na execução",
    description: "Muitos serviços são concluídos no mesmo dia, sem enrolação."
  },
  {
    icon: Heart,
    title: "Atendimento personalizado",
    description: "Aqui, cada cliente é tratado como parceria de longo prazo."
  },
  {
    icon: DollarSign,
    title: "Honestidade acima de tudo",
    description: "Só fazemos o necessário. Nada de extras ou surpresas na conta."
  }
];

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Por que escolher a Edimotores?
        </h2>
        <div className="h-1 w-24 bg-accent mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-card hover:shadow-hover transition-all duration-300 border border-border"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
>>>>>>> f9a692b6b20089f7db0b98fc82ebfffaaac78dc2
