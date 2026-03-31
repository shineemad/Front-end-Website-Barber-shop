import { useRef, useEffect } from "react";
import { gsap } from "../../utils/animations";
import SectionTitle from "../ui/SectionTitle";
import { GALLERY_IMAGES } from "../../constants/data";

const Gallery = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll(".gl-item").forEach((el, i) => {
        gsap.from(el, {
          clipPath: "polygon(0 100%,100% 100%,100% 100%,0 100%)",
          duration: 1.5,
          ease: "power4.out",
          delay: (i % 3) * 0.13,
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        });

        const img = el.querySelector("img");
        if (img) {
          el.addEventListener("mouseenter", () =>
            gsap.to(img, { scale: 1.08, duration: 0.65, ease: "power2.out" }),
          );
          el.addEventListener("mouseleave", () =>
            gsap.to(img, { scale: 1, duration: 0.7, ease: "power2.out" }),
          );
        }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="gallery" className="py-24 md:py-36 section-padding">
      <div className="mb-14">
        <SectionTitle
          eyebrow="The Gallery"
          title="Where Craft Meets Character"
          subtitle="A glimpse into the Baron's experience."
          align="center"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[210px] md:auto-rows-[260px] gap-2.5">
        {GALLERY_IMAGES.map((img) => (
          <div
            key={img.id}
            className={`gl-item relative overflow-hidden cursor-pointer group ${img.cls}`}
            style={{ clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)" }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/50 transition-colors duration-500 flex items-end p-5">
              <span className="text-cream-100 font-mono text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {img.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
