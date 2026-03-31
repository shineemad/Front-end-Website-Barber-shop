import { useRef, useEffect } from "react";
import { gsap } from "../../utils/animations";
import { MARQUEE_ITEMS } from "../../constants/data";

const MarqueeSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 96%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      ref={ref}
      className="py-5 bg-gold-500 overflow-hidden select-none border-y border-gold-600"
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 mx-5 text-forest-900 font-serif text-lg md:text-xl italic flex-shrink-0"
          >
            {item}
            <span className="text-forest-800/50 not-italic font-sans text-base">
              &#10022;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
