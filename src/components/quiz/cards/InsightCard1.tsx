/**
 * Insight Card 1 — After Q1 (Como te encontram)
 * Theme: The Digital Reality — even referrals search online first
 * Visual: Animated stat counter + bar split (indicação vs digital)
 */
import { AnimatedCounter } from "../AnimatedCounter";
import { WordReveal } from "../WordReveal";

interface Props { onNext: () => void; animDir: string; q1Answer: number | undefined; }

export function InsightCard1({ onNext, animDir, q1Answer }: Props) {
  const isReferral = q1Answer === 0 || q1Answer === 3;

  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">DADO DE MERCADO</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        {isReferral
          ? "Indicação é ouro. Mas existe um problema silencioso que poucos percebem."
          : "O Instagram foi projetado para entreter — não para vender."}
      </h2>

      <p className="text-[#8B9ABB] mb-8 leading-relaxed">
        {isReferral
          ? "Quando alguém recebe uma indicação do seu serviço, a primeira coisa que faz é pesquisar seu nome antes de entrar em contato. Se o que encontra não transmite confiança, ele desiste — sem te avisar."
          : "Cada vez que um visitante sai do feed para ver seu perfil, o algoritmo trata como uma interrupção e faz de tudo para trazê-lo de volta ao scroll antes de entrar em contato com você."}
      </p>

      {/* Big stat */}
      <div
        className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
        style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
      >
        <div className="flex items-end gap-4 mb-4">
          <div className="text-6xl font-black text-amber-400">
            <AnimatedCounter target={87} suffix="%" duration={1600} delay={400} />
          </div>
          <p className="text-[#8B9ABB] pb-2 text-sm leading-tight max-w-xs">
            dos consumidores pesquisam online antes de contratar um serviço local —{" "}
            <strong className="text-white">mesmo quando vieram de indicação</strong>
          </p>
        </div>

        {/* Visual bar */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#8B9ABB] w-28 shrink-0">Pesquisam online</span>
            <div className="flex-1 h-3 bg-[#1E2433] rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-400 rounded-full"
                style={{ animation: "barGrow 1s 0.8s ease both", width: "87%", transformOrigin: "left" }}
              />
            </div>
            <span className="text-xs font-bold text-amber-400 w-10 text-right">87%</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-[#8B9ABB] w-28 shrink-0">Contactam direto</span>
            <div className="flex-1 h-3 bg-[#1E2433] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#4A5568] rounded-full"
                style={{ animation: "barGrow 1s 1.0s ease both", width: "13%", transformOrigin: "left" }}
              />
            </div>
            <span className="text-xs font-bold text-[#4A5568] w-10 text-right">13%</span>
          </div>
        </div>
      </div>

      <p className="text-[#8B9ABB] text-sm italic mb-8">
        <WordReveal
          text="A indicação abriu a porta. O que está do outro lado a fecha."
          highlight={["fechá-la"]}
          stagger={60}
          baseDelay={600}
        />
      </p>

      <button onClick={onNext} className="quiz-insight-btn">
        Entendi — continuar
        <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
