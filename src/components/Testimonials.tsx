import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Silva",
    text: "Confio meu carro ao Edimilson há mais de 10 anos. Sempre honesto e transparente nos diagnósticos.",
    rating: 5
  },
  {
    name: "Maria Santos",
    text: "Atendimento rápido e profissional. Explicou tudo detalhadamente e o preço foi justo.",
    rating: 5
  },
  {
    name: "Roberto Oliveira",
    text: "Experiência e qualidade que fazem diferença. Meu carro nunca esteve tão bem cuidado!",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground">
          O que dizem nossos clientes
        </h2>
        <div className="h-1 w-24 bg-accent mx-auto mb-16"></div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-card border border-border relative hover:shadow-hover transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <p className="font-semibold text-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-primary/5 border border-primary/20 rounded-lg px-6 py-4">
            <p className="text-foreground font-semibold text-lg">
              Clientes atendidos por mais de 30 anos destacam:
            </p>
            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              {["Confiança", "Rapidez", "Sinceridade", "Preço Justo", "Qualidade"].map((tag, i) => (
                <span key={i} className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
