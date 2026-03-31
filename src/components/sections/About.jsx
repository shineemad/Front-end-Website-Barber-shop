import { useRef, useEffect } from "react";
import { gsap } from "../../utils/animations";
import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";
import { STATS } from "../../constants/data";

const About = () => {
  const ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image clip-path reveal
      gsap.from(".ab-img-wrap", {
        clipPath: "polygon(0 100%,100% 100%,100% 100%,0 100%)",
        duration: 1.6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 76%",
          once: true,
        },
      });

      // Image parallax
      gsap.to(".ab-img", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Gold line reveal
      gsap.from(".ab-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.1,
        ease: "power3.inOut",
        scrollTrigger: { trigger: ".ab-line", start: "top 86%", once: true },
      });

      // Paragraphs
      gsap.from(".ab-para", {
        y: 34,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: { trigger: ".ab-para", start: "top 84%", once: true },
      });

      // Animated counters
      document.querySelectorAll(".ab-stat").forEach((el, i) => {
        const valEl = el.querySelector(".ab-stat-val");
        const end = parseInt(valEl.dataset.end, 10);
        const suffix = valEl.dataset.suffix || "";

        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.11,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });

        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 2.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
          onUpdate() {
            valEl.textContent = Math.round(obj.v).toLocaleString() + suffix;
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="py-24 md:py-36 section-padding overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        {/* Image */}
        <div ref={imgRef} className="relative">
          <div
            className="ab-img-wrap relative overflow-hidden"
            style={{ clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)" }}
          >
            {/* 🖼️ GANTI GAMBAR — About Section (foto interior barbershop, 900px lebar) */}
            <img
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900&q=80"
              alt="Inside Baron's Barbershop"
              className="ab-img w-full h-[480px] md:h-[620px] object-cover scale-[1.15]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/55 to-transparent" />
          </div>

          {/* Years badge */}
          <div className="absolute -bottom-6 -right-4 md:-right-8 bg-gold-500 p-6 text-forest-900 hidden sm:block z-10">
            <div className="font-serif text-4xl font-bold leading-none">15</div>
            <div className="text-[10px] font-mono uppercase tracking-wider mt-1">
              Years of Craft
            </div>
          </div>

          {/* Corner accent */}
          <div className="absolute -top-5 -left-5 w-24 h-24 border border-gold-500/20 pointer-events-none hidden md:block" />
        </div>

        {/* Content */}
        <div className="space-y-7">
          <SectionTitle
            eyebrow="Our Story"
            title="Crafted with Passion, Perfected Over Time"
          />

          <div className="ab-line w-20 h-px bg-gold-500" />

          <p className="ab-para font-sans text-cream-300 text-[15px] leading-relaxed">
            Founded in 2009 by master barber James Baron, our establishment was
            built on the belief that every man deserves an extraordinary
            grooming experience — a seamless blend of timeless traditions and
            modern sophistication.
          </p>
          <p className="ab-para font-sans text-cream-300 text-[15px] leading-relaxed">
            Our team of handpicked master barbers has trained across London,
            Milan, and New York, bringing a world-class standard to every
            appointment. We use only the finest tools and premium grooming
            products sourced from around the globe.
          </p>

          <div className="ab-para">
            <Button href="#services" variant="secondary">
              Discover Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-forest-700">
            {STATS.map((s) => (
              <div key={s.label} className="ab-stat">
                <div className="font-serif text-3xl text-gold-500 leading-none">
                  <span
                    className="ab-stat-val"
                    data-end={s.value}
                    data-suffix={s.suffix}
                  >
                    0{s.suffix}
                  </span>
                </div>
                <div className="text-cream-400 text-[10px] font-mono uppercase tracking-wider mt-2 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
