/**
 * Portfolio + CTA Card — Card 12 (Final)
 * Shows portfolio previews + emotional CTA to WhatsApp.
 * After viewing portfolio, a sticky banner with emotional trigger pulls them back.
 */
import { useState } from "react";
import { portfolioItems, makeWALink, type Profile } from "../quizData";

interface Props {
  animDir: string;
  profile: Profile | null;
  answers: Record<string, number>;
}

export function PortfolioCTACard({ animDir, profile, answers }: Props) {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const waLink = makeWALink(profile);

  const q10 = answers["q10"] ?? 0;
  const desireMap = [
    "receber contatos automaticamente, mesmo dormindo",
    "parar de perder clientes para concorrentes",
    "ter um canal que não depende de algoritmo",
    "ter clareza de que o investimento vai ter retorno",
  ];
  const desire = desireMap[q10];

  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">EXEMPLOS REAIS</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        Veja o padrão de entrega da Lumen Pages.
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        Cada página abaixo foi construída do zero — com copy, design e integração com WhatsApp.
        Clique para acessar o projeto ao vivo.
      </p>

      {/* Portfolio grid */}
      <div className="space-y-4 mb-8">
        {portfolioItems.map((item, i) => (
          <div
            key={i}
            className="bg-[#141720] border border-[#1E2433] rounded-2xl overflow-hidden group"
            style={{
              animation: `fadeInUp 0.5s ${0.2 + i * 0.15}s ease both`,
              opacity: 0,
            }}
          >
            {/* Preview image (clickable) */}
            <a
              href={`https://${item.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden"
              style={{ height: 160 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium flex items-center gap-1">
                  Ver ao vivo
                  <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </div>
              {/* Real client badge */}
              {item.isReal && (
                <div className="absolute top-2 left-2 bg-green-400/90 text-[#0D0F14] text-xs font-bold px-2 py-0.5 rounded-full">
                  Cliente real
                </div>
              )}
              {/* Segment tag */}
              <div className="absolute top-2 right-2 bg-amber-400/90 text-[#0D0F14] text-xs font-bold px-2 py-0.5 rounded-full">
                {item.segment}
              </div>
            </a>

            {/* Info row */}
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-white font-semibold text-sm">{item.title}</p>
                <p className="text-amber-400 text-xs">{item.url}</p>
              </div>
              <a
                href={`https://${item.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B9ABB] hover:text-amber-400 transition-colors text-xs flex items-center gap-1"
              >
                Visitar
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                  <path d="M3 9L9 3M9 3H5M9 3v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ── Emotional pull-back separator ── */}
      <div
        className="border-t border-[#1E2433] pt-8 mb-6"
        style={{ animation: "fadeInUp 0.6s 0.8s ease both" }}
      >
        <div className="bg-[#141720] border border-amber-400/20 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

          {/* Emotional headline using Q10 answer */}
          <p className="text-xs text-amber-400/70 uppercase tracking-wider mb-2">
            Você disse que quer...
          </p>
          <h3 className="text-xl font-bold text-white mb-3 leading-snug">
            {desire.charAt(0).toUpperCase() + desire.slice(1)}.
          </h3>
          <p className="text-[#8B9ABB] text-sm mb-5 leading-relaxed">
            Você acabou de ver o padrão de qualidade que entregamos.
            Cada uma dessas páginas começou com uma conversa de 15 minutos —
            e foi ao ar em até 7 dias úteis.{" "}
            <strong className="text-white">
              A próxima pode ser a sua.
            </strong>
          </p>

          {/* Urgency line */}
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shrink-0" />
            <p className="text-red-400 text-sm font-medium">
              Trabalhamos com no máximo 4 projetos simultâneos.
              Verifique disponibilidade este mês.
            </p>
          </div>

          {/* Primary CTA */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="quiz-cta-btn w-full justify-center text-base"
          >
            Quero minha Landing Page
            <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          {/* Micro-copy */}
          <p className="text-center text-[#4A5568] text-xs mt-3">
            Você responde uma conversa de 15 minutos. Nós cuidamos de todo o resto.
          </p>

          {/* Price hint */}
          <p className="text-center text-[#8B9ABB] text-xs mt-1">
            A partir de R$ 997 · Pagamento único · Sem mensalidade
          </p>
        </div>
      </div>
    </div>
  );
}
