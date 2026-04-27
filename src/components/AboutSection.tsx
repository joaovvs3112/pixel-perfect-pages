import { Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SectionHook } from "@/components/ui/SectionHook";
import { Button } from "@/components/ui/button";
import React from "react";
import bioLumen from "@/assets/bio-lumen.jpeg";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 px-4"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <div
          className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Quem vai cuidar do{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
              seu projeto
            </span>
          </h2>

          {/* Content card */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src={bioLumen}
                alt="João Pedro Vivaldi"
                className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover object-bottom border-2 border-accent/30 shrink-0"
              />

              {/* Text */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  João Pedro Vivaldi
                </h3>
                <p className="text-accent text-sm font-medium mb-4">
                  Web designer & estrategista de conversão
                </p>

                <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                  <p>
                    Eu sei o que é colocar dinheiro em anúncio e não ver voltar. Passei por isso com meu primeiro negócio aos 19 anos. Foi assim que aprendi: o problema quase nunca é o tráfego. É a estrutura que recebe esse tráfego.
                  </p>
                  <p>
                    Nos últimos anos, trabalhei com mais de 50 clientes de todo o Brasil: em agência, como freelancer, e agora com a Lumen. Foram mais de{" "}
                    <strong className="text-foreground">R$1,5 milhão em faturamento gerado no digital.</strong>
                  </p>
                  <p>
                    Mas mais do que o número, o que essa experiência me deu foi uma visão 360 do digital: tráfego pago, CRO, automações, copy, estrutura de conversão. Não faço só landing page bonita. Faço páginas que conduzem o usuário até a conversão.
                  </p>
                  <p>
                    Hoje, trabalho sozinho, de propósito. Do primeiro briefing à página no ar, sou eu quem cuida de tudo. Você fala direto comigo. Sem intermediários, sem telefone sem fio, sem{" "}
                    <em>"vou passar pro setor responsável"</em>.
                  </p>
                </div>

                {/* Inline CTA */}
                <div className="mt-6">
                  <Button
                    className="gap-2 px-6 py-5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="#cta">
                      <Calendar className="w-4 h-4" />
                      Vamos conversar sobre seu projeto
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hook de transição */}
      <SectionHook text="Veja quem já está usando" />
    </section>
  );
};

export default AboutSection;
