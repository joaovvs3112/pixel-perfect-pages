import { useEffect, useRef } from "react";

/**
 * MainFloatingElements — elementos decorativos flutuantes com parallax
 * que ficam por trás do conteúdo da landing page principal.
 *
 * Como funciona:
 *   1. Cria 10 formas (círculos, anéis, quadrados) posicionadas ao longo da página
 *   2. Cada forma tem uma animação CSS `mainFloat` que faz subir/descer suavemente
 *   3. O parallax funciona ouvindo o evento `mousemove`: a posição do mouse
 *      desloca cada elemento proporcionalmente ao seu atributo `data-parallax-depth`
 *      (quanto maior, mais se move → dá sensação de profundidade)
 *   4. O deslocamento usa lerp (linear interpolation) via requestAnimationFrame
 *      para um movimento suave em vez de pular instantaneamente
 */

interface FloatingItem {
  type: "circle" | "ring" | "square";
  size: number;
  top: string;
  left: string;
  opacity: number;
  duration: string;       // duração do float CSS
  delay: string;          // delay do float CSS
  depth: number;          // intensidade do parallax (1 = sutil, 3 = forte)
}

const items: FloatingItem[] = [
  { type: "ring",   size: 80,  top: "5%",  left: "8%",   opacity: 0.06, duration: "18s", delay: "0s",   depth: 1.2 },
  { type: "circle", size: 12,  top: "12%", left: "85%",  opacity: 0.10, duration: "14s", delay: "2s",   depth: 2.5 },
  { type: "square", size: 18,  top: "28%", left: "3%",   opacity: 0.05, duration: "20s", delay: "4s",   depth: 1.8 },
  { type: "ring",   size: 120, top: "35%", left: "90%",  opacity: 0.04, duration: "22s", delay: "1s",   depth: 1.0 },
  { type: "circle", size: 8,   top: "45%", left: "15%",  opacity: 0.12, duration: "16s", delay: "3s",   depth: 3.0 },
  { type: "square", size: 14,  top: "55%", left: "92%",  opacity: 0.06, duration: "19s", delay: "5s",   depth: 2.0 },
  { type: "ring",   size: 60,  top: "65%", left: "5%",   opacity: 0.05, duration: "21s", delay: "2s",   depth: 1.5 },
  { type: "circle", size: 10,  top: "72%", left: "80%",  opacity: 0.08, duration: "15s", delay: "0s",   depth: 2.8 },
  { type: "square", size: 20,  top: "82%", left: "12%",  opacity: 0.04, duration: "23s", delay: "4s",   depth: 1.3 },
  { type: "ring",   size: 90,  top: "90%", left: "88%",  opacity: 0.03, duration: "24s", delay: "1s",   depth: 0.8 },
];

function getShapeStyle(item: FloatingItem): React.CSSProperties {
  const base: React.CSSProperties = {
    position: "absolute",
    top: item.top,
    left: item.left,
    width: item.size,
    height: item.size,
    pointerEvents: "none",
    opacity: item.opacity,
    animation: `mainFloat ${item.duration} ease-in-out ${item.delay} infinite alternate`,
    transition: "transform 0.1s linear",
  };

  if (item.type === "circle") {
    return { ...base, borderRadius: "50%", background: "#F59E0B" };
  }
  if (item.type === "ring") {
    return {
      ...base,
      borderRadius: "50%",
      border: `1.5px solid #F59E0B`,
      background: "transparent",
    };
  }
  // square
  return {
    ...base,
    borderRadius: 3,
    border: `1.5px solid #F59E0B`,
    background: "transparent",
    transform: "rotate(45deg)",
  };
}

export default function MainFloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Lerp loop — suaviza o parallax para que os elementos
    // não "pulem" mas fluam suavemente acompanhando o mouse
    const lerp = () => {
      currentRef.current.x += (mouseRef.current.x - currentRef.current.x) * 0.04;
      currentRef.current.y += (mouseRef.current.y - currentRef.current.y) * 0.04;

      const els = containerRef.current?.querySelectorAll<HTMLElement>("[data-parallax-depth]");
      els?.forEach((el) => {
        const depth = parseFloat(el.dataset.parallaxDepth ?? "1");
        const dx = currentRef.current.x * depth;
        const dy = currentRef.current.y * depth;
        el.style.transform = `translate(${dx}px, ${dy}px)${el.dataset.baseTransform ?? ""}`;
      });

      rafRef.current = requestAnimationFrame(lerp);
    };

    rafRef.current = requestAnimationFrame(lerp);

    const handleMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseRef.current.x = (e.clientX - cx) / cx * 12;
      mouseRef.current.y = (e.clientY - cy) / cy * 12;
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      {items.map((item, i) => (
        <div
          key={i}
          data-parallax-depth={item.depth}
          data-base-transform={item.type === "square" ? " rotate(45deg)" : ""}
          style={getShapeStyle(item)}
        />
      ))}
    </div>
  );
}
