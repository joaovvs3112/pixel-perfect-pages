/**
 * Insight Card 2 — After Q2 (Tem página dedicada?)
 * Theme: Conversion Rate Comparison — Instagram vs Landing Page
 * Visual: Recharts BarChart with animated growth
 */
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";
import { AnimatedCounter } from "../AnimatedCounter";

interface Props { onNext: () => void; animDir: string; }

const data = [
  { name: "Perfil\nInstagram", min: 0.5, max: 1.5, label: "0,5–1,5%", fill: "#4A5568" },
  { name: "Landing\nPage", min: 3, max: 8, label: "3–8%", fill: "#F59E0B" },
];

const CustomBar = (props: any) => {
  const { x, y, width, height, fill } = props;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      rx={6}
      ry={6}
      style={{ animation: "barGrowUp 1s ease both" }}
    />
  );
};

export function InsightCard2({ onNext, animDir }: Props) {
  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">COMPARATIVO REAL</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        A diferença não é o seu serviço.<br />
        <span className="text-amber-400">É a estrutura.</span>
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        Para cada 1.000 visitantes que chegam até você, o Instagram converte
        5 a 15 contatos. Uma landing page bem construída converte 30 a 80.
      </p>

      {/* Chart */}
      <div
        className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
        style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
      >
        <p className="text-xs text-[#4A5568] text-center mb-4 uppercase tracking-wider">
          Taxa de conversão média
        </p>

        <div style={{ height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={70} margin={{ top: 20, bottom: 20 }}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#8B9ABB", fontSize: 12 }}
              />
              <YAxis hide />
              <Bar dataKey="max" shape={<CustomBar />} radius={[6, 6, 0, 0]}>
                {data.map((entry, i) => (
                  <Cell key={i} fill={entry.fill} />
                ))}
                <LabelList
                  dataKey="label"
                  position="top"
                  style={{ fill: "#fff", fontWeight: 700, fontSize: 14 }}
                  content={(props: any) => {
                    const { x, y, width, value, index } = props;
                    return (
                      <text
                        x={x + width / 2}
                        y={y - 8}
                        textAnchor="middle"
                        fill={index === 1 ? "#F59E0B" : "#8B9ABB"}
                        fontWeight={700}
                        fontSize={14}
                      >
                        {data[index].label}
                      </text>
                    );
                  }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Numbers below */}
        <div className="grid grid-cols-2 gap-4 mt-2 border-t border-[#1E2433] pt-4">
          <div className="text-center">
            <p className="text-[#4A5568] text-xs mb-1">Por 1.000 visitantes</p>
            <p className="text-2xl font-black text-[#4A5568]">5–15</p>
            <p className="text-xs text-[#4A5568]">contatos via Instagram</p>
          </div>
          <div className="text-center">
            <p className="text-amber-400/60 text-xs mb-1">Por 1.000 visitantes</p>
            <p className="text-2xl font-black text-amber-400">
              <AnimatedCounter target={30} duration={1200} delay={600} />
              –
              <AnimatedCounter target={80} duration={1400} delay={600} />
            </p>
            <p className="text-xs text-amber-400/70">contatos via Landing Page</p>
          </div>
        </div>
      </div>

      <p className="text-[#8B9ABB] text-sm italic mb-8">
        Você não perdeu esses clientes por incompetência.
        Perdeu por ausência de estrutura.
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
