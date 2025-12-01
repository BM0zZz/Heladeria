import { motion } from "framer-motion";
import { MapPin, Clock, Mail } from "lucide-react";
import { ReservationForm } from "@/components/ReservationForm";

export const Contact = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-cream/50 to-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">
            Reserva tu Experiencia
          </h2>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-6" />
          <p className="font-montserrat text-lg text-muted-foreground max-w-2xl mx-auto">
            Completa el formulario y nos pondremos en contacto contigo para confirmar tu reserva
          </p>
        </motion.div>

        {/* Formulario de Reservas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 shadow-elegant">
            <ReservationForm />
          </div>
        </motion.div>

        {/* Información de Contacto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-full max-w-4xl mx-auto bg-gradient-to-r from-transparent via-border to-transparent mb-16" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                <MapPin className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-foreground">
                Ubicación
              </h3>
              <p className="font-montserrat text-muted-foreground">
                Las Rozas<br />
                Madrid, España
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                <Clock className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-foreground">
                Horario
              </h3>
              <p className="font-montserrat text-muted-foreground">
                Lunes - Domingo<br />
                11:00 - 22:00
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 mb-4">
                <Mail className="w-8 h-8 text-gold" />
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-foreground">
                Contacto
              </h3>
              <p className="font-montserrat text-muted-foreground">
                info@iceconic.es<br />
                +34 612 621 612
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

