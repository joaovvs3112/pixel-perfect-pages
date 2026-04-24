/**
 * Insight Card 1 — After Q1 (Como te encontram)
 * 4 variants based on q1Answer:
 *   0 = indicação       → 87% pesquisam online mesmo recebendo indicação
 *   1 = Instagram       → Plataforma feita para entreter, não vender
 *   2 = Google          → Canal certo, destino errado
 *   3 = não sei         → O que não se mede não se escala
 */
import { AnimatedCounter } from "../AnimatedCounter";
import { WordReveal } from "../WordReveal";

interface Props { onNext: () => void; animDir: string; q1Answer: number | undefined; }

export function InsightCard1({ onNext, animDir, q1Answer }: Props) {
  const variant = q1Answer ?? 0;

  /* ─────────────────────────────────────────────
     Variante 0 — Indicação
  ───────────────────────────────────────────── */
  if (variant === 0) {
    return (
      <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
        <div className="insight-badge">DADO DE MERCADO</div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
          Indicação é ouro. Mas existe um problema silencioso que poucos percebem.
        </h2>

        <p className="text-[#8B9ABB] mb-8 leading-relaxed">
          Quando alguém recebe uma indicação do seu serviço, a primeira coisa que faz é pesquisar seu nome antes de entrar em contato. Se o que encontra não transmite confiança, ele desiste, sem te avisar.
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
              dos consumidores pesquisam online antes de contratar um serviço local,{" "}
              <strong className="text-white">mesmo quando vieram de indicação</strong>
            </p>
          </div>

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
                  className="h-full bg-[#6B7A99] rounded-full"
                  style={{ animation: "barGrow 1s 1.0s ease both", width: "13%", transformOrigin: "left" }}
                />
              </div>
              <span className="text-xs font-bold text-[#6B7A99] w-10 text-right">13%</span>
            </div>
          </div>
        </div>

        <p className="text-[#8B9ABB] text-sm italic mb-8">
          <WordReveal
            text="A indicação abriu a porta. O que está do outro lado a fecha."
            highlight={[]}
            stagger={60}
            baseDelay={600}
          />
        </p>

        <button onClick={onNext} className="quiz-insight-btn">
          Entendi. E como você recebe esses clientes? →
          <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     Variante 1 — Instagram
  ───────────────────────────────────────────── */
  if (variant === 1) {
    return (
      <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
        <div className="insight-badge">DADO DE MERCADO</div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
          O Instagram foi projetado para entreter, não para vender.
        </h2>

        <p className="text-[#8B9ABB] mb-8 leading-relaxed">
          Cada vez que um visitante sai do feed para ver seu perfil, o algoritmo trata como uma interrupção e faz de tudo para trazê-lo de volta ao scroll antes de entrar em contato com você.
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
              dos consumidores pesquisam online antes de contratar um serviço local,{" "}
              <strong className="text-white">mesmo quando vieram de indicação</strong>
            </p>
          </div>

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
                  className="h-full bg-[#6B7A99] rounded-full"
                  style={{ animation: "barGrow 1s 1.0s ease both", width: "13%", transformOrigin: "left" }}
                />
              </div>
              <span className="text-xs font-bold text-[#6B7A99] w-10 text-right">13%</span>
            </div>
          </div>
        </div>

        <p className="text-[#8B9ABB] text-sm italic mb-8">
          <WordReveal
            text="O perfil tem seguidores. O negócio precisa de clientes."
            highlight={[]}
            stagger={60}
            baseDelay={600}
          />
        </p>

        <button onClick={onNext} className="quiz-insight-btn">
          Entendi. E como você recebe esses clientes? →
          <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     Variante 2 — Google
  ───────────────────────────────────────────── */
  if (variant === 2) {
    return (
      <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
        <div className="insight-badge">DADO DE MERCADO</div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
          Você está no canal certo. O problema é o que acontece depois do clique.
        </h2>

        <p className="text-[#8B9ABB] mb-6 leading-relaxed">
          Quem pesquisa no Google já tem intenção de compra — é o lead mais quente que existe. Mas se depois do clique ele cai em uma página que não transmite confiança, não responde as dúvidas dele e não tem um caminho claro para entrar em contato, esse lead vai embora para o concorrente.
        </p>

        {/* Highlight box */}
        <div
          className="bg-[#141720] border border-amber-400/30 rounded-2xl p-6 mb-6"
          style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
        >
          <div className="flex items-start gap-4">
            <div className="text-4xl font-black text-amber-400 shrink-0 mt-1">
              <AnimatedCounter target={96} suffix="%" duration={1600} delay={400} />
            </div>
            <p className="text-[#8B9ABB] text-sm leading-relaxed">
              dos usuários que clicam em um anúncio do Google{" "}
              <strong className="text-white">saem da página sem converter</strong>{" "}
              quando ela não está otimizada para conversão.
            </p>
          </div>
        </div>

        <p className="text-[#8B9ABB] text-sm italic mb-8">
          <WordReveal
            text="O tráfego não é o problema. A página de destino é."
            highlight={[]}
            stagger={60}
            baseDelay={600}
          />
        </p>

        <button onClick={onNext} className="quiz-insight-btn">
          Entendi. E como você recebe esses clientes? →
          <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     Variante 3 — Não sei / outros
  ───────────────────────────────────────────── */
  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">DADO DE MERCADO</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        O que você não mede, você não consegue escalar.
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        Não saber de onde vêm os seus clientes é um sinal claro: o processo de aquisição ainda não está estruturado. Isso significa que o crescimento depende de sorte, e não de uma estratégia que você pode repetir e ampliar.
      </p>

      {/* Highlight box */}
      <div
        className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
        style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
              <span className="text-amber-400 text-xs font-bold">1</span>
            </div>
            <p className="text-sm text-[#8B9ABB]">
              Sem medir a origem, você não sabe <strong className="text-white">onde investir</strong>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
              <span className="text-amber-400 text-xs font-bold">2</span>
            </div>
            <p className="text-sm text-[#8B9ABB]">
              Sem saber o que funciona, você não consegue <strong className="text-white">repetir o sucesso</strong>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center shrink-0">
              <span className="text-amber-400 text-xs font-bold">3</span>
            </div>
            <p className="text-sm text-[#8B9ABB]">
              Uma landing page resolve isso: <strong className="text-white">tudo passa por um único ponto rastreável</strong>
            </p>
          </div>
        </div>
      </div>

      <p className="text-[#8B9ABB] text-sm italic mb-8">
        <WordReveal
          text="O primeiro passo para crescer é saber de onde você está vindo."
          highlight={[]}
          stagger={60}
          baseDelay={600}
        />
      </p>

      <button onClick={onNext} className="quiz-insight-btn">
        Entendi. E como você recebe esses clientes? →
        <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
