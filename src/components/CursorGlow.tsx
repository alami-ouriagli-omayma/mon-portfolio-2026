import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canTrack = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    if (!canTrack.matches) return;

    let frame = 0;
    let fadeTimer = 0;

    const move = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const glow = glowRef.current;
        if (glow) {
          glow.style.setProperty("--cursor-x", `${event.clientX}px`);
          glow.style.setProperty("--cursor-y", `${event.clientY}px`);
          glow.dataset["visible"] = "true";
        }

        const card = (event.target as HTMLElement).closest<HTMLElement>(".spotlight-card");
        if (card) {
          const bounds = card.getBoundingClientRect();
          card.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
          card.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
        }
      });

      window.clearTimeout(fadeTimer);
      fadeTimer = window.setTimeout(() => {
        if (glowRef.current) glowRef.current.dataset["visible"] = "false";
      }, 900);
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

  return <div ref={glowRef} aria-hidden="true" className="cursor-glow" data-visible="false" />;
}