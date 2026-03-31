import { useRef, useEffect, useState } from "react";
import { gsap } from "../../utils/animations";
import { NAV_LINKS } from "../../constants/data";
import Button from "../ui/Button";

const Navbar = () => {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from(".nav-logo", {
        opacity: 0,
        y: -18,
        duration: 0.9,
        ease: "power3.out",
      })
        .from(
          ".nav-link",
          {
            opacity: 0,
            y: -12,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.07,
          },
          "-=0.5",
        )
        .from(
          ".nav-cta",
          { opacity: 0, x: 16, duration: 0.7, ease: "power3.out" },
          "-=0.4",
        );
    }, navRef);

    const onScroll = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ctx.revert();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    gsap.to(
      menu,
      open
        ? { height: "auto", opacity: 1, duration: 0.42, ease: "power3.out" }
        : { height: 0, opacity: 0, duration: 0.3, ease: "power3.in" },
    );
  }, [open]);

  const navCls = `fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
    scrolled
      ? "bg-forest-900/95 backdrop-blur-md py-4 shadow-lg shadow-black/20 border-b border-forest-700/50"
      : "bg-transparent py-6"
  }`;

  return (
    <nav ref={navRef} className={navCls}>
      <div className="section-padding flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="nav-logo flex flex-col leading-none group">
          <span className="font-serif text-2xl text-cream-100 tracking-wider group-hover:text-gold-400 transition-colors duration-300">
            BARON'S
          </span>
          <span className="text-[9px] font-mono text-gold-500 tracking-widest uppercase">
            Est. 2009
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link relative text-cream-300 hover:text-gold-400 text-[11px] font-mono tracking-widest uppercase transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:w-0 after:h-px after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block nav-cta">
          <Button href="#booking" variant="primary">
            Book Now
          </Button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span
            className={`block w-6 h-px bg-cream-200 transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-cream-200 transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-px bg-cream-200 transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div ref={menuRef} className="md:hidden overflow-hidden h-0 opacity-0">
        <div className="section-padding py-7 flex flex-col gap-5 border-t border-forest-700/50">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream-200 hover:text-gold-400 font-mono text-sm tracking-widest uppercase transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2">
            <Button
              href="#booking"
              variant="primary"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
