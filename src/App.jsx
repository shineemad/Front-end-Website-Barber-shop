import { useEffect } from "react";
import { ScrollTrigger } from "./utils/animations";

import CustomCursor from "./components/ui/CustomCursor";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Marquee from "./components/sections/Marquee";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Gallery from "./components/sections/Gallery";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";
import Booking from "./components/sections/Booking";

function App() {
  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => {
      clearTimeout(t);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

export default App;
