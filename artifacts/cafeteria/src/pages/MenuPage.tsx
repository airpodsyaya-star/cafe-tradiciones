import { Link } from "wouter";
import { ArrowLeft, Coffee } from "lucide-react";
import Menu from "@/components/Menu";
import FloatingActions from "@/components/FloatingActions";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Top nav bar */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Volver al inicio</span>
          </Link>
          <Link href="/" className="flex items-center gap-2 font-serif font-bold text-xl text-foreground hover:text-primary transition-colors">
            <Coffee className="w-6 h-6 text-accent" />
            Tradiciones
          </Link>
          <div className="w-28" />
        </div>
      </header>

      <Menu />
      <FloatingActions />
    </div>
  );
}
