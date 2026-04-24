/**
 * Insight Card 5 — After Q7 (Dependência de indicação)
 * 4 variants based on q7Answer:
 *   0 = ~100% indicação  → Crescimento nas mãos de outros
 *   1 = 70–80% indicação → Dois canais, um carrega tudo
 *   2 = ~50%/50%         → Parece bom, mas metade é imprevisível
 *   3 = <30% indicação   → Você já dominou o digital — próximo: conversão
 *
 * O gráfico (donut + barras) adapta automaticamente ao percentual.
 */
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { AnimatedCounter } from "../AnimatedCounter";

interface Props { onNext: () => void; animDir: string; q7Answer: number | undefined; }

function getDependency(q7: number | undefined) {
  const map = [90, 75, 50, 20];
  return map[q7 ?? 0];
}

function getContent(q7: number) {
  switch (q7) {
    case 0:
      return {
        title: "Quando 9 em 10 clientes vêm por indicação, seu crescimento está nas mãos de outras pessoas.",
        body: "Indicação é o melhor canal que existe, mas não dá para programar, não escala sozinha e não é previsível. Um mês sem uma boa indicação pode impactar diretamente o seu faturamento.",
        closing: "Uma landing page não substitui a indicação. Ela trabalha em paralelo, 24 horas por dia, sem precisar de você.",
      };
    case 1:
      return {
        title: "Você tem dois canais. Mas um carrega quase todo o peso.",
        body: "Ter algum resultado digital é um bom sinal, mas com 70–80% vindo de indicações, você ainda está muito exposto. Se esse fluxo cair, a queda no faturamento é imediata.",
        closing: "Equilibrar os canais não é abandonar a indicação. É garantir que o digital funcione mesmo quando as indicações estão quietas.",
      };
    case 2:
      return {
        title: "50/50 parece bom. Mas significa que metade do seu crescimento ainda é imprevisível.",
        body: "Chegar ao equilíbrio entre indicação e digital é um marco importante. O próximo passo não é aumentar tráfego: é converter melhor o que já chega pelo digital.",
        closing: "Com uma LP bem estruturada, o digital pode ultrapassar a indicação sem precisar gastar mais em anúncios.",
      };
    case 3:
      return {
        title: "Você já dominou o digital. O próximo nível é conversão.",
        body: "Menos de 30% de dependência de indicações significa que você já tem um canal digital funcionando. O gargalo agora não é tráfego: é transformar mais visitantes em contatos e mais contatos em clientes.",
        closing: "Uma LP otimizada para conversão pode dobrar seus resultados sem aumentar um centavo no investimento em tráfego.",
      };
    default:
      return {
        title: "Indicação é o melhor marketing que existe. Também é o mais frágil.",
        body: "Um negócio que depende fortemente de indicações está terceirizando seu crescimento para outros. Quando o fluxo diminui, e em algum momento sempre diminui, o impacto aparece direto no faturamento.",
        closing: "Uma landing page não substitui a indicação. Ela trabalha em paralelo, 24 horas por dia, sem precisar de você.",
      };
  }
}

export function InsightCard5({ onNext, animDir, q7Answer }: Props) {
  const q7 = q7Answer ?? 0;
  const pct = getDependency(q7);
  const digital = 100 - pct;
  const { title, body, closing } = getContent(q7);

  const pieData = [
    { name: "Indicação", value: pct,     color: "#6B7A99" },
    { name: "Digital",   value: digital, color: "#F59E0B" },
  ];

  const riskItems = q7 === 3
    ? [
        { icon: "📈", text: "Canal digital já funciona" },
        { icon: "🎯", text: "Foco em conversão agora" },
        { icon: "🔁", text: "Escala sem mais gasto" },
      ]
    : [
        { icon: "📅", text: "Não dá para programar crescimento" },
        { icon: "📉", text: "Não escala sozinha" },
        { icon: "🔮", text: "Não é previsível" },
      ];

  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">ANÁLISE DE RISCO</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        {title}
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        {body}
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
                <span className="w-3 h-3 rounded-sm bg-[#6B7A99] shrink-0" />
                <span className="text-sm text-[#8B9ABB]">Indicação</span>
                <span className="ml-auto text-xl font-black text-white">
                  <AnimatedCounter target={pct} suffix="%" duration={1200} delay={500} />
                </span>
              </div>
              <div className="h-2 bg-[#1E2433] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#6B7A99] rounded-full"
                  style={{ animation: "barGrow 1s 0.6s ease both", width: `${pct}%`, transformOrigin: "left" }}
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
                  style={{ animation: "barGrow 1s 0.8s ease both", width: `${digital}%`, transformOrigin: "left" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Risk row */}
        <div className="grid grid-cols-3 gap-3 mt-5 border-t border-[#1E2433] pt-4">
          {riskItems.map((item, i) => (
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
        {closing}
      </p>

      <button onClick={onNext} className="quiz-insight-btn">
        Boa. Qual seu maior objetivo? →
        <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
