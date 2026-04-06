import { motion } from "framer-motion";
import { Coffee, Store, ShoppingBag, Heart } from "lucide-react";

const features = [
  { icon: Store, title: "Consumo en lugar", desc: "Ambiente acogedor" },
  { icon: ShoppingBag, title: "Para llevar", desc: "Práctico y rápido" },
  { icon: Heart, title: "Hecho con amor", desc: "Recetas familiares" },
  { icon: Coffee, title: "Café de Especialidad", desc: "Granos selectos" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-foreground"
          >
            Nuestra Esencia
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-accent mx-auto mb-8 rounded-full"
          />
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16"
          >
            Nacimos con la idea de traer los sabores más reconfortantes a Santa María Aztahuacán. 
            Cada rebanada de nuestro pan de elote y cada marquesita que preparamos llevan el calor 
            de una receta familiar. Acompañados de un capuchino perfectamente espumado, queremos 
            que te sientas como en casa.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {features.map((feature, idx) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
              className="flex flex-col items-center text-center p-6 rounded-3xl bg-card border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-foreground mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
