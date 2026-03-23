/**
 * Insight Card 3 — After Q4 (Quantos contatos/semana)
 * Theme: Revenue Opportunity Calculator
 *
 * Como funciona:
 *   1. Primeiro mostra 4 botões de ticket médio (opções de Q6)
 *   2. Ao selecionar, o cálculo anima com AnimatedCounter
 *   3. A seleção também pré-preenche Q6 via onSelectTicket
 *   4. Copy varia por q4Answer (0–3)
 */
import { useState } from "react";
import { AnimatedCounter } from "../AnimatedCounter";
import { getTicketRange, getWeeklyContacts } from "../quizData";

interface Props {
  onNext: () => void;
  animDir: string;
  q4Answer: number | undefined;
  onSelectTicket: (idx: number) => void;
}

const ticketOptions = [
  { label: "Até R$ 300",              short: "~R$ 300" },
  { label: "R$ 300 – R$ 1.000",       short: "~R$ 600" },
  { label: "R$ 1.000 – R$ 3.000",     short: "~R$ 2.000" },
  { label: "Acima de R$ 3.000",       short: "+R$ 3.000" },
];

function getHeadline(q4: number): { title: string; subtitle: string } {
  switch (q4) {
    case 0:
      return {
        title: "Você está 100% dependente de indicações.",
        subtitle: "Zero contatos pelo digital significa que toda a sua receita depende de outras pessoas te recomendando. Uma landing page muda isso — ela trabalha para você 24h por dia, mesmo quando você está dormindo.",
      };
    case 1:
      return {
        title: "Você já tem algum sinal de vida digital.",
        subtitle: "1 a 3 contatos por semana é um começo, mas ainda coloca quase todo o risco nas indicações. Veja o que acontece com esses números quando você tem uma estrutura de conversão.",
      };
    case 2:
      return {
        title: "Você converte mais, sem gastar 1 centavo a mais em tráfego.",
        subtitle: "Com 4 a 10 contatos por semana você já tem volume. O próximo passo não é mais anúncio — é converter melhor os que já chegam. Uma LP bem estruturada faz exatamente isso.",
      };
    case 3:
      return {
        title: "Você já tem volume. O gargalo agora é conversão.",
        subtitle: "Com mais de 10 contatos por semana, o problema não é mais conseguir leads — é fechar mais deles. Uma landing page otimizada eleva sua taxa de fechamento sem aumentar o custo de aquisição.",
      };
    default:
      return {
        title: "Aqui está o que esse número realmente significa.",
        subtitle: "Com base nos seus contatos semanais e ticket médio, calculamos o seu potencial atual vs o potencial com uma LP bem estruturada.",
      };
  }
}

export function InsightCard3({ onNext, animDir, q4Answer, onSelectTicket }: Props) {
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);

  const q4 = q4Answer ?? 1;
  const { title, subtitle } = getHeadline(q4);

  const handleTicketSelect = (idx: number) => {
    setSelectedTicket(idx);
    onSelectTicket(idx);
  };

  // Cálculo — só roda quando ticket está selecionado
  const weeklyContacts = getWeeklyContacts(q4);
  const ticket = selectedTicket !== null ? getTicketRange(selectedTicket) : null;
  const closingRate = 0.25;

  const currentMonthly = ticket
    ? Math.round(weeklyContacts * 4 * closingRate * ticket.mid)
    : 0;
  const potentialMonthly = ticket
    ? Math.round(currentMonthly * 3.2) || Math.round(6 * 4 * closingRate * ticket.mid)
    : 0;
  const opportunity = potentialMonthly - currentMonthly;

  const zeroContacts = weeklyContacts === 0;

  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">CALCULADORA DE OPORTUNIDADE</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        {title}
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        {subtitle}
      </p>

      {/* Seletor de ticket médio */}
      <div className="mb-6">
        <p className="text-sm text-[#8B9ABB] mb-3">
          Para calcular, me diz: qual é o seu ticket médio?
        </p>
        <div className="grid grid-cols-2 gap-3">
          {ticketOptions.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleTicketSelect(i)}
              className={`
                px-4 py-3 rounded-xl border text-sm font-medium text-left transition-all duration-200
                ${selectedTicket === i
                  ? "border-amber-400 bg-amber-400/10 text-white"
                  : "border-[#1E2433] bg-[#141720] text-[#8B9ABB] hover:border-amber-400/40 hover:text-white"
                }
              `}
            >
              <span className="block text-xs text-amber-400/60 mb-0.5">Ticket médio</span>
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Calculadora — aparece após selecionar ticket */}
      {selectedTicket !== null && ticket && (
        <>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
            style={{ animation: "fadeInUp 0.5s ease both" }}
          >
            {/* Atual */}
            <div className="bg-[#141720] border border-[#1E2433] rounded-2xl p-5">
              <p className="text-xs text-[#6B7A99] uppercase tracking-wider mb-3">Situação atual</p>
              <div className="flex flex-col gap-2 text-sm text-[#8B9ABB] mb-4">
                <span>{weeklyContacts} contatos/semana</span>
                <span>× 25% de fechamento</span>
                <span>× {ticket.label} ticket médio</span>
              </div>
              <div className="border-t border-[#1E2433] pt-3">
                <p className="text-xs text-[#6B7A99] mb-1">Receita digital estimada/mês</p>
                <p className="text-3xl font-black text-[#8B9ABB]">
                  {zeroContacts ? "R$ 0" : (
                    <>
                      R${" "}
                      <AnimatedCounter target={currentMonthly} duration={1200} delay={200} />
                    </>
                  )}
                </p>
              </div>
            </div>

            {/* Potencial */}
            <div className="bg-[#141720] border border-amber-400/40 rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
              <p className="text-xs text-amber-400/70 uppercase tracking-wider mb-3">Com Landing Page</p>
              <div className="flex flex-col gap-2 text-sm text-[#8B9ABB] mb-4">
                <span>
                  {Math.round(weeklyContacts * 3.2) || 6} contatos/semana{" "}
                  <span className="text-green-400">↑ 3,2×</span>
                </span>
                <span>× 25% de fechamento</span>
                <span>× {ticket.label} ticket médio</span>
              </div>
              <div className="border-t border-amber-400/20 pt-3">
                <p className="text-xs text-amber-400/70 mb-1">Receita digital estimada/mês</p>
                <p className="text-3xl font-black text-amber-400">
                  R${" "}
                  <AnimatedCounter target={potentialMonthly} duration={1600} delay={400} />
                </p>
              </div>
            </div>
          </div>

          {/* Oportunidade */}
          <div
            className="bg-green-400/10 border border-green-400/30 rounded-xl p-4 mb-6 flex items-center gap-3"
            style={{ animation: "fadeInUp 0.5s 0.2s ease both" }}
          >
            <span className="text-2xl">💡</span>
            <p className="text-sm text-[#8B9ABB]">
              Isso representa{" "}
              <strong className="text-white">
                R${" "}
                <AnimatedCounter target={opportunity} duration={1400} delay={600} />{" "}
                por mês
              </strong>{" "}
              em oportunidade que hoje está indo para outro negócio —
              sem que você perceba.
            </p>
          </div>

          <p className="text-[#6B7A99] text-xs mb-6 italic">
            * Estimativas conservadoras baseadas em médias de mercado. Resultados individuais variam.
          </p>
        </>
      )}

      <button
        onClick={onNext}
        disabled={selectedTicket === null}
        className={`quiz-insight-btn ${selectedTicket === null ? "opacity-40 cursor-not-allowed" : ""}`}
      >
        {selectedTicket === null ? "Selecione seu ticket para continuar" : "Continuar"}
        {selectedTicket !== null && (
          <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}
