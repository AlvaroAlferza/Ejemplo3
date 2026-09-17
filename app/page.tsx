import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import FeaturedDishes from "@/components/sections/FeaturedDishes";
import Menu from "@/components/sections/Menu";
import About from "@/components/sections/About";
import Gallery from "@/components/sections/Gallery";
import Reservations from "@/components/sections/Reservations";
import Location from "@/components/sections/Location";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <FeaturedDishes />
        <Menu />
        <About />
        <Gallery />
        <Reservations />
        <Location />
        <CTA />
      </main>

      <Footer />
    </>
  );
}