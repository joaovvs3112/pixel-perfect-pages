import React from "react";
import { Stethoscope, Building, TrendingUp, XCircle, MessageCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const audiences = [
  {
    icon: Stethoscope,
    title: "Profissionais da saúde",
    subtitle: "Clínicas, consultórios, dentistas e psicólogos",
    description: "Você investe em anúncios mas manda o lead para o Instagram — e perde metade antes de responder. Uma LP converte enquanto você atende.",
    result: "\"Uma clínica de estética em SP saiu do Instagram para uma LP e dobrou os agendamentos em 3 semanas.\""
  },
  {
    icon: Building,
    title: "Negócios locais",
    subtitle: "Academias, salões, restaurantes e pet shops",
    description: "Seu negócio é bom, mas o Google não te encontra e o perfil não convence. Uma página profissional muda esse jogo sem depender de seguidores.",
    result: "\"Academia local em MG começou a receber leads qualificados via Google já no primeiro mês de campanha.\""
  },
  {
    icon: TrendingUp,
    title: "Quem investe em tráfego pago",
    subtitle: "Google Ads, Meta Ads ou planejando começar",
    description: "Tráfego pago sem LP de alta conversão é dinheiro jogado fora. Cada real investido em anúncio precisa de uma página que feche o ciclo.",
    result: "\"Consultor de marketing reduziu o custo por lead de R$18 para R$7 após trocar o perfil por uma LP dedicada.\""
  }
];

const ForWhoSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-16 px-4"
      style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' }}
    >
      <div className="max-w-5xl mx-auto relative">
        {/* Dynamic background */}
        {/* Dynamic background */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div
            className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <p className="text-accent font-medium mb-2">Para quem é</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ideal para profissionais que levam seu negócio a sério
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg bg-white/5 backdrop-blur-sm border border-border/10 flex flex-col transition-all duration-700 hover:border-accent/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
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
                <p className="text-muted-foreground text-sm mb-4 flex-1">
                  {audience.description}
                </p>
                <div className="border-l-2 border-accent/50 pl-3 mt-auto">
                  <p className="text-muted-foreground/80 text-xs italic leading-relaxed">
                    {audience.result}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-border/10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                <XCircle className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Não é para quem busca soluções amadoras ou gratuitas
                </h3>
                <p className="text-muted-foreground">
                  Nosso serviço é para quem entende o valor de uma página profissional e quer resultados reais.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 rounded-xl blur-lg animate-pulse" />
              <Button
                className="relative gap-2 px-6 py-5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://wa.me/5527997983112", "_blank")}
              >
                <MessageCircle className="w-4 h-4" />
                Quero uma landing page profissional
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
