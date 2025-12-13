import { Award, Shield, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
            Quem Somos
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto mb-12"></div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              A <span className="text-foreground font-semibold">Mecânica Edimilson</span> nasce da experiência de mais de 30 anos de trabalho 
              contínuo na mesma oficina, atendendo milhares de clientes com serviços de alto padrão, 
              honestidade e cuidado extremo com cada veículo.
            </p>
            
            <p>
              Após décadas de dedicação, decidimos abrir nossa própria oficina para oferecer um 
              atendimento ainda melhor: <span className="text-foreground font-semibold">mais transparência, mais tecnologia e mais 
              compromisso</span> com cada cliente.
            </p>
            
            <p>
              Aqui, você fala diretamente com um mecânico chefe especializado, que explica cada 
              etapa do serviço, mostra as peças, apresenta o diagnóstico real e faz apenas o que 
              precisa ser feito — <span className="text-foreground font-semibold">nada além disso</span>.
            </p>

            <div className="bg-primary/5 border-l-4 border-accent p-6 rounded-r-lg mt-8">
              <p className="text-xl font-semibold text-foreground">
                Nosso compromisso é simples: qualidade, confiança e respeito ao seu bolso.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">30+</h3>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">1000+</h3>
              <p className="text-muted-foreground">Clientes Satisfeitos</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">100%</h3>
              <p className="text-muted-foreground">Transparência</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
