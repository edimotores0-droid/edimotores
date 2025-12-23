import { Card } from "@/components/ui/card";

const CarBrands = () => {
  const brands = [
    { name: "Volkswagen", logo: "https://cdn.worldvectorlogo.com/logos/volkswagen-1.svg" },
    { name: "Chevrolet", logo: "https://cdn.worldvectorlogo.com/logos/chevrolet-2.svg" },
    { name: "Ford", logo: "https://cdn.worldvectorlogo.com/logos/ford-6.svg" },
    { name: "Fiat", logo: "https://cdn.worldvectorlogo.com/logos/fiat-3.svg" },
    { name: "Honda", logo: "https://cdn.worldvectorlogo.com/logos/honda-6.svg" },
    { name: "Toyota", logo: "https://cdn.worldvectorlogo.com/logos/toyota-1.svg" },
    { name: "Hyundai", logo: "https://cdn.worldvectorlogo.com/logos/hyundai-motor-company-1.svg" },
    { name: "Nissan", logo: "https://cdn.worldvectorlogo.com/logos/nissan-6.svg" },
    { name: "Renault", logo: "https://cdn.worldvectorlogo.com/logos/renault-10.svg" },
    { name: "Jeep", logo: "https://cdn.worldvectorlogo.com/logos/jeep-7.svg" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Marcas que <span className="text-secondary">Atendemos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Especialistas em manutenção e reparo das principais marcas do mercado
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {brands.map((brand) => (
            <Card 
              key={brand.name}
              className="p-6 flex flex-col items-center justify-center gap-4 hover:shadow-hover transition-all hover:-translate-y-1 bg-card border-2 border-border hover:border-secondary group"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                <img 
                  src={brand.logo} 
                  alt={`Logo ${brand.name}`}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <p className="font-semibold text-foreground text-center">{brand.name}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarBrands;