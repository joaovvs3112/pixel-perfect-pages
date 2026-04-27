import { MessageCircle, FileText, Palette, MessageSquareText, Rocket, Clock, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionHook } from "@/components/ui/SectionHook";
import { Button } from "@/components/ui/button";
import React from "react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Conversa inicial",
    description:
      "Uma reunião de 30 minutos para entender seu negócio, seu cliente e seus objetivos. Sem formulários intermináveis. Direto ao ponto.",
    time: "em até 2h",
  },
  {
    icon: FileText,
    step: "02",
    title: "Pesquisa e estratégia",
    description:
      "Analiso seu mercado, estudo seus concorrentes, e construo a estrutura de argumentação da página. Você não precisa fazer nada.",
    time: "em 1 dia útil",
  },
  {
    icon: Palette,
    step: "03",
    title: "Design e desenvolvimento",
    description:
      "Crio o design, escrevo o texto, desenvolvo a página. Tudo integrado e pensado em conjunto. Cada elemento tem um propósito.",
    time: "em até 5 dias úteis",
  },
  {
    icon: MessageSquareText,
    step: "04",
    title: "Revisão e ajustes",
    description:
      "Você revisa, aponta o que quer mudar. Eu ajusto quantas vezes for necessário até você aprovar. Sem limite de revisões.",
    time: "retorno em até 24h",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Publicação",
    description:
      "Página testada em todos os dispositivos, publicada e pronta para receber tráfego. Se precisar de ajuda para conectar ao domínio, eu faço junto com você.",
    time: "no ar em até 7 dias úteis",
  },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="como-funciona"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-16 px-4"
      style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' }}
    >
      <div className="max-w-5xl mx-auto relative">
        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <div
            className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Do primeiro contato à página no ar em{" "}
              <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
                7 dias úteis
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Você foca no seu negócio. Eu cuido de todo o resto.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-5 gap-6 mb-14">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-[2px] bg-border/30" />
                )}

                {/* Icon + number */}
                <div className="relative z-10 mb-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/5 backdrop-blur-sm border border-border/10 flex items-center justify-center shadow-sm">
                    <step.icon className="w-7 h-7 text-accent" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                  {step.description}
                </p>

                {/* Prazo badge */}
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-accent/80 border border-accent/20 bg-accent/5 px-2.5 py-1 rounded-full">
                  <Clock className="w-2.5 h-2.5" />
                  {step.time}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`text-center transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Button
              className="gap-2 px-8 py-5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="#cta">
                <Calendar className="w-4 h-4" />
                Quero começar agora
              </a>
            </Button>
          </div>

        </div>
      </div>

      {/* Hook de transição */}
      <SectionHook text="Mas quanto custa tudo isso?" />
    </section>
  );
};

export default HowItWorksSection;
