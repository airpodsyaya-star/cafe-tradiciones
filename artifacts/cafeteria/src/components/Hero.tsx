import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-cafe.png`}
          alt="Café artesanal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80"></div>
      </div>

      {/* Top Content — title & description, centered */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-28 pb-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 font-medium tracking-[0.2em] uppercase text-xs sm:text-sm mb-4 sm:mb-6"
        >
          Santa María Aztahuacán
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white max-w-4xl leading-tight mb-4 sm:mb-6 text-balance"
        >
          El sabor de la <span className="italic text-accent">tradición</span> en cada taza.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg text-white/90 max-w-xl font-medium"
        >
          Capuchinos, pan de elote artesanal y auténticas marquesitas en un rincón cálido.
        </motion.p>
      </div>

      {/* Button — always anchored to bottom */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
        <a
          href="#menu"
          className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full font-semibold text-lg shadow-lg shadow-accent/30 hover:bg-accent/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
        >
          Ver Menú Digital
          <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
        </a>
      </div>
    </section>
  );
}
