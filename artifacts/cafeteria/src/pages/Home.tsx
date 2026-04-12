import Hero from "@/components/Hero";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import ReservationsCTA from "@/components/ReservationsCTA";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="w-full bg-background min-h-screen">
      <Hero />
      <About />
      <Reviews />
      <ReservationsCTA />
      <Location />
      <Footer />
      <FloatingActions />
    </main>
  );
}
