import ContactBar from "@/components/ContactBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import CarBrands from "@/components/CarBrands";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ContactBar />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <CarBrands />
      <WhyChoose />
      <Process />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
