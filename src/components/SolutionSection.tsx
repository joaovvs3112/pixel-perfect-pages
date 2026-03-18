import { Target, Sparkles, Zap, Users, MessageCircle, X, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import React from "react";

const solutions = [
  {
    icon: Target,
    title: "Feitas sob medida",
    description:
      "Estudamos o seu mercado, analisamos o que converte no seu segmento e construímos a página ao redor da sua oferta específica — não de um template copiado que qualquer concorrente já usou.",
  },
  {
    icon: Sparkles,
    title: "Copy que vende de verdade",
    description:
      "Cada palavra é escrita para o seu cliente. Antecipamos as objeções antes que ele as tenha, conduzimos a leitura do início ao fim e entregamos o argumento certo no momento certo.",
  },
  {
    icon: Zap,
    title: "Estrutura orientada a resultados",
    description:
      "Cada bloco da página tem um propósito claro: prender atenção, construir confiança, eliminar dúvidas e direcionar para o contato. Nada é colocado por acidente ou para parecer bonito.",
  },
  {
    icon: Users,
    title: "Integração com tráfego pago",
    description:
      "Desenvolvida com foco no Quality Score do Google e na relevância do Meta Ads. Sua landing page trabalha junto com o anúncio — e não contra ele — para reduzir o custo por lead.",
  },
];

const comparisons = [
  {
    generic: "Template igual ao do seu concorrente",
    lumen: "Design exclusivo criado para o seu negócio",
  },
  {
    generic: "Texto genérico sem pesquisa de mercado",
    lumen: "Copy escrita para o seu cliente e segmento",
  },
  {
    generic: "Taxa de conversão média de 0,5–1%",
    lumen: "Estrutura orientada a 3–8% de conversão",
  },
  {
    generic: "Sem rastreamento de conversões",
    lumen: "Compatível com pixels do Meta e Google Ads",
  },
  {
    generic: "Você edita sozinho e quebra o layout",
    lumen: "Entregue pronta, testada e no ar em 7 dias",
  },
];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const whatsappLink = "https://wa.me/5527997983112?text=Olá! Tenho interesse em uma landing page profissional.";

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
            <p className="text-accent font-medium mb-2">A solução</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Landing pages que realmente funcionam
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Desenvolvemos páginas com foco total em transformar visitantes em contatos qualificados.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
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
                    <h3 className="text-lg font-semibold text-foreground mb-2">
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

          {/* Comparativo Antes × Depois */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Label de seção */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-border/20" />
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/50 whitespace-nowrap">
                Por que a diferença importa
              </p>
              <div className="flex-1 h-px bg-border/20" />
            </div>

            {/* Grid comparativo */}
            <div className="rounded-xl border border-border/10 overflow-hidden">
              {/* Header das colunas */}
              <div className="grid grid-cols-2">
                <div className="px-5 py-3 bg-white/[0.03] border-b border-r border-border/10">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/50">
                    ❌ Página Genérica
                  </span>
                </div>
                <div className="px-5 py-3 bg-accent/5 border-b border-border/10">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent/80">
                    ✅ Lumen Pages
                  </span>
                </div>
              </div>

              {/* Linhas */}
              {comparisons.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} ${index < comparisons.length - 1 ? 'border-b border-border/10' : ''}`}
                  style={{ transitionDelay: `${(index + 4) * 80}ms` }}
                >
                  <div className="flex items-center gap-3 px-5 py-4 border-r border-border/10 bg-white/[0.02]">
                    <X className="w-3.5 h-3.5 text-destructive/60 shrink-0" />
                    <span className="text-sm text-muted-foreground/60 leading-snug">{row.generic}</span>
                  </div>
                  <div className="flex items-center gap-3 px-5 py-4 bg-accent/[0.03]">
                    <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span className="text-sm text-foreground/90 font-medium leading-snug">{row.lumen}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 rounded-xl blur-lg animate-pulse" />
              <Button
                className="relative gap-2 px-8 py-5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Quero uma página assim
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

export default SolutionSection;
