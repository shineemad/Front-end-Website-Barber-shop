import { useRef, useEffect } from "react";
import { gsap } from "../../utils/animations";
import Button from "../ui/Button";

const HOURS = [
  { day: "Mon — Fri", time: "9am — 8pm" },
  { day: "Saturday", time: "10am — 7pm" },
  { day: "Sunday", time: "11am — 5pm" },
];

const Booking = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top 65%", once: true },
      });

      tl.from(".bk-topline", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.6,
        ease: "power3.inOut",
      })
        .from(
          ".bk-eye",
          { opacity: 0, y: 12, duration: 0.7, ease: "power3.out" },
          "-=0.9",
        )
        .from(
          ".bk-title",
          {
            clipPath: "polygon(0 100%,100% 100%,100% 100%,0 100%)",
            y: 32,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.6",
        )
        .from(
          ".bk-sub",
          { opacity: 0, y: 18, duration: 0.9, ease: "power3.out" },
          "-=0.7",
        )
        .from(
          ".bk-btn",
          {
            opacity: 0,
            y: 16,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.11,
          },
          "-=0.55",
        )
        .from(
          ".bk-hour",
          {
            opacity: 0,
            y: 14,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.09,
          },
          "-=0.45",
        );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="booking"
      className="relative py-32 md:py-44 section-padding overflow-hidden bg-forest-900"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.08]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-forest-900/88" />
      </div>

      {/* Gold lines */}
      <div className="bk-topline absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="bk-eye text-gold-500 text-[11px] font-mono tracking-widest uppercase mb-9">
          Reserve Your Chair
        </p>

        <div style={{ overflow: "hidden" }}>
          <h2
            className="bk-title font-serif text-5xl md:text-7xl lg:text-[88px] text-cream-100 leading-[1.05] mb-9"
            style={{ clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)" }}
          >
            Begin Your
            <span className="block text-gold-500 italic">Transformation</span>
          </h2>
        </div>

        <p className="bk-sub font-sans text-cream-300 text-base md:text-lg max-w-lg mx-auto leading-relaxed mb-12">
          Reserve your session with one of our master barbers and step into a
          world where grooming becomes an art form.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <span className="bk-btn">
            <Button href="tel:+15551234567" variant="primary">
              Call to Book
            </Button>
          </span>
          <span className="bk-btn">
            <Button href="mailto:hello@barons.com" variant="ghost">
              Send a Message
            </Button>
          </span>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 border-t border-forest-700 pt-12">
          {HOURS.map(({ day, time }) => (
            <div key={day} className="bk-hour">
              <div className="text-cream-400 text-[10px] font-mono uppercase tracking-wider mb-1.5">
                {day}
              </div>
              <div className="text-cream-100 font-serif text-lg leading-tight">
                {time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Booking;
