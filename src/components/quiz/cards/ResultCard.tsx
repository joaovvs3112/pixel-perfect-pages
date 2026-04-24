/**
 * Result Card — Card 9
 * Personalized diagnosis based on quiz profile.
 */
import { PROFILES, getTicketRange, getWeeklyContacts, type Profile } from "../quizData";
import { AnimatedCounter } from "../AnimatedCounter";
import { WordReveal } from "../WordReveal";

interface Props {
  onNext: () => void;
  animDir: string;
  profile: Profile | null;
  answers: Record<string, number>;
}

export function ResultCard({ onNext, animDir, profile, answers }: Props) {
  const p = PROFILES[profile ?? "B"];
  const ticket = getTicketRange(answers["q6"] ?? 1);
  const weekly = getWeeklyContacts(answers["q4"] ?? 1);
  const monthly = Math.round(weekly * 4 * 0.25 * ticket.mid);
  const potential = Math.round(monthly * 2);
  const gap = potential - monthly;

  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      {/* Profile badge */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold tracking-widest mb-6"
        style={{
          borderColor: `${p.color}40`,
          backgroundColor: `${p.color}15`,
          color: p.color,
          animation: "scaleIn 0.5s 0.2s ease both",
          opacity: 0,
        }}
      >
        {p.badge}
      </div>

      {/* Profile name — dramatic reveal */}
      <h1
        className="text-4xl md:text-5xl font-black mb-3"
        style={{
          color: p.color,
          animation: "fadeInUp 0.7s 0.4s ease both",
          opacity: 0,
        }}
      >
        {p.title}
      </h1>

      <p
        className="text-xl text-white font-medium mb-5"
        style={{ animation: "fadeInUp 0.6s 0.7s ease both", opacity: 0 }}
      >
        {p.subtitle}
      </p>

      <p
        className="text-[#8B9ABB] leading-relaxed mb-6"
        style={{ animation: "fadeInUp 0.6s 0.9s ease both", opacity: 0 }}
      >
        {p.description}
      </p>

      {/* Revenue gap callout */}
      {gap > 0 && (
        <div
          className="bg-[#141720] border rounded-2xl p-5 mb-6 relative overflow-hidden"
          style={{
            borderColor: `${p.color}40`,
            animation: "fadeInUp 0.6s 1.1s ease both",
            opacity: 0,
          }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-0.5"
            style={{ background: `linear-gradient(to right, transparent, ${p.color}, transparent)` }}
          />
          <p className="text-xs uppercase tracking-wider mb-3" style={{ color: `${p.color}99` }}>
            Estimativa de oportunidade mensal
          </p>
          <div className="flex items-end gap-6 flex-wrap">
            <div>
              <p className="text-xs text-[#6B7A99] mb-1">Situação atual</p>
              <p className="text-2xl font-black text-[#6B7A99]">
                R$ {monthly.toLocaleString("pt-BR")}
              </p>
            </div>
            <div className="text-[#1E2433] text-3xl font-thin">→</div>
            <div>
              <p className="text-xs mb-1" style={{ color: `${p.color}99` }}>Com Landing Page</p>
              <p className="text-3xl font-black" style={{ color: p.color }}>
                R$ <AnimatedCounter target={potential} duration={1500} delay={1300} />
              </p>
            </div>
          </div>
          <p className="text-sm mt-3 text-[#8B9ABB]">
            <strong className="text-white">
              +R$ <AnimatedCounter target={gap} duration={1400} delay={1500} /> por mês
            </strong>{" "}
            em oportunidade a capturar.
          </p>
        </div>
      )}

      {/* Urgency */}
      <div
        className="bg-amber-400/5 border border-amber-400/20 rounded-xl p-4 mb-8"
        style={{ animation: "fadeInUp 0.5s 1.3s ease both", opacity: 0 }}
      >
        <p className="text-sm text-amber-400">
          <WordReveal
            text={p.urgency}
            highlight={["landing", "page", "3×"]}
            stagger={50}
            baseDelay={1400}
          />
        </p>
      </div>

      <button
        onClick={onNext}
        className="quiz-cta-btn"
        style={{ animation: "fadeInUp 0.5s 1.5s ease both", opacity: 0 }}
      >
        Ver como a Lumen Pages resolve isso
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
