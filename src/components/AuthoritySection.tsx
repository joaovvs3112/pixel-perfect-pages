import React from "react";
import { Award, Target, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ScrollCounter } from "@/components/ui/ScrollCounter";
import { WordReveal } from "@/components/quiz/WordReveal";

/**
 * AuthoritySection — seção de autoridade da Lumen Pages.
 *
 * Efeitos aplicados:
 *   1. ScrollCounter nos 3 stats ("+40", "12+", "3.2×") — os números
 *      contam de 0 até o valor final com easing quando o scroll chega
 *   2. WordReveal no headline — cada palavra aparece individualmente
 *   3. Animação alternada nos 3 cards: esquerda, baixo, direita
 */

const stats = [
  { target: 40,  prefix: "+", suffix: "",  decimals: 0, label: "páginas entregues" },
  { target: 12,  prefix: "",  suffix: "+", decimals: 0, label: "segmentos atendidos" },
  { target: 3.2, prefix: "",  suffix: "×", decimals: 1, label: "conversão vs. Instagram" },
];

const points = [
  {
    icon: Target,
    title: "Foco em resultados mensuráveis",
    description: "Cada página é construída em torno de uma meta concreta: leads, agendamentos ou vendas. Não aceitamos 'bonito porém ineficiente' — a estrutura toda serve à conversão."
  },
  {
    icon: Award,
    title: "Experiência em 12+ segmentos",
    description: "Mais de 40 páginas entregues em saúde, educação, beleza, serviços locais e infoprodutos — sempre com copy estratégico e hierarquia visual que convence."
  },
  {
    icon: Clock,
    title: "Do briefing ao ar em até 7 dias",
    description: "Processo documentado em 4 etapas, sem idas e vindas infinitas. Você aprova cada etapa e a página vai ao ar dentro do prazo combinado."
  }
];

// Direções alternadas para cada card: esquerda, baixo, direita
const entryDirs = [
  { off: "opacity-0 -translate-x-10", on: "opacity-100 translate-x-0" },
  { off: "opacity-0 translate-y-8",   on: "opacity-100 translate-y-0" },
  { off: "opacity-0 translate-x-10",  on: "opacity-100 translate-x-0" },
];

const AuthoritySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-16 px-4"
      style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' }}
    >
      <div className="max-w-5xl mx-auto relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header com WordReveal */}
          <div
            className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p className="text-accent font-medium mb-2">Por que a Lumen Pages</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {isVisible ? (
                <WordReveal
                  text="Páginas criadas com estratégia"
                  highlight={["estratégia"]}
                  stagger={70}
                  baseDelay={200}
                />
              ) : (
                <span className="opacity-0">Páginas criadas com estratégia</span>
              )}
            </h2>
          </div>

          {/* Stats bar — contadores animados no scroll */}
          <div
            className={`grid grid-cols-3 gap-4 mb-14 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-5 rounded-lg bg-accent/5 border border-accent/15"
              >
                <p className="text-3xl md:text-4xl font-bold text-accent mb-1">
                  <ScrollCounter
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    delay={index * 200}
                  />
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Cards com entrada alternada (esq, baixo, dir) */}
          <div className="grid md:grid-cols-3 gap-8">
            {points.map((point, index) => {
              const d = entryDirs[index];
              return (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 ${isVisible ? `${d.on} scale-100` : `${d.off} scale-95`}`}
                  style={{ transitionDelay: `${(index + 3) * 150}ms` }}
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    <point.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
