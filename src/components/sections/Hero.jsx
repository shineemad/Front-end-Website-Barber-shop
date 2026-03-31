import { useRef, useEffect } from "react";
import { gsap } from "../../utils/animations";
import Button from "../ui/Button";

const Hero = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from(".h-overlay", { opacity: 0, duration: 1.4, ease: "power2.out" })
        .from(
          ".h-eyebrow",
          { opacity: 0, y: 12, duration: 0.8, ease: "power3.out" },
          "-=0.7",
        )
        .from(
          ".h-deco",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.9,
            ease: "power3.inOut",
            stagger: 0,
          },
          "-=0.5",
        )
        .from(".h-ln1", { y: 130, duration: 1.15, ease: "power4.out" }, "-=0.7")
        .from(
          ".h-ln2",
          { y: 130, duration: 1.15, ease: "power4.out" },
          "-=0.95",
        )
        .from(
          ".h-ln3",
          { y: 130, duration: 1.15, ease: "power4.out" },
          "-=0.95",
        )
        .from(
          ".h-sub",
          { opacity: 0, y: 22, duration: 0.9, ease: "power3.out" },
          "-=0.65",
        )
        .from(
          ".h-cta",
          {
            opacity: 0,
            y: 18,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.6",
        )
        .from(
          ".h-scroll",
          { opacity: 0, y: -14, duration: 0.7, ease: "power3.out" },
          "-=0.4",
        );

      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 28,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Scroll dot bounce
      gsap.to(".h-scroll-dot", {
        y: 14,
        repeat: -1,
        yoyo: true,
        duration: 1.3,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen min-h-[640px] flex items-center overflow-hidden"
    >
      {/* Parallax BG */}
      <div ref={bgRef} className="absolute inset-0 scale-[1.18]">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover object-top"
          fetchpriority="high"
        />
        <div className="h-overlay absolute inset-0 bg-forest-900/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/96 via-forest-950/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
      </div>

      {/* Right accent line */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden lg:block" />

      {/* Watermark */}
      <div className="absolute right-[6vw] top-1/2 -translate-y-[55%] font-serif font-black text-[26vw] text-gold-500/[0.03] leading-none select-none pointer-events-none hidden xl:block">
        B
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding w-full pt-24">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="h-eyebrow flex items-center gap-4 mb-8">
            <span className="h-deco w-10 h-px bg-gold-500 inline-block" />
            <span className="text-gold-500 text-[11px] font-mono tracking-widest uppercase">
              Premium Gentlemen's Grooming
            </span>
            <span className="h-deco w-10 h-px bg-gold-500 inline-block" />
          </div>

          {/* Headline lines — each in overflow:hidden wrapper for clip reveal */}
          <div className="overflow-hidden leading-none mb-1">
            <p className="h-ln1 font-serif text-[13.5vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5rem] text-cream-100 leading-[0.92] tracking-tight">
              The Art
            </p>
          </div>
          <div className="overflow-hidden leading-none mb-1">
            <p className="h-ln2 font-serif text-[13.5vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5rem] text-gold-500 leading-[0.92] tracking-tight italic">
              of the
            </p>
          </div>
          <div className="overflow-hidden leading-none mb-10">
            <p className="h-ln3 font-serif text-[13.5vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5rem] text-cream-100 leading-[0.92] tracking-tight">
              Gentleman
            </p>
          </div>

          {/* Subtitle */}
          <p className="h-sub font-sans text-cream-300 text-base md:text-[17px] max-w-[420px] leading-relaxed mb-10">
            Where precision meets tradition. Experience the finest barbering
            craft in an atmosphere built for the modern gentleman.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <span className="h-cta">
              <Button href="#booking" variant="primary">
                Book Your Session
              </Button>
            </span>
            <span className="h-cta">
              <Button href="#services" variant="secondary">
                Explore Services
              </Button>
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="h-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-5 h-8 rounded-full border border-cream-300/30 flex justify-center pt-1.5 overflow-hidden">
          <div className="h-scroll-dot w-px h-3 bg-gold-500 rounded-full" />
        </div>
        <span className="text-cream-500 text-[9px] font-mono tracking-widest uppercase">
          Scroll
        </span>
      </div>
    </section>
  );
};

export default Hero;
