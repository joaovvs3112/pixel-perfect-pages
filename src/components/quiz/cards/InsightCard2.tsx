/**
 * Insight Card 2 — After Q2 (Tem página dedicada?)
 * 4 variants based on q2Answer:
 *   0 = tem LP         → Ter é o primeiro passo, mas converter é diferente
 *   1 = só Instagram   → Gráfico de conversão Instagram vs LP
 *   2 = linktree        → Linktree organiza, não vende
 *   3 = nada           → Sem destino = desperdício garantido
 */
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";
import { AnimatedCounter } from "../AnimatedCounter";
import { WordReveal } from "../WordReveal";

interface Props { onNext: () => void; animDir: string; q2Answer: number | undefined; }

const chartData = [
  { name: "Perfil\nInstagram", min: 0.5, max: 1.5, label: "0,5–1,5%", fill: "#6B7A99" },
  { name: "Landing\nPage", min: 3, max: 8, label: "3–8%", fill: "#F59E0B" },
];

const CustomBar = (props: any) => {
  const { x, y, width, height, fill } = props;
  return (
    <rect
      x={x} y={y} width={width} height={height} fill={fill} rx={6} ry={6}
      style={{ animation: "barGrowUp 1s ease both" }}
    />
  );
};

const ConversionChart = () => (
  <div
    className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
    style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
  >
    <p className="text-xs text-[#6B7A99] text-center mb-4 uppercase tracking-wider">
      Taxa de conversão média
    </p>
    <div style={{ height: 200 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} barSize={70} margin={{ top: 20, bottom: 20 }}>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: "#8B9ABB", fontSize: 12 }} />
          <YAxis hide />
          <Bar dataKey="max" shape={<CustomBar />} radius={[6, 6, 0, 0]}>
            {chartData.map((entry, i) => <Cell key={i} fill={entry.fill} />)}
            <LabelList
              dataKey="label"
              position="top"
              content={(props: any) => {
                const { x, y, width, index } = props;
                return (
                  <text x={x + width / 2} y={y - 8} textAnchor="middle"
                    fill={index === 1 ? "#F59E0B" : "#8B9ABB"} fontWeight={700} fontSize={14}>
                    {chartData[index].label}
                  </text>
                );
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-2 border-t border-[#1E2433] pt-4">
      <div className="text-center">
        <p className="text-[#6B7A99] text-xs mb-1">Por 1.000 visitantes</p>
        <p className="text-2xl font-black text-[#6B7A99]">5–15</p>
        <p className="text-xs text-[#6B7A99]">contatos via Instagram</p>
      </div>
      <div className="text-center">
        <p className="text-amber-400/60 text-xs mb-1">Por 1.000 visitantes</p>
        <p className="text-2xl font-black text-amber-400">
          <AnimatedCounter target={30} duration={1200} delay={600} />–<AnimatedCounter target={80} duration={1400} delay={600} />
        </p>
        <p className="text-xs text-amber-400/70">contatos via Landing Page</p>
      </div>
    </div>
  </div>
);

export function InsightCard2({ onNext, animDir, q2Answer }: Props) {
  const variant = q2Answer ?? 1;

  /* ─────────────────────────────────────────────
     Variante 0 — Tem LP
  ───────────────────────────────────────────── */
  if (variant === 0) {
    return (
      <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
        <div className="insight-badge">COMPARATIVO REAL</div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
          Ter é o primeiro passo. Mas ter uma página e ter uma página que{" "}
          <span className="text-amber-400">converte</span> são coisas muito diferentes.
        </h2>

        <p className="text-[#8B9ABB] mb-6 leading-relaxed">
          A maioria das páginas existe, mas foi feita sem estratégia de conversão. Headline fraca, sem prova social, botão de contato enterrado no final. O visitante entra, olha, não encontra o que precisava e sai.
        </p>

        <div
          className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
          style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
        >
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-[#6B7A99] uppercase tracking-wider mb-3">Página comum</p>
              <ul className="space-y-2 text-sm text-[#6B7A99]">
                {["Headline genérica", "Sem prova social", "CTA fraco ou ausente", "Sem hierarquia visual"].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-red-400">✗</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-amber-400/70 uppercase tracking-wider mb-3">LP estratégica</p>
              <ul className="space-y-2 text-sm text-[#8B9ABB]">
                {["Headline que prende", "Depoimentos reais", "CTA no momento certo", "Fluxo de leitura claro"].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-[#8B9ABB] text-sm italic mb-8">
          <WordReveal
            text="Uma página que existe e uma que converte: a diferença está nos detalhes."
            highlight={[]}
            stagger={60}
            baseDelay={600}
          />
        </p>

        <button onClick={onNext} className="quiz-insight-btn">
          Faz sentido. Vamos ver o volume →
          <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     Variante 1 — Só Instagram (gráfico original)
  ───────────────────────────────────────────── */
  if (variant === 1) {
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

        <ConversionChart />

        <p className="text-[#8B9ABB] text-sm italic mb-8">
          Você não perdeu esses clientes por incompetência.
          Perdeu por ausência de estrutura.
        </p>

        <button onClick={onNext} className="quiz-insight-btn">
          Faz sentido. Vamos ver o volume →
          <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     Variante 2 — Linktree
  ───────────────────────────────────────────── */
  if (variant === 2) {
    return (
      <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
        <div className="insight-badge">COMPARATIVO REAL</div>

        <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
          O Linktree organiza os seus links. Mas organizar não é o mesmo que{" "}
          <span className="text-amber-400">vender.</span>
        </h2>

        <p className="text-[#8B9ABB] mb-6 leading-relaxed">
          O Linktree é apenas uma ferramenta de organização, uma lista de atalhos. Ele não tira as dúvidas do lead, não expõe o seu serviço com profundidade, não apresenta depoimentos de clientes e não guia o visitante até o contato. Sem um site ou landing page, ele continua incompleto como ferramenta de vendas.
        </p>

        <div
          className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
          style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
        >
          <div className="space-y-3">
            {[
              { label: "Organiza links", linktree: true, lp: true },
              { label: "Apresenta o serviço com profundidade", linktree: false, lp: true },
              { label: "Responde dúvidas de leads", linktree: false, lp: true },
              { label: "Exibe depoimentos e provas sociais", linktree: false, lp: true },
              { label: "Guia até o contato com estratégia", linktree: false, lp: true },
            ].map((row) => (
              <div key={row.label} className="grid grid-cols-[1fr_60px_60px] items-center gap-2">
                <p className="text-sm text-[#8B9ABB]">{row.label}</p>
                <div className="text-center">
                  <span className={row.linktree ? "text-green-400" : "text-[#6B7A99]"}>
                    {row.linktree ? "✓" : "✗"}
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-amber-400">✓</span>
                </div>
              </div>
            ))}
            <div className="grid grid-cols-[1fr_60px_60px] items-center gap-2 pt-2 border-t border-[#1E2433]">
              <p className="text-xs text-[#6B7A99]"></p>
              <p className="text-xs text-[#6B7A99] text-center">Linktree</p>
              <p className="text-xs text-amber-400/70 text-center">Landing Page</p>
            </div>
          </div>
        </div>

        <p className="text-[#8B9ABB] text-sm italic mb-8">
          <WordReveal
            text="O Linktree é o mapa. A landing page é o destino."
            highlight={[]}
            stagger={60}
            baseDelay={600}
          />
        </p>

        <button onClick={onNext} className="quiz-insight-btn">
          Faz sentido. Vamos ver o volume →
          <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    );
  }

  /* ─────────────────────────────────────────────
     Variante 3 — Nada
  ───────────────────────────────────────────── */
  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">COMPARATIVO REAL</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        Sem destino digital, cada real gasto em anúncio é{" "}
        <span className="text-amber-400">desperdício garantido.</span>
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        Anúncio sem página de destino é como abrir uma loja sem endereço: você gasta dinheiro para chamar atenção, mas quando o cliente tenta chegar, não há nada lá. O tráfego pago só funciona quando existe uma estrutura para receber e converter esse visitante.
      </p>

      <div
        className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-6"
        style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
      >
        <p className="text-xs text-[#6B7A99] text-center mb-4 uppercase tracking-wider">
          O que acontece sem uma página de destino
        </p>
        <div className="space-y-3">
          {[
            "Visitante clica no anúncio → não encontra informação → sai",
            "Você paga pelo clique de qualquer forma",
            "Taxa de conversão próxima de zero",
            "Impossível medir ou otimizar resultados",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-400/10 border border-red-400/30 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">!</span>
              </div>
              <p className="text-sm text-[#8B9ABB]">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[#8B9ABB] text-sm italic mb-8">
        <WordReveal
          text="Você não precisa de mais tráfego. Precisa de um lugar para ele chegar."
          highlight={[]}
          stagger={60}
          baseDelay={600}
        />
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
