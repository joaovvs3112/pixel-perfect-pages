/**
 * Authority Card — Card 10
 * Why Lumen Pages is the right solution.
 * Animated stat counters + differentiators.
 */
import { AnimatedCounter } from "../AnimatedCounter";

interface Props { onNext: () => void; animDir: string; }

const stats = [
  { value: 7, prefix: "", suffix: " dias úteis", label: "prazo médio de entrega" },
  { value: 20, prefix: "+", suffix: "%", label: "conversão no CTA" },
  { value: 0, prefix: "∞", suffix: "", label: "revisões ilimitadas", skipCounter: true },
  { value: 30, prefix: "", suffix: " dias", label: "suporte após entrega" },
];

const differentiators = [
  {
    title: "Primeira impressão que gera desejo",
    desc: "Um site visualmente atraente faz com que o lead sinta vontade de contratar antes mesmo de ler o preço. Quem se apresenta com profissionalismo vende mais caro, e o cliente não questiona, porque a experiência já justificou o valor.",
  },
  {
    title: "Copy estratégico proprietário",
    desc: "Escrevemos o texto com base em frameworks de persuasão testados (PAS, AIDA, SPIN) aplicados ao nicho do cliente. Você não precisa escrever nada: só nos mostrar como funciona seu negócio. Daí pra frente, é com a gente.",
  },
  {
    title: "Processo transparente em 5 etapas",
    desc: "Conversa → Briefing → Desenvolvimento → Revisão → Publicação. Você sabe exatamente onde está o projeto a qualquer momento.",
  },
];

export function AuthorityCard({ onNext, animDir }: Props) {
  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">POR QUE A LUMEN PAGES</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        Não fazemos sites.<br />
        <span className="text-amber-400">Fazemos páginas que vendem.</span>
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        É uma especialização deliberada. Cada página é construída do zero com copy
        estratégico, design focado em conversão e integração completa, tudo pensado
        para transformar visitante em cliente.
      </p>

      {/* Stats grid */}
      <div
        className="grid grid-cols-2 gap-3 mb-6"
        style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-[#141720] border border-[#1E2433] rounded-xl p-4 text-center relative overflow-hidden"
            style={{ animation: `fadeInUp 0.4s ${0.4 + i * 0.1}s ease both`, opacity: 0 }}
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
            <p className="text-3xl font-black text-amber-400">
              {(s as any).skipCounter ? (
                <>{s.prefix}</>
              ) : (
                <>
                  {s.prefix}
                  <AnimatedCounter
                    target={s.value}
                    duration={1400}
                    delay={600 + i * 150}
                    decimals={(s as any).decimals ?? 0}
                  />
                  {s.suffix}
                </>
              )}
            </p>
            <p className="text-xs text-[#8B9ABB] mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Differentiators */}
      <div className="space-y-3 mb-8">
        {differentiators.map((d, i) => (
          <div
            key={i}
            className="bg-[#141720] border border-[#1E2433] rounded-xl p-4 border-l-2"
            style={{
              borderLeftColor: "#F59E0B",
              animation: `slideInFromLeft 0.5s ${0.7 + i * 0.15}s ease both`,
              opacity: 0,
            }}
          >
            <p className="text-white font-semibold text-sm mb-1">{d.title}</p>
            <p className="text-[#8B9ABB] text-sm leading-relaxed">{d.desc}</p>
          </div>
        ))}
      </div>

      <button onClick={onNext} className="quiz-cta-btn">
        Ver projetos entregues
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
