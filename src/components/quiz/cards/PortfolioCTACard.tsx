/**
 * Portfolio + CTA Card — Card 22 (Final)
 * Shows portfolio items as compact cards (name + niche + Visitar button).
 * No image, no URL exposed — keeps the focus on the content and the CTA.
 */
import { portfolioItems, makeWALink, type Profile } from "../quizData";

interface Props {
  animDir: string;
  profile: Profile | null;
  answers: Record<string, number>;
}

export function PortfolioCTACard({ animDir, profile, answers }: Props) {
  const waLink = makeWALink(profile);

  const q10 = answers["q10"] ?? 0;
  const desireMap = [
    "receber contatos automaticamente, mesmo dormindo",
    "parar de perder clientes para concorrentes",
    "ter um canal que não depende de algoritmo",
    "ter clareza de que o investimento vai ter retorno",
  ];
  const desire = desireMap[q10];

  // Ícones por nicho de mercado
  const segmentIcon: Record<string, string> = {
    Odontologia:          "🦷",
    Advocacia:            "⚖️",
    Arquitetura:          "🏛️",
    Contabilidade:        "📊",
    "Estética Automotiva":"🚗",
  };

  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">EXEMPLOS REAIS</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        Veja o padrão de entrega da Lumen Pages.
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        Cada página abaixo foi construída do zero — com copy, design e integração
        com WhatsApp. Clique em "Visitar" para ver o projeto ao vivo.
      </p>

      {/* Portfolio list */}
      <div className="space-y-3 mb-4">
        {portfolioItems.map((item, i) => (
          <div
            key={i}
            className="bg-[#141720] border border-[#1E2433] rounded-xl p-4 flex items-center gap-4"
            style={{ animation: `fadeInUp 0.5s ${0.2 + i * 0.12}s ease both`, opacity: 0 }}
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-[#1E2433] flex items-center justify-center text-xl shrink-0">
              {segmentIcon[item.segment] ?? "🌐"}
            </div>

            {/* Name + segment */}
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm">{item.title}</p>
              <p className="text-amber-400/70 text-xs mt-0.5">{item.segment}</p>
            </div>

            {/* Visit button */}
            <a
              href={`https://${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-3 py-1.5 rounded-lg border border-[#2A3347] bg-[#1E2433] text-[#8B9ABB] hover:border-amber-400/50 hover:text-amber-400 transition-all duration-200 text-xs font-medium flex items-center gap-1"
            >
              Visitar
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M3 9L9 3M9 3H5M9 3v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        ))}
      </div>

      {/* Observation note */}
      <p
        className="text-[#6B7A99] text-xs italic text-center mb-8 px-2"
        style={{ animation: "fadeInUp 0.5s 0.8s ease both", opacity: 0 }}
      >
        Essas são somente demonstrações de aplicação — podemos ir muito além disso,
        aplicando a identidade da sua marca ao projeto.
      </p>

      {/* ── Final CTA block ── */}
      <div
        className="border-t border-[#1E2433] pt-8 mb-6"
        style={{ animation: "fadeInUp 0.6s 0.9s ease both" }}
      >
        <div className="bg-[#141720] border border-amber-400/40 rounded-2xl p-6 relative overflow-hidden">
          {/* Glow top border */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          {/* Soft ambient glow behind */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-400/5 to-transparent pointer-events-none rounded-2xl" />

          {/* Emotional headline using Q10 answer */}
          <p className="text-xs text-amber-400/70 uppercase tracking-wider mb-2 relative z-10">
            Você disse que quer...
          </p>
          <h3 className="text-xl font-bold text-white mb-3 leading-snug relative z-10">
            {desire.charAt(0).toUpperCase() + desire.slice(1)}.
          </h3>
          <p className="text-[#8B9ABB] text-sm mb-5 leading-relaxed relative z-10">
            Você acabou de ver o padrão de qualidade que entregamos.
            Cada uma dessas páginas começou com uma conversa de 15 minutos —
            e foi ao ar em até 7 dias úteis.{" "}
            <strong className="text-white">
              A próxima pode ser a sua.
            </strong>
          </p>

          {/* Urgency triggers */}
          <div className="space-y-2 mb-6 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shrink-0" />
              <p className="text-red-400 text-sm font-medium">
                Máximo de 4 projetos simultâneos — vagas limitadas este mês.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shrink-0" />
              <p className="text-amber-400/80 text-sm font-medium">
                Cada dia sem LP é mais um lead indo para o concorrente.
              </p>
            </div>
          </div>

          {/* Glowing CTA button */}
          <div className="relative z-10">
            <div
              className="absolute -inset-1 rounded-xl blur-md opacity-70"
              style={{ background: "linear-gradient(90deg, #F59E0B, #FBBF24, #F59E0B)", animation: "ctaGlow 2s ease-in-out infinite" }}
            />
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-bold text-[#0D0F14] text-base"
              style={{
                background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #F59E0B 100%)",
                animation: "ctaPulse 2s ease-in-out infinite",
              }}
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.554 4.122 1.523 5.86L.057 23.882l6.19-1.624A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.37l-.36-.213-3.676.964.981-3.582-.234-.369A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
              </svg>
              Quero minha Landing Page agora
            </a>
          </div>

          {/* Micro-copy */}
          <p className="text-center text-[#6B7A99] text-xs mt-3 relative z-10">
            Só uma conversa de 15 minutos. Nós cuidamos de todo o resto.
          </p>
          <p className="text-center text-[#8B9ABB] text-xs mt-1 relative z-10">
            A partir de R$ 997 · Pagamento único · Sem mensalidade
          </p>
        </div>
      </div>
    </div>
  );
}
