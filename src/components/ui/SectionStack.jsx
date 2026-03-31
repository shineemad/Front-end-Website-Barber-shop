/**
 * SectionStack.jsx — "Overtake" Pattern (v2)
 * ─────────────────────────────────────────────────────────────────────────────
 * KONSEP:
 *   Hero (section pertama) ter-PIN di tempat — tetap terlihat di atas.
 *   Section berikutnya (About, Services, Gallery) naik dari bawah dan
 *   MENIMPA Hero saat scroll, satu per satu.
 *
 * CARA KERJA:
 *   ┌─ heroWrapper ──────────────────────────────────────────┐
 *   │  position: sticky; top:0; z-index:1                   │
 *   │  [Hero content — TIDAK BERGERAK]                      │
 *   └────────────────────────────────────────────────────────┘
 *        ↑ Hero tertahan di sini
 *
 *   ┌─ sp-panel (About) ─────────────────────────────────────┐
 *   │  position: relative; z-index:2                        │
 *   │  ← Naik dari bawah secara natural (normal scroll)     │
 *   │  ← GSAP: rounded-top-edge saat masuk viewport         │
 *   └────────────────────────────────────────────────────────┘
 *
 *   ┌─ sp-panel (Services) ──────────────────────────────────┐
 *   │  position: relative; z-index:3                        │
 *   └────────────────────────────────────────────────────────┘
 *
 * GSAP SCROLL TRIGGER menambahkan 2 efek polish:
 *   1. Hero: scale 1.0 → 0.96 saat About menutupnya (depth illusion)
 *   2. About/Services/Gallery: clip-path rounded top → square saat naik
 *      (efek "panel muncul dari bawah dengan sudut tumpul" — Awwwards style)
 *
 * PERFORMA:
 *   ✅ Hanya `transform`, `opacity`, `clip-path` — 100% GPU composited
 *   ✅ `scrub: 1.2` — smooth, tidak mechanical
 *   ✅ `gsap.context()` scoped — single revert() cleanup
 *   ✅ Mobile: sticky di Hero dimatikan (<768px), section flow normal
 * ─────────────────────────────────────────────────────────────────────────────
 */
import { useRef, useEffect, Children, isValidElement } from 'react';
import { gsap, ScrollTrigger } from '../../utils/animations';

/**
 * @param {{ heroSection: React.ReactNode, children: React.ReactNode }} props
 * heroSection — the pinned Hero component
 * children     — sections that slide up over Hero (About, Services, Gallery...)
 */
const SectionStack = ({ heroSection, children }) => {
  const heroWrapRef    = useRef(null); // wraps the pinned Hero
  const containerRef   = useRef(null); // wraps all overtaking panels

  useEffect(() => {
    const isMobile = !window.matchMedia('(min-width: 768px)').matches;

    const ctx = gsap.context(() => {
      const panels = containerRef.current?.querySelectorAll(':scope > .sp-panel') ?? [];

      // ── Effect 1: Hero scale-down as first panel overtakes it ─────────────
      // As About rises and covers Hero, Hero subtly scales down (1 → 0.96)
      // This creates the illusion that About is "pushing" Hero into the distance.
      // Only on desktop where the pin is active.
      if (!isMobile && panels.length > 0) {
        gsap.to(heroWrapRef.current, {
          scale: 0.96,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: panels[0], // triggered by first overtaking panel (About)
            start: 'top 80%',   // starts when About is 80% into viewport
            end:   'top 0%',    // ends when About reaches the top
            scrub: 1.2,
          },
        });
      }

      // ── Effect 2: Rounded top edge on each overtaking panel ───────────────
      // As each panel rises from below, its top corners go from rounded → square.
      // This mimics a "card lifting" feel — the panel looks like a physical
      // card being slid upward from a stack.
      //
      // clip-path inset top: 4vh → 0  (slight "peek-in" offset)
      // border-radius on clip-path corners: 24px → 0px
      panels.forEach((panel) => {
        gsap.fromTo(
          panel,
          {
            // start: slightly clipped from top + rounded corners
            clipPath: 'inset(3% 0% 0% 0% round 24px 24px 0px 0px)',
          },
          {
            // end: no clip, square corners — fully covering section above
            clipPath: 'inset(0% 0% 0% 0% round 0px 0px 0px 0px)',
            ease: 'none',
            scrollTrigger: {
              trigger: panel,
              start: 'top 95%', // starts just as panel enters viewport
              end:   'top 0%',  // ends when panel is fully on screen
              scrub: 1.2,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const childArray = Children.toArray(children).filter(isValidElement);

  return (
    <>
      {/* ── Pinned Hero ───────────────────────────────────────────────────────
          position:sticky keeps Hero visible at the top.
          z-index:1 is LOWER than the panels (z:2+), so panels render ON TOP
          as they scroll up. This is what makes them visually "cover" Hero.
          On mobile: CSS overrides sticky to static (see index.css).
      ─── */}
      <div
        ref={heroWrapRef}
        className="sp-hero-pin sticky top-0"
        style={{
          zIndex: 1,
          willChange: 'transform',
        }}
      >
        {heroSection}
      </div>

      {/* ── Overtaking panels — slide up naturally, cover Hero ───────────────
          These are in normal document flow AFTER the sticky Hero wrapper.
          Because z-index: 2+ > 1, they visually appear ON TOP of Hero
          as they scroll into the viewport. No JS needed for the slide-up
          motion itself — that is pure browser scroll behaviour.
          GSAP adds the clip-path rounded-top entrance only.
      ─── */}
      <div ref={containerRef}>
        {childArray.map((child, i) => (
          <div
            key={i}
            className="sp-panel"
            style={{
              position: 'relative',
              zIndex: 2 + i, // 2, 3, 4 — each panel covers the one before
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionStack;

