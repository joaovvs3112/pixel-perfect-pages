/**
 * Insight Card 5 — After Q7 (Dependência de indicação)
 * Theme: The fragility of referral-only businesses
 * Visual: Animated donut chart + risk analysis
 */
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { AnimatedCounter } from "../AnimatedCounter";

interface Props { onNext: () => void; animDir: string; q7Answer: number | undefined; }

function getDependency(q7: number | undefined) {
  const map = [90, 75, 50, 20];
  return map[q7 ?? 0];
}

export function InsightCard5({ onNext, animDir, q7Answer }: Props) {
  const pct = getDependency(q7Answer);
  const digital = 100 - pct;

  const pieData = [
    { name: "Indicação", value: pct, color: "#4A5568" },
    { name: "Digital", value: digital, color: "#F59E0B" },
  ];

  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">ANÁLISE DE RISCO</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        Indicação é o melhor marketing que existe.
        <br />
        <span className="text-amber-400">Também é o mais frágil.</span>
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        Um negócio que depende fortemente de indicações está terceirizando seu
        crescimento para outros. Quando o fluxo de indicações diminui — e em
        algum momento sempre diminui — o impacto aparece direto no faturamento.
      </p>

      {/* Chart + stats */}
      <div
        className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
        style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
      >
        <div className="flex items-center gap-6">
          {/* Donut */}
          <div style={{ width: 140, height: 140, flexShrink: 0 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={42}
                  outerRadius={62}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  animationBegin={400}
                  animationDuration={1200}
                >
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} strokeWidth={0} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex-1 space-y-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-3 h-3 rounded-sm bg-[#4A5568] shrink-0" />
                <span className="text-sm text-[#8B9ABB]">Indicação</span>
                <span className="ml-auto text-xl font-black text-white">
                  <AnimatedCounter target={pct} suffix="%" duration={1200} delay={500} />
                </span>
              </div>
              <div className="h-2 bg-[#1E2433] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#4A5568] rounded-full"
                  style={{ animation: `barGrow 1s 0.6s ease both`, width: `${pct}%`, transformOrigin: "left" }}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-3 h-3 rounded-sm bg-amber-400 shrink-0" />
                <span className="text-sm text-[#8B9ABB]">Digital</span>
                <span className="ml-auto text-xl font-black text-amber-400">
                  <AnimatedCounter target={digital} suffix="%" duration={1200} delay={700} />
                </span>
              </div>
              <div className="h-2 bg-[#1E2433] rounded-full overflow-hidden">
                <div
                  className="h-full bg-amber-400 rounded-full"
                  style={{ animation: `barGrow 1s 0.8s ease both`, width: `${digital}%`, transformOrigin: "left" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Insight row */}
        <div className="grid grid-cols-3 gap-3 mt-5 border-t border-[#1E2433] pt-4">
          {[
            { icon: "📅", text: "Não dá para programar crescimento" },
            { icon: "📉", text: "Não escala sozinha" },
            { icon: "🔮", text: "Não é previsível" },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center"
              style={{ animation: `fadeInUp 0.4s ${0.9 + i * 0.12}s ease both`, opacity: 0 }}
            >
              <p className="text-xl mb-1">{item.icon}</p>
              <p className="text-xs text-[#8B9ABB] leading-snug">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[#8B9ABB] text-sm italic mb-8">
        Uma landing page não substitui a indicação.{" "}
        <strong className="text-white">Ela trabalha em paralelo — 24 horas por dia, sem precisar de você.</strong>
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
