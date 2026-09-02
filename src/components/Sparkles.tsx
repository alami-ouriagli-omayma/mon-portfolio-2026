import { useEffect, useRef } from "react";

/** Animated sparkle field drawn on a canvas — decorative background layer. */
export function SparkleField({ density = 90 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let raf = 0;

    type Star = {
      x: number;
      y: number;
      r: number;
      phase: number;
      speed: number;
      drift: number;
      hue: number;
    };
    let stars: Star[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: density }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        r: Math.random() * 1.6 + 0.4,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.02 + 0.006,
        drift: Math.random() * 0.18 + 0.03,
        hue: Math.random() > 0.6 ? 285 : 255,
      }));
    };

    const draw = () => {
      frame += 1;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      for (const s of stars) {
        const twinkle = (Math.sin(frame * s.speed + s.phase) + 1) / 2;
        s.y -= s.drift;
        if (s.y < -4) s.y = canvas.offsetHeight + 4;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${s.hue}, 70%, ${72 + twinkle * 20}%, ${0.15 + twinkle * 0.7})`;
        ctx.arc(s.x, s.y, s.r * (0.6 + twinkle * 0.8), 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    if (reduce) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(draw);
    }
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

/** Small static sparkle accents for decorating a heading or card. */
export function SparkleAccents() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0">
      {[
        "left-[8%] top-[18%]",
        "right-[12%] top-[30%]",
        "left-[22%] bottom-[16%]",
        "right-[24%] bottom-[26%]",
      ].map((pos, i) => (
        <span
          key={pos}
          className={`absolute ${pos} animate-twinkle text-lilac`}
          style={{ animationDelay: `${i * 0.7}s` }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c.7 6.3 5 10.6 12 12-7 1.4-11.3 5.7-12 12-.7-6.3-5-10.6-12-12C7 10.6 11.3 6.3 12 0Z" />
          </svg>
        </span>
      ))}
    </span>
  );
}
