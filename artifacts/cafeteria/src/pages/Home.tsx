import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  return (
    <main className="w-full bg-background min-h-screen">
      <Hero />
      <About />
      <Menu />
      <Reviews />
      <Location />
      <Footer />
      <FloatingActions />
    </main>
  );
}
