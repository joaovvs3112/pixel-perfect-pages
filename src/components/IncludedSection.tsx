import { Check, Plus, MessageCircle, Zap, Star, BarChart2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import React from "react";

const IncludedSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const benefits = [
    "Entrega rápida em até 7 dias úteis",
    "30 dias de suporte após a entrega",
    "Design focado em conversão real",
    "Visual de tirar o fôlego, gerando boa primeira impressão sobre o negócio",
  ];

  const included = [
    "Copywriting estratégico e otimizado para SEO",
    "Design exclusivo",
    "Botões de WhatsApp ou Formulários de Leads",
    "Layout 100% responsivo",
    "Identidade fiel à marca",
  ];

  const optionals = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Instalação de Pixel",
      description: "Google ou Meta para rastreamento preciso de conversões.",
      price: "consulte o valor",
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      title: "Mapas de Calor e Gravação de Sessão",
      description: "Entenda como os visitantes se comportam no seu site.",
      price: "consulte o valor",
    },
    {
      icon: <Star className="w-5 h-5" />,
      title: "Quizzes de Qualificação",
      description: "Filtre e qualifique leads automaticamente.",
      price: "consulte o valor",
    },
    {
      icon: <Plus className="w-5 h-5" />,
      title: "Otimização Google Meu Negócio",
      description: "Apareça nos resultados locais e atraia clientes próximos.",
      price: "consulte o valor",
    },
  ];

  return (
    <section
      id="servicos"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 px-4"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      {/* Ambient blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-accent/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-accent font-medium mb-2">O que você leva</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo o que você precisa,{" "}
            <span className="text-accent">sem complicação</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Uma landing page completa, pronta para receber tráfego e converter
            visitantes em clientes.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT — Benefits + Included */}
          <div
            className={`transition-all duration-700 delay-100 ${isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
              }`}
          >
            {/* Benefits */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <h3 className="text-accent font-semibold uppercase tracking-widest text-xs">
                  Benefícios
                </h3>
              </div>
              <ul className="space-y-3">
                {benefits.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 ${isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                      }`}
                    style={{ transitionDelay: `${(index + 2) * 80}ms` }}
                  >
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5 ring-1 ring-accent/20">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground/90 leading-snug text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="h-px bg-border/40 my-8" />

            {/* Included */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <h3 className="text-sky-400 font-semibold uppercase tracking-widest text-xs">
                  Incluso no pacote
                </h3>
              </div>
              <ul className="space-y-3">
                {included.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 transition-all duration-500 ${isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                      }`}
                    style={{ transitionDelay: `${(index + 6) * 80}ms` }}
                  >
                    <div className="w-5 h-5 rounded-full bg-sky-400/10 flex items-center justify-center shrink-0 mt-0.5 ring-1 ring-sky-400/20">
                      <Check className="w-3 h-3 text-sky-400" />
                    </div>
                    <span className="text-foreground/90 leading-snug text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — Optionals + CTA */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
              }`}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-border/10 p-8 hover:border-accent/20 transition-all duration-300">
              {/* Optionals header */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <h3 className="text-amber-400 font-semibold uppercase tracking-widest text-xs">
                  Serviços Opcionais
                </h3>
              </div>

              <div className="space-y-3 mb-8">
                {optionals.map((item, index) => (
                  <div
                    key={index}
                    className={`group p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-border/10 hover:border-accent/30 hover:bg-white/[0.08] transition-all duration-300 cursor-default ${isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                      }`}
                    style={{ transitionDelay: `${(index + 4) * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-400/10 flex items-center justify-center shrink-0 text-amber-400 group-hover:bg-amber-400/20 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-0.5">
                          <p className="font-semibold text-foreground text-sm">
                            {item.title}
                          </p>
                          <span className="shrink-0 text-[10px] font-medium text-amber-400/70 border border-amber-400/20 bg-amber-400/5 px-2 py-0.5 rounded-full whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-muted-foreground/40 text-center mb-6">
                Valores disponíveis mediante consulta via WhatsApp.
              </p>

              {/* Preço — ancora após apresentar todo o valor */}
              <div className="text-center mb-5">
                <p className="text-xs text-muted-foreground/50 uppercase tracking-widest mb-1">Investimento</p>
                <div className="flex items-baseline justify-center gap-1.5">
                  <span className="text-sm text-muted-foreground/60 font-medium mr-0.5">a partir de</span>
                  <span className="text-4xl font-bold bg-gradient-to-b from-amber-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                    R$ 997
                  </span>
                </div>
                <p className="text-xs text-muted-foreground/40 mt-1">pagamento único · sem mensalidade</p>
              </div>

              {/* CTA */}
              <div className="relative inline-block w-full">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 rounded-xl blur-lg animate-pulse" />
                <Button
                  className="relative w-full gap-2 py-5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
                  onClick={() =>
                    window.open("https://wa.me/5527997983112", "_blank")
                  }
                >
                  <MessageCircle className="w-4 h-4" />
                  Quero meu site agora
                </Button>
              </div>
            </div>

            {/* Stats badges */}
            <div
              className={`flex gap-3 mt-4 transition-all duration-700 delay-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
                }`}
            >
              {[
                { value: "7 dias", label: "Prazo máximo" },
                { value: "100%", label: "Responsivo" },
                { value: "30 dias", label: "Suporte pós-entrega" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex-1 text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-border/10 hover:border-accent/30 transition-all duration-300"
                >
                  <p className="text-accent font-bold text-lg">{badge.value}</p>
                  <p className="text-xs text-muted-foreground">{badge.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
