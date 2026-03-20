/**
 * Authority Card — Card 10
 * Why Lumen Pages is the right solution.
 * Animated stat counters + differentiators.
 */
import { AnimatedCounter } from "../AnimatedCounter";

interface Props { onNext: () => void; animDir: string; }

const stats = [
  { value: 40, prefix: "+", suffix: "", label: "páginas entregues" },
  { value: 12, prefix: "", suffix: "+", label: "segmentos atendidos" },
  { value: 3.2, prefix: "", suffix: "×", decimals: 1, label: "conversão vs Instagram" },
  { value: 7, prefix: "", suffix: " dias", label: "prazo médio de entrega" },
];

const differentiators = [
  {
    title: "Foco em resultado, não em beleza",
    desc: "Cada página é construída em torno de uma meta: leads, agendamentos ou vendas. Bonito-mas-não-converte não é entregável aqui.",
  },
  {
    title: "Copy estratégico proprietário",
    desc: "Escrevemos o texto com base em frameworks de persuasão testados (PAS, AIDA, SPIN) aplicados ao nicho do cliente. Você não precisa escrever nada.",
  },
  {
    title: "Processo transparente em 4 etapas",
    desc: "Briefing → Wireframe → Design → Publicação. Você sabe exatamente onde está o projeto a qualquer momento.",
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
        É uma especialização deliberada. Tentamos fazer tudo e percebemos que fazer
        uma coisa excepcionalmente bem gera resultados 3,2× maiores do que fazer
        muitas coisas mediocres.
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
              {s.prefix}
              <AnimatedCounter
                target={s.value}
                duration={1400}
                delay={600 + i * 150}
                decimals={s.decimals ?? 0}
              />
              {s.suffix}
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
