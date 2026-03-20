import { useEffect, useRef } from "react";

interface FloatEl {
  size: number;
  x: number; // %
  y: number; // %
  depth: number; // parallax factor 0.02–0.08
  duration: number;
  delay: number;
  opacity: number;
  shape: "circle" | "ring" | "square";
}

const ELEMENTS: FloatEl[] = [
  { size: 220, x: 8,  y: 15, depth: 0.04, duration: 8,  delay: 0,   opacity: 0.06, shape: "circle" },
  { size: 80,  x: 88, y: 10, depth: 0.06, duration: 6,  delay: 1,   opacity: 0.08, shape: "ring"   },
  { size: 140, x: 92, y: 60, depth: 0.03, duration: 10, delay: 2,   opacity: 0.05, shape: "circle" },
  { size: 60,  x: 5,  y: 75, depth: 0.07, duration: 7,  delay: 0.5, opacity: 0.09, shape: "ring"   },
  { size: 30,  x: 50, y: 5,  depth: 0.08, duration: 5,  delay: 1.5, opacity: 0.12, shape: "square" },
  { size: 100, x: 20, y: 88, depth: 0.05, duration: 9,  delay: 3,   opacity: 0.07, shape: "circle" },
  { size: 45,  x: 75, y: 85, depth: 0.06, duration: 6,  delay: 2.5, opacity: 0.1,  shape: "ring"   },
  { size: 25,  x: 35, y: 50, depth: 0.09, duration: 4,  delay: 1,   opacity: 0.08, shape: "square" },
];

export function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mouse.current = {
        x: (e.clientX - w / 2) / w,
        y: (e.clientY - h / 2) / h,
      };
    };

    window.addEventListener("mousemove", handleMove);

    const animate = () => {
      // Smooth lerp toward mouse position
      current.current.x += (mouse.current.x - current.current.x) * 0.05;
      current.current.y += (mouse.current.y - current.current.y) * 0.05;

      const els = containerRef.current?.querySelectorAll<HTMLElement>("[data-parallax]");
      els?.forEach((el) => {
        const depth = parseFloat(el.dataset.parallax ?? "0.05");
        const tx = current.current.x * depth * 100;
        const ty = current.current.y * depth * 100;
        el.style.transform = `translate(${tx}px, ${ty}px)`;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {ELEMENTS.map((el, i) => {
        const baseStyle: React.CSSProperties = {
          position: "absolute",
          left: `${el.x}%`,
          top: `${el.y}%`,
          width: el.size,
          height: el.size,
          opacity: el.opacity,
          animation: `quizFloat ${el.duration}s ease-in-out ${el.delay}s infinite`,
          willChange: "transform",
        };

        if (el.shape === "circle") {
          return (
            <div
              key={i}
              data-parallax={el.depth}
              style={{
                ...baseStyle,
                borderRadius: "50%",
                background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)",
              }}
            />
          );
        }

        if (el.shape === "ring") {
          return (
            <div
              key={i}
              data-parallax={el.depth}
              style={{
                ...baseStyle,
                borderRadius: "50%",
                border: `1px solid #F59E0B`,
              }}
            />
          );
        }

        // square
        return (
          <div
            key={i}
            data-parallax={el.depth}
            style={{
              ...baseStyle,
              border: `1px solid #F59E0B`,
              transform: `rotate(45deg)`,
              borderRadius: "4px",
            }}
          />
        );
      })}
    </div>
  );
}
