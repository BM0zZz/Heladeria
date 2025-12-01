import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Flavors } from "@/components/Flavors";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-montserrat">
      <Navbar />
      <section id="inicio">
        <Hero />
      </section>
      <section id="sabores">
        <Flavors />
      </section>
      <section id="nosotros">
        <About />
      </section>
      <section id="contacto">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Index;
