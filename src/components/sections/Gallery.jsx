/**
 * Gallery.jsx — Horizontal Scroll Gallery
 * ─────────────────────────────────────────────────────────────────────────────
 * ANIMASI:
 *   Section ter-PIN saat masuk viewport. Scroll ke bawah → gambar bergeser
 *   ke kiri secara horizontal. Setelah semua gambar terlihat, section un-pin
 *   dan scroll vertical normal kembali.
 *
 * TEKNIK:
 *   · GSAP ScrollTrigger pin: true  → menahan section di viewport
 *   · gsap.to(track, { xPercent: -totalSlide, scrub:1.5 }) → horizontal slide
 *   · track width = N × 100vw (setiap gambar mengisi 1 viewport width)
 *   · Progress bar tipis di bawah yang grow seiring scroll (visual cue)
 *
 * PERFORMA:
 *   · Hanya `transform: translateX` — 100% GPU composited
 *   · `scrub: 1.5` — smoothed, tidak mechanical / tidak jittery
 *   · `will-change: transform` pada track, diset satu kali
 *   · Mobile (<768px): horizontal scroll dimatikan, kembali ke grid vertikal
 */
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "../../utils/animations";
import SectionTitle from "../ui/SectionTitle";
import { GALLERY_IMAGES } from "../../constants/data";

const Gallery = () => {
  const sectionRef = useRef(null);
  const trackRef   = useRef(null);
  const pinCtxRef  = useRef(null);

  useEffect(() => {
    const isMobile = !window.matchMedia("(min-width: 768px)").matches;

    if (isMobile) {
      // ── Mobile fallback: simple fade-in per image, no horizontal scroll ──
      const ctx = gsap.context(() => {
        gsap.from(".gl-item", {
          autoAlpha: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          stagger: { amount: 0.5, from: "start" },
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
        });
      }, sectionRef);
      return () => ctx.revert();
    }

    // ── Desktop: Horizontal Scroll ────────────────────────────────────────
    const ctx = gsap.context(() => {
      const track  = trackRef.current;
      const images = track.querySelectorAll(".gl-item");
      const count  = images.length; // 6 images

      // Each image is 38vw wide with a gap. Track total width is auto.
      // We need to slide from 0 to -(trackWidth - viewportWidth).
      // Using xPercent on the track: we shift it left by (count-1) "slots".
      // Formula: shift% = ((count-1) / count) * 100
      // This ensures the last image lands flush at the right edge.
      const slidePercent = -((count - 1) / count) * 100;

      // ── Horizontal slide tween ───────────────────────────────────────────
      gsap.to(track, {
        xPercent: slidePercent,
        ease: "none", // raw scrub — easing comes from scrub lag
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",       // pin when section top hits viewport top
          end: () => `+=${window.innerWidth * (count - 1)}`, // scroll dist = (n-1) viewport widths
          pin: true,              // hold section in place while scrolling
          scrub: 1.5,             // smooth lag makes it feel weighty/premium
          anticipatePin: 1,       // pre-calculate pin to avoid jump
          invalidateOnRefresh: true, // recalculate on resize
          onUpdate: (self) => {
            // Update progress bar width as scroll progresses
            const bar = sectionRef.current?.querySelector(".gl-progress-bar");
            if (bar) bar.style.transform = `scaleX(${self.progress})`;
          },
        },
      });

      // ── Image entrance: fade + slight Y as each card enters view ────────
      // These fire once as they become visible in the horizontal track
      images.forEach((img, i) => {
        gsap.fromTo(
          img,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.0,
            ease: "power3.out",
            delay: i * 0.08,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              once: true,
            },
          }
        );

        // Hover scale on image — desktop only
        const imgEl = img.querySelector("img");
        if (imgEl) {
          img.addEventListener("mouseenter", () =>
            gsap.to(imgEl, { scale: 1.07, duration: 0.6, ease: "power2.out" })
          );
          img.addEventListener("mouseleave", () =>
            gsap.to(imgEl, { scale: 1, duration: 0.65, ease: "power2.out" })
          );
        }
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    pinCtxRef.current = ctx;
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="py-0 overflow-hidden bg-forest-950"
    >
      {/* ── Section header — visible above the horizontal track ── */}
      <div className="section-padding pt-24 pb-10">
        <SectionTitle
          eyebrow="The Gallery"
          title="Where Craft Meets Character"
          subtitle="Drag along — a glimpse into the Baron's experience."
        />
      </div>

      {/* ── Horizontal image track ─────────────────────────────────────────
          flex row, each .gl-item is 38vw wide (desktop).
          track total width = 6 × 38vw = 228vw.
          GSAP slides it left via xPercent.
      ─── */}
      <div
        ref={trackRef}
        className="flex flex-row will-change-transform"
        style={{ width: `${GALLERY_IMAGES.length * 38}vw` }}
      >
        {GALLERY_IMAGES.map((img, i) => (
          <div
            key={img.id}
            className="gl-item relative flex-shrink-0 overflow-hidden cursor-pointer group"
            style={{
              width: "38vw",
              height: "60vh",
              minHeight: "360px",
              paddingRight: i < GALLERY_IMAGES.length - 1 ? "3px" : 0,
            }}
          >
            {/* Image */}
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading={i < 2 ? "eager" : "lazy"}
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80";
              }}
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/45 transition-colors duration-500 flex items-end p-7">
              {/* Number badge */}
              <span className="absolute top-6 right-7 font-mono text-[10px] text-cream-100/30 tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* Caption */}
              <span className="text-cream-100 font-mono text-[11px] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
                {img.alt}
              </span>
            </div>

            {/* Bottom gold line — appears on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
          </div>
        ))}
      </div>

      {/* ── Scroll progress bar + hint ─────────────────────────────────────── */}
      <div className="section-padding py-6 flex items-center justify-between">
        {/* Gold progress bar — width driven by GSAP onUpdate */}
        <div className="flex-1 max-w-xs h-px bg-forest-700 relative overflow-hidden">
          <div
            className="gl-progress-bar absolute inset-y-0 left-0 right-0 bg-gold-500 origin-left"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        {/* Scroll hint text */}
        <span className="font-mono text-[10px] text-cream-400/40 tracking-widest uppercase ml-6 hidden md:block">
          Scroll to explore
        </span>
      </div>
    </section>
  );
};

export default Gallery;

