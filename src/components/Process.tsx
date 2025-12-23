import { MessageSquare, ClipboardCheck, FileText, Wrench, Camera, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Você agenda via WhatsApp",
    description: "Simples, rápido e sem complicação"
  },
  {
    icon: ClipboardCheck,
    title: "Check-up inicial gratuito",
    description: "Avaliação completa do seu veículo"
  },
  {
    icon: FileText,
    title: "Diagnóstico e orçamento",
    description: "Explicação detalhada e transparente"
  },
  {
    icon: Wrench,
    title: "Execução do serviço",
    description: "Realizado com técnica e cuidado"
  },
  {
    icon: Camera,
    title: "Acompanhamento fotográfico",
    description: "Fotos e vídeos do processo, se desejar"
  },
  {
    icon: CheckCircle,
    title: "Entrega com garantia",
    description: "Veículo revisado, limpo e garantido"
  }
];

const Process = () => {
  return (
    <section id="processo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          Como Funciona
        </h2>
        <div className="h-1 w-24 bg-accent mx-auto mb-4"></div>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
          Simples, direto e profissional
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl shadow-lg z-10">
                    {index + 1}
                  </div>
                  
                  {/* Card */}
                  <div className="bg-card p-6 pt-8 rounded-lg shadow-card border border-border h-full hover:shadow-hover transition-all duration-300">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
