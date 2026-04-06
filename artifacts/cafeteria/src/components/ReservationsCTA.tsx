import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ReservationsCTA() {
  return (
    <section className="py-20 bg-foreground relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 text-accent mb-6">
            <CalendarDays className="w-8 h-8" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-background mb-4 leading-tight">
            ¿Quieres asegurar
            <br />
            <span className="italic text-accent">tu mesa?</span>
          </h2>

          <p className="text-lg text-background/70 mb-10 max-w-xl mx-auto">
            Haz tu reservación en segundos y llega sin esperas. Confirmamos directamente por WhatsApp.
          </p>

          <Link href="/reservaciones" className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-bold text-lg rounded-full shadow-lg shadow-accent/30 hover:bg-accent/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            Hacer una Reservación
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
