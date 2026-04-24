import React from "react";
import { Stethoscope, Building, TrendingUp, XCircle, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionHook } from "@/components/ui/SectionHook";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const audiences = [
  {
    icon: Stethoscope,
    title: "Profissionais da saúde",
    subtitle: "Dentistas, psicólogos, nutricionistas, clínicas",
    description:
      "Você investe em anúncios, mas manda o paciente pro Instagram e perde metade antes de responder. Uma landing page converte enquanto você atende.",
  },
  {
    icon: Building,
    title: "Negócios locais",
    subtitle: "Academias, salões, escritórios, restaurantes",
    description:
      "Seu serviço é bom, mas o Google não te encontra e o perfil não convence. Uma página profissional muda esse jogo sem depender de seguidores.",
  },
  {
    icon: TrendingUp,
    title: "Quem investe em tráfego pago",
    subtitle: "Google Ads, Meta Ads ou planejando começar",
    description:
      "Cada real investido em anúncio precisa de uma página que feche o ciclo. Sem landing page, seu tráfego vira custo, não retorno.",
  },
];

const ForWhoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-16 px-4"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <div
            className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Feito para quem{" "}
              <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
                leva o próprio negócio a sério
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Se você se reconhece em algum desses perfis, essa página foi pensada para você.
            </p>
          </div>

          {/* Personas */}
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-border/10 flex flex-col transition-all duration-700 hover:border-accent/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <audience.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {audience.title}
                </h3>
                <p className="text-accent/70 text-xs font-medium mb-3">
                  {audience.subtitle}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>

          {/* Filtro negativo */}
          <div
            className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-border/10 mb-10 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <XCircle className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  Não é pra todo mundo.
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Se você busca a opção mais barata do mercado ou quer algo genérico, esse serviço não é pra você. Aqui, cada página é construída sob medida, e o resultado reflete isso.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            className={`text-center transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <Button
              className="gap-2 px-8 py-5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/agendar">
                <Calendar className="w-4 h-4" />
                Quero uma landing page profissional
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hook de transição */}
      <SectionHook text="Quem vai cuidar do seu projeto?" />
    </section>
  );
};

export default ForWhoSection;
