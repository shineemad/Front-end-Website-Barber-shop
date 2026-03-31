import { useEffect, useState } from "react";
import { ScrollTrigger } from "./utils/animations";
import { createLenis, destroyLenis } from "./utils/lenis";

import Preloader from "./components/ui/Preloader";
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
  // false = preloader is active; true = preloader done, main content interactive
  const [preloaderDone, setPreloaderDone] = useState(false);

  /**
   * Called by Preloader when all 4 animation phases complete.
   *
   * 1. Mark preloader as done (React unmounts <Preloader />)
   * 2. Refresh ScrollTrigger so it recalculates positions after
   *    all fonts/images have settled post-animation
   * 3. Initialize Lenis smooth scroll (not before — Lenis should not
   *    compete with the preloader's overflow:hidden lock)
   */
  const handlePreloaderComplete = () => {
    setPreloaderDone(true);

    // Dispatch custom event so Hero.jsx can start its post-preloader
    // decorative animations (left line, scroll track, marquee peek).
    // Using an event keeps Hero decoupled from App's state.
    window.dispatchEvent(new CustomEvent('preloader:done'));

    // Small delay so the DOM fully settles before ScrollTrigger measures
    setTimeout(() => ScrollTrigger.refresh(), 250);

    // Start Lenis smooth scroll now that the page is interactive
    createLenis();
  };

  useEffect(() => {
    // Global cleanup on unmount (e.g., dev hot-reload)
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      destroyLenis();
    };
  }, []);

  return (
    <>
      {/* Preloader sits above everything (z-[9999]) until animation finishes */}
      {!preloaderDone && <Preloader onComplete={handlePreloaderComplete} />}

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

