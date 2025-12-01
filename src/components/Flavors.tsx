import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import vanillaImg from "@/assets/flavor-vanilla.jpg";
import chocolateImg from "@/assets/flavor-chocolate.jpg";
import pistachioImg from "@/assets/flavor-pistachio.jpg";
import matchaIMG from "@/assets/matcha.png";
import mandarinaIMG from "@/assets/mandarina.png";
import carameloImg from "@/assets/caramelo.png";
import roseImg from "@/assets/flavor-rose.jpg";
import heroImg from "@/assets/hero-ice-cream.jpg";

type Flavor = {
  name: string;
  description: string;
  inspiration: string;
  image: string;
  badge?: string;
};

const flavors: Flavor[] = [
  {
    name: "Gelato Gucci Oro",
    description: "Vainilla de Madagascar con hilos de azafrán y hojas de oro 24K",
    inspiration: "Inspirado en los detalles dorados de la Maison Gucci",
    image: vanillaImg,
  },
  {
    name: "Noir Louis Deluxe",
    description:
      "Chocolate belga 70% cacao con crocante de praliné y cintas de caramelo",
    inspiration: "Inspirado en los baúles clásicos de Louis Vuitton",
    image: chocolateImg,
  },
  {
    name: "Pistache Hermès Silk",
    description:
      "Pistacho siciliano con crujiente de nougat y ralladura de naranja sanguina",
    inspiration: "Inspirado en los pañuelos de seda Hermès",
    image: pistachioImg,
  },
  {
    name: "Rose Chanel Couture",
    description:
      "Frambuesas de bosque con pétalos de rosa cristalizados y champagne rosé",
    inspiration: "Inspirado en los ateliers de alta costura de Chanel",
    image: roseImg,
  },
  {
    name: "Versace Velvet Limoncello",
    description:
      "Crema de limón de Sorrento con ralladura de lima y polvo de perla",
    inspiration: "Inspirado en los mosaicos dorados de Versace",
    image: heroImg,
  },
  {
    name: "Prada Matcha Élite",
    description:
      "Matcha ceremonial con crumble de almendra tostada y miel de acacia",
    inspiration: "Inspirado en el minimalismo elegante de Prada Milano",
    image: matchaIMG,
  },
  {
    name: "Balenciaga Midnight Cacao",
    description:
      "Cacao venezolano con reducción de balsámico y cristales de sal negra",
    inspiration: "Inspirado en las siluetas audaces de Balenciaga",
    image: chocolateImg,
  },
  {
    name: "Dior Rose Lumière",
    description:
      "Lychee con infusión de rosas, perlas de champagne y crema de vainilla",
    inspiration: "Inspirado en los jardines de la maison Dior",
    image: roseImg,
  },
  {
    name: "Fendi Caramel Latte",
    description:
      "Caramelo salado con espresso ristretto y virutas de chocolate rubio",
    inspiration: "Inspirado en los monogramas icónicos de Fendi",
    image: carameloImg,
    badge: "Edición limitada",
  },
  {
    name: "Bvlgari Citrus Gem",
    description:
      "Mandarina siciliana con miel de azahar y crumble de pistacho",
    inspiration: "Inspirado en las gemas cítricas de Bvlgari",
    image: mandarinaIMG,
    badge: "Edición limitada",
  },
];

export const Flavors = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-cream/30 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">
            Colección de Sabores Haute Couture
          </h2>

          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-6" />

          <p className="font-montserrat text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada sabor es una experiencia sensorial única, inspirada en las fragancias más icónicas del mundo.
          </p>

          <p className="font-montserrat text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            Un carrusel de helados inspirados en las maisons más exclusivas del mundo: texturas sedosas, ingredientes de alta joyería y un desfile de aromas listo para degustar.
          </p>
        </motion.div>

        <Carousel opts={{ align: "start", loop: true }} className="relative">
          <CarouselContent className="py-4">
            {flavors.map((flavor, index) => (
              <CarouselItem
                key={flavor.name}
                className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="group overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm hover:shadow-gold transition-all duration-500 h-full flex flex-col">
                    <div className="relative overflow-hidden aspect-square">
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6 }}
                        src={flavor.image}
                        alt={flavor.name}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      
                      {flavor.badge && (
                        <span
                          className="
                          absolute top-4 right-4 rounded-full
                          bg-gradient-to-r from-gold via-gold-light to-gold
                          px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em]
                          text-charcoal shadow-md shadow-gold/40
                          "
                        >
                          {flavor.badge}
                        </span>
                      )}
                    </div>

                    <div className="p-6 space-y-3 flex-1 flex flex-col">
                      <h3 className="font-playfair text-2xl font-semibold text-foreground">
                        {flavor.name}
                      </h3>
                      <p className="font-montserrat text-sm text-muted-foreground leading-relaxed flex-1">
                        {flavor.description}
                      </p>
                      <p className="font-montserrat text-xs text-gold italic">
                        {flavor.inspiration}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden md:flex bg-card/90 border border-border/60 text-foreground hover:text-foreground" />
          <CarouselNext className="hidden md:flex bg-card/90 border border-border/60 text-foreground hover:text-foreground" />
        </Carousel>
      </div>
    </section>
  );
};
