import { ArrowDown, Clock, Fingerprint, ShieldCheck } from "lucide-react";
import { EtheralShadow } from "@/components/ui/EtheralShadow";
import { SectionHook } from "@/components/ui/SectionHook";

const HeroSection = () => {
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full px-4 pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col items-center justify-center overflow-hidden" style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent)' }}>

      {/* Ethereal Shadow Background */}
      <EtheralShadow
        color="rgba(180, 130, 30, 0.35)"
        animation={{ scale: 90, speed: 95 }}
        noise={{ opacity: 0.6, scale: 1.2 }}
        sizing="fill"
        className="pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center pointer-events-none">

        {/* Tagline */}
        <div className="inline-flex items-center gap-2 mb-8 opacity-0 animate-fade-up pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Para negócios locais que investem em anúncios</span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-8 text-balance opacity-0 animate-fade-up-delay-1 leading-[0.9]">
          Você paga pelo clique.<br />
          <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">Seu Instagram perde o cliente.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground/80 max-w-xl mx-auto mb-12 text-balance opacity-0 animate-fade-up-delay-2 font-light">
          Uma landing page profissional recupera os cliques que o Instagram desperdiça.
        </p>

        {/* CTA suave — sem botão forte */}
        <div className="flex flex-col items-center gap-4 opacity-0 animate-fade-up-delay-3 pointer-events-auto">
          <button
            onClick={() => handleNavClick("#como-funciona")}
            className="inline-flex items-center gap-2 text-base text-muted-foreground/70 hover:text-accent transition-colors duration-200 px-6 py-3 rounded-full hover:bg-white/5 border border-white/10 hover:border-accent/30"
          >
            Ver como funciona
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>

        {/* Micro-prova / Trust indicators */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-sm font-medium text-muted-foreground opacity-0 animate-fade-up-delay-3 pointer-events-auto">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-accent" />
            <span>Entrega em 7 dias úteis</span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-accent" />
            <span>Sem mensalidade</span>
          </div>
          <div className="flex items-center gap-3">
            <Fingerprint className="w-5 h-5 text-accent" />
            <span>Página 100% sua</span>
          </div>
        </div>

      </div>

      {/* Hook de transição */}
      <div className="relative z-10 pointer-events-none">
        <SectionHook text="Veja por que isso acontece" />
      </div>
    </section>
  );
};

export default HeroSection;
