import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Location() {
  return (
    <section id="ubicacion" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3 space-y-10"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Visítanos</h2>
              <p className="text-lg text-muted-foreground">
                Te esperamos en el corazón de Santa María Aztahuacán para disfrutar de un buen momento.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-1">Dirección</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Calle Principal #123<br />
                    Santa María Aztahuacán<br />
                    CDMX, C.P. 09500
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-1">Horario</h4>
                  <div className="text-muted-foreground space-y-1">
                    <p><span className="font-medium text-foreground">Lun – Vie:</span> 3:00 PM – 10:00 PM</p>
                    <p><span className="font-medium text-foreground">Sáb – Dom:</span> 4:00 PM – 10:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg mb-1">Contacto</h4>
                  <a href="tel:5583756630" className="text-muted-foreground hover:text-primary transition-colors">
                    +52 55 8375 6630
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/3 h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl border border-border/50 bg-background flex items-center justify-center relative"
          >
            {/* Real Map Embed Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15058.077610196886!2d-99.03457175!3d19.3467475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce02b934b1dc71%3A0xc6eb1b504adcd9bb!2sSanta%20Mar%C3%ADa%20Aztahuac%C3%A1n%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1700000000000!5m2!1ses-419!2smx" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[20%] contrast-125 sepia-[20%] hue-rotate-15 opacity-90 hover:opacity-100 transition-opacity duration-300"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
