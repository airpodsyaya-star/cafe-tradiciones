import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ana Laura R.",
    text: "¡Excelente servicio! El pan de elote es el mejor que he probado en la zona, y el capuchino tiene la espuma perfecta. Muy recomendable.",
    rating: 5,
  },
  {
    name: "Carlos M.",
    text: "El lugar es muy acogedor. Fui con mi familia y todos quedamos encantados con las marquesitas. Seguro regresamos pronto.",
    rating: 5,
  },
  {
    name: "Diana T.",
    text: "Me encanta el panini italiano. Todo se nota que está hecho con ingredientes de calidad y el trato es súper amable.",
    rating: 5,
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-background relative border-y border-border/50">
      {/* Decorative subtle texture/blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 rounded-[100%] blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex items-center justify-center gap-1 bg-card px-4 py-2 rounded-full shadow-sm mb-6 border border-border"
          >
            <span className="font-bold text-foreground">4.8</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-2">en Google Reviews</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Lo que dicen de nosotros
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-card p-8 rounded-3xl border border-border/60 shadow-lg shadow-black/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-lg text-foreground italic mb-6">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {review.name.charAt(0)}
                </div>
                <span className="font-semibold text-foreground">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
