/**
 * Insight Card 3 — After Q4 (Quantos contatos/semana)
 * Theme: Revenue Opportunity Calculator
 * Visual: Animated calculation reveal — current vs potential
 */
import { AnimatedCounter } from "../AnimatedCounter";
import { getTicketRange, getWeeklyContacts } from "../quizData";

interface Props {
  onNext: () => void;
  animDir: string;
  q4Answer: number | undefined;
  q6Answer: number | undefined; // may not be answered yet — use midpoint
}

export function InsightCard3({ onNext, animDir, q4Answer, q6Answer }: Props) {
  const ticket = getTicketRange(q6Answer ?? 1);
  const weeklyContacts = getWeeklyContacts(q4Answer ?? 1);
  const closingRate = 0.25; // 25% conservative

  const currentMonthly = Math.round(weeklyContacts * 4 * closingRate * ticket.mid);
  const potentialMonthly = Math.round(currentMonthly * 3.2); // 3.2× based on authority section
  const opportunity = potentialMonthly - currentMonthly;

  const zeroContacts = weeklyContacts === 0;

  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">CALCULADORA DE OPORTUNIDADE</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        {zeroContacts
          ? "Cada dia sem presença digital é receita que vai para outro."
          : "Aqui está o que esse número realmente significa."}
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        {zeroContacts
          ? "Com zero contatos pelo digital, você está perdendo 100% do seu potencial online. Veja o que uma landing page pode mudar:"
          : "Com base nos seus contatos semanais e ticket médio estimado, calculamos o seu potencial atual vs o potencial com uma LP bem estruturada:"}
      </p>

      {/* Calculator cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
      >
        {/* Current */}
        <div className="bg-[#141720] border border-[#1E2433] rounded-2xl p-5">
          <p className="text-xs text-[#4A5568] uppercase tracking-wider mb-3">Situação atual</p>
          <div className="flex flex-col gap-2 text-sm text-[#8B9ABB] mb-4">
            <span>{weeklyContacts} contatos/semana</span>
            <span>× 25% de fechamento</span>
            <span>× {ticket.label} ticket médio</span>
          </div>
          <div className="border-t border-[#1E2433] pt-3">
            <p className="text-xs text-[#4A5568] mb-1">Receita digital estimada/mês</p>
            <p className="text-3xl font-black text-[#8B9ABB]">
              {zeroContacts ? "R$ 0" : (
                <>
                  R${" "}
                  <AnimatedCounter
                    target={currentMonthly}
                    duration={1200}
                    delay={500}
                  />
                </>
              )}
            </p>
          </div>
        </div>

        {/* Potential */}
        <div className="bg-[#141720] border border-amber-400/40 rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          <p className="text-xs text-amber-400/70 uppercase tracking-wider mb-3">Com Landing Page</p>
          <div className="flex flex-col gap-2 text-sm text-[#8B9ABB] mb-4">
            <span>{Math.round(weeklyContacts * 3.2) || 6} contatos/semana <span className="text-green-400">↑ 3,2×</span></span>
            <span>× 25% de fechamento</span>
            <span>× {ticket.label} ticket médio</span>
          </div>
          <div className="border-t border-amber-400/20 pt-3">
            <p className="text-xs text-amber-400/70 mb-1">Receita digital estimada/mês</p>
            <p className="text-3xl font-black text-amber-400">
              R${" "}
              <AnimatedCounter
                target={potentialMonthly || 2400}
                duration={1600}
                delay={700}
              />
            </p>
          </div>
        </div>
      </div>

      {/* Opportunity callout */}
      <div
        className="bg-green-400/10 border border-green-400/30 rounded-xl p-4 mb-8 flex items-center gap-3"
        style={{ animation: "fadeInUp 0.6s 0.6s ease both" }}
      >
        <span className="text-2xl">💡</span>
        <p className="text-sm text-[#8B9ABB]">
          Isso representa{" "}
          <strong className="text-white">
            R${" "}
            <AnimatedCounter target={opportunity || 2400} duration={1400} delay={900} />{" "}
            por mês
          </strong>{" "}
          em oportunidade que hoje está indo para outro negócio —
          sem que você perceba.
        </p>
      </div>

      <p className="text-[#4A5568] text-xs mb-6 italic">
        * Estimativas conservadoras baseadas em médias de mercado. Resultados individuais variam.
      </p>

      <button onClick={onNext} className="quiz-insight-btn">
        Continuar
        <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
