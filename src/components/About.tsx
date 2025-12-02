import { motion } from "framer-motion";
import { MapPin, Award, Sparkles } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-cream/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground">
              La Excelencia <br />
              <span className="text-gold">en Cada Sabor</span>
            </h2>
            
            <div className="h-px w-24 bg-gradient-to-r from-gold to-transparent" />
            
            <p className="font-montserrat text-lg text-muted-foreground leading-relaxed">
              En Iceconic, transformamos el helado en una experiencia de alta gama. 
              Cada sabor está meticulosamente elaborado para evocar las sensaciones 
              de las fragancias más exclusivas del mundo.
            </p>

            <p className="font-montserrat text-lg text-muted-foreground leading-relaxed">
              Ubicados Las Rozas Village, ofrecemos una experiencia única 
              donde la gastronomía se encuentra con el lujo y la sofisticación.
            </p>

            <div className="flex items-center gap-2 text-gold font-montserrat">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">Las Rozas Village </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl bg-card border border-gold/20 shadow-elegant hover:shadow-gold transition-all duration-500"
            >
              <Award className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-playfair text-2xl font-semibold mb-3 text-foreground">
                Ingredientes Premium
              </h3>
              <p className="font-montserrat text-muted-foreground">
                Seleccionamos únicamente los mejores ingredientes del mundo: 
                vainilla de Madagascar, chocolate belga, pistachos sicilianos.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl bg-card border border-gold/20 shadow-elegant hover:shadow-gold transition-all duration-500"
            >
              <Sparkles className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-playfair text-2xl font-semibold mb-3 text-foreground">
                Elaboración Artesanal
              </h3>
              <p className="font-montserrat text-muted-foreground">
                Cada lote es elaborado con técnicas artesanales y atención al 
                más mínimo detalle, garantizando una experiencia inolvidable.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
