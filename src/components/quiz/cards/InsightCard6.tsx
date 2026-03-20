/**
 * Insight Card 6 — After Q9 (Maior obstáculo)
 * Theme: Investment fear is rational — but the real problem was the product, not the concept
 * Visual: Two columns animating from opposite sides
 */

interface Props { onNext: () => void; animDir: string; q9Answer: number | undefined; }

export function InsightCard6({ onNext, animDir, q9Answer }: Props) {
  const fearOfInvesting = q9Answer === 1 || q9Answer === 2;

  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">A VERDADE SOBRE O RISCO</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        {fearOfInvesting
          ? "O medo de investir e não ter retorno é completamente racional."
          : "Não saber por onde começar é mais comum do que parece."}
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        {fearOfInvesting
          ? "E tem uma razão clara para ele existir: a maioria das pessoas que tentou ter presença digital e não viu resultado foi porque comprou o produto errado para o problema certo."
          : "O mercado de criação de sites é cheio de promessas genéricas. Entender exatamente o que o seu negócio precisa — e o que ele não precisa — é o primeiro passo."}
      </p>

      {/* Two column comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Wrong approach */}
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

        {/* Right approach */}
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
