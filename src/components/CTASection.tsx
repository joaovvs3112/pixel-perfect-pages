import { MessageCircle, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import React from "react";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const whatsappLink =
    "https://wa.me/5527997983112?text=Olá! Tenho interesse em uma landing page profissional.";

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 px-4 overflow-hidden flex items-center justify-center min-h-[70vh]"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 20%)",
      }}
    >
      {/* Portal rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className={`w-[600px] h-[600px] rounded-full border border-amber-500/10 bg-gradient-to-b from-amber-500/5 to-transparent backdrop-blur-[2px] transition-all duration-1000 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
        />
        <div
          className={`absolute w-[400px] h-[400px] rounded-full border border-amber-500/20 shadow-[0_0_100px_rgba(245,158,11,0.1)] transition-all duration-1000 delay-100 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}
        />
        <div className="absolute w-[200px] h-[200px] bg-amber-500/10 rounded-full blur-[50px] animate-pulse" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-amber-400 rounded-full animate-ping"
            style={{
              animationDuration: `${2 + i}s`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i * 60}deg) translateX(${150 + i * 20}px)`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center space-y-8">
        <h2
          className={`text-3xl md:text-5xl font-bold text-foreground leading-tight transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Essa reunião pode ser o ponto de virada do{" "}
          <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
            seu negócio
          </span>
        </h2>

        <p
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          Em 30 minutos, eu analiso sua situação atual, mostro o que está travando seus resultados e te apresento um plano claro para sua página começar a converter. Sem compromisso. Sem enrolação.
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col items-center gap-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
        >
          <Button
            size="lg"
            className="h-14 md:h-16 px-8 md:px-10 text-lg md:text-xl bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-full shadow-[0_0_40px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_0_60px_-10px_rgba(245,158,11,0.7)] hover:scale-105 transition-all duration-300 group"
            asChild
          >
            <Link to="/agendar" className="flex items-center gap-3">
              <Calendar className="w-5 h-5 md:w-6 md:h-6" />
              Agendar minha consultoria gratuita
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold text-sm shadow-[0_0_24px_-6px_rgba(37,211,102,0.5)] hover:shadow-[0_0_36px_-6px_rgba(37,211,102,0.7)] hover:scale-105 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" />
            Prefiro conversar pelo WhatsApp
          </a>
        </div>

        {/* Micro-garantias */}
        <div
          className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-sm text-muted-foreground/50">
            30 minutos · Sem compromisso · 100% gratuito
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
