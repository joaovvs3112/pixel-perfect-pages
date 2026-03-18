import { AlertTriangle, TrendingDown, XCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import React from "react";

const problems = [
  {
    icon: TrendingDown,
    stat: "70% dos cliques em anúncios se perdem no Instagram",
    title: "Jogando dinheiro fora",
    description:
      "Você investe R$50/dia em anúncios, o cliente clica e cai no perfil cheio de distrações — Stories, posts, seguidores. Quando percebe, saiu sem entrar em contato. Cada clique desperdiçado é dinheiro real saindo do seu bolso, todo dia.",
  },
  {
    icon: XCircle,
    stat: "Leva menos de 3 segundos para o visitante julgar seu site",
    title: "O 'Sobrinho' que fez",
    description:
      "Design amador não é só estética — é sinal de alerta. Se sua página parece que foi feita de graça, o cliente conclui que seu serviço também não vale muito. A primeira impressão define se ele vai continuar lendo ou fechar a aba.",
  },
  {
    icon: AlertTriangle,
    stat: "Páginas sem estratégia perdem 80% dos visitantes em 5 segundos",
    title: "Sem Estratégia",
    description:
      "Bonito não basta. Sem uma headline que prende, prova de valor e botão de contato no momento certo, o visitante fecha a aba sem deixar nem o e-mail. Uma página bonita sem estratégia é vitrine sem caixa registradora.",
  },
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
            className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Por que seu concorrente vende mais{" "}
              <br className="hidden md:block" />
              gastando o mesmo em anúncios?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A diferença não está no orçamento — está em para onde o tráfego é enviado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-lg border border-border/10 bg-white/5 backdrop-blur-sm hover:border-accent/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Stat line */}
                <p className="text-xs font-semibold text-accent mb-4 leading-snug border-l-2 border-accent/40 pl-3 bg-accent/5 py-1.5 pr-2 rounded-r-md">
                  {problem.stat}
                </p>

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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
