import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import React from "react";
import { SectionHook } from "@/components/ui/SectionHook";

const TurningPointSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 px-4"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Não é sobre "ter um site".{" "}
            <br className="hidden md:block" />
            É sobre ter uma página que{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
              fecha cliente
            </span>.
          </h2>
        </div>

        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-4">
            Qualquer um faz página bonita. Template pronto, arrastar e soltar, pronto em uma hora. Mas página bonita não paga suas contas.
          </p>
          <p className="text-muted-foreground/80 text-base md:text-lg leading-relaxed">
            O que você precisa é de uma página que entende como seu cliente pensa — e o conduz do primeiro scroll até o botão de contato sem dar chance de sair.
          </p>
        </div>
      </div>

      {/* Hook de transição */}
      <SectionHook text="Veja o que faz a diferença" />
    </section>
  );
};

export default TurningPointSection;
