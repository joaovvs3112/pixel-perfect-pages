/**
 * Portfolio + CTA Card — Card 22 (Final)
 * Shows portfolio items as compact cards (name + niche + Visitar button).
 * No image, no URL exposed — keeps the focus on the content and the CTA.
 */
import { portfolioItems, makeWALink, type Profile, type LeadData } from "../quizData";

interface Props {
  animDir: string;
  profile: Profile | null;
  answers: Record<string, number>;
  leadData?: LeadData | null;
}

export function PortfolioCTACard({ animDir, profile, answers, leadData }: Props) {
  const waLink = makeWALink(profile);

  // Build scheduling page link with pre-filled data
  const agendarParams = new URLSearchParams();
  if (profile) agendarParams.set("perfil", profile);
  if (leadData?.name) agendarParams.set("nome", leadData.name);
  if (leadData?.email) agendarParams.set("email", leadData.email);
  if (leadData?.phone) agendarParams.set("telefone", leadData.phone);
  const agendarLink = `/agendar${agendarParams.toString() ? `?${agendarParams}` : ""}`;

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
    Ortopedia:            "🦴",
    Odontologia:          "🦷",
    Advocacia:            "⚖️",
    Contabilidade:        "📊",
    Arquitetura:          "🏛️",
    "Estética Automotiva":"🚗",
  };

  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">EXEMPLOS REAIS</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-2 leading-snug">
        Veja o padrão de entrega da Lumen Pages.
      </h2>

      <p className="text-[#8B9ABB] mb-6 leading-relaxed">
        Cada página abaixo foi construída do zero, com copy, design e integração
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
        Essas são somente demonstrações de aplicação. Podemos ir muito além disso,
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

          {/* Headline */}
          <p className="text-xs text-amber-400/70 uppercase tracking-wider mb-2 relative z-10">
            SEU PRÓXIMO PASSO
          </p>
          <h3 className="text-xl font-bold text-white mb-3 leading-snug relative z-10">
            Agendar uma consultoria gratuita de 30 minutos.
          </h3>
          <p className="text-[#8B9ABB] text-sm mb-4 leading-relaxed relative z-10">
            Você acabou de ver o padrão de qualidade que entregamos.
            Cada uma dessas páginas começou com uma conversa estratégica
            e foi ao ar em até 7 dias úteis.{" "}
            <strong className="text-white">
              A próxima pode ser a sua.
            </strong>
          </p>

          <p className="text-[#8B9ABB] text-sm mb-1 relative z-10">Na consultoria, vamos analisar juntos:</p>
          <ul className="text-[#8B9ABB] text-sm mb-6 space-y-1 relative z-10">
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">•</span>
              Como o seu negócio está posicionado hoje
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">•</span>
              Onde estão os vazamentos de oportunidade
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400 mt-0.5">•</span>
              O que uma landing page estratégica resolveria no seu caso
            </li>
          </ul>

          {/* Glowing CTA button — Scheduling */}
          <div className="relative z-10">
            <div
              className="absolute -inset-1 rounded-xl blur-md opacity-70"
              style={{ background: "linear-gradient(90deg, #F59E0B, #FBBF24, #F59E0B)", animation: "ctaGlow 2s ease-in-out infinite" }}
            />
            <a
              href="https://calendly.com/lumenpages"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-bold text-[#0D0F14] text-base"
              style={{
                background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 50%, #F59E0B 100%)",
                animation: "ctaPulse 2s ease-in-out infinite",
              }}
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Agendar minha consultoria gratuita →
            </a>
          </div>

          {/* Separator */}
          <p className="text-center text-[#6B7A99] text-xs mt-4 mb-3 relative z-10">
            Prefere tirar uma dúvida rápida antes?
          </p>

          {/* Secondary CTA — WhatsApp */}
          <div className="relative z-10">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-[#2A3347] bg-[#141720] text-[#8B9ABB] hover:border-green-500/50 hover:text-green-400 transition-all duration-200 text-sm font-medium"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
          <p className="text-center text-[#8B9ABB] text-xs mt-1 relative z-10">
            A partir de R$ 997 · Pagamento único · Sem mensalidade
          </p>
        </div>
      </div>
    </div>
  );
}
