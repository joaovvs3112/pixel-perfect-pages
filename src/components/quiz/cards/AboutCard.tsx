/**
 * About Card — Between AuthorityCard and SocialProofCard
 * Mirrors the "Quem vai cuidar do seu projeto" section from the landing page.
 */
import bioLumen from "@/assets/bio-lumen.jpeg";

interface Props { onNext: () => void; animDir: string; }

export function AboutCard({ onNext, animDir }: Props) {
  return (
    <div className={`quiz-card ${animDir} max-w-2xl mx-auto`}>
      <div className="insight-badge">QUEM VAI CUIDAR DO SEU PROJETO</div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mt-4 mb-6 leading-snug">
        Do primeiro briefing à página no ar,{" "}
        <span className="text-amber-400">sou eu quem cuida de tudo.</span>
      </h2>

      {/* Profile */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
        <img
          src={bioLumen}
          alt="João Pedro Vivaldi"
          className="w-24 h-24 rounded-full object-cover object-bottom border-2 border-amber-400/30 shrink-0"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold text-white mb-0.5">João Pedro Vivaldi</h3>
          <p className="text-amber-400 text-sm font-medium">Web designer &amp; estrategista de conversão</p>
        </div>
      </div>

      {/* Text */}
      <div
        className="bg-[#141720] border border-[#1E2433] rounded-2xl p-6 mb-8 space-y-4 text-[#8B9ABB] text-sm leading-relaxed"
        style={{ animation: "fadeInUp 0.6s 0.3s ease both" }}
      >
        <p>
          Eu sei o que é colocar dinheiro em anúncio e não ver voltar. Passei por isso com meu primeiro negócio aos 19 anos. Foi assim que aprendi: o problema quase nunca é o tráfego. É a estrutura que recebe esse tráfego.
        </p>
        <p>
          Nos últimos anos, trabalhei com mais de 50 clientes de todo o Brasil: em agência, como freelancer, e agora com a Lumen. Foram mais de{" "}
          <strong className="text-white">R$1,5 milhão em faturamento gerado no digital.</strong>
        </p>
        <p>
          Mas mais do que o número, o que essa experiência me deu foi uma visão 360 do digital: tráfego pago, CRO, automações, copy, estrutura de conversão. Não faço só landing page bonita. Faço páginas que conduzem o usuário até a conversão.
        </p>
        <p>
          Hoje, trabalho sozinho, de propósito. Você fala direto comigo. Sem intermediários, sem telefone sem fio, sem{" "}
          <em>"vou passar pro setor responsável"</em>.
        </p>
      </div>

      <button onClick={onNext} className="quiz-insight-btn">
        Ver quem já está usando →
        <svg className="ml-2 w-4 h-4" viewBox="0 0 16 16" fill="none">
          <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
