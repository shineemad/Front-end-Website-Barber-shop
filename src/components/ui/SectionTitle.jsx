import { useRef, useEffect } from "react";
import { gsap } from "../../utils/animations";

const SectionTitle = ({ eyebrow, title, subtitle, align = "left" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      });
      tl.from(el.querySelectorAll(".st-eyebrow"), {
        opacity: 0,
        y: 14,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          el.querySelector(".st-line"),
          {
            scaleX: 0,
            transformOrigin: "left center",
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.4",
        )
        .from(
          el.querySelector(".st-title"),
          {
            clipPath: "polygon(0 100%,100% 100%,100% 100%,0 100%)",
            y: 20,
            duration: 1.1,
            ease: "power4.out",
          },
          "-=0.5",
        )
        .from(
          el.querySelectorAll(".st-sub"),
          {
            opacity: 0,
            y: 16,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5",
        );
    }, el);

    return () => ctx.revert();
  }, []);

  const alignCls =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div ref={ref} className={`flex flex-col gap-4 ${alignCls}`}>
      {eyebrow && (
        <div className="st-eyebrow flex items-center gap-3">
          <span className="st-line inline-block w-8 h-px bg-gold-500 flex-shrink-0" />
          <span className="text-gold-500 text-[11px] font-mono tracking-widest uppercase">
            {eyebrow}
          </span>
        </div>
      )}

      <div style={{ overflow: "hidden" }}>
        <h2
          className="st-title font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-cream-100"
          style={{ clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)" }}
        >
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className="st-sub font-sans text-base md:text-lg max-w-xl leading-relaxed text-cream-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
