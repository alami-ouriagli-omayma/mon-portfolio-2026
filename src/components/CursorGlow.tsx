import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canTrack = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!canTrack.matches) return;

    let frame = 0;
    let fadeTimer = 0;

    // Smoothly interpolate current position toward the cursor.
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const target = { x: pos.x, y: pos.y };
    const lerp = 0.045;

    const move = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;

      window.cancelAnimationFrame(frame);
      const animate = () => {
        pos.x += (target.x - pos.x) * lerp;
        pos.y += (target.y - pos.y) * lerp;

        const glow = glowRef.current;
        if (glow) {
          glow.style.setProperty("--cursor-x", `${pos.x}px`);
          glow.style.setProperty("--cursor-y", `${pos.y}px`);
          glow.dataset["visible"] = "true";
        }

        const card = (event.target as HTMLElement).closest<HTMLElement>(".spotlight-card");
        if (card) {
          const bounds = card.getBoundingClientRect();
          card.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
          card.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
        }

        frame = window.requestAnimationFrame(animate);
      };
      frame = window.requestAnimationFrame(animate);

      window.clearTimeout(fadeTimer);
      fadeTimer = window.setTimeout(() => {
        if (glowRef.current) glowRef.current.dataset["visible"] = "false";
      }, 1200);
    };

    const hide = () => {
      if (glowRef.current) glowRef.current.dataset["visible"] = "false";
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(fadeTimer);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div ref={glowRef} aria-hidden="true" className="cursor-glow" data-visible="false">
      <span className="neon-orb neon-orb-core" />
      <span className="neon-orb neon-orb-cyan" />
      <span className="neon-orb neon-orb-violet" />
    </div>
  );
}
