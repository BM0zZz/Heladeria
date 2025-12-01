import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, Check, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const reservationSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "El nombre debe tener al menos 2 caracteres" })
    .max(100, { message: "El nombre no puede exceder 100 caracteres" }),
  email: z.string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "El email no puede exceder 255 caracteres" }),
  phone: z.string()
    .trim()
    .min(9, { message: "Teléfono inválido" })
    .max(15, { message: "Teléfono inválido" }),
  date: z.date({
    required_error: "Por favor selecciona una fecha",
  }),
  time: z.string({
    required_error: "Por favor selecciona una hora",
  }),
  guests: z.string({
    required_error: "Por favor selecciona el número de personas",
  }),
  message: z.string()
    .max(500, { message: "El mensaje no puede exceder 500 caracteres" })
    .optional(),
});

type ReservationFormValues = z.infer<typeof reservationSchema>;

const timeSlots = [
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00",
  "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"
];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8+"];

export const ReservationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = (data: ReservationFormValues) => {
    // Simulación de envío - solo visual
    console.log("Reserva (simulada):", {
      ...data,
      date: format(data.date, "PPP", { locale: es }),
    });
    
    setIsSubmitted(true);
    
    // Reset después de 5 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      form.reset();
    }, 5000);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-2xl mx-auto"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nombre */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-montserrat text-foreground">
                          Nombre Completo *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Tu nombre"
                            {...field}
                            className="border-border/50 focus:border-gold transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-montserrat text-foreground">
                          Email *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="tu@email.com"
                            {...field}
                            className="border-border/50 focus:border-gold transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Teléfono */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-montserrat text-foreground">
                          Teléfono *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+34 XXX XXX XXX"
                            {...field}
                            className="border-border/50 focus:border-gold transition-colors"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Número de personas */}
                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-montserrat text-foreground">
                          Número de Personas *
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-border/50 focus:border-gold transition-colors">
                              <SelectValue placeholder="Selecciona">
                                {field.value && (
                                  <span className="flex items-center gap-2">
                                    <Users className="w-4 h-4 text-gold" />
                                    {field.value} {field.value === "1" ? "persona" : "personas"}
                                  </span>
                                )}
                              </SelectValue>
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {guestOptions.map((num) => (
                              <SelectItem key={num} value={num}>
                                <span className="flex items-center gap-2">
                                  <Users className="w-4 h-4 text-gold" />
                                  {num} {num === "1" ? "persona" : "personas"}
                                </span>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Fecha */}
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="font-montserrat text-foreground mb-2">
                          Fecha *
                        </FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant="outline"
                                className={cn(
                                  "w-full pl-3 text-left font-normal border-border/50 hover:border-gold transition-colors",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP", { locale: es })
                                ) : (
                                  <span>Selecciona una fecha</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                              className={cn("p-3 pointer-events-auto")}
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Hora */}
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="font-montserrat text-foreground mb-2">
                          Hora *
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="border-border/50 focus:border-gold transition-colors">
                              <SelectValue placeholder="Selecciona hora" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="max-h-[300px]">
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Mensaje opcional */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-montserrat text-foreground">
                        Mensaje (Opcional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="¿Algún requerimiento especial? Alergias, celebración especial, etc."
                          className="resize-none border-border/50 focus:border-gold transition-colors min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-montserrat text-lg bg-gradient-to-r from-gold via-gold-light to-gold hover:shadow-gold transition-all duration-500"
                  >
                    Confirmar Reserva
                  </Button>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center py-16 space-y-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gold/10 mb-4"
            >
              <Check className="w-12 h-12 text-gold" />
            </motion.div>
            
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
              ¡Reserva Confirmada!
            </h3>
            
            <p className="font-montserrat text-lg text-muted-foreground max-w-md mx-auto">
              Hemos recibido tu solicitud. Te contactaremos pronto para confirmar todos los detalles de tu reserva.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm font-montserrat text-gold italic"
            >
              Nos vemos pronto en Iceconic ✨
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
