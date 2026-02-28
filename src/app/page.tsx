import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import PricingPreview from "@/components/sections/PricingPreview";
import Testimonials from "@/components/sections/Testimonials";
import Trainers from "@/components/sections/Trainers";
import Classes from "@/components/sections/Classes";
import Schedule from "@/components/sections/Schedule";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Classes />
      <Schedule />
      <Trainers />
      <PricingPreview />
      <Testimonials />
      <Contact />
      <Footer/>
    </main>
  );
}