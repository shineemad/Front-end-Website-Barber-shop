import { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "../../utils/animations";
import SectionTitle from "../ui/SectionTitle";
import { TESTIMONIALS } from "../../constants/data";

const Stars = () => (
  <div className="flex justify-center gap-1 mt-4">
    {[0, 1, 2, 3, 4].map((i) => (
      <span key={i} className="text-gold-500 text-sm">
        &#9733;
      </span>
    ))}
  </div>
);

const Testimonials = () => {
  const ref = useRef(null);
  const quoteRef = useRef(null);
  const [active, setActive] = useState(0);

  // Entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ts-inner", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  // Cross-fade on slide change
  const goTo = useCallback(
    (idx) => {
      if (idx === active) return;
      const el = quoteRef.current;
      gsap.to(el, {
        opacity: 0,
        y: 20,
        duration: 0.32,
        ease: "power2.in",
        onComplete: () => {
          setActive(idx);
          gsap.fromTo(
            el,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.52, ease: "power3.out" },
          );
        },
      });
    },
    [active],
  );

  // Auto-advance
  useEffect(() => {
    const id = setInterval(
      () => goTo((active + 1) % TESTIMONIALS.length),
      5500,
    );
    return () => clearInterval(id);
  }, [active, goTo]);

  const t = TESTIMONIALS[active];

  return (
    <section
      ref={ref}
      id="testimonials"
      className="py-24 md:py-36 section-padding overflow-hidden"
    >
      <div className="max-w-4xl mx-auto ts-inner">
        <SectionTitle
          eyebrow="Testimonials"
          title="Words from Our Gentlemen"
          align="center"
        />

        {/* Decorative quote mark */}
        <div
          aria-hidden="true"
          className="text-gold-500/[0.07] font-serif text-[160px] leading-none text-center select-none -mb-16 mt-4 hidden md:block"
        >
          &ldquo;
        </div>

        {/* Quote */}
        <div ref={quoteRef} className="text-center mt-14 px-2 md:px-10">
          <blockquote className="font-serif text-xl md:text-2xl text-cream-200 leading-relaxed italic mb-8">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-5">
            <div className="w-10 h-px bg-gold-500" />
            <div>
              <div className="font-sans font-medium text-cream-100 text-sm tracking-wide">
                {t.name}
              </div>
              <div className="font-mono text-gold-500 text-[10px] tracking-widest uppercase mt-0.5">
                {t.role}
              </div>
            </div>
            <div className="w-10 h-px bg-gold-500" />
          </div>

          <Stars />
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`transition-all duration-300 ${
                i === active
                  ? "w-8 h-1.5 bg-gold-500 rounded-sm"
                  : "w-1.5 h-1.5 rounded-full bg-forest-600 hover:bg-forest-500"
              }`}
            />
          ))}
        </div>

        {/* Name tabs */}
        <div className="flex justify-center gap-6 mt-7 flex-wrap">
          {TESTIMONIALS.map((t2, i) => (
            <button
              key={t2.id}
              onClick={() => goTo(i)}
              className={`text-[10px] font-mono tracking-widest uppercase transition-colors duration-300 ${
                i === active
                  ? "text-gold-500"
                  : "text-cream-500 hover:text-cream-300"
              }`}
            >
              {t2.name.split(" ")[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
