/**
 * Social Proof Card — Card 11
 * Honest: 1 real delivery. Portfolio pieces shown as examples.
 * Placeholder markers for the client testimonial.
 */

interface Props { onNext: () => void; animDir: string; }

export function SocialProofCard({ onNext, animDir }: Props) {
  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">RESULTADO REAL</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        Veja o que mudou para um dos nossos clientes.
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        Somos uma empresa jovem e preferimos ser honestos: temos uma entrega
        real para um cliente até agora. O depoimento abaixo é genuíno.
      </p>

      {/* Real client testimonial */}
      <div
        className="bg-[#141720] border border-amber-400/30 rounded-2xl p-6 mb-6 relative overflow-hidden"
        style={{ animation: "fadeInUp 0.7s 0.3s ease both" }}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        {/* Quote mark */}
        <div className="text-5xl font-black text-amber-400/30 leading-none mb-4">"</div>

        {/* [PLACEHOLDER] — Substitua pelo depoimento real do cliente */}
        <p className="text-white text-lg italic leading-relaxed mb-5">
          [PLACEHOLDER — Depoimento real do cliente aqui. Ex: "A Lumen Pages entregou minha
          página em 7 dias e no primeiro mês já recebi X novos contatos pelo WhatsApp..."]
        </p>

        {/* Client info */}
        <div className="flex items-center gap-4">
          {/* [PLACEHOLDER] — Foto do cliente (se disponível) */}
          <div className="w-12 h-12 rounded-full bg-[#1E2433] border border-amber-400/30 flex items-center justify-center text-amber-400 text-lg font-bold shrink-0">
            {/* [PLACEHOLDER] — Inicial do nome do cliente */}
            ?
          </div>
          <div>
            {/* [PLACEHOLDER] — Nome e negócio do cliente */}
            <p className="text-white font-semibold">[Nome do Cliente]</p>
            <p className="text-[#8B9ABB] text-sm">[Tipo de negócio] — [Cidade/UF]</p>
          </div>
        </div>

        {/* Result badge */}
        <div className="mt-5 flex items-center gap-2 bg-green-400/10 border border-green-400/30 rounded-lg px-3 py-2 w-fit">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {/* [PLACEHOLDER] — Resultado mensurável. Ex: "+3× de contatos na primeira semana" */}
          <span className="text-green-400 text-sm font-medium">
            [PLACEHOLDER — resultado mensurável]
          </span>
        </div>

        {/* Delivery note */}
        <p className="text-[#4A5568] text-xs mt-3">
          Página entregue em 7 dias úteis. Do briefing ao ar.
        </p>
      </div>

      {/* Why trust us even being new */}
      <div
        className="bg-[#141720] border border-[#1E2433] rounded-xl p-4 mb-8"
        style={{ animation: "fadeInUp 0.5s 0.6s ease both" }}
      >
        <p className="text-sm text-[#8B9ABB] leading-relaxed">
          Nossa vantagem competitiva não é o tempo de mercado — é a{" "}
          <strong className="text-white">metodologia</strong>. As mesmas técnicas de
          copywriting e conversão que grandes empresas pagam fortunas para aplicar,
          agora disponíveis para negócios locais em um processo simples, rápido e
          com preço justo.
        </p>
      </div>

      <button onClick={onNext} className="quiz-cta-btn">
        Ver exemplos de páginas entregues
        <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}
