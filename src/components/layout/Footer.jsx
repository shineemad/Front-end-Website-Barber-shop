import { useRef, useEffect } from "react";
import { gsap } from "../../utils/animations";
import { NAV_LINKS } from "../../constants/data";

const Footer = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".f-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.6,
        ease: "power3.inOut",
        scrollTrigger: { trigger: ref.current, start: "top 90%", once: true },
      });
      gsap.from(".f-col", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 87%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} className="bg-forest-950 section-padding pt-16 pb-8">
      <div className="f-line w-full h-px bg-forest-700 mb-14" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 f-col">
          <div className="font-serif text-2xl text-cream-100 mb-0.5">
            BARON'S
          </div>
          <div className="text-[9px] font-mono text-gold-500 tracking-widest uppercase mb-4">
            Est. 2009
          </div>
          <p className="text-cream-400 text-sm font-sans leading-relaxed">
            Premium gentlemen's grooming in the heart of the city.
          </p>
          <div className="flex gap-3 mt-6">
            {["IG", "FB", "TW", "YT"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 border border-forest-600 flex items-center justify-center text-[10px] font-mono text-cream-400 hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="f-col">
          <div className="text-[10px] font-mono text-cream-400 uppercase tracking-widest mb-5">
            Navigate
          </div>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-cream-400 hover:text-gold-400 text-sm font-sans transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="f-col">
          <div className="text-[10px] font-mono text-cream-400 uppercase tracking-widest mb-5">
            Contact
          </div>
          <ul className="space-y-3 text-sm font-sans text-cream-400">
            <li>
              <a
                href="tel:+15551234567"
                className="hover:text-gold-400 transition-colors duration-300"
              >
                +1 (555) 123-4567
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@barons.com"
                className="hover:text-gold-400 transition-colors duration-300"
              >
                hello@barons.com
              </a>
            </li>
            <li className="leading-relaxed pt-1">
              123 Gentleman's Row
              <br />
              New York, NY 10001
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="f-col">
          <div className="text-[10px] font-mono text-cream-400 uppercase tracking-widest mb-5">
            Hours
          </div>
          <ul className="space-y-4 text-sm font-sans text-cream-400">
            {[
              ["Mon — Fri", "9:00 am — 8:00 pm"],
              ["Saturday", "10:00 am — 7:00 pm"],
              ["Sunday", "11:00 am — 5:00 pm"],
            ].map(([d, h]) => (
              <li key={d}>
                <span className="text-cream-300 font-medium">{d}</span>
                <br />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 f-col">
        <span className="text-cream-500 text-[11px] font-mono">
          &copy; {new Date().getFullYear()} Baron's Barbershop. All rights
          reserved.
        </span>
        <span className="text-cream-500 text-[11px] font-mono tracking-wider">
          Crafted with precision.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
