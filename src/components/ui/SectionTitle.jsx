import { useRef, useEffect } from "react";
import { gsap } from "../../utils/animations";
import CurtainReveal from "./CurtainReveal";

const SectionTitle = ({ eyebrow, title, subtitle, align = "left" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const ctx = gsap.context(() => {
      // Eyebrow + subtitle still use the original fade-up (fast, non-blocking)
      gsap.from(el.querySelectorAll(".st-eyebrow"), {
        autoAlpha: 0,
        y: 14,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 84%", once: true },
      });

      gsap.from(el.querySelectorAll(".st-sub"), {
        autoAlpha: 0,
        y: 16,
        duration: 0.8,
        ease: "power3.out",
        // Subtitle appears 0.7s after section enters — after curtain finishes
        delay: 0.7,
        scrollTrigger: { trigger: el, start: "top 84%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div ref={ref} className={`flex flex-col gap-4 ${alignCls}`}>
      {/* Eyebrow — gold label with decorative line */}
      {eyebrow && (
        <div className="st-eyebrow flex items-center gap-3">
          <span className="inline-block w-8 h-px bg-gold-500 flex-shrink-0" />
          <span className="text-gold-500 text-[11px] font-mono tracking-widest uppercase">
            {eyebrow}
          </span>
        </div>
      )}

      {/*
        ── Curtain Line Reveal on title ──────────────────────────────────────
        CurtainReveal wraps the h2 and orchestrates:
          1. Gold garis masuk dari kiri
          2. Teks naik dari bawah garis
          3. Garis keluar ke kanan
        Delay 0.2s so eyebrow appears first, then curtain begins.
      */}
      <CurtainReveal
        tag="h2"
        className={`st-title font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-cream-100 ${
          align === "center" ? "text-center" : "text-left"
        }`}
        delay={0.2}
      >
        {title}
      </CurtainReveal>

      {/* Subtitle — plain fade-up, no curtain (subtitle is secondary) */}
      {subtitle && (
        <p className="st-sub font-sans text-base md:text-lg max-w-xl leading-relaxed text-cream-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;

