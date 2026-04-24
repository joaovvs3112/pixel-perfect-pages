import { Target, Sparkles, Zap, BarChart3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionHook } from "@/components/ui/SectionHook";
import React from "react";

const solutions = [
  {
    icon: Target,
    title: "Seu concorrente nunca vai ter a mesma página.",
    description:
      "Cada projeto é construído do zero para o seu negócio específico. Estudamos seu mercado, seu cliente, suas objeções, e criamos uma página que só funciona para você.",
  },
  {
    icon: Sparkles,
    title: "Texto que faz o cliente mandar mensagem antes de pensar duas vezes.",
    description:
      "Cada palavra tem um propósito. Antecipamos objeções, construímos confiança, e entregamos o argumento certo no momento certo.",
  },
  {
    icon: Zap,
    title: "Sua página e seu anúncio trabalhando juntos, não um contra o outro.",
    description:
      "Construímos pensando no tráfego pago desde o primeiro pixel. Isso significa que seu custo por lead cai, e seu retorno sobe.",
  },
  {
    icon: BarChart3,
    title: "Bonito é consequência. Conversão é o objetivo.",
    description:
      "Não aceitamos \"ficou bonito mas não converte\". A estrutura toda serve a um único propósito: transformar visitante em cliente.",
  },
];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-16 px-4"
      style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' }}
    >
      <div className="max-w-5xl mx-auto relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">

          {/* Header */}
          <div
            className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              O que torna uma página eficiente
            </h2>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`group p-6 rounded-lg border border-border/10 bg-white/5 backdrop-blur-sm hover:border-accent/50 hover:shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <solution.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Hook de transição */}
      <SectionHook text="Veja isso funcionando na prática" />
    </section>
  );
};

export default SolutionSection;
