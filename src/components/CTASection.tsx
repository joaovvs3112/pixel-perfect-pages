import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const whatsappLink = "https://wa.me/5527997983112?text=Olá! Tenho interesse em uma landing page profissional.";

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-4 overflow-hidden flex items-center justify-center min-h-[80vh]"
      style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%)' }}
    >
      {/* Portal Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">

        {/* The Portal Effect Elements */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Outer Glow Ring */}
          <div className={`w-[600px] h-[600px] rounded-full border border-amber-500/10 bg-gradient-to-b from-amber-500/5 to-transparent backdrop-blur-[2px] transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />

          {/* Inner Suction Ring */}
          <div className={`absolute w-[400px] h-[400px] rounded-full border border-amber-500/20 shadow-[0_0_100px_rgba(245,158,11,0.1)] transition-all duration-1000 delay-100 ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} />

          {/* Core */}
          <div className={`absolute w-[200px] h-[200px] bg-amber-500/10 rounded-full blur-[50px] animate-pulse`} />
        </div>

        {/* Floating Particles (CSS Animation simulating suction) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-amber-400 rounded-full animate-ping"
              style={{
                animationDuration: `${2 + i}s`,
                animationDelay: `${i * 0.5}s`,
                transform: `rotate(${i * 60}deg) translateX(${150 + i * 20}px)`
              }}
            />
          ))}
        </div>

        {/* Content Inside Portal */}
        <div className="relative z-20 space-y-8">
          <h2 className={`text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Pronto para <br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
              converter mais?
            </span>
          </h2>

          <p className={`text-xl text-muted-foreground max-w-lg mx-auto transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            A sua nova página de alta performance está a um clique de distância.
          </p>

          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <Button
              size="lg"
              className="h-16 px-10 text-xl bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_0_60px_-10px_rgba(245,158,11,0.7)] hover:scale-105 transition-all duration-300 group"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Quero meu projeto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className={`flex flex-col items-center gap-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-medium">Poucas vagas disponíveis este mês</span>
            </div>
            <p className="text-sm text-muted-foreground/50">
              Sem contrato • Entrega em até 7 dias • 30 dias de suporte
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTASection;
