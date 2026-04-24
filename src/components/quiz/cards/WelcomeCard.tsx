import { WordReveal } from "../WordReveal";

interface WelcomeCardProps {
  onNext: () => void;
  animDir: string;
}

export function WelcomeCard({ onNext, animDir }: WelcomeCardProps) {
  return (
    <div className={`quiz-card ${animDir} flex flex-col items-center text-center max-w-2xl mx-auto`}>
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-400 text-xs font-bold tracking-widest mb-8"
        style={{ animation: "fadeInUp 0.6s ease forwards" }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        DIAGNÓSTICO GRATUITO · 2 MINUTOS
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
        <WordReveal
          text="Seu negócio está perdendo clientes todo dia"
          highlight={["perdendo", "clientes"]}
          stagger={70}
          baseDelay={200}
        />
        <br />
        <span
          className="text-amber-400 text-2xl md:text-3xl block mt-2"
          style={{ animation: "fadeInUp 0.7s 0.9s ease forwards", opacity: 0 }}
        >
          (e você provavelmente não sabe quantos.)
        </span>
      </h1>

      {/* Sub */}
      <p
        className="text-[#8B9ABB] text-lg mb-10 max-w-lg"
        style={{ animation: "fadeInUp 0.7s 1.1s ease forwards", opacity: 0 }}
      >
        Responda 10 perguntas rápidas e descubra exatamente onde está o
        vazamento. Diagnóstico gratuito, resultado personalizado.
      </p>

      {/* CTA */}
      <button
        onClick={onNext}
        className="quiz-cta-btn group"
        style={{ animation: "fadeInUp 0.7s 1.3s ease forwards", opacity: 0 }}
      >
        Quero saber o que estou perdendo
        <svg
          className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Trust micro-copy */}
      <p
        className="text-[#6B7A99] text-sm mt-5"
        style={{ animation: "fadeInUp 0.7s 1.5s ease forwards", opacity: 0 }}
      >
        Diagnóstico gratuito · 2 minutos · Sem compromisso
      </p>
    </div>
  );
}
