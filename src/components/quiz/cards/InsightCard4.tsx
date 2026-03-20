/**
 * Insight Card 4 — After Q5 (Já tentou anúncios?)
 * Theme: The broken funnel — ads without LP = burning money
 * Visual: Animated funnel stages that reveal one by one
 */
import { useEffect, useState } from "react";

interface Props { onNext: () => void; animDir: string; q5Answer: number | undefined; }

const funnelStages = [
  { label: "Anúncio ativo", sublabel: "Você paga por isso", color: "#F59E0B", icon: "📢", width: "100%" },
  { label: "Usuário clica", sublabel: "Ótimo sinal de interesse", color: "#3B82F6", icon: "👆", width: "80%" },
  { label: "Página recebe o tráfego", sublabel: "Aqui está o problema", color: "#EF4444", icon: "💥", width: "60%" },
  { label: "Visitante fica 4 segundos", sublabel: "Não encontra clareza", color: "#EF4444", icon: "❓", width: "30%" },
  { label: "Vai embora sem contatar", sublabel: "Você pagou. Ele saiu de graça.", color: "#4A5568", icon: "🚪", width: "10%" },
];

export function InsightCard4({ onNext, animDir, q5Answer }: Props) {
  const [visibleStages, setVisibleStages] = useState(0);

  useEffect(() => {
    const timers = funnelStages.map((_, i) =>
      setTimeout(() => setVisibleStages(i + 1), 300 + i * 500)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const triedAds = q5Answer === 1 || q5Answer === 2;

  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">O FUNIL QUEBRADO</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        {triedAds
          ? "Se os anúncios não funcionaram, o problema provavelmente não foi o anúncio."
          : "Por que a maioria das campanhas de anúncio não gera retorno."}
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        O anúncio existe para uma coisa: trazer o clique. O que acontece depois
        do clique é o que determina se você vai ter retorno — ou vai queimar
        orçamento.
      </p>

      {/* Funnel */}
      <div
        className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
        style={{ animation: "fadeInUp 0.5s 0.2s ease both" }}
      >
        <p className="text-xs text-[#4A5568] uppercase tracking-wider mb-5 text-center">
          O que acontece depois do clique
        </p>

        <div className="space-y-2">
          {funnelStages.map((stage, i) => (
            <div
              key={i}
              className="transition-all duration-500"
              style={{
                opacity: visibleStages > i ? 1 : 0,
                transform: visibleStages > i ? "translateX(0)" : "translateX(-20px)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{stage.icon}</span>
                <span className="text-sm font-semibold text-white">{stage.label}</span>
                <span className="text-xs text-[#4A5568] ml-auto">{stage.sublabel}</span>
              </div>
              <div className="h-2 bg-[#1E2433] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: visibleStages > i ? stage.width : "0%",
                    backgroundColor: stage.color,
                    transitionDelay: `${i * 80}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analogy */}
      <div
        className="bg-[#141720] border border-amber-400/20 rounded-xl p-4 mb-8"
        style={{ animation: "fadeInUp 0.5s 0.8s ease both" }}
      >
        <p className="text-sm text-[#8B9ABB] italic leading-relaxed">
          "É como pagar um garçom para trazer o cliente até a porta do restaurante —
          e quando ele entra, não encontrar ninguém para atendê-lo. A culpa não é do
          garçom.{" "}
          <strong className="text-white">É da estrutura que não estava pronta para receber."</strong>
        </p>
      </div>

      <button onClick={onNext} className="quiz-insight-btn">
        Continuar
        <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
