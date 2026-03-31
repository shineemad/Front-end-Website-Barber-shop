import { useRef, useEffect } from "react";
import { gsap } from "../../utils/animations";
import SectionTitle from "../ui/SectionTitle";
import { SERVICES } from "../../constants/data";

const ServiceCard = ({ service, index }) => (
  <article className="svc-card group relative border border-forest-700 hover:border-gold-500/40 p-8 overflow-hidden bg-forest-900 transition-colors duration-500">
    <div className="absolute inset-0 bg-forest-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    <span className="absolute top-6 right-7 font-mono text-sm text-forest-600 group-hover:text-gold-500/25 transition-colors duration-300 select-none">
      {String(index + 1).padStart(2, "0")}
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
        <span className="text-gold-500 text-[11px] font-mono tracking-wider">
          {service.duration}
        </span>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 h-px bg-gold-500 w-0 group-hover:w-full transition-all duration-500 ease-out" />
  </article>
);

const Services = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-card", {
        y: 80,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: { amount: 0.55, from: "start" },
        scrollTrigger: { trigger: ref.current, start: "top 65%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="services"
      className="py-24 md:py-36 section-padding bg-forest-950"
    >
      <div className="mb-14">
        <SectionTitle
          eyebrow="Our Craft"
          title="Services for the Discerning Gentleman"
          subtitle="Every service is a ritual. Every detail, intentional."
        />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-forest-800">
        {SERVICES.map((s, i) => (
          <ServiceCard key={s.id} service={s} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Services;
