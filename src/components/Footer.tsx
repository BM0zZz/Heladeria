import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h3 className="font-playfair text-3xl font-bold text-foreground">
            Iceconic
          </h3>
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="font-montserrat text-sm text-muted-foreground">
            Helados Premium · Las Rozas, Madrid
          </p>
          <p className="font-montserrat text-xs text-muted-foreground pt-4">
            © 2025 Iceconic. Todos los derechos reservados. BM0zZz en Github
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
