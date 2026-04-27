import { Check, ShieldCheck, Calendar, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionHook } from "@/components/ui/SectionHook";
import { Button } from "@/components/ui/button";
import React from "react";

const includedItems = [
  "Design exclusivo, sem template",
  "Copywriting estratégico focado em conversão",
  "100% responsivo (celular, tablet e desktop)",
  "Botão de WhatsApp ou formulário de contato integrado",
  "30 dias de suporte após a entrega",
  "Revisões ilimitadas até você aprovar",
];

const IncludedSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="investimento"
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

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Um investimento único que trabalha por você{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
              todo dia
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma agência tradicional cobra entre R$3.000 e R$8.000 por uma landing page. E ainda coloca mensalidade em cima. Aqui, você paga uma vez e a página é sua para sempre.
          </p>
        </div>

        {/* Price card */}
        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-yellow-500/10 to-accent/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-10">
              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-sm text-muted-foreground mb-2">Investimento</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-sm text-muted-foreground/60 font-medium">a partir de</span>
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-b from-amber-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                    R$997
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-3">
                  Pagamento único. Sem mensalidade. Página 100% sua.
                </p>
                <p className="text-accent/80 text-sm font-medium mt-1">
                  Parcelo em até 3x sem juros.
                </p>
              </div>

              <div className="h-px bg-border/20 my-8" />

              {/* Checklist */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground/80 uppercase tracking-widest mb-5 text-center">
                  O que está incluso
                </h3>
                <ul className="space-y-3 max-w-md mx-auto">
                  {includedItems.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                      style={{ transitionDelay: `${(index + 3) * 80}ms` }}
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

              <div className="h-px bg-border/20 my-8" />

              {/* Guarantee */}
              <div
                className={`flex items-start gap-4 p-5 rounded-xl bg-accent/5 border border-accent/15 mb-8 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <ShieldCheck className="w-8 h-8 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-1">
                    Revisões até você aprovar. Suporte por 30 dias após a entrega.
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Cada projeto passa por etapas de revisão antes de ir ao ar. Você acompanha, opina e ajusta até ficar do jeito certo. Depois da entrega, ainda tem 30 dias de garantia para qualquer mudança significativa, sem custo extra.
                  </p>
                </div>
              </div>

              {/* Upsell contínuo */}
              <div
                className={`flex items-start gap-4 p-5 rounded-xl bg-accent/5 border border-accent/15 mb-8 transition-all duration-700 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <TrendingUp className="w-8 h-8 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-1">
                    Quer que sua página continue evoluindo?
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Depois dos 30 dias, você pode optar por um acompanhamento contínuo: otimizações, ajustes estratégicos e manutenção sob medida.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <div className="relative inline-block w-full max-w-sm">
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 rounded-xl blur-lg animate-pulse" />
                  <Button
                    className="relative w-full gap-2 py-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base shadow-lg shadow-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="#cta">
                      <Calendar className="w-5 h-5" />
                      Quero meu site agora
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hook de transição */}
      <SectionHook text="Isso é pra você?" />
    </section>
  );
};

export default IncludedSection;
