/**
 * Lenis Smooth Scroll — singleton setup connected to GSAP's RAF ticker.
 *
 * Why connect to GSAP ticker?
 * ScrollTrigger reads scroll position on every GSAP tick. If Lenis drives
 * the scroll but GSAP ticks independently, scroll-based animations stutter.
 * Connecting them to the same ticker keeps everything perfectly in sync.
 */
import Lenis from 'lenis';
import { gsap } from './animations';

/** @type {Lenis | null} */
let lenisInstance = null;

/**
 * Creates (or returns the existing) Lenis smooth-scroll instance.
 * Safe to call multiple times — only one instance is ever created.
 *
 * @returns {Lenis}
 */
export function createLenis() {
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    // Duration (seconds) of the smoothing inertia
    duration: 1.2,
    // Custom easing — exponential decay feels natural and premium
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    // Slightly stronger touch inertia for mobile
    touchMultiplier: 2,
    // Prevent Lenis from interfering with any horizontal scroll areas
    syncTouch: false,
  });

  // ── Connect Lenis RAF to GSAP ticker ─────────────────────────────────
  // GSAP's ticker calls our callback every frame, passing time in seconds.
  // Lenis.raf() expects milliseconds, so we multiply by 1000.
  gsap.ticker.add((time) => {
    lenisInstance.raf(time * 1000);
  });

  // ── Disable GSAP's built-in lag smoothing ────────────────────────────
  // Lenis handles frame pacing itself; GSAP's lag smoothing would
  // interfere and create a "double-smoothing" artifact.
  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

/**
 * Destroys the Lenis instance and removes it from the GSAP ticker.
 * Call this in cleanup (e.g., React effect teardown).
 */
export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}
