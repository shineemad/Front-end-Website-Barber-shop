/**
 * ╔══════════════════════════════════════════════════╗
 * ║   BARON'S BARBERSHOP  —  Project Bootstrap       ║
 * ║   Run: node bootstrap.js                         ║
 * ║   Then: npm install && npm run dev               ║
 * ╚══════════════════════════════════════════════════╝
 */

import { mkdirSync, writeFileSync } from "fs";
import { join }                     from "path";
import { fileURLToPath }            from "url";

const base  = fileURLToPath(new URL(".", import.meta.url));

const mkdir = (d) => mkdirSync(join(base, d), { recursive: true });
const write = (f, c) => {
  writeFileSync(join(base, f), c, "utf8");
  process.stdout.write("  \u2713  " + f + "\n");
};

// ── Directories ──────────────────────────────────────────────
[
  "src",
  "src/components/ui",
  "src/components/layout",
  "src/components/sections",
  "src/constants",
  "src/utils",
  "src/hooks",
  "public",
].forEach(mkdir);

process.stdout.write(
  "\n\uD83D\uDC88  BARON'S — Generating source files\u2026\n\n",
);

// ════════════════════════════════════════════════════════════
// public/favicon.svg
// ════════════════════════════════════════════════════════════
write(
  "public/favicon.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="16" fill="#0B1F14"/>
  <text x="16" y="22" text-anchor="middle" font-size="18" fill="#C9A84C" font-family="serif">B</text>
</svg>`,
);

// ════════════════════════════════════════════════════════════
// src/constants/data.js
// ════════════════════════════════════════════════════════════
write(
  "src/constants/data.js",
  `export const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Pricing',      href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const SERVICES = [
  {
    id: 1,
    icon: '\\u2726',
    title: 'Classic Cut',
    duration: '45 min',
    description:
      'Precision scissor-work and clipper technique crafted by our master barbers for the discerning gentleman.',
  },
  {
    id: 2,
    icon: '\\u25c8',
    title: 'Hot Towel Shave',
    duration: '60 min',
    description:
      'An indulgent traditional straight-razor shave with hot towels and premium shaving oils for silken skin.',
  },
  {
    id: 3,
    icon: '\\u25c6',
    title: 'Beard Sculpting',
    duration: '30 min',
    description:
      'Expert beard shaping and grooming to define your style with precision lines and natural texture.',
  },
  {
    id: 4,
    icon: '\\u25c9',
    title: 'Scalp Treatment',
    duration: '45 min',
    description:
      'Deep-cleansing scalp massage with botanical oils to stimulate growth and promote hair health.',
  },
  {
    id: 5,
    icon: '\\u2727',
    title: 'Royal Package',
    duration: '120 min',
    description:
      "The complete gentleman's experience: haircut, beard trim, hot towel shave, and scalp treatment.",
  },
  {
    id: 6,
    icon: '\\u25ce',
    title: 'Hair Coloring',
    duration: '90 min',
    description:
      'Premium color services including highlights, full color, and grey blending with luxury hair dyes.',
  },
];

export const PRICING = [
  {
    id: 1,
    tier: 'Essential',
    subtitle: 'For the modern gentleman',
    price: 85,
    featured: false,
    services: [
      'Classic Haircut',
      'Hot Towel Finish',
      'Scalp Massage',
      'Style Consultation',
    ],
  },
  {
    id: 2,
    tier: 'Signature',
    subtitle: 'Our most popular experience',
    price: 150,
    featured: true,
    services: [
      'Premium Haircut',
      'Beard Sculpting',
      'Hot Towel Shave',
      'Deep Scalp Treatment',
      'Complimentary Whisky',
    ],
  },
  {
    id: 3,
    tier: 'Royal',
    subtitle: 'The ultimate indulgence',
    price: 250,
    featured: false,
    services: [
      'Master Barber Service',
      'Full Grooming Package',
      'Hair Coloring',
      'Facial Treatment',
      'Private Lounge Access',
      'Vintage Whisky Pairing',
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Alexander Reed',
    role: 'CEO, Meridian Group',
    quote:
      "Baron's has completely redefined what I expect from a barbershop. The attention to detail and the atmosphere are truly second to none. I leave feeling like a new man every time.",
  },
  {
    id: 2,
    name: 'Marcus Sullivan',
    role: 'Film Director',
    quote:
      "As someone who appears in front of cameras, precision matters. The craftsmanship at Baron's is exceptional. They understand style on a completely different level.",
  },
  {
    id: 3,
    name: 'James Whitmore',
    role: 'Architect',
    quote:
      "The Royal Package is worth every penny. It's not just a haircut — it's an experience. The hot towel shave alone is worth the trip across the city.",
  },
  {
    id: 4,
    name: 'Sebastian Hart',
    role: 'Investment Banker',
    quote:
      "I've visited barbershops in London, New York, and Milan. Baron's rivals the very best of them, with the added warmth of genuine personal service.",
  },
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&q=80',
    alt: 'Classic barbershop cut',
    cls: 'row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=700&q=80',
    alt: 'Straight razor shave',
    cls: '',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&q=80',
    alt: 'Beard grooming',
    cls: '',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=700&q=80',
    alt: 'Barbershop interior',
    cls: '',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=700&q=80',
    alt: 'Hair styling',
    cls: 'row-span-2',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1593702288056-f5834cfbd0fe?w=700&q=80',
    alt: 'Premium barber tools',
    cls: '',
  },
];

export const STATS = [
  { value: 15,    suffix: '+', label: 'Years of Excellence' },
  { value: 12000, suffix: '+', label: 'Happy Clients' },
  { value: 8,     suffix: '',  label: 'Master Barbers' },
  { value: 99,    suffix: '%', label: 'Satisfaction Rate' },
];

export const MARQUEE_ITEMS = [
  'Classic Cut', 'Hot Towel Shave', 'Beard Sculpting',
  'Scalp Treatment', 'Precision Grooming', 'Royal Package',
  'Hair Coloring', "Gentleman's Style",
];
`,
);

// ════════════════════════════════════════════════════════════
// src/utils/animations.js
// ════════════════════════════════════════════════════════════
write(
  "src/utils/animations.js",
  `import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Global GSAP defaults
gsap.defaults({ ease: 'power3.out', duration: 1 });

export { gsap, ScrollTrigger };

// ── Helpers ──────────────────────────────────────────────────

/** Fade & translate-Y entrance */
export const fadeUp = (targets, vars = {}) =>
  gsap.from(targets, {
    y:        vars.y        ?? 60,
    opacity:  0,
    duration: vars.duration ?? 1,
    ease:     vars.ease     ?? 'power3.out',
    stagger:  vars.stagger  ?? 0,
    delay:    vars.delay    ?? 0,
    scrollTrigger: vars.scrollTrigger ?? null,
  });

/** Clip-path reveal from bottom edge */
export const clipReveal = (targets, vars = {}) =>
  gsap.from(targets, {
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
    duration: vars.duration ?? 1.3,
    ease:     vars.ease     ?? 'power4.out',
    stagger:  vars.stagger  ?? 0,
    scrollTrigger: vars.scrollTrigger ?? null,
  });

/** Horizontal scale-from-left for decorative lines */
export const lineReveal = (target, vars = {}) =>
  gsap.from(target, {
    scaleX:          0,
    transformOrigin: 'left center',
    duration:        vars.duration ?? 1.1,
    ease:            vars.ease     ?? 'power3.inOut',
    scrollTrigger:   vars.scrollTrigger ?? null,
  });

/** Animated counter from 0 → end */
export const countUp = (el, end, vars = {}) => {
  const obj = { v: 0 };
  return gsap.to(obj, {
    v:        end,
    duration: vars.duration ?? 2.5,
    ease:     vars.ease     ?? 'power2.out',
    scrollTrigger: vars.scrollTrigger ?? null,
    onUpdate() {
      el.textContent = Math.round(obj.v).toLocaleString() + (vars.suffix ?? '');
    },
  });
};
`,
);

// ════════════════════════════════════════════════════════════
// src/hooks/useGSAP.js
// ════════════════════════════════════════════════════════════
write(
  "src/hooks/useGSAP.js",
  `import { useEffect, useRef } from 'react';
import { gsap } from '../utils/animations';

/**
 * Wraps a GSAP context so animations are scoped
 * and automatically reverted on component unmount.
 *
 * @param {Function} callback  - receives no args; run GSAP calls inside
 * @param {Array}    deps      - effect dependency array
 * @returns {React.RefObject}  - attach to the root DOM node for scoping
 */
const useGSAP = (callback, deps = []) => {
  const scope = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(callback, scope);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scope;
};

export default useGSAP;
`,
);

// ════════════════════════════════════════════════════════════
// src/components/ui/CustomCursor.jsx
// ════════════════════════════════════════════════════════════
write(
  "src/components/ui/CustomCursor.jsx",
  `import { useEffect, useRef } from 'react';
import { gsap } from '../../utils/animations';

/**
 * Dual-layer custom cursor (dot + ring).
 * Rendered only on pointer-fine (non-touch) devices.
 */
const CustomCursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mx = 0, my = 0, rx = 0, ry = 0, rafId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      gsap.to(dotRef.current, { x: mx, y: my, duration: 0.1, ease: 'power2.out' });
    };

    const tick = () => {
      rx += (mx - rx) * 0.09;
      ry += (my - ry) * 0.09;
      gsap.set(ringRef.current, { x: rx, y: ry });
      rafId = requestAnimationFrame(tick);
    };
    tick();
    window.addEventListener('mousemove', onMove);

    // Grow ring on interactive elements
    const grow = () => {
      gsap.to(ringRef.current, { scale: 2.4, opacity: 0.3, duration: 0.3 });
      gsap.to(dotRef.current,  { scale: 0.4, duration: 0.3 });
    };
    const shrink = () => {
      gsap.to(ringRef.current, { scale: 1, opacity: 0.5, duration: 0.3 });
      gsap.to(dotRef.current,  { scale: 1, duration: 0.3 });
    };

    const attach = () =>
      document.querySelectorAll('a,button,[data-cursor]').forEach((el) => {
        el.addEventListener('mouseenter', grow);
        el.addEventListener('mouseleave', shrink);
      });
    attach();
    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[7px] h-[7px] rounded-full bg-gold-500 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-gold-500 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-50 hidden md:block"
      />
    </>
  );
};

export default CustomCursor;
`,
);

// ════════════════════════════════════════════════════════════
// src/components/ui/Button.jsx
// ════════════════════════════════════════════════════════════
write(
  "src/components/ui/Button.jsx",
  `import { useRef } from 'react';
import { gsap } from '../../utils/animations';

const VARIANTS = {
  primary:   'bg-gold-500 text-forest-900 border border-gold-500',
  secondary: 'bg-transparent text-gold-400 border border-gold-500',
  ghost:     'bg-transparent text-cream-200 border border-cream-300/40',
};

/**
 * Magnetic-blob button with GSAP hover effect.
 */
const Button = ({
  children,
  variant   = 'primary',
  href,
  onClick,
  className = '',
  type      = 'button',
}) => {
  const btnRef  = useRef(null);
  const blobRef = useRef(null);

  const pos = (e) => {
    const r = btnRef.current.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const onEnter = (e) => {
    const { x, y } = pos(e);
    gsap.killTweensOf(blobRef.current);
    gsap.set(blobRef.current,  { x, y, scale: 0, opacity: 1 });
    gsap.to(blobRef.current,   { scale: 5, duration: 0.6, ease: 'power2.out' });
  };

  const onLeave = (e) => {
    const { x, y } = pos(e);
    gsap.to(blobRef.current, { x, y, scale: 0, opacity: 0, duration: 0.45, ease: 'power2.in' });
  };

  const base =
    'relative overflow-hidden inline-flex items-center justify-center ' +
    'px-7 py-3.5 text-[11px] font-mono tracking-widest uppercase ' +
    'transition-colors duration-300 select-none';

  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      ref={btnRef}
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={base + ' ' + (VARIANTS[variant] || VARIANTS.primary) + ' ' + className}
    >
      <span
        ref={blobRef}
        className="absolute w-6 h-6 rounded-full bg-gold-400 pointer-events-none opacity-0"
        style={{ top: 0, left: 0, transform: 'translate(-50%,-50%)' }}
      />
      <span className="relative z-10">{children}</span>
    </Tag>
  );
};

export default Button;
`,
);

// ════════════════════════════════════════════════════════════
// src/components/ui/SectionTitle.jsx
// ════════════════════════════════════════════════════════════
write(
  "src/components/ui/SectionTitle.jsx",
  `import { useRef, useEffect } from 'react';
import { gsap } from '../../utils/animations';

/**
 * Animated section heading with eyebrow label and optional subtitle.
 * Uses clip-path reveal for the main title and fade-up for other elements.
 */
const SectionTitle = ({ eyebrow, title, subtitle, align = 'left' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el  = ref.current;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: 'top 82%', once: true },
      });

      tl.from('.st-eyebrow', { opacity: 0, y: 14, duration: 0.7, ease: 'power3.out' })
        .from('.st-line',    { scaleX: 0, transformOrigin: 'left center', duration: 0.8, ease: 'power3.inOut' }, '-=0.4')
        .from('.st-title',   {
          clipPath: 'polygon(0 100%,100% 100%,100% 100%,0 100%)',
          y: 20, duration: 1.1, ease: 'power4.out',
        }, '-=0.5')
        .from('.st-sub', { opacity: 0, y: 16, duration: 0.8, ease: 'power3.out' }, '-=0.5');
    }, el);

    return () => ctx.revert();
  }, []);

  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div ref={ref} className={'flex flex-col gap-4 ' + alignCls}>
      {eyebrow && (
        <div className="st-eyebrow flex items-center gap-3">
          <span className="st-line inline-block w-8 h-px bg-gold-500 flex-shrink-0" />
          <span className="text-gold-500 text-[11px] font-mono tracking-widest uppercase">
            {eyebrow}
          </span>
        </div>
      )}

      <div style={{ overflow: 'hidden' }}>
        <h2
          className="st-title font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-cream-100"
          style={{ clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)' }}
        >
          {title}
        </h2>
      </div>

      {subtitle && (
        <p className="st-sub font-sans text-base md:text-lg max-w-xl leading-relaxed text-cream-300">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
`,
);

// ════════════════════════════════════════════════════════════
// src/components/layout/Navbar.jsx
// ════════════════════════════════════════════════════════════
write(
  "src/components/layout/Navbar.jsx",
  `import { useRef, useEffect, useState } from 'react';
import { gsap } from '../../utils/animations';
import { NAV_LINKS } from '../../constants/data';
import Button from '../ui/Button';

const Navbar = () => {
  const navRef     = useRef(null);
  const menuRef    = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  // ── Entrance animation ───────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.35 });
      tl.from('.nav-logo',  { opacity: 0, y: -18, duration: 0.9, ease: 'power3.out' })
        .from('.nav-link',  { opacity: 0, y: -12, duration: 0.7, ease: 'power3.out', stagger: 0.07 }, '-=0.5')
        .from('.nav-cta',   { opacity: 0, x:  16, duration: 0.7, ease: 'power3.out' }, '-=0.4');
    }, navRef);

    const onScroll = () => setScrolled(window.scrollY > 55);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => { ctx.revert(); window.removeEventListener('scroll', onScroll); };
  }, []);

  // ── Mobile menu toggle animation ─────────────────────────
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    if (open) {
      gsap.to(menu, { height: 'auto', opacity: 1, duration: 0.42, ease: 'power3.out' });
    } else {
      gsap.to(menu, { height: 0,      opacity: 0, duration: 0.3,  ease: 'power3.in'  });
    }
  }, [open]);

  const navCls =
    'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ' +
    (scrolled
      ? 'bg-forest-900/96 backdrop-blur-md py-4 shadow-lg shadow-black/20 border-b border-forest-700/50'
      : 'bg-transparent py-6');

  return (
    <nav ref={navRef} className={navCls}>
      <div className="section-padding flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="nav-logo flex flex-col leading-none group">
          <span className="font-serif text-2xl md:text-[26px] text-cream-100 tracking-wider group-hover:text-gold-400 transition-colors duration-300">
            BARON'S
          </span>
          <span className="text-[9px] font-mono text-gold-500 tracking-widest uppercase">
            Est. 2009
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link relative text-cream-300 hover:text-gold-400 text-[11px] font-mono tracking-widest uppercase transition-colors duration-300 after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-gold-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block nav-cta">
          <Button href="#booking" variant="primary">Book Now</Button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] p-2 z-10"
        >
          <span className={'block w-6 h-px bg-cream-200 transition-all duration-300 origin-center ' + (open ? 'rotate-45 translate-y-[7px]' : '')} />
          <span className={'block w-6 h-px bg-cream-200 transition-all duration-300 '              + (open ? 'opacity-0' : '')} />
          <span className={'block w-6 h-px bg-cream-200 transition-all duration-300 origin-center ' + (open ? '-rotate-45 -translate-y-[7px]' : '')} />
        </button>
      </div>

      {/* Mobile menu */}
      <div ref={menuRef} className="md:hidden overflow-hidden h-0 opacity-0">
        <div className="section-padding py-7 flex flex-col gap-5 border-t border-forest-700/50">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-cream-200 hover:text-gold-400 font-mono text-sm tracking-widest uppercase transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2">
            <Button href="#booking" variant="primary" onClick={() => setOpen(false)}>
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
`,
);

// ════════════════════════════════════════════════════════════
// src/components/layout/Footer.jsx
// ════════════════════════════════════════════════════════════
write(
  "src/components/layout/Footer.jsx",
  `import { useRef, useEffect } from 'react';
import { gsap } from '../../utils/animations';
import { NAV_LINKS } from '../../constants/data';

const Footer = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.f-line', {
        scaleX: 0, transformOrigin: 'left', duration: 1.6, ease: 'power3.inOut',
        scrollTrigger: { trigger: ref.current, start: 'top 90%', once: true },
      });
      gsap.from('.f-col', {
        y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 87%', once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={ref} className="bg-forest-950 section-padding pt-16 pb-8">
      <div className="f-line w-full h-px bg-forest-700 mb-14" />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1 f-col">
          <div className="font-serif text-2xl text-cream-100 mb-0.5">BARON'S</div>
          <div className="text-[9px] font-mono text-gold-500 tracking-widest uppercase mb-4">Est. 2009</div>
          <p className="text-cream-400 text-sm font-sans leading-relaxed">
            Premium gentlemen's grooming in the heart of the city.
          </p>
          <div className="flex gap-3 mt-6">
            {['IG', 'FB', 'TW', 'YT'].map((s) => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 border border-forest-600 flex items-center justify-center text-[10px] font-mono text-cream-400 hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="f-col">
          <div className="text-[10px] font-mono text-cream-400 uppercase tracking-widest mb-5">Navigate</div>
          <ul className="space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-cream-400 hover:text-gold-400 text-sm font-sans transition-colors duration-300">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="f-col">
          <div className="text-[10px] font-mono text-cream-400 uppercase tracking-widest mb-5">Contact</div>
          <ul className="space-y-3 text-sm font-sans text-cream-400">
            <li>
              <a href="tel:+15551234567" className="hover:text-gold-400 transition-colors duration-300">
                +1 (555) 123-4567
              </a>
            </li>
            <li>
              <a href="mailto:hello@barons.com" className="hover:text-gold-400 transition-colors duration-300">
                hello@barons.com
              </a>
            </li>
            <li className="leading-relaxed pt-1">
              123 Gentleman's Row<br />New York, NY 10001
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="f-col">
          <div className="text-[10px] font-mono text-cream-400 uppercase tracking-widest mb-5">Hours</div>
          <ul className="space-y-4 text-sm font-sans text-cream-400">
            {[
              ['Mon — Fri', '9:00 am — 8:00 pm'],
              ['Saturday',  '10:00 am — 7:00 pm'],
              ['Sunday',    '11:00 am — 5:00 pm'],
            ].map(([d, h]) => (
              <li key={d}>
                <span className="text-cream-300 font-medium">{d}</span><br />{h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 f-col">
        <span className="text-cream-500 text-[11px] font-mono">
          &copy; {new Date().getFullYear()} Baron's Barbershop. All rights reserved.
        </span>
        <span className="text-cream-500 text-[11px] font-mono tracking-wider">
          Crafted with precision.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
`,
);

// ════════════════════════════════════════════════════════════
// src/components/sections/Hero.jsx
// ════════════════════════════════════════════════════════════
write(
  "src/components/sections/Hero.jsx",
  `import { useRef, useEffect } from 'react';
import { gsap } from '../../utils/animations';
import Button from '../ui/Button';

/**
 * Hero — Full-screen entry section.
 *
 * Animations:
 *  - Background overlay fade-in
 *  - Three headline lines slide up from below (clip-path + y)
 *  - Eyebrow + decorative lines reveal
 *  - Subtitle + CTAs fade up
 *  - Scroll indicator fade + bounce loop
 *  - Background parallax on scroll (scrub)
 */
const Hero = () => {
  const sectionRef = useRef(null);
  const bgRef      = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ── Intro timeline ────────────────────────────────────
      const tl = gsap.timeline({ delay: 0.2 });

      tl.from('.h-overlay',   { opacity: 0, duration: 1.4, ease: 'power2.out' })
        .from('.h-eyebrow',   { opacity: 0, y: 12, duration: 0.8 }, '-=0.7')
        .from('.h-deco',      { scaleX: 0, transformOrigin: 'center', duration: 0.9, ease: 'power3.inOut', stagger: 0 }, '-=0.5')
        .from('.h-ln1',       { y: 140, duration: 1.15, ease: 'power4.out' }, '-=0.7')
        .from('.h-ln2',       { y: 140, duration: 1.15, ease: 'power4.out' }, '-=0.95')
        .from('.h-ln3',       { y: 140, duration: 1.15, ease: 'power4.out' }, '-=0.95')
        .from('.h-sub',       { opacity: 0, y: 22, duration: 0.9 }, '-=0.65')
        .from('.h-cta',       { opacity: 0, y: 18, duration: 0.8, stagger: 0.1 }, '-=0.6')
        .from('.h-scroll',    { opacity: 0, y: -14, duration: 0.7 }, '-=0.4');

      // ── Parallax ─────────────────────────────────────────
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // ── Scroll indicator bounce ───────────────────────────
      gsap.to('.h-scroll-dot', {
        y: 14, repeat: -1, yoyo: true, duration: 1.3, ease: 'sine.inOut',
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
      {/* ── Parallax background ──────────────────────────── */}
      <div ref={bgRef} className="absolute inset-0 scale-[1.18]">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80"
          alt="Baron's Barbershop"
          className="w-full h-full object-cover object-top"
          fetchpriority="high"
        />
        <div className="h-overlay absolute inset-0 bg-forest-900/78" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/96 via-forest-950/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
      </div>

      {/* ── Decorative: right edge line ──────────────────── */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/20 to-transparent hidden lg:block" />

      {/* ── Decorative: watermark ────────────────────────── */}
      <div className="absolute right-[6vw] top-1/2 -translate-y-[55%] font-serif font-black text-[26vw] text-gold-500/[0.03] leading-none select-none pointer-events-none hidden xl:block">
        B
      </div>

      {/* ── Main content ─────────────────────────────────── */}
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

          {/* Headline — each line wrapped for clip-path */}
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
            Where precision meets tradition. Experience the finest barbering craft in an atmosphere built for the modern gentleman.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <span className="h-cta"><Button href="#booking"  variant="primary">Book Your Session</Button></span>
            <span className="h-cta"><Button href="#services" variant="secondary">Explore Services</Button></span>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────── */}
      <div className="h-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-5 h-8 rounded-full border border-cream-300/30 flex justify-center pt-1.5 overflow-hidden">
          <div className="h-scroll-dot w-px h-3 bg-gold-500 rounded-full" />
        </div>
        <span className="text-cream-500 text-[9px] font-mono tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
`,
);

// ════════════════════════════════════════════════════════════
// src/components/sections/Marquee.jsx
// ════════════════════════════════════════════════════════════
write(
  "src/components/sections/Marquee.jsx",
  `import { useRef, useEffect } from 'react';
import { gsap } from '../../utils/animations';
import { MARQUEE_ITEMS } from '../../constants/data';

/**
 * Infinite marquee ticker — gold background, serif italic text.
 * Pure CSS animation; GSAP used only for entrance reveal.
 */
const Marquee = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 96%', once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  // Double items so the seamless loop works
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div ref={ref} className="py-5 bg-gold-500 overflow-hidden select-none border-y border-gold-600">
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 28s linear infinite' }}>
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-5 mx-5 text-forest-900 font-serif text-lg md:text-xl italic flex-shrink-0"
          >
            {item}
            <span className="text-forest-800/50 not-italic font-sans text-base">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
`,
);

// ════════════════════════════════════════════════════════════
// src/components/sections/About.jsx
// ════════════════════════════════════════════════════════════
write(
  "src/components/sections/About.jsx",
  `import { useRef, useEffect } from 'react';
import { gsap } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { STATS } from '../../constants/data';

/**
 * About — Studio story section.
 *
 * Animations:
 *  - Image clip-path reveal (bottom → top)
 *  - Image subtle parallax (scrub)
 *  - Decorative gold line scale from left
 *  - Paragraphs stagger fade-up
 *  - Stat counters animate from 0
 */
const About = () => {
  const ref    = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.from('.ab-img-wrap', {
        clipPath: 'polygon(0 100%,100% 100%,100% 100%,0 100%)',
        duration: 1.6, ease: 'power4.out',
        scrollTrigger: { trigger: imgRef.current, start: 'top 76%', once: true },
      });

      // Parallax inside image
      gsap.to('.ab-img', {
        yPercent: -12, ease: 'none',
        scrollTrigger: {
          trigger: imgRef.current,
          start: 'top bottom', end: 'bottom top', scrub: true,
        },
      });

      // Gold divider line
      gsap.from('.ab-line', {
        scaleX: 0, transformOrigin: 'left', duration: 1.1, ease: 'power3.inOut',
        scrollTrigger: { trigger: '.ab-line', start: 'top 86%', once: true },
      });

      // Text paragraphs
      gsap.from('.ab-para', {
        y: 34, opacity: 0, duration: 0.9, stagger: 0.18,
        scrollTrigger: { trigger: '.ab-para', start: 'top 84%', once: true },
      });

      // Stat counters
      document.querySelectorAll('.ab-stat').forEach((el, i) => {
        const valEl  = el.querySelector('.ab-stat-val');
        const end    = parseInt(valEl.dataset.end, 10);
        const suffix = valEl.dataset.suffix || '';

        gsap.from(el, {
          y: 24, opacity: 0, duration: 0.8, delay: i * 0.11,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });

        const obj = { v: 0 };
        gsap.to(obj, {
          v: end, duration: 2.6, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          onUpdate() {
            valEl.textContent = Math.round(obj.v).toLocaleString() + suffix;
          },
        });
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="about" className="py-24 md:py-36 section-padding overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

        {/* ── Image column ───────────────────────────────── */}
        <div ref={imgRef} className="relative">
          <div
            className="ab-img-wrap relative overflow-hidden"
            style={{ clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)' }}
          >
            <img
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900&q=80"
              alt="Inside Baron's Barbershop"
              className="ab-img w-full h-[480px] md:h-[620px] object-cover scale-[1.15]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/55 to-transparent" />
          </div>

          {/* Floating years badge */}
          <div className="absolute -bottom-6 -right-4 md:-right-8 bg-gold-500 p-6 text-forest-900 hidden sm:block z-10">
            <div className="font-serif text-4xl font-bold leading-none">15</div>
            <div className="text-[10px] font-mono uppercase tracking-wider mt-1">Years of Craft</div>
          </div>

          {/* Corner frame accent */}
          <div className="absolute -top-5 -left-5 w-24 h-24 border border-gold-500/20 pointer-events-none hidden md:block" />
        </div>

        {/* ── Content column ─────────────────────────────── */}
        <div className="space-y-7">
          <SectionTitle
            eyebrow="Our Story"
            title="Crafted with Passion, Perfected Over Time"
          />

          <div className="ab-line w-20 h-px bg-gold-500" />

          <p className="ab-para font-sans text-cream-300 text-[15px] leading-relaxed">
            Founded in 2009 by master barber James Baron, our establishment was built on the belief
            that every man deserves an extraordinary grooming experience — a seamless blend of
            timeless traditions and modern sophistication.
          </p>
          <p className="ab-para font-sans text-cream-300 text-[15px] leading-relaxed">
            Our team of handpicked master barbers has trained across London, Milan, and New York,
            bringing a world-class standard to every appointment. We use only the finest tools and
            premium grooming products sourced from around the globe.
          </p>

          <div className="ab-para">
            <Button href="#services" variant="secondary">Discover Our Services</Button>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-forest-700">
            {STATS.map((s) => (
              <div key={s.label} className="ab-stat">
                <div className="font-serif text-3xl text-gold-500 leading-none">
                  <span className="ab-stat-val" data-end={s.value} data-suffix={s.suffix}>
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
`,
);

// ════════════════════════════════════════════════════════════
// src/components/sections/Services.jsx
// ════════════════════════════════════════════════════════════
write(
  "src/components/sections/Services.jsx",
  `import { useRef, useEffect } from 'react';
import { gsap } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import { SERVICES } from '../../constants/data';

const ServiceCard = ({ service, index }) => (
  <article className="svc-card group relative border border-forest-700 hover:border-gold-500/35 p-8 overflow-hidden bg-forest-900 transition-colors duration-500">
    {/* Hover fill */}
    <div className="absolute inset-0 bg-forest-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    {/* Index number */}
    <span className="absolute top-6 right-7 font-mono text-sm text-forest-600 group-hover:text-gold-500/25 transition-colors duration-400 select-none">
      {String(index + 1).padStart(2, '0')}
    </span>

    <div className="relative z-10">
      <div className="text-2xl text-gold-500 mb-5">{service.icon}</div>

      <h3 className="font-serif text-xl text-cream-100 mb-3 group-hover:text-gold-400 transition-colors duration-300">
        {service.title}
      </h3>

      <p className="font-sans text-cream-400 text-sm leading-relaxed mb-7">
        {service.description}
      </p>

      <div className="flex items-center gap-2">
        <span className="w-4 h-px bg-gold-500" />
        <span className="text-gold-500 text-[11px] font-mono tracking-wider">{service.duration}</span>
      </div>
    </div>

    {/* Bottom gold sweep on hover */}
    <div className="absolute bottom-0 left-0 h-px bg-gold-500 w-0 group-hover:w-full transition-all duration-500 ease-out" />
  </article>
);

const Services = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-card', {
        y: 80, opacity: 0, duration: 0.9, ease: 'power3.out',
        stagger: { amount: 0.55, from: 'start' },
        scrollTrigger: { trigger: ref.current, start: 'top 65%', once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="services" className="py-24 md:py-36 section-padding bg-forest-950">
      <div className="mb-14">
        <SectionTitle
          eyebrow="Our Craft"
          title="Services for the Discerning Gentleman"
          subtitle="Every service is a ritual. Every detail, intentional."
        />
      </div>
      {/* gap-px with bg-forest-800 creates thin separator lines */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-forest-800">
        {SERVICES.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
      </div>
    </section>
  );
};

export default Services;
`,
);

// ════════════════════════════════════════════════════════════
// src/components/sections/Gallery.jsx
// ════════════════════════════════════════════════════════════
write(
  "src/components/sections/Gallery.jsx",
  `import { useRef, useEffect } from 'react';
import { gsap } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import { GALLERY_IMAGES } from '../../constants/data';

/**
 * Gallery — Masonry-style grid.
 *
 * Animations:
 *  - Each image: clip-path reveal from bottom (staggered by column position)
 *  - Hover: scale image inside container + overlay fade
 */
const Gallery = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.gl-item').forEach((el, i) => {
        gsap.from(el, {
          clipPath: 'polygon(0 100%,100% 100%,100% 100%,0 100%)',
          duration: 1.5, ease: 'power4.out',
          delay: (i % 3) * 0.13,
          scrollTrigger: { trigger: el, start: 'top 82%', once: true },
        });

        const img = el.querySelector('img');
        el.addEventListener('mouseenter', () =>
          gsap.to(img, { scale: 1.08, duration: 0.65, ease: 'power2.out' })
        );
        el.addEventListener('mouseleave', () =>
          gsap.to(img, { scale: 1, duration: 0.7, ease: 'power2.out' })
        );
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
            className={'gl-item relative overflow-hidden cursor-pointer group ' + img.cls}
            style={{ clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)' }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-forest-900/0 group-hover:bg-forest-900/45 transition-colors duration-500 flex items-end p-5">
              <span className="text-cream-100 font-mono text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
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
`,
);

// ════════════════════════════════════════════════════════════
// src/components/sections/Pricing.jsx
// ════════════════════════════════════════════════════════════
write(
  "src/components/sections/Pricing.jsx",
  `import { useRef, useEffect } from 'react';
import { gsap } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { PRICING } from '../../constants/data';

const PricingCard = ({ plan }) => {
  const cardCls =
    'pr-card relative flex flex-col p-8 md:p-10 border transition-all duration-500 ' +
    (plan.featured
      ? 'border-gold-500 bg-forest-800'
      : 'border-forest-700 bg-forest-900 hover:border-forest-600');

  return (
    <div className={cardCls}>
      {/* Top glow for featured */}
      {plan.featured && (
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      )}

      {/* Badge */}
      {plan.featured && (
        <span className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-gold-500 text-forest-900 text-[10px] font-mono tracking-widest px-4 py-[3px] uppercase whitespace-nowrap">
          Most Popular
        </span>
      )}

      <div className="mb-8">
        <p className="text-[10px] font-mono text-gold-500 tracking-widest uppercase mb-2">{plan.tier}</p>
        <p className="text-cream-400 text-sm mb-7 font-sans">{plan.subtitle}</p>
        <div className="flex items-end gap-1">
          <span className="text-cream-400 text-lg font-sans">$</span>
          <span className="font-serif text-5xl text-cream-100 leading-none">{plan.price}</span>
          <span className="text-cream-400 text-sm font-sans mb-1.5">/session</span>
        </div>
      </div>

      <ul className="flex-grow space-y-3 mb-10">
        {plan.services.map((s) => (
          <li key={s} className="flex items-start gap-3 text-cream-300 text-sm font-sans">
            <span className="text-gold-500 font-serif flex-shrink-0 mt-0.5">—</span>
            {s}
          </li>
        ))}
      </ul>

      <Button
        href="#booking"
        variant={plan.featured ? 'primary' : 'secondary'}
        className="w-full"
      >
        Choose {plan.tier}
      </Button>
    </div>
  );
};

const Pricing = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pr-card', {
        y: 56, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.18,
        scrollTrigger: { trigger: ref.current, start: 'top 65%', once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="pricing" className="py-24 md:py-36 section-padding bg-forest-950">
      <div className="mb-14">
        <SectionTitle
          eyebrow="Investment"
          title="Choose Your Experience"
          subtitle="Every package is an investment in yourself."
          align="center"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PRICING.map((p) => <PricingCard key={p.id} plan={p} />)}
      </div>
    </section>
  );
};

export default Pricing;
`,
);

// ════════════════════════════════════════════════════════════
// src/components/sections/Testimonials.jsx
// ════════════════════════════════════════════════════════════
write(
  "src/components/sections/Testimonials.jsx",
  `import { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import { TESTIMONIALS } from '../../constants/data';

const Stars = () => (
  <div className="flex justify-center gap-1 mt-4">
    {[0,1,2,3,4].map((i) => (
      <span key={i} className="text-gold-500 text-sm">&#9733;</span>
    ))}
  </div>
);

/**
 * Testimonials — Auto-advancing quote slider.
 *
 * Animations:
 *  - Section fade-up entrance
 *  - Quote cross-fade (opacity + y) on slide change
 *  - Auto-advances every 5.5 s
 */
const Testimonials = () => {
  const ref      = useRef(null);
  const quoteRef = useRef(null);
  const [active, setActive] = useState(0);

  // Section entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ts-inner', {
        opacity: 0, y: 40, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  // Slide change animation
  const goTo = useCallback((idx) => {
    if (idx === active) return;
    const el = quoteRef.current;
    gsap.to(el, {
      opacity: 0, y: 20, duration: 0.32, ease: 'power2.in',
      onComplete: () => {
        setActive(idx);
        gsap.fromTo(el,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.52, ease: 'power3.out' }
        );
      },
    });
  }, [active]);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(
      () => goTo((active + 1) % TESTIMONIALS.length),
      5500
    );
    return () => clearInterval(id);
  }, [active, goTo]);

  const t = TESTIMONIALS[active];

  return (
    <section ref={ref} id="testimonials" className="py-24 md:py-36 section-padding overflow-hidden">
      <div className="max-w-4xl mx-auto ts-inner">
        <SectionTitle
          eyebrow="Testimonials"
          title="Words from Our Gentlemen"
          align="center"
        />

        {/* Decorative oversized quote mark */}
        <div
          aria-hidden="true"
          className="text-gold-500/[0.07] font-serif text-[160px] leading-none text-center select-none -mb-16 mt-4 hidden md:block"
        >
          &ldquo;
        </div>

        {/* Quote content */}
        <div ref={quoteRef} className="text-center mt-14 px-2 md:px-10">
          <blockquote className="font-serif text-xl md:text-2xl text-cream-200 leading-relaxed italic mb-8">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-5">
            <div className="w-10 h-px bg-gold-500" />
            <div>
              <div className="font-sans font-medium text-cream-100 text-sm tracking-wide">{t.name}</div>
              <div className="font-mono text-gold-500 text-[10px] tracking-widest uppercase mt-0.5">{t.role}</div>
            </div>
            <div className="w-10 h-px bg-gold-500" />
          </div>

          <Stars />
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2.5 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={'Go to testimonial ' + (i + 1)}
              className={'transition-all duration-300 rounded-sm ' +
                (i === active
                  ? 'w-8 h-1.5 bg-gold-500'
                  : 'w-1.5 h-1.5 rounded-full bg-forest-600 hover:bg-forest-500')}
            />
          ))}
        </div>

        {/* First-name tabs */}
        <div className="flex justify-center gap-6 mt-7 flex-wrap">
          {TESTIMONIALS.map((t2, i) => (
            <button
              key={t2.id}
              onClick={() => goTo(i)}
              className={'text-[10px] font-mono tracking-widest uppercase transition-colors duration-300 ' +
                (i === active ? 'text-gold-500' : 'text-cream-500 hover:text-cream-300')}
            >
              {t2.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
`,
);

// ════════════════════════════════════════════════════════════
// src/components/sections/Booking.jsx
// ════════════════════════════════════════════════════════════
write(
  "src/components/sections/Booking.jsx",
  `import { useRef, useEffect } from 'react';
import { gsap } from '../../utils/animations';
import Button from '../ui/Button';

/**
 * Booking CTA — Full-width dark section with dramatic reveal.
 *
 * Animations:
 *  - Gold edge lines scale from left
 *  - Eyebrow label fade-up
 *  - Headline clip-path reveal
 *  - Subtitle & buttons stagger fade-up
 *  - Hours stagger fade-up
 */
const Booking = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: 'top 65%', once: true },
      });

      tl.from('.bk-topline', { scaleX: 0, transformOrigin: 'left', duration: 1.6, ease: 'power3.inOut' })
        .from('.bk-eye',     { opacity: 0, y: 12, duration: 0.7 }, '-=0.9')
        .from('.bk-title',   {
          clipPath: 'polygon(0 100%,100% 100%,100% 100%,0 100%)',
          y: 32, duration: 1.2, ease: 'power4.out',
        }, '-=0.6')
        .from('.bk-sub',     { opacity: 0, y: 18, duration: 0.9 }, '-=0.7')
        .from('.bk-btn',     { opacity: 0, y: 16, duration: 0.8, stagger: 0.11 }, '-=0.55')
        .from('.bk-hour',    { opacity: 0, y: 14, duration: 0.7, stagger: 0.09 }, '-=0.45');
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="booking"
      className="relative py-32 md:py-44 section-padding overflow-hidden bg-forest-900"
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80"
          alt=""
          className="w-full h-full object-cover opacity-[0.08]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-forest-900/88" />
      </div>

      {/* Gold accent lines */}
      <div className="bk-topline absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="bk-eye text-gold-500 text-[11px] font-mono tracking-widest uppercase mb-9">
          Reserve Your Chair
        </p>

        <div style={{ overflow: 'hidden' }}>
          <h2
            className="bk-title font-serif text-5xl md:text-7xl lg:text-[88px] text-cream-100 leading-[1.05] mb-9"
            style={{ clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)' }}
          >
            Begin Your
            <span className="block text-gold-500 italic">Transformation</span>
          </h2>
        </div>

        <p className="bk-sub font-sans text-cream-300 text-base md:text-lg max-w-lg mx-auto leading-relaxed mb-12">
          Reserve your session with one of our master barbers and step into a world where
          grooming becomes an art form.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <span className="bk-btn"><Button href="tel:+15551234567"      variant="primary">Call to Book</Button></span>
          <span className="bk-btn"><Button href="mailto:hello@barons.com" variant="ghost">Send a Message</Button></span>
        </div>

        {/* Opening hours */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 border-t border-forest-700 pt-12">
          {[
            { day: 'Mon — Fri', time: '9am — 8pm'  },
            { day: 'Saturday',  time: '10am — 7pm' },
            { day: 'Sunday',    time: '11am — 5pm' },
          ].map(({ day, time }) => (
            <div key={day} className="bk-hour">
              <div className="text-cream-400 text-[10px] font-mono uppercase tracking-wider mb-1.5">{day}</div>
              <div className="text-cream-100 font-serif text-lg leading-tight">{time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Booking;
`,
);

// ════════════════════════════════════════════════════════════
// src/App.jsx
// ════════════════════════════════════════════════════════════
write(
  "src/App.jsx",
  `import { useEffect } from 'react';
import { ScrollTrigger } from './utils/animations';

import CustomCursor    from './components/ui/CustomCursor';
import Navbar          from './components/layout/Navbar';
import Footer          from './components/layout/Footer';
import Hero            from './components/sections/Hero';
import Marquee         from './components/sections/Marquee';
import About           from './components/sections/About';
import Services        from './components/sections/Services';
import Gallery         from './components/sections/Gallery';
import Pricing         from './components/sections/Pricing';
import Testimonials    from './components/sections/Testimonials';
import Booking         from './components/sections/Booking';

function App() {
  useEffect(() => {
    // Give fonts/images time to load before calculating positions
    const t = setTimeout(() => ScrollTrigger.refresh(), 500);
    return () => {
      clearTimeout(t);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

export default App;
`,
);

// ════════════════════════════════════════════════════════════
// src/index.css
// ════════════════════════════════════════════════════════════
write(
  "src/index.css",
  `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    overflow-x: hidden;
    /* Let GSAP handle scroll smoothness — no CSS scroll-behavior */
    scroll-behavior: auto;
  }

  body {
    background-color: #0B1F14;
    color: #F5F0E8;
    font-family: 'DM Sans', system-ui, sans-serif;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Hide OS cursor only on pointer-fine devices (mouse) */
  @media (pointer: fine) {
    body      { cursor: none; }
    a, button { cursor: none; }
  }

  /* Slim gold scrollbar */
  ::-webkit-scrollbar        { width: 3px; }
  ::-webkit-scrollbar-track  { background: #05110A; }
  ::-webkit-scrollbar-thumb  { background: #C9A84C; border-radius: 2px; }

  /* Gold text selection */
  ::selection { background-color: #C9A84C; color: #0B1F14; }
}

@layer components {
  .section-padding {
    @apply px-5 sm:px-8 md:px-14 lg:px-20 xl:px-28 2xl:px-40;
  }
}

/* ── Marquee keyframe ───────────────────────────────────── */
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`,
);

// ════════════════════════════════════════════════════════════
// src/main.jsx
// ════════════════════════════════════════════════════════════
write(
  "src/main.jsx",
  `import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
`,
);

// ════════════════════════════════════════════════════════════
// Done
// ════════════════════════════════════════════════════════════
process.stdout.write("\n\u2705  Done! All source files created.\n\n");
process.stdout.write("  Next steps:\n\n");
process.stdout.write("    1.  npm install\n");
process.stdout.write("    2.  npm run dev\n");
process.stdout.write("    3.  Open http://localhost:5173\n\n");
