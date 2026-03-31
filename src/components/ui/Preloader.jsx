/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║  BARON'S BARBERSHOP — Awwwards Entrance Animation                       ║
 * ║                                                                          ║
 * ║  Phase 1 │ Counter 0 → 100     power2.inOut · 2.2s                     ║
 * ║  Phase 2 │ Wipe overlay up     expo.inOut · 1.2s                       ║
 * ║  Phase 3 │ H1 char reveal      stagger yPercent + rotation · power4    ║
 * ║  Phase 4 │ Hero BG scale-down  1.5 → 1.0 · power3.out (parallel)      ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 *
 * KEY DESIGN DECISION — autoAlpha vs visibility + opacity:
 * GSAP's `autoAlpha` property manages both visibility AND opacity together:
 *   autoAlpha: 0  →  visibility:hidden  + opacity:0
 *   autoAlpha: 1  →  visibility:visible + opacity:1
 *   (during animation from 0→1: visibility:visible immediately so the element
 *    can be seen as it fades in)
 *
 * This is safer than separate `visibility` + `opacity` tweens because GSAP
 * writes these as a single inline style operation, eliminating race conditions.
 *
 * WHY NOT gsap.context() HERE:
 * gsap.context().revert() would UNDO all GSAP changes to hero elements when
 * React unmounts <Preloader /> — making them invisible again. Instead we use
 * plain tl.kill() which stops the timeline without reverting element states.
 */
import { useRef, useEffect, useState } from 'react';
import { gsap } from '../../utils/animations';

const Preloader = ({ onComplete }) => {
  const overlayRef = useRef(null);

  // Counter state — GSAP drives the value via onUpdate, React renders the digit
  const [count, setCount] = useState(0);

  useEffect(() => {
    // ── Step 1: Lock scroll ───────────────────────────────────────────────
    document.body.style.overflow = 'hidden';

    // ── Step 2: Set initial hero element states (GSAP inline styles) ─────
    //
    // These run IMMEDIATELY in the first effect frame, before the browser
    // paints. GSAP writes these as inline styles which have higher specificity
    // than our CSS visibility:hidden rules — so they "take over" control.
    //
    // Crucially: these inline styles persist across React re-renders because
    // React only reconciles styles that are listed in JSX props. Since Hero.jsx
    // has NO inline style={{ visibility:... }} props, React will never reset them.

    // H1 characters: pushed below their overflow:hidden clip, rotated slightly
    gsap.set('.hero-char', {
      yPercent: 110,
      rotation: 4,
      transformOrigin: '0 100%', // rotate from bottom-left (type-press feel)
      autoAlpha: 0,
    });

    // Background image: start zoomed in for the scale-down entrance
    gsap.set('.hero-bg-img', { scale: 1.5, autoAlpha: 0 });

    // Supporting elements: start 24px below final position, invisible
    gsap.set('.hero-reveal', { y: 24, autoAlpha: 0 });

    // ── Step 3: Build master timeline ────────────────────────────────────
    const proxy = { value: 0 }; // plain object proxy — GSAP tweens this number

    const tl = gsap.timeline({
      onComplete() {
        // Restore scroll, then notify App.jsx to unmount the Preloader.
        // requestAnimationFrame ensures GSAP has committed final states
        // to the DOM before React's setState triggers a re-render.
        document.body.style.overflow = '';
        requestAnimationFrame(() => onComplete?.());
      },
    });

    // ────────────────────────────────────────────────────────────────────
    // PHASE 1 │ Counter 0 → 100
    //
    // Tween a plain number via proxy to avoid 100 setState calls.
    // onUpdate syncs to React state for rendering — batched efficiently.
    // power2.inOut: weighted feel, slows near 100 for dramatic pause.
    // ────────────────────────────────────────────────────────────────────
    tl.to(proxy, {
      value: 100,
      duration: 2.2,
      ease: 'power2.inOut',
      onUpdate() {
        setCount(Math.round(proxy.value));
      },
    });

    // ────────────────────────────────────────────────────────────────────
    // PHASE 2 │ Wipe — overlay slides upward off screen
    //
    // 0.12s pause at "100" lets the eye register completion.
    // expo.inOut: explosive acceleration, glides gracefully off screen.
    // ────────────────────────────────────────────────────────────────────
    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: 'expo.inOut',
      delay: 0.12,
    });

    // ────────────────────────────────────────────────────────────────────
    // PHASE 3+4 │ Char reveal + BG scale (parallel, overlap with wipe end)
    //
    // Starting 0.9s before the wipe ends creates the cinematic effect where
    // content is ALREADY rising as the curtain lifts — not waiting for it.
    // ────────────────────────────────────────────────────────────────────

    // BG image: zoomed-in → natural size. The "opening" depth effect.
    // autoAlpha handles visibility:visible automatically when scale begins.
    tl.to('.hero-bg-img', {
      autoAlpha: 1,
      scale: 1,
      duration: 1.8,
      ease: 'power3.out',
    }, '-=0.9');

    // H1 chars: rise from overflow:hidden clip with stamp/type-press rotation.
    // stagger.amount:0.65 spreads stagger evenly across ALL chars regardless of count.
    tl.to('.hero-char', {
      autoAlpha: 1,
      yPercent: 0,
      rotation: 0,
      duration: 1.0,
      ease: 'power4.out',
      stagger: { amount: 0.65, from: 'start' },
    }, '<0.12'); // 0.12s after BG starts

    // Eyebrow, subtitle, CTAs — appear as chars are landing, not waiting for them
    tl.to('.hero-reveal', {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.1,
    }, '<0.5'); // 0.5s after chars start

    // ── Cleanup ──────────────────────────────────────────────────────────
    // tl.kill() STOPS the timeline but does NOT revert GSAP's inline style
    // changes — hero elements remain in their current animated state. ✅
    // ctx.revert() would undo everything, which is NOT what we want here.
    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
      style={{ backgroundColor: '#0b1f14' }}
      aria-hidden="true"
    >
      {/* Gold edge shimmer lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      {/* Editorial corner marks */}
      <div className="absolute top-7 left-7 w-5 h-5 border-t border-l border-gold-500/30" />
      <div className="absolute top-7 right-7 w-5 h-5 border-t border-r border-gold-500/30" />
      <div className="absolute bottom-7 left-7 w-5 h-5 border-b border-l border-gold-500/30" />
      <div className="absolute bottom-7 right-7 w-5 h-5 border-b border-r border-gold-500/30" />

      {/* Brand wordmark */}
      <p className="font-mono text-[10px] tracking-[0.5em] text-gold-500/50 uppercase mb-8">
        Baron's · Est. 2009
      </p>

      {/* Counter — main focal point */}
      <div
        className="font-serif text-cream-100 tabular-nums leading-none"
        style={{ fontSize: 'clamp(5rem, 20vw, 15rem)' }}
        aria-live="polite"
        aria-label={`Loading ${count} percent`}
      >
        {count}
      </div>

      {/* Percent symbol — offset slightly, smaller, gold */}
      <span
        className="font-mono text-gold-500/40 mt-2 self-end pr-[calc(50%-3ch)]"
        style={{ fontSize: 'clamp(1rem, 2.5vw, 2rem)' }}
        aria-hidden="true"
      >
        %
      </span>

      {/* Status label */}
      <p className="font-mono text-[9px] tracking-[0.4em] text-cream-400/30 uppercase mt-10">
        Preparing your experience
      </p>
    </div>
  );
};

export default Preloader;

