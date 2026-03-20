import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/**
 * ScrollCounter — um counter animado que SÓ começa a contar
 * quando o elemento entra na viewport (via IntersectionObserver).
 *
 * Funciona assim: o componente fica "dormindo" com o valor 0.
 * Quando o observer detecta que ele ficou visível, dispara a animação
 * usando requestAnimationFrame com easing cubic (ease-out), contando
 * de 0 até o target suavemente.
 */

interface ScrollCounterProps {
  target: number;
  duration?: number;   // ms — quanto tempo dura a contagem
  prefix?: string;     // ex: "+" antes do número
  suffix?: string;     // ex: "×" ou "%" depois do número
  decimals?: number;   // casas decimais (0 = inteiro, 1 = uma casa, etc.)
  delay?: number;      // ms de delay após ficar visível
  className?: string;
}

export function ScrollCounter({
  target,
  duration = 1800,
  prefix = "",
  suffix = "",
  decimals = 0,
  delay = 0,
  className = "",
}: ScrollCounterProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    let rafId: number | null = null;
    let startTime: number | null = null;

    const timeout = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic — começa rápido, desacelera suave no final
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(eased * target);

        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        }
      };

      rafId = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [isVisible, target, duration, delay]);

  const formatted =
    decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
