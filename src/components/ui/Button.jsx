import { useRef } from "react";
import { gsap } from "../../utils/animations";

const VARIANTS = {
  primary: "bg-gold-500 text-forest-900 border border-gold-500",
  secondary: "bg-transparent text-gold-400 border border-gold-500",
  ghost: "bg-transparent text-cream-200 border border-cream-300/40",
};

const Button = ({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}) => {
  const btnRef = useRef(null);
  const blobRef = useRef(null);

  const getPos = (e) => {
    const r = btnRef.current.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  };

  const onEnter = (e) => {
    const { x, y } = getPos(e);
    gsap.killTweensOf(blobRef.current);
    gsap.set(blobRef.current, { x, y, scale: 0, opacity: 1 });
    gsap.to(blobRef.current, { scale: 5, duration: 0.6, ease: "power2.out" });
  };

  const onLeave = (e) => {
    const { x, y } = getPos(e);
    gsap.to(blobRef.current, {
      x,
      y,
      scale: 0,
      opacity: 0,
      duration: 0.45,
      ease: "power2.in",
    });
  };

  const base =
    "relative overflow-hidden inline-flex items-center justify-center " +
    "px-7 py-3.5 text-[11px] font-mono tracking-widest uppercase " +
    "transition-colors duration-300 select-none";

  const Tag = href ? "a" : "button";

  return (
    <Tag
      ref={btnRef}
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`${base} ${VARIANTS[variant] ?? VARIANTS.primary} ${className}`}
    >
      <span
        ref={blobRef}
        className="absolute w-6 h-6 rounded-full bg-gold-400 pointer-events-none opacity-0"
        style={{ top: 0, left: 0, transform: "translate(-50%,-50%)" }}
      />
      <span className="relative z-10">{children}</span>
    </Tag>
  );
};

export default Button;
