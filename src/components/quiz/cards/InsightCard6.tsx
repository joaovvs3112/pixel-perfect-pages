/**
 * Insight Card 6 — After Q9 (Maior obstáculo)
 * 4 variants based on q9Answer:
 *   0 = não sei começar  → Paralisia por falta de clareza — mais comum do que parece
 *   1 = já tentei        → Experiência ruim é informação, não sentença
 *   2 = medo de ROI      → Medo racional — problema foi o produto, não o conceito
 *   3 = sem tempo        → Tempo é o recurso mais escasso — LP trabalha por você
 */

interface Props { onNext: () => void; animDir: string; q9Answer: number | undefined; }

const TwoColumnComparison = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div
      className="bg-[#141720] border border-red-400/20 rounded-2xl p-5"
      style={{ animation: "slideInFromLeft 0.6s 0.3s ease both" }}
    >
      <p className="text-xs text-red-400 uppercase tracking-wider mb-4 font-bold">O que não funciona</p>
      {[
        "Site de 15 páginas sem foco em conversão",
        "Design bonito sem copy estratégico",
        "Anúncio sem página para receber o tráfego",
        "Freelancer que entrega bonito mas não converte",
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-2 mb-3"
          style={{ animation: `fadeInUp 0.3s ${0.5 + i * 0.1}s ease both`, opacity: 0 }}
        >
          <span className="text-red-400 mt-0.5">✗</span>
          <span className="text-[#8B9ABB] text-sm">{item}</span>
        </div>
      ))}
    </div>
    <div
      className="bg-[#141720] border border-amber-400/30 rounded-2xl p-5 relative overflow-hidden"
      style={{ animation: "slideInFromRight 0.6s 0.3s ease both" }}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      <p className="text-xs text-amber-400 uppercase tracking-wider mb-4 font-bold">O que gera resultado</p>
      {[
        "Uma página focada: um objetivo, uma ação",
        "Copy escrito para o problema do cliente final",
        "Estrutura técnica de conversão testada",
        "Entrega em prazo fixo com ROI calculável",
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-2 mb-3"
          style={{ animation: `fadeInUp 0.3s ${0.5 + i * 0.1}s ease both`, opacity: 0 }}
        >
          <span className="text-amber-400 mt-0.5">✓</span>
          <span className="text-[#8B9ABB] text-sm">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

export function InsightCard6({ onNext, animDir, q9Answer }: Props) {
  const variant = q9Answer ?? 0;

  /* ─────────────────────────────────────────────
     Variante 0 — Não sei por onde começar
  ───────────────────────────────────────────── */
  if (variant === 0) {
    return (
      <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
        <div className="insight-badge">A VERDADE SOBRE O RISCO</div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
          A paralisia por falta de clareza é o obstáculo mais comum —{" "}
          <span className="text-amber-400">e o mais fácil de resolver.</span>
        </h2>

        <p className="text-[#8B9ABB] mb-6 leading-relaxed">
          O mercado de criação de sites é cheio de promessas genéricas e opções que confundem mais do que ajudam. Entender exatamente o que o seu negócio precisa — e o que ele não precisa — é o primeiro passo para sair do lugar.
        </p>

        <TwoColumnComparison />

        <div
          className="bg-[#141720] border border-amber-400/20 rounded-xl p-4 mb-8"
          style={{ animation: "fadeInUp 0.5s 0.9s ease both" }}
        >
          <p className="text-sm text-[#8B9ABB] italic">
            "Resultado bonito e resultado que vende são coisas completamente diferentes. Uma landing page de alta conversão
            é <strong className="text-white">engenharia de conversão</strong> — não design."
          </p>
        </div>

        <button onClick={onNext} className="quiz-insight-btn">
          Ver meu diagnóstico
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
        <div className="insight-badge">A VERDADE SOBRE O RISCO</div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
          Uma experiência ruim no passado é{" "}
          <span className="text-amber-400">informação — não sentença.</span>
        </h2>

        <p className="text-[#8B9ABB] mb-6 leading-relaxed">
          A maioria das pessoas que tentou ter presença digital e não viu resultado foi porque comprou o produto errado para o problema certo. Um site institucional bonito, uma agência que some depois da entrega, um freelancer sem estratégia de conversão. O problema não era a presença digital — era a execução.
        </p>

        <TwoColumnComparison />

        <div
          className="bg-[#141720] border border-amber-400/20 rounded-xl p-4 mb-8"
          style={{ animation: "fadeInUp 0.5s 0.9s ease both" }}
        >
          <p className="text-sm text-[#8B9ABB] italic">
            "Não funcionou antes porque a ferramenta era errada. Uma landing page estratégica não é
            a mesma coisa que um site genérico —{" "}
            <strong className="text-white">ela foi construída para converter, não para existir.</strong>"
          </p>
        </div>

        <button onClick={onNext} className="quiz-insight-btn">
          Ver meu diagnóstico
          <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     Variante 2 — Medo de investir sem retorno
  ───────────────────────────────────────────── */
  if (variant === 2) {
    return (
      <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
        <div className="insight-badge">A VERDADE SOBRE O RISCO</div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
          O medo de investir e não ter retorno é{" "}
          <span className="text-amber-400">completamente racional.</span>
        </h2>

        <p className="text-[#8B9ABB] mb-6 leading-relaxed">
          E tem uma razão clara para ele existir: a maioria das pessoas que tentou ter presença digital e não viu resultado foi porque comprou o produto errado para o problema certo. O medo é a reação certa a um mercado cheio de entregas sem estratégia.
        </p>

        <TwoColumnComparison />

        <div
          className="bg-[#141720] border border-amber-400/20 rounded-xl p-4 mb-8"
          style={{ animation: "fadeInUp 0.5s 0.9s ease both" }}
        >
          <p className="text-sm text-[#8B9ABB] italic">
            "Resultado bonito e resultado que vende são coisas completamente diferentes. Uma landing page de alta conversão
            é <strong className="text-white">engenharia de conversão</strong> — não design."
          </p>
        </div>

        <button onClick={onNext} className="quiz-insight-btn">
          Ver meu diagnóstico
          <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     Variante 3 — Não tenho tempo
  ───────────────────────────────────────────── */
  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">A VERDADE SOBRE O RISCO</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        Tempo é o recurso mais escasso de quem tem{" "}
        <span className="text-amber-400">um bom negócio.</span>
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        Faz todo sentido. Quem tem um bom negócio está ocupado — atendendo clientes, entregando qualidade, gerenciando o dia a dia. O problema é que sem uma estrutura digital funcionando, você vai continuar trocando tempo por cliente manualmente, para sempre.
      </p>

      <div
        className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
        style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
      >
        <p className="text-xs text-[#6B7A99] uppercase tracking-wider mb-4 text-center">
          O que uma LP faz enquanto você trabalha
        </p>
        <div className="space-y-3">
          {[
            { icon: "🌙", label: "Às 2h da manhã", desc: "Responde dúvidas e apresenta seu serviço" },
            { icon: "☀️", label: "No sábado de manhã", desc: "Recebe contatos e pré-qualifica leads" },
            { icon: "📱", label: "Enquanto você atende outro cliente", desc: "Convence o próximo a entrar em contato" },
            { icon: "✈️", label: "Nas suas férias", desc: "Continua trabalhando para você" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3"
              style={{ animation: `fadeInUp 0.3s ${0.4 + i * 0.1}s ease both`, opacity: 0 }}
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

      <div
        className="bg-[#141720] border border-amber-400/20 rounded-xl p-4 mb-8"
        style={{ animation: "fadeInUp 0.5s 0.9s ease both" }}
      >
        <p className="text-sm text-[#8B9ABB] italic">
          "Uma landing page não exige o seu tempo para funcionar. Ela{" "}
          <strong className="text-white">devolve o seu tempo</strong>{" "}
          — trabalhando por você 24 horas por dia, 7 dias por semana."
        </p>
      </div>

      <button onClick={onNext} className="quiz-insight-btn">
        Ver meu diagnóstico
        <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
