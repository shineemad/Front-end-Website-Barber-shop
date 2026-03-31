/**
 * Hero.jsx
 *
 * FOUC strategy: ALL animated elements start hidden via CSS class rules
 * (see index.css). No inline style={{ visibility:'hidden' }} in JSX — that
 * would be restored by React re-renders, overriding GSAP's changes.
 *
 * Animation ownership:
 *   Preloader.jsx  → .hero-char, .hero-bg-img, .hero-reveal
 *   Hero.jsx       → parallax scroll, post-preloader decorative elements
 *
 * Scroll-inducing elements added:
 *   · Left vertical gold line  (draws down after preloader — eye tracks down)
 *   · Scanning scroll track    (CSS animation, zero JS per frame)
 *   · Section counter "01/08" (editorial, suggests there is more)
 *   · Marquee peek strip       (2px gold strip at bottom — teases next section)
 *   · Floating accent lines    (mouse parallax — adds perceived depth)
 */
import { useRef, useEffect, memo } from 'react';
import { gsap } from '../../utils/animations';
import Button from '../ui/Button';

/**
 * Splits `text` into individual .hero-char <span>s for GSAP character reveal.
 *
 * Structure:
 *   <span class="inline-block overflow-hidden">   ← clips the animation
 *     <span class="hero-char inline-block">        ← the moving element
 *   </span>
 *
 * When GSAP animates hero-char from yPercent:110→0, the outer overflow:hidden
 * parent clips it until it rises into the visible area — the "stamp/curtain" reveal.
 */
const SplitChars = memo(({ text }) =>
  text.split('').map((char, i) => (
    <span key={i} className="inline-block overflow-hidden align-bottom">
      <span className="hero-char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    </span>
  ))
);

const Hero = () => {
  const sectionRef = useRef(null);
  const bgRef       = useRef(null);
  const postCtxRef  = useRef(null); // holds GSAP context for post-preloader anims

  // ── Scroll-based animations ─────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax: BG image drifts up at 28% of scroll speed, creating depth
      gsap.to(bgRef.current, {
        yPercent: 28,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // ── Post-preloader reveal: decorative / scroll-inducing elements ────────
  // Triggered by the 'preloader:done' custom event dispatched from App.jsx.
  // Using an event (not hardcoded delay) keeps timing robust & decoupled.
  useEffect(() => {
    const onDone = () => {
      postCtxRef.current = gsap.context(() => {

        // Left vertical gold line: scaleY 0→1 draws from top → bottom
        // Eye naturally follows a line drawing downward → implies "scroll down"
        gsap.fromTo('.hero-left-line',
          { scaleY: 0, transformOrigin: 'top center', autoAlpha: 0 },
          { scaleY: 1, autoAlpha: 1, duration: 1.8, ease: 'power3.inOut', delay: 0.2 }
        );

        // Floating accent lines: fade in with mouse-parallax depth effect
        gsap.fromTo('.hero-deco-float',
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 2.0, ease: 'power2.out', delay: 0.4 }
        );

        // Scroll track + counter: slides up and fades in
        gsap.fromTo('.hero-scroll-track',
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 1.0, ease: 'power3.out', delay: 0.6 }
        );

        // Start the CSS scroll-dot animation by removing 'paused'
        gsap.delayedCall(0.8, () => {
          document.querySelectorAll('.hero-scroll-dot').forEach(el => {
            el.style.animationPlayState = 'running';
          });
        });

        // Marquee peek: thin gold strip at viewport bottom — teases next section
        gsap.fromTo('.hero-marquee-peek',
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 1.5, ease: 'power2.out', delay: 1.0 }
        );

      }, sectionRef);
    };

    window.addEventListener('preloader:done', onDone, { once: true });
    return () => {
      window.removeEventListener('preloader:done', onDone);
      postCtxRef.current?.revert();
    };
  }, []);

  // ── Mouse parallax — decorative float elements only (desktop) ──────────
  // gsap.quickTo creates a persistent tween that UPDATES each call instead
  // of creating a new tween — extremely efficient, no garbage collection pressure.
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const xTo = gsap.quickTo('.hero-deco-float', 'x', { duration: 1.6, ease: 'power2.out' });
    const yTo = gsap.quickTo('.hero-deco-float', 'y', { duration: 1.6, ease: 'power2.out' });

    const onMove = ({ clientX, clientY }) => {
      // Max ±20px horizontal, ±12px vertical — very subtle depth cue
      xTo((clientX / window.innerWidth  - 0.5) * 40);
      yTo((clientY / window.innerHeight - 0.5) * 24);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen min-h-[640px] flex items-center overflow-hidden"
    >
      {/* ── Parallax BG ──────────────────────────────────────────────────────
          .hero-bg-img: hidden by CSS, revealed by Preloader via autoAlpha.
          Note: bgRef is on this wrapper — GSAP applies yPercent (parallax)
          to this element. Scale is applied by Preloader on the same element.
          Both transforms compose correctly on the same DOM node.
      ─── */}
      <div ref={bgRef} className="hero-bg-img absolute inset-0">
        {/* 🖼️ GANTI GAMBAR — Hero Background (full screen, 1920px lebar) */}
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover object-top"
          fetchpriority="high"
        />
        {/* Layered overlays build the dark, premium atmosphere */}
        <div className="absolute inset-0 bg-forest-900/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/96 via-forest-950/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
      </div>

      {/* ── Left decorative vertical line ────────────────────────────────────
          .hero-left-line: CSS hides it, Hero.jsx reveals it post-preloader.
          scaleY:0→1 animation from top draws the eye downward.
      ─── */}
      <div className="hero-left-line absolute left-6 md:left-10 top-[12%] bottom-[12%] w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent hidden md:block" />

      {/* ── Floating accent lines (mouse parallax target) ─────────────────── */}
      <div className="hero-deco-float absolute inset-0 pointer-events-none hidden lg:block" aria-hidden="true">
        {/* Top-right corner accents */}
        <div className="absolute top-[20%] right-[8%] space-y-1.5">
          <div className="w-16 h-px bg-gold-500/15 ml-auto" />
          <div className="w-8  h-px bg-gold-500/10  ml-auto" />
        </div>
        {/* Bottom-left corner accents */}
        <div className="absolute bottom-[28%] left-[8%] space-y-1.5">
          <div className="w-8  h-px bg-gold-500/10" />
          <div className="w-14 h-px bg-gold-500/15" />
        </div>
      </div>

      {/* Right accent line */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden lg:block" />

      {/* Giant watermark "B" — purely decorative */}
      <div className="absolute right-[6vw] top-1/2 -translate-y-[55%] font-serif font-black text-[26vw] text-gold-500/[0.03] leading-none select-none pointer-events-none hidden xl:block" aria-hidden="true">
        B
      </div>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="relative z-10 section-padding w-full pt-24">
        <div className="max-w-5xl">

          {/* Eyebrow — .hero-reveal: Preloader animates this */}
          <div className="hero-reveal flex items-center gap-4 mb-8">
            <span className="w-10 h-px bg-gold-500 inline-block flex-shrink-0" />
            <span className="text-gold-500 text-[11px] font-mono tracking-widest uppercase whitespace-nowrap">
              Premium Gentlemen's Grooming
            </span>
            <span className="w-10 h-px bg-gold-500 inline-block flex-shrink-0" />
          </div>

          {/* ── H1 — characters split for Preloader's stagger animation ────
              aria-label provides the full phrase for screen readers.
              Each <SplitChars> call returns an array of two-span structures.
          ─── */}
          <h1 aria-label="The Art of the Gentleman">
            {/* Line 1 — cream */}
            <div className="leading-none mb-1">
              <p className="font-serif text-[13.5vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5rem] text-cream-100 leading-[0.92] tracking-tight">
                <SplitChars text="The Art" />
              </p>
            </div>
            {/* Line 2 — gold italic accent */}
            <div className="leading-none mb-1">
              <p className="font-serif text-[13.5vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5rem] text-gold-500 leading-[0.92] tracking-tight italic">
                <SplitChars text="of the" />
              </p>
            </div>
            {/* Line 3 — cream */}
            <div className="leading-none mb-10">
              <p className="font-serif text-[13.5vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[8.5rem] text-cream-100 leading-[0.92] tracking-tight">
                <SplitChars text="Gentleman" />
              </p>
            </div>
          </h1>

          {/* Subtitle — .hero-reveal */}
          <p className="hero-reveal font-sans text-cream-300 text-base md:text-[17px] max-w-[420px] leading-relaxed mb-10">
            Where precision meets tradition. Experience the finest barbering
            craft in an atmosphere built for the modern gentleman.
          </p>

          {/* CTAs — each span is a separate .hero-reveal for individual stagger */}
          <div className="flex flex-wrap gap-4">
            <span className="hero-reveal">
              <Button href="#booking" variant="primary">Book Your Session</Button>
            </span>
            <span className="hero-reveal">
              <Button href="#services" variant="secondary">Explore Services</Button>
            </span>
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ──────────────────────────────────────────────────
          .hero-scroll-track: hidden by CSS, revealed by Hero.jsx post-preloader.
          The CSS @keyframes scrollScan runs the dot top→bottom on loop.
          "01 / 08" section counter is an editorial cue common on Awwwards sites
          — it tells the user there are 8 sections, inviting exploration.
      ─── */}
      <div className="hero-scroll-track absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        {/* Section counter */}
        <span className="font-mono text-[9px] tracking-[0.3em] text-cream-400/40 uppercase">
          01 <span className="text-gold-500/30">/</span> 08
        </span>

        {/* Scanning track — CSS-animated, zero JS overhead per frame */}
        <div className="relative w-px h-14 bg-gold-500/10 overflow-hidden rounded-full">
          <div className="hero-scroll-dot absolute inset-x-0 h-5 bg-gradient-to-b from-gold-500 via-gold-500/60 to-transparent rounded-full" />
        </div>

        <span className="font-mono text-[9px] tracking-[0.3em] text-cream-400/40 uppercase">
          Scroll
        </span>
      </div>

      {/* ── Marquee peek strip ────────────────────────────────────────────────
          A 2px gold gradient strip at the very bottom edge of the hero.
          This "bleeds" the Marquee section's colour into the Hero viewport,
          creating a visual "there is content below" cue — classic Awwwards trick.
      ─── */}
      <div className="hero-marquee-peek absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-500/35 to-transparent" />
    </section>
  );
};

// memo() prevents re-renders when App state changes (e.g., preloaderDone)
// This is crucial: without memo, App re-render would re-render Hero, which
// would make React restore any inline styles — potentially undoing GSAP work.
export default memo(Hero);




