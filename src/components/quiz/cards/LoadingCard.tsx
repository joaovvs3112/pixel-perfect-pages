/**
 * Loading Card — Card 8
 * Simulates AI analysis of quiz answers before revealing the result.
 * Auto-advances after animation completes.
 */
import { useEffect, useState } from "react";

interface Props { onNext: () => void; animDir: string; }

const CHECKS = [
  "Canal de aquisição atual...",
  "Potencial de conversão digital...",
  "Gap entre presença atual e potencial...",
  "Dependência de fontes de tráfego...",
  "Perfil de oportunidade identificado...",
];

export function LoadingCard({ onNext, animDir }: Props) {
  const [visibleChecks, setVisibleChecks] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    CHECKS.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleChecks(i + 1), 600 + i * 700));
    });

    // Show "done" state then auto-advance
    timers.push(setTimeout(() => setDone(true), 600 + CHECKS.length * 700 + 400));
    timers.push(setTimeout(() => onNext(), 600 + CHECKS.length * 700 + 1200));

    return () => timers.forEach(clearTimeout);
  }, [onNext]);

  return (
    <div className={`quiz-card ${animDir} max-w-lg mx-auto text-center`}>
      {/* Spinner ring */}
      <div className="relative w-24 h-24 mx-auto mb-8">
        <div
          className="absolute inset-0 rounded-full border-2 border-amber-400/20"
        />
        {!done && (
          <div
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-amber-400"
            style={{ animation: "spin 1s linear infinite" }}
          />
        )}
        {done && (
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-amber-400"
              style={{ animation: "scaleIn 0.4s ease both" }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}
        {/* Amber glow */}
        <div className="absolute inset-4 rounded-full bg-amber-400/10" />
      </div>

      <h2 className="text-2xl font-bold text-white mb-2">
        {done ? "Diagnóstico concluído." : "Analisando suas respostas..."}
      </h2>
      <p className="text-[#8B9ABB] mb-8">
        {done
          ? "Identificamos o seu perfil. Preparando o resultado."
          : "Identificando o perfil do seu negócio."}
      </p>

      {/* Checklist */}
      <div className="text-left space-y-3 max-w-xs mx-auto">
        {CHECKS.map((check, i) => (
          <div
            key={i}
            className="flex items-center gap-3 transition-all duration-400"
            style={{
              opacity: visibleChecks > i ? 1 : 0.2,
              transform: visibleChecks > i ? "translateX(0)" : "translateX(-8px)",
            }}
          >
            <span
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs transition-all ${
                visibleChecks > i
                  ? "bg-amber-400 text-[#0D0F14]"
                  : "border border-[#1E2433]"
              }`}
            >
              {visibleChecks > i ? "✓" : ""}
            </span>
            <span className={`text-sm ${visibleChecks > i ? "text-white" : "text-[#1E2433]"}`}>
              {check}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
