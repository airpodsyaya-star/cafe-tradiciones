import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-cafe.png`}
          alt="Café artesanal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-primary-foreground/90 font-medium tracking-[0.2em] uppercase text-sm sm:text-base mb-6"
        >
          Santa María Aztahuacán
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground max-w-4xl leading-tight mb-6 text-balance"
        >
          El sabor de la <span className="italic text-accent">tradición</span> en cada taza.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl font-light mb-12"
        >
          Especialistas en capuchinos, pan de elote artesanal y las auténticas marquesitas. Un rincón cálido para tus mejores momentos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a 
            href="#menu" 
            className="group flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full font-medium text-lg shadow-lg shadow-accent/20 hover:shadow-xl hover:bg-accent/90 hover:-translate-y-1 transition-all duration-300"
          >
            Ver Menú Digital
            <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
