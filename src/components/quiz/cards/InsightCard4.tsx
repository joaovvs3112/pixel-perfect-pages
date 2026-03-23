/**
 * Insight Card 4 — After Q5 (Já tentou anúncios?)
 * 4 variants based on q5Answer:
 *   0 = funciona bem       → Você está deixando 60% na mesa
 *   1 = tentei, não deu    → O problema não foi o anúncio
 *   2 = medo de tentar     → O medo faz sentido — analogia panfleto
 *   3 = nunca tentei       → A sequência certa: primeiro LP, depois tráfego
 */
import { useEffect, useState } from "react";

interface Props { onNext: () => void; animDir: string; q5Answer: number | undefined; }

const funnelStages = [
  { label: "Anúncio ativo",           sublabel: "Você paga por isso",                 color: "#F59E0B", icon: "📢", width: "100%" },
  { label: "Usuário clica",           sublabel: "Ótimo sinal de interesse",            color: "#3B82F6", icon: "👆", width: "80%" },
  { label: "Página recebe o tráfego", sublabel: "Aqui está o problema",               color: "#EF4444", icon: "💥", width: "60%" },
  { label: "Visitante fica 4 segundos", sublabel: "Não encontra clareza",             color: "#EF4444", icon: "❓", width: "30%" },
  { label: "Vai embora sem contatar", sublabel: "Você pagou. Ele saiu de graça.",      color: "#4A5568", icon: "🚪", width: "10%" },
];

function FunnelVisual() {
  const [visibleStages, setVisibleStages] = useState(0);

  useEffect(() => {
    const timers = funnelStages.map((_, i) =>
      setTimeout(() => setVisibleStages(i + 1), 300 + i * 500)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
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
  );
}

export function InsightCard4({ onNext, animDir, q5Answer }: Props) {
  const variant = q5Answer ?? 3;

  /* ─────────────────────────────────────────────
     Variante 0 — Funciona bem
  ───────────────────────────────────────────── */
  if (variant === 0) {
    return (
      <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
        <div className="insight-badge">O FUNIL QUEBRADO</div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
          Bom sinal. Mas você está deixando{" "}
          <span className="text-amber-400">60% dos leads na mesa.</span>
        </h2>

        <p className="text-[#8B9ABB] mb-6 leading-relaxed">
          Quando os anúncios vão para o Instagram ou para um perfil genérico, uma parte do tráfego sempre se perde no caminho — distrações, falta de clareza, ausência de prova social. Uma LP dedicada captura o que hoje está escapando.
        </p>

        <FunnelVisual />

        <div
          className="bg-[#141720] border border-amber-400/20 rounded-xl p-4 mb-8"
          style={{ animation: "fadeInUp 0.5s 0.8s ease both" }}
        >
          <p className="text-sm text-[#8B9ABB] italic leading-relaxed">
            "Você não precisa consertar o que já funciona. Só precisa{" "}
            <strong className="text-white">capturar o que hoje está escapando entre os dedos.</strong>"
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

  /* ─────────────────────────────────────────────
     Variante 1 — Já tentei, não deu resultado
  ───────────────────────────────────────────── */
  if (variant === 1) {
    return (
      <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
        <div className="insight-badge">O FUNIL QUEBRADO</div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
          Se os anúncios não funcionaram, o problema provavelmente{" "}
          <span className="text-amber-400">não foi o anúncio.</span>
        </h2>

        <p className="text-[#8B9ABB] mb-6 leading-relaxed">
          O anúncio existe para uma coisa: trazer o clique. O que acontece depois
          do clique é o que determina se você vai ter retorno — ou vai queimar
          orçamento. E na maioria dos casos, a página de destino é o elo fraco.
        </p>

        <FunnelVisual />

        <div
          className="bg-[#141720] border border-amber-400/20 rounded-xl p-4 mb-8"
          style={{ animation: "fadeInUp 0.5s 0.8s ease both" }}
        >
          <p className="text-sm text-[#8B9ABB] italic leading-relaxed">
            "É como pagar um garçom para trazer o cliente até a porta do restaurante —
            e quando ele entra, não encontrar ninguém para atendê-lo. A culpa não é do
            garçom.{" "}
            <strong className="text-white">É da estrutura que não estava pronta para receber.</strong>"
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

  /* ─────────────────────────────────────────────
     Variante 2 — Medo de desperdiçar
  ───────────────────────────────────────────── */
  if (variant === 2) {
    return (
      <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
        <div className="insight-badge">O FUNIL QUEBRADO</div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
          O medo faz sentido. E a{" "}
          <span className="text-amber-400">sequência certa</span>{" "}
          elimina ele.
        </h2>

        <p className="text-[#8B9ABB] mb-6 leading-relaxed">
          Quem investe em anúncio sem ter uma página de destino está apostando sem segurança. O medo de jogar dinheiro fora é a reação certa ao processo errado.
        </p>

        <div
          className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
          style={{ animation: "fadeInUp 0.5s 0.2s ease both" }}
        >
          <p className="text-xs text-[#4A5568] uppercase tracking-wider mb-4 text-center">
            A sequência correta
          </p>
          <div className="space-y-3">
            {[
              { step: "1", label: "Landing page estruturada", desc: "O destino existe e converte", ok: true },
              { step: "2", label: "Pixel e rastreamento ativos", desc: "Você sabe o que acontece com cada clique", ok: true },
              { step: "3", label: "Tráfego pago ativado", desc: "Agora faz sentido investir", ok: true },
            ].map(row => (
              <div key={row.step} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <span className="text-amber-400 text-xs font-bold">{row.step}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{row.label}</p>
                  <p className="text-xs text-[#4A5568]">{row.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="bg-[#141720] border border-amber-400/20 rounded-xl p-4 mb-8"
          style={{ animation: "fadeInUp 0.5s 0.8s ease both" }}
        >
          <p className="text-sm text-[#8B9ABB] italic leading-relaxed">
            "Anúncio sem LP é como espalhar panfletos com um endereço que não existe —
            as pessoas se interessam, mas nunca chegam a lugar nenhum.{" "}
            <strong className="text-white">O problema não é o panfleto.</strong>"
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

  /* ─────────────────────────────────────────────
     Variante 3 — Nunca tentei
  ───────────────────────────────────────────── */
  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">O FUNIL QUEBRADO</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        A sequência correta: primeiro a LP,{" "}
        <span className="text-amber-400">depois o tráfego.</span>
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        Não ter tentado anúncios ainda é, na verdade, uma vantagem. Você pode construir a base certa antes de investir em tráfego — e garantir que cada real gasto tenha para onde ir.
      </p>

      <div
        className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
        style={{ animation: "fadeInUp 0.5s 0.2s ease both" }}
      >
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs text-red-400/70 uppercase tracking-wider mb-3">Ordem errada</p>
            <div className="space-y-2 text-sm text-[#4A5568]">
              <div className="flex items-center gap-2">
                <span>🔥</span> Ativa anúncios
              </div>
              <div className="flex items-center gap-2">
                <span>😬</span> Tráfego cai no Instagram
              </div>
              <div className="flex items-center gap-2">
                <span>💸</span> Gasta sem retorno
              </div>
              <div className="flex items-center gap-2">
                <span>🤷</span> "Anúncio não funciona"
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs text-amber-400/70 uppercase tracking-wider mb-3">Ordem certa</p>
            <div className="space-y-2 text-sm text-[#8B9ABB]">
              <div className="flex items-center gap-2">
                <span>✅</span> Cria a landing page
              </div>
              <div className="flex items-center gap-2">
                <span>✅</span> Instala rastreamento
              </div>
              <div className="flex items-center gap-2">
                <span>✅</span> Ativa tráfego pago
              </div>
              <div className="flex items-center gap-2">
                <span>📈</span> Mede e escala
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#141720] border border-amber-400/20 rounded-xl p-4 mb-8"
        style={{ animation: "fadeInUp 0.5s 0.8s ease both" }}
      >
        <p className="text-sm text-[#8B9ABB] italic leading-relaxed">
          "Investir em anúncio antes de ter uma LP é como querer montar um motor
          sem ter o carro —{" "}
          <strong className="text-white">muita força, nenhum lugar para ir.</strong>"
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
