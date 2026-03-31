import { useEffect, useRef } from "react";
import { gsap } from "../../utils/animations";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0,
      rafId;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      gsap.to(dotRef.current, {
        x: mx,
        y: my,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const tick = () => {
      rx += (mx - rx) * 0.09;
      ry += (my - ry) * 0.09;
      gsap.set(ringRef.current, { x: rx, y: ry });
      rafId = requestAnimationFrame(tick);
    };

    tick();
    window.addEventListener("mousemove", onMove);

    const grow = () => {
      gsap.to(ringRef.current, { scale: 2.4, opacity: 0.3, duration: 0.3 });
      gsap.to(dotRef.current, { scale: 0.4, duration: 0.3 });
    };
    const shrink = () => {
      gsap.to(ringRef.current, { scale: 1, opacity: 0.5, duration: 0.3 });
      gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
    };

    const attach = () =>
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    attach();

    const mo = new MutationObserver(attach);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gold-500 pointer-events-none z-[9999] hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-gold-500 pointer-events-none z-[9998] opacity-50 hidden md:block"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default CustomCursor;
