import { Coffee, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-background/10 pb-8 mb-8">
          <div className="flex items-center gap-2">
            <Coffee className="w-8 h-8 text-accent" />
            <span className="font-serif text-2xl font-bold">Tradiciones</span>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            <a href="#nosotros" className="hover:text-accent transition-colors">Nosotros</a>
            <a href="#menu" className="hover:text-accent transition-colors">Menú</a>
            <a href="/reservaciones" className="hover:text-accent transition-colors">Reservaciones</a>
            <a href="#ubicacion" className="hover:text-accent transition-colors">Ubicación</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© {new Date().getFullYear()} Tradiciones Café. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-accent fill-accent" /> en Santa María Aztahuacán
          </p>
        </div>
      </div>
    </footer>
  );
}
