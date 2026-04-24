/**
 * Insight Card 7 — After Q6 (Lead response process)
 * 4 variants based on q6Answer:
 *   0 = respondo na hora     → Velocidade boa, mas sem filtro
 *   1 = mesmo dia            → Janela de perda: lead esfria em horas
 *   2 = demoro +24h          → Lead já foi para o concorrente
 *   3 = sem processo         → Problema invisível — não sabe quantos escapam
 */
import { AnimatedCounter } from "../AnimatedCounter";
import { WordReveal } from "../WordReveal";

interface Props { onNext: () => void; animDir: string; q6Answer: number | undefined; }

export function InsightCard7({ onNext, animDir, q6Answer }: Props) {
  const variant = q6Answer ?? 0;

  /* ─────────────────────────────────────────────
     Variante 0 — Respondo na hora
  ───────────────────────────────────────────── */
  if (variant === 0) {
    return (
      <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
        <div className="insight-badge">VELOCIDADE DE RESPOSTA</div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
          Responder rápido é uma vantagem enorme. Mas{" "}
          <span className="text-amber-400">atender todo mundo igual</span>{" "}
          não é.
        </h2>

        <p className="text-[#8B9ABB] mb-6 leading-relaxed">
          Quando você responde na hora, está à frente de 90% do mercado. O problema
          é que sem uma triagem prévia, você gasta o mesmo tempo com o curioso e com
          o cliente pronto para fechar.
        </p>

        {/* Big stat */}
        <div
          className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
          style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
        >
          <div className="flex items-end gap-4 mb-4">
            <div className="text-6xl font-black text-amber-400">
              <AnimatedCounter target={78} suffix="%" duration={1600} delay={400} />
            </div>
            <p className="text-[#8B9ABB] pb-2 text-sm leading-tight max-w-xs">
              dos clientes{" "}
              <strong className="text-white">fecham com quem responde primeiro</strong>{" "}
              , mas só quando a mensagem chega com contexto
            </p>
          </div>

          <div className="space-y-3 border-t border-[#1E2433] pt-4">
            {[
              { icon: "⚡", label: "Sua vantagem", desc: "Velocidade acima da média" },
              { icon: "🎯", label: "O que falta", desc: "Filtrar antes de atender" },
              { icon: "🔁", label: "O que a LP faz", desc: "Pré-qualifica: só chega quem está pronto" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3"
                style={{ animation: `fadeInUp 0.3s ${0.5 + i * 0.12}s ease both`, opacity: 0 }}
              >
                <span className="text-xl w-8 text-center">{item.icon}</span>
                <div>
                  <p className="text-xs text-amber-400/70 font-medium">{item.label}</p>
                  <p className="text-sm text-[#8B9ABB]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[#8B9ABB] text-sm italic mb-8">
          <WordReveal
            text="Velocidade sem filtro é esforço. Velocidade com filtro é escala."
            highlight={[]}
            stagger={60}
            baseDelay={600}
          />
        </p>

        <button onClick={onNext} className="quiz-insight-btn">
          Quase lá. E a origem dos clientes? →
          <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     Variante 1 — Respondo no mesmo dia
  ───────────────────────────────────────────── */
  if (variant === 1) {
    return (
      <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
        <div className="insight-badge">VELOCIDADE DE RESPOSTA</div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
          "No mesmo dia" parece razoável. Mas a janela de conversão{" "}
          <span className="text-amber-400">é muito menor do que parece.</span>
        </h2>

        <p className="text-[#8B9ABB] mb-6 leading-relaxed">
          Um estudo do MIT mostrou que a chance de qualificar um lead cai
          drasticamente com o tempo. O problema não é o seu comprometimento — é que
          quando o lead chega de forma desorganizada, responder rápido vira questão
          de sorte, não de processo.
        </p>

        {/* Decay chart */}
        <div
          className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
          style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
        >
          <p className="text-xs text-[#6B7A99] text-center mb-4 uppercase tracking-wider">
            Chance de qualificar o lead por tempo de resposta
          </p>
          <div className="space-y-3">
            {[
              { time: "5 minutos", pct: 90, color: "#10B981" },
              { time: "30 minutos", pct: 42, color: "#F59E0B" },
              { time: "Mesmo dia", pct: 17, color: "#EF4444" },
              { time: "+24 horas", pct: 3, color: "#6B7A99" },
            ].map((row, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-xs text-[#8B9ABB] w-24 shrink-0">{row.time}</span>
                <div className="flex-1 h-3 bg-[#1E2433] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: row.color,
                      animation: `barGrow 1s ${0.5 + i * 0.15}s ease both`,
                      width: `${row.pct}%`,
                      transformOrigin: "left",
                    }}
                  />
                </div>
                <span className="text-xs font-bold w-10 text-right" style={{ color: row.color }}>
                  {row.pct}%
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-[#6B7A99] text-center mt-4 italic">
            Fonte: MIT Lead Response Management Study
          </p>
        </div>

        <div
          className="bg-[#141720] border border-amber-400/20 rounded-xl p-4 mb-8"
          style={{ animation: "fadeInUp 0.5s 0.8s ease both" }}
        >
          <p className="text-sm text-[#8B9ABB] italic leading-relaxed">
            "Uma landing page responde na hora:{" "}
            <strong className="text-white">
              tira dúvidas, apresenta o serviço e direciona o lead para o contato
            </strong>{" "}
            antes que ele esfrie."
          </p>
        </div>

        <button onClick={onNext} className="quiz-insight-btn">
          Quase lá. E a origem dos clientes? →
          <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     Variante 2 — Demoro mais de 24h
  ───────────────────────────────────────────── */
  if (variant === 2) {
    return (
      <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
        <div className="insight-badge">VELOCIDADE DE RESPOSTA</div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
          Após 24 horas, a chance de converter um lead cai{" "}
          <span className="text-amber-400">60 vezes.</span>
        </h2>

        <p className="text-[#8B9ABB] mb-6 leading-relaxed">
          Não porque você não se importa — mas porque o lead já pesquisou outros,
          já foi atendido por outro, ou simplesmente perdeu o impulso. Sem uma
          estrutura que receba e engaje o lead na hora que ele chega, você está
          perdendo oportunidades sem nem perceber.
        </p>

        {/* Comparison */}
        <div
          className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
          style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <p className="text-xs text-green-400/70 uppercase tracking-wider mb-3">Resposta em &lt; 1h</p>
              <p className="text-4xl font-black text-green-400">
                <AnimatedCounter target={391} suffix="%" duration={1400} delay={400} />
              </p>
              <p className="text-xs text-[#8B9ABB] mt-1">mais chance de qualificar</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-red-400/70 uppercase tracking-wider mb-3">Resposta em +24h</p>
              <p className="text-4xl font-black text-red-400">
                <AnimatedCounter target={1} suffix="%" duration={800} delay={600} />
              </p>
              <p className="text-xs text-[#8B9ABB] mt-1">chance de qualificar</p>
            </div>
          </div>

          <div className="border-t border-[#1E2433] mt-4 pt-4">
            <p className="text-sm text-[#8B9ABB] text-center">
              A diferença é de{" "}
              <strong className="text-amber-400">60×</strong>{" "}
              e quem não responde a tempo nem fica sabendo o que perdeu.
            </p>
          </div>
        </div>

        <div
          className="bg-[#141720] border border-amber-400/20 rounded-xl p-4 mb-8"
          style={{ animation: "fadeInUp 0.5s 0.8s ease both" }}
        >
          <p className="text-sm text-[#8B9ABB] italic leading-relaxed">
            "Uma landing page não precisa de você para funcionar. Ela{" "}
            <strong className="text-white">
              responde, apresenta e convence antes que o lead tenha tempo de esfriar.
            </strong>"
          </p>
        </div>

        <button onClick={onNext} className="quiz-insight-btn">
          Quase lá. E a origem dos clientes? →
          <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     Variante 3 — Sem processo definido
  ───────────────────────────────────────────── */
  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">VELOCIDADE DE RESPOSTA</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        Sem processo, o prejuízo é{" "}
        <span className="text-amber-400">invisível.</span>
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        Esse é o cenário mais perigoso — e o mais comum. Sem processo, você não
        sabe quantos leads chegaram, quantos esfriaram, quantos foram embora sem
        avisar. O prejuízo existe, mas ninguém te avisa.
      </p>

      {/* Visual flow */}
      <div
        className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
        style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
      >
        <p className="text-xs text-[#6B7A99] text-center mb-5 uppercase tracking-wider">
          O que acontece sem um processo definido
        </p>
        <div className="space-y-3">
          {[
            { icon: "📩", label: "Lead chega pelo digital", color: "#F59E0B" },
            { icon: "🕳️", label: "Ninguém recebe de forma estruturada", color: "#EF4444" },
            { icon: "⏳", label: "Horas passam — lead esfria ou busca concorrente", color: "#EF4444" },
            { icon: "👻", label: "Você nunca fica sabendo que perdeu", color: "#6B7A99" },
          ].map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-3"
              style={{ animation: `fadeInUp 0.4s ${0.4 + i * 0.15}s ease both`, opacity: 0 }}
            >
              <span className="text-xl w-8 text-center">{step.icon}</span>
              <div className="flex-1 h-0.5 rounded-full" style={{ backgroundColor: `${step.color}40` }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: step.color,
                    width: `${100 - i * 25}%`,
                    animation: `barGrow 0.8s ${0.5 + i * 0.15}s ease both`,
                    transformOrigin: "left",
                  }}
                />
              </div>
              <p className="text-sm text-[#8B9ABB] flex-1">{step.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="bg-[#141720] border border-amber-400/20 rounded-xl p-4 mb-8"
        style={{ animation: "fadeInUp 0.5s 0.8s ease both" }}
      >
        <p className="text-sm text-[#8B9ABB] italic leading-relaxed">
          "Uma landing page resolve isso de uma vez:{" "}
          <strong className="text-white">
            centraliza os contatos, registra a origem de cada lead e entrega
            só quem está pronto para conversar.
          </strong>"
        </p>
      </div>

      <button onClick={onNext} className="quiz-insight-btn">
        Quase lá. E a origem dos clientes? →
        <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
