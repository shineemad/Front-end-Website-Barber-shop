/**
 * CurtainReveal.jsx — Gold Curtain Line Reveal
 * ─────────────────────────────────────────────────────────────────────────────
 * ANIMASI:
 *   1. Garis gold tipis muncul dari kiri → kanan (scaleX: 0 → 1)
 *   2. Bersamaan: teks naik dari bawah garis (clipPath + y reveal)
 *   3. Setelah teks penuh terlihat, garis menghilang ke kanan (scaleX: 1 → 0)
 *      dengan arah keluar ke kanan (transformOrigin: right)
 *
 * Efek visual: teks seolah "tersingkap" dari balik tirai garis gold —
 * seperti mesin cetak vintage yang menstempel teks ke atas kertas.
 *
 * PENGGUNAAN:
 *   <CurtainReveal>Kata atau Frasa</CurtainReveal>
 *   <CurtainReveal tag="p" delay={0.3}>Teks subtitle</CurtainReveal>
 *
 * PROPS:
 *   children  — konten teks (string atau JSX)
 *   tag       — HTML tag wrapper (default: "div")
 *   className — class tambahan untuk wrapper teks
 *   delay     — offset delay dari ScrollTrigger (detik, default: 0)
 *   lineColor — warna garis (Tailwind class, default: "bg-gold-500")
 *
 * PERFORMA:
 *   · Hanya transform + clipPath — GPU composited
 *   · GSAP context auto-cleanup on unmount
 *   · Satu timeline per instance, satu ScrollTrigger per instance
 */
import { useRef, useEffect } from "react";
import { gsap } from "../../utils/animations";

const CurtainReveal = ({
  children,
  tag: Tag = "div",
  className = "",
  delay = 0,
  lineColor = "bg-gold-500",
}) => {
  const wrapRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 84%",
          once: true,
        },
        delay,
      });

      // ── Phase 1: Garis masuk dari kiri ───────────────────────────────────
      // scaleX: 0 → 1, transformOrigin: left center
      // Durasi 0.55s — cepat, assertif, presisi seperti barber blade
      tl.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.15, ease: "power3.inOut" }
      );

      // ── Phase 2: Teks naik dari bawah garis (clip-path reveal) ───────────
      // Mulai 0.05s setelah garis penuh → kesan garis "menyapu" teks keluar
      // clipPath polygon: teks tersembunyi di bawah → terangkat penuh
      tl.fromTo(
        textRef.current,
        {
          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          y: "0.4em", // sedikit di bawah baseline
        },
        {
          clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)",
          y: "0em",
          duration: 0.35,
          ease: "power3.out",
        },
        "-=0.1" // overlap 0.1s — teks mulai muncul saat garis hampir penuh
      );

      // ── Phase 3: Garis keluar ke kanan ────────────────────────────────────
      // scaleX: 1 → 0, transformOrigin berubah ke RIGHT center
      // Garis "meninggalkan" teks yang sudah muncul — seperti tirai terbuka
      tl.fromTo(
        lineRef.current,
        { scaleX: 1, transformOrigin: "right center" },
        { scaleX: 0, duration: 0.25, ease: "power3.inOut" },
        "-=0.3" // overlap 0.3s — garis keluar sementara teks masih naik
      );
    }, wrapRef);

    return () => ctx.revert();
  }, [delay]);

  return (
    // Outer wrapper: relative positioning untuk garis absolute
    <div ref={wrapRef} className="relative inline-block w-full">

      {/* ── Gold curtain line ─────────────────────────────────────────────────
          Positioned absolute, full width, vertically centered pada wrapper.
          z-index:10 → garis render di atas teks saat masuk (seperti curtain).
          pointer-events-none → tidak menghalangi klik/hover.
          Dimulai scaleX:0 oleh GSAP sebelum animasi.
      ─── */}
      <div
        ref={lineRef}
        className={`absolute inset-y-0 left-0 right-0 z-10 pointer-events-none ${lineColor}`}
        style={{
          transform: "scaleX(0)",
          transformOrigin: "left center",
        }}
        aria-hidden="true"
      />

      {/* ── Text content ─────────────────────────────────────────────────────
          clipPath starts at "0 100%" — hides text below the clip line.
          GSAP animates it up to "0 0%" — fully visible.
          overflow:hidden on this wrapper clips the movement.
      ─── */}
      <div style={{ overflow: "hidden" }}>
        <Tag
          ref={textRef}
          className={className}
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
            display: "block",
          }}
        >
          {children}
        </Tag>
      </div>
    </div>
  );
};

export default CurtainReveal;
