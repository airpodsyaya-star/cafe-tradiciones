import { MessageCircle, Menu as MenuIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingActions() {
  // WhatsApp Number configured here
  const waNumber = "5215512345678"; 
  const waMessage = "Hola! Quisiera hacer un pedido o consulta.";
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
      
      {/* Scroll to Menu Button */}
      <motion.a
        href="#menu"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="pointer-events-auto flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg shadow-black/20 hover:shadow-xl hover:scale-105 hover:bg-primary/90 transition-all font-medium border border-white/10"
      >
        <MenuIcon className="w-5 h-5" />
        <span className="hidden sm:inline">Ver Menú</span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        className="pointer-events-auto w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:scale-110 transition-transform hover:shadow-2xl"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

    </div>
  );
}
