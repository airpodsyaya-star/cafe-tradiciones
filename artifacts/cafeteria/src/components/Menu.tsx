import { motion } from "framer-motion";

const menuData = [
  {
    category: "Café y Bebidas",
    description: "Nuestra selección de granos tostados a la perfección.",
    items: [
      { name: "Capuchino Clásico", desc: "Espresso, leche vaporizada y una nube de espuma sedosa.", price: "$45", popular: true },
      { name: "Latte Vainilla", desc: "Suave combinación de café, leche y un toque de vainilla.", price: "$50" },
      { name: "Moka Artesanal", desc: "Café, chocolate y leche, coronado con crema batida.", price: "$55" },
      { name: "Americano", desc: "Extracción pura, para los puristas del café.", price: "$35" },
      { name: "Frappé Caramelo", desc: "Bebida fría mezclada con hielo y caramelo dulce.", price: "$65" }
    ],
    image: "hero-cafe.png"
  },
  {
    category: "Antojitos Dulces",
    description: "El alma de la casa, horneados y preparados al momento.",
    items: [
      { name: "Rebanada de Pan de Elote", desc: "Nuestra receta secreta, húmedo, dulce y servido calientito.", price: "$40", popular: true },
      { name: "Marquesita Tradicional", desc: "Rellena de queso de bola (Edam) y Nutella. ¡Crujiente y delicioso!", price: "$60", popular: true },
      { name: "Marquesita Frutal", desc: "Queso de bola, fresas frescas y lechera.", price: "$70" },
      { name: "Pay de Frutos Rojos", desc: "Base crujiente y relleno cremoso con compota de frutos.", price: "$55" }
    ],
    image: "pan-de-elote.png"
  },
  {
    category: "Bocadillos Salados",
    description: "Para saciar el apetito con ingredientes frescos.",
    items: [
      { name: "Panini Italiano", desc: "Pan artesanal, jamón serrano, queso gouda derretido y pesto.", price: "$85", popular: true },
      { name: "Panini 3 Quesos", desc: "Selección de quesos madurados con un toque de hierbas.", price: "$75" },
      { name: "Chapata de Pavo", desc: "Pechuga de pavo, espinacas y aderezo de la casa.", price: "$70" }
    ],
    image: "panini.png"
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-card relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground"
          >
            Menú Digital
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Explora nuestra variedad de sabores, preparados al momento con ingredientes de la más alta calidad.
          </motion.p>
        </div>

        <div className="space-y-24">
          {menuData.map((section, idx) => (
            <div key={section.category} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-start`}>
              
              {/* Image Column */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 1 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-5/12 relative"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                  <img 
                    src={`${import.meta.env.BASE_URL}images/${section.image}`} 
                    alt={section.category}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 border-[8px] border-background/20 rounded-3xl z-10 pointer-events-none"></div>
                </div>
              </motion.div>

              {/* Menu List Column */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-7/12 flex flex-col justify-center"
              >
                <h3 className="text-3xl font-bold text-primary mb-2">{section.category}</h3>
                <p className="text-muted-foreground mb-8">{section.description}</p>
                
                <div className="space-y-6">
                  {section.items.map((item) => (
                    <div key={item.name} className="group relative bg-background p-5 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-serif font-semibold text-foreground flex items-center gap-2">
                          {item.name}
                          {item.popular && (
                            <span className="inline-block px-2 py-0.5 bg-accent/10 text-accent text-xs font-sans font-medium rounded-full uppercase tracking-wider">
                              Popular
                            </span>
                          )}
                        </h4>
                        <span className="text-lg font-bold text-primary shrink-0 ml-4">{item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed pr-12">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          ))}
        </div>
        
        {/* Marquesita Spotlight */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-br from-primary to-foreground rounded-3xl p-8 sm:p-12 text-primary-foreground shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          
          <div className="w-full md:w-1/2 z-10">
            <span className="text-accent-foreground/80 font-medium tracking-widest uppercase text-sm mb-4 block">Especialidad de la Casa</span>
            <h3 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">La Auténtica Marquesita</h3>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Una crujiente oblea enrollada, rellena de una exquisita combinación de queso de bola derretido y dulce. Un antojito callejero elevado a postre artesanal.
            </p>
          </div>
          <div className="w-full md:w-1/2 z-10 relative">
             <div className="aspect-video sm:aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-primary/30">
                <img 
                  src={`${import.meta.env.BASE_URL}images/marquesita.png`} 
                  alt="Marquesita"
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
