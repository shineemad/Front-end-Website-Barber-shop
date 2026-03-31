import { useRef, useEffect } from 'react';
import { gsap } from '../../utils/animations';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { PRICING } from '../../constants/data';

const PricingCard = ({ plan }) => (
  <div
    className={`pr-card relative flex flex-col border transition-all duration-500 overflow-hidden ${
      plan.featured
        ? 'border-gold-500 bg-forest-800'
        : 'border-forest-700 bg-forest-900 hover:border-forest-600'
    }`}
  >
    {/* Top gold glow for featured */}
    {plan.featured && (
      <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent z-10" />
    )}

    {/* Most Popular badge */}
    {plan.featured && (
      <span className="absolute top-4 right-4 bg-gold-500 text-forest-900 text-[10px] font-mono tracking-widest px-3 py-1 uppercase z-10">
        Most Popular
      </span>
    )}

    {/* Card image */}
    <div className="relative h-48 overflow-hidden flex-shrink-0">
      <img
        src={plan.image}
        alt={plan.tier}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      {/* Dark gradient over image */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-900/30 via-transparent to-forest-900/90" />
      {/* Tier label on image */}
      <div className="absolute bottom-4 left-6">
        <p className="text-[10px] font-mono text-gold-400 tracking-widest uppercase mb-0.5">
          {plan.tier}
        </p>
        <p className="text-cream-300 text-xs font-sans">{plan.subtitle}</p>
      </div>
    </div>

    {/* Card body */}
    <div className="p-8 md:p-10 flex flex-col flex-grow">
      {/* Price */}
      <div className="flex items-end gap-1 mb-8 pb-8 border-b border-forest-700">
        <span className="text-cream-400 text-lg font-sans">$</span>
        <span className="font-serif text-5xl text-cream-100 leading-none">{plan.price}</span>
        <span className="text-cream-400 text-sm font-sans mb-1.5">/session</span>
      </div>

      {/* Services list */}
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
  </div>
);

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

