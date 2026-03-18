import { MessageCircle, Zap, Layout, MousePointerClick, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5527997983112?text=Olá! Tenho interesse em uma landing page profissional.";

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full px-4 pt-24 pb-16 md:pt-32 md:pb-24 flex flex-col items-center justify-center overflow-visible" style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent)' }}>

      {/* No container divs blocking the view - Content floats directly on ReactiveBackground */}

      <div className="relative z-10 max-w-6xl mx-auto text-center pointer-events-none">

        {/* Badge - Minimalist */}
        <div className="inline-flex items-center gap-2 mb-8 opacity-0 animate-fade-up pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium tracking-wide uppercase text-muted-foreground">Landing pages de alta conversão</span>
        </div>

        {/* Main headline - Massive */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-8 text-balance opacity-0 animate-fade-up-delay-1 leading-[0.9]">
          A página certa faz<br className="hidden md:block" /> mais diferença que{" "}
          <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-sm">o anúncio</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl mx-auto mb-10 text-balance opacity-0 animate-fade-up-delay-2 font-light">
          Pare de perder dinheiro com cliques que não convertem. Tenha um design profissional que vende por você.
        </p>

        {/* Stat line — substitui o bloco de preço */}
        <div className="mb-12 opacity-0 animate-fade-up-delay-2 pointer-events-auto">
          <p className="text-sm md:text-base text-muted-foreground/60 max-w-lg mx-auto border-t border-white/5 pt-6 leading-relaxed">
            <span className="text-accent font-semibold">70% dos cliques em anúncios</span> se perdem quando o destino é o Instagram —
            sem uma página dedicada, você paga pelo tráfego que não converte.
          </p>
        </div>

        {/* CTA — primário + dois secundários */}
        <div className="flex flex-col items-center gap-4 opacity-0 animate-fade-up-delay-3 pointer-events-auto">
          <Button
            size="lg"
            className="h-14 px-8 text-lg bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-[0_0_30px_-5px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_40px_-5px_hsl(var(--accent)/0.5)] transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-6 h-6 mr-2" />
              Falar no WhatsApp
            </a>
          </Button>

          {/* CTAs secundários lado a lado */}
          <div className="flex items-center gap-2 text-sm">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground h-9 px-4" asChild>
              <a href="#portfolio">Ver portfólio</a>
            </Button>
            <span className="text-muted-foreground/30 select-none">·</span>
            <button
              onClick={() => handleNavClick("#como-funciona")}
              className="inline-flex items-center gap-1 text-muted-foreground/70 hover:text-accent transition-colors duration-200 px-4 py-2 rounded-md hover:bg-white/5"
            >
              Como funciona
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Trust indicators - Clean, no badges */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-sm font-medium text-muted-foreground opacity-0 animate-fade-up-delay-3 pointer-events-auto">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-accent" />
            <span>Entrega rápida</span>
          </div>
          <div className="flex items-center gap-3">
            <Layout className="w-5 h-5 text-accent" />
            <span>Design Exclusivo</span>
          </div>
          <div className="flex items-center gap-3">
            <MousePointerClick className="w-5 h-5 text-accent" />
            <span>Foco em Conversão</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
