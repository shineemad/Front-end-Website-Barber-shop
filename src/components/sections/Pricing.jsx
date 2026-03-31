import { useRef, useEffect } from 'react';
import { gsap } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { PRICING } from '../../constants/data';

const PricingCard = ({ plan, index }) => (
  <div
    className={`pr-card group relative flex flex-col border transition-all duration-700 overflow-hidden ${
      plan.featured
        ? 'border-gold-500/80 bg-forest-800 shadow-[0_0_40px_rgba(201,168,76,0.08)]'
        : 'border-forest-700 bg-forest-900 hover:border-forest-600'
    }`}
    style={{ willChange: 'transform, opacity' }}
  >
    {/* Top gold shimmer line for featured */}
    {plan.featured && (
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent z-20" />
    )}

    {/* Most Popular badge */}
    {plan.featured && (
      <span className="absolute top-5 right-5 bg-gold-500 text-forest-900 text-[10px] font-mono font-bold tracking-widest px-3 py-1 uppercase z-20">
        Most Popular
      </span>
    )}

    {/* ── Card image ── */}
    <div className="relative h-52 flex-shrink-0 overflow-hidden bg-forest-800">
      <img
        src={plan.image}
        alt={`${plan.tier} barbershop experience`}
        width="600"
        height="400"
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        loading={index === 0 ? 'eager' : 'lazy'}
        decoding="async"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      {/* Forest-green gradient overlay matching site tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/20 via-forest-900/10 to-forest-900" />

      {/* Tier label pinned bottom-left of image */}
      <div className="absolute bottom-0 left-0 right-0 px-7 pb-5 z-10">
        <p className="text-[9px] font-mono text-gold-400 tracking-[0.25em] uppercase mb-1">
          — {plan.tier}
        </p>
        <p className="text-cream-300 text-xs font-sans leading-snug">{plan.subtitle}</p>
      </div>
    </div>

    {/* ── Card body ── */}
    <div className="px-7 pt-7 pb-9 flex flex-col flex-grow">
      {/* Price row */}
      <div className="flex items-end gap-1.5 mb-7 pb-7 border-b border-forest-700/60">
        <span className="text-gold-500 font-serif text-2xl leading-none">$</span>
        <span className="font-serif text-5xl text-cream-100 leading-none tracking-tight">
          {plan.price}
        </span>
        <span className="text-cream-400 text-xs font-mono mb-1.5 tracking-wide">/session</span>
      </div>

      {/* Services list */}
      <ul className="flex-grow space-y-3 mb-9">
        {plan.services.map((s) => (
          <li key={s} className="flex items-center gap-3 text-cream-300 text-sm font-sans">
            <span className="block w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
            {s}
          </li>
        ))}
      </ul>

      <Button
        href="#booking"
        variant={plan.featured ? 'primary' : 'secondary'}
        className="w-full text-center"
      >
        Choose {plan.tier}
      </Button>
    </div>
  </div>
);

const Pricing = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = ref.current?.querySelectorAll('.pr-card');
      if (!cards?.length) return;

      // Explicitly set initial state so GSAP has full control
      gsap.set(cards, { y: 64, opacity: 0 });

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: 'power3.out',
        stagger: 0.16,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 70%',
          once: true,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="pricing" className="py-24 md:py-36 section-padding bg-forest-950">
      <div className="mb-16">
        <SectionTitle
          eyebrow="Investment"
          title="Choose Your Experience"
          subtitle="Every package is an investment in yourself — crafted by master barbers."
          align="center"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PRICING.map((p, i) => (
          <PricingCard key={p.id} plan={p} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;

