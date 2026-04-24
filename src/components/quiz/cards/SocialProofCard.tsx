/**
 * Social Proof Card — Card 21
 * Real testimonial from Dr. Atyla Neto + authority triggers
 */

interface Props { onNext: () => void; animDir: string; }

export function SocialProofCard({ onNext, animDir }: Props) {
  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">RESULTADO REAL</div>

      {/* Authority headline — sem subheadline genérico, direto ao gatilho */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        Um médico que lotou a agenda sem{" "}
        <span className="text-amber-400">aparecer no Instagram.</span>
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        O Dr. Atyla Neto precisava de pacientes, não de seguidores. A estrutura
        entregou exatamente isso: autoridade construída na página, agenda construída
        na realidade.
      </p>

      {/* Testimonial card */}
      <div
        className="bg-[#141720] border border-amber-400/30 rounded-2xl p-6 mb-5 relative overflow-hidden"
        style={{ animation: "fadeInUp 0.7s 0.3s ease both" }}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        {/* Quote mark */}
        <div className="text-5xl font-black text-amber-400/30 leading-none mb-4">"</div>

        <p className="text-white text-lg leading-relaxed mb-5">
          O João da Lumen Pages conseguiu me posicionar online sem que eu precisasse
          ficar mostrando o rosto no Instagram, construiu uma página que traz toda a
          autoridade pro meu nome e, hoje, minha agenda está cheia até o resto do mês.
        </p>

        {/* Client info */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 text-lg font-bold shrink-0">
            A
          </div>
          <div>
            <p className="text-white font-semibold">Dr. Atyla Neto</p>
            <p className="text-[#8B9ABB] text-sm">Ortopedista · Vila Velha, ES</p>
          </div>
        </div>

        {/* Result badge */}
        <div className="mt-5 flex items-start gap-2 bg-green-400/10 border border-green-400/30 rounded-lg px-3 py-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mt-1 shrink-0" />
          <div>
            <span className="text-green-400 text-sm font-medium">Acima de 20% de conversão no botão de CTA</span>
            <p className="text-[#6B7A99] text-xs mt-0.5">
              Enquanto o restante do segmento briga para chegar a 10%, num dos mercados mais competitivos do país.
            </p>
          </div>
        </div>

        {/* Delivery note */}
        <p className="text-[#6B7A99] text-xs mt-3">
          Página entregue em 7 dias úteis. Do briefing ao ar.
        </p>
      </div>

      {/* Authority block — fácil ter LP acima da média */}
      <div
        className="bg-[#141720] border border-[#1E2433] rounded-xl p-5 mb-8"
        style={{ animation: "fadeInUp 0.5s 0.6s ease both" }}
      >
        <p className="text-xs text-amber-400/70 uppercase tracking-wider mb-3 font-bold">
          Por que é mais fácil do que parece
        </p>
        <p className="text-sm text-[#8B9ABB] leading-relaxed">
          A maioria dos concorrentes do seu mercado ainda usa Instagram como única
          presença digital, ou tem um site desatualizado sem estratégia de conversão.
          Com a Lumen Pages, você chega ao ar em 7 dias úteis com uma página que já supera
          tecnicamente{" "}
          <strong className="text-white">90% do que existe no seu nicho.</strong>
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
