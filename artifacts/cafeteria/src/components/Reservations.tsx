import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, CheckCircle } from "lucide-react";

const timeSlots = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM",
];

export default function Reservations() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `¡Hola! Quiero hacer una reservación:\n` +
      `👤 Nombre: ${form.name}\n` +
      `📅 Fecha: ${form.date}\n` +
      `🕐 Hora: ${form.time}\n` +
      `👥 Personas: ${form.guests}\n` +
      `📝 Notas: ${form.notes || "Ninguna"}`
    );
    window.open(`https://wa.me/521XXXXXXXXXX?text=${message}`, "_blank");
    setSubmitted(true);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="reservaciones" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Haz tu Reservación
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Asegura tu lugar y llega sin esperas. Confirmamos tu mesa por WhatsApp.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-background rounded-3xl p-12 text-center border border-border/50 shadow-lg"
            >
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">¡Solicitud Enviada!</h3>
              <p className="text-muted-foreground mb-6">
                Te hemos redirigido a WhatsApp para confirmar tu reservación. Nos pondremos en contacto contigo muy pronto.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-semibold hover:opacity-90 transition-opacity"
              >
                Hacer otra reservación
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-background rounded-3xl p-8 md:p-10 border border-border/50 shadow-lg space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="55 1234 5678"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2 md:col-span-1">
                  <label className="text-sm font-semibold text-foreground/80 uppercase tracking-wide flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" /> Fecha
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    min={today}
                    value={form.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:border-primary text-foreground transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-1">
                  <label className="text-sm font-semibold text-foreground/80 uppercase tracking-wide flex items-center gap-1">
                    <Clock className="w-4 h-4" /> Hora
                  </label>
                  <select
                    name="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:border-primary text-foreground transition-colors"
                  >
                    <option value="">Selecciona</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2 md:col-span-1">
                  <label className="text-sm font-semibold text-foreground/80 uppercase tracking-wide flex items-center gap-1">
                    <Users className="w-4 h-4" /> Personas
                  </label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:border-primary text-foreground transition-colors"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} persona{n !== 1 ? "s" : ""}</option>
                    ))}
                    <option value="9+">Más de 8</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-foreground/80 uppercase tracking-wide">
                  Notas especiales <span className="font-normal normal-case text-muted-foreground">(opcional)</span>
                </label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Ej: es una celebración de cumpleaños, alergias, preferencias de mesa..."
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent text-white font-bold text-lg rounded-2xl hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-md"
              >
                Confirmar por WhatsApp
              </button>

              <p className="text-center text-xs text-muted-foreground">
                Al enviar, te redirigiremos a WhatsApp para confirmar tu reservación.
              </p>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
