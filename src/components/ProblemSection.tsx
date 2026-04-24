import { TrendingDown, XCircle, AlertTriangle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionHook } from "@/components/ui/SectionHook";
import { WordReveal } from "@/components/quiz/WordReveal";
import React from "react";

const problems = [
  {
    icon: TrendingDown,
    title: "70% perdidos no Instagram",
    description:
      "O cliente clica no anúncio, cai no perfil, vê Stories, posts, seguidores e esquece por que estava ali. Quando percebe, já fechou a aba.",
  },
  {
    icon: XCircle,
    title: "3 segundos para decidir",
    description:
      "É o tempo que o visitante leva para julgar se confia em você. Página amadora = serviço amador. Ele não lê: ele sente.",
  },
  {
    icon: AlertTriangle,
    title: "Visitante sem rumo",
    description:
      "Sem um caminho claro até o contato, o cliente fica perdido. Olha, rola, e vai embora. Você pagou pelo clique e não recebeu nada em troca.",
  },
];

const entryDirs = [
  { off: "opacity-0 translate-x-10",  on: "opacity-100 translate-x-0" },
  { off: "opacity-0 translate-y-8",   on: "opacity-100 translate-y-0" },
  { off: "opacity-0 -translate-x-10", on: "opacity-100 translate-x-0" },
];

const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-16 px-4"
      style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' }}
    >
      <div className="max-w-5xl mx-auto relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div
            className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isVisible ? (
                <WordReveal
                  text="Por que seus anúncios não trazem clientes?"
                  highlight={["não", "trazem", "clientes?"]}
                  stagger={60}
                  baseDelay={100}
                />
              ) : (
                <span className="opacity-0">Por que seus anúncios não trazem clientes?</span>
              )}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => {
              const d = entryDirs[index];
              return (
                <div
                  key={index}
                  className={`relative p-6 rounded-lg border border-border/10 bg-white/5 backdrop-blur-sm hover:border-accent/30 transition-all duration-700 ${isVisible ? d.on : d.off}`}
                  style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-destructive" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hook de transição */}
      <SectionHook text="Mas a solução não é o que você pensa" />
    </section>
  );
};

export default ProblemSection;
