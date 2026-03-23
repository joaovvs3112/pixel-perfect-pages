import { MessageCircle, FileText, Palette, MessageSquareText, Rocket, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import React from "react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Conversa estratégica",
    description:
      "Você entra em contato e fazemos uma conversa rápida para entender seu negócio, público-alvo e objetivo da página. Sem formulários longos — direto ao ponto.",
    time: "em até 2h",
  },
  {
    icon: FileText,
    step: "02",
    title: "Briefing + pesquisa de mercado",
    description:
      "Analisamos o seu segmento, estudamos o que converte para o seu público e mapeamos os principais argumentos da sua oferta antes de escrever uma única linha.",
    time: "em 1 dia útil",
  },
  {
    icon: Palette,
    step: "03",
    title: "Desenvolvimento exclusivo",
    description:
      "Criamos design, copy e estrutura de conversão integrados. Cada elemento é pensado em conjunto — não é um template com texto trocado.",
    time: "em até 5 dias úteis",
  },
  {
    icon: MessageSquareText,
    step: "04",
    title: "Revisão e ajustes finos",
    description:
      "Você recebe a página para revisar e pontua o que quiser ajustar. Respondemos e aplicamos as alterações com agilidade, sem burocracia.",
    time: "retorno em até 24h",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Entrega e publicação",
    description:
      "Página publicada, testada em todos os dispositivos e pronta para receber tráfego. Se precisar de orientação para conectar ao domínio, estamos aqui.",
    time: "no ar em até 7 dias úteis",
  },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const whatsappLink = "https://wa.me/5527997983112?text=Olá! Tenho interesse em uma landing page profissional.";

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
            <p className="text-accent font-medium mb-2">Como funciona</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Do primeiro contato ao ar em 7 dias úteis
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Um processo enxuto, transparente e sem surpresas — para você focar no seu negócio enquanto a página é construída.
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
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 rounded-xl blur-lg animate-pulse" />
              <Button
                className="relative gap-2 px-8 py-5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Quero começar agora
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground/40 mt-3">
              Sem compromisso · Resposta em até 2h
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
