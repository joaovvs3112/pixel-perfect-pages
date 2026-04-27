import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { SectionHook } from "@/components/ui/SectionHook";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import portfolioAtylaneto from "@/assets/ref-atylaneto.jpeg";
import portfolioSorrir from "@/assets/ref-sorrir.jpeg";
import portfolioAlves from "@/assets/portfolio-alves-associados.png";
import portfolioVertex from "@/assets/ref-vertex.jpeg";
import portfolioArco from "@/assets/ref-arco.jpeg";

const portfolioItems = [
  {
    id: 1,
    title: "Dr. Atyla Neto",
    description: "Página de alta conversão para ortopedista: posicionamento de autoridade, prova social e captação direta de pacientes pelo digital.",
    image: portfolioAtylaneto,
    url: "dratylanetoupdate.netlify.app",
    fullUrl: "https://dratylanetoupdate.netlify.app/",
    tag: "Ortopedia",
  },
  {
    id: 2,
    title: "Sorrir Studio",
    description: "Design acolhedor e profissional que transmite confiança e converte visitantes em pacientes antes mesmo do primeiro contato.",
    image: portfolioSorrir,
    url: "sorrirstudio.netlify.app",
    fullUrl: "https://sorrirstudio.netlify.app/",
    tag: "Odontologia",
  },
  {
    id: 3,
    title: "Alves Associados",
    description: "Presença digital sólida e profissional que transmite autoridade e capta clientes qualificados para o escritório.",
    image: portfolioAlves,
    url: "alvesassociados.netlify.app",
    fullUrl: "https://alvesassociados.netlify.app/",
    tag: "Advocacia",
  },
  {
    id: 4,
    title: "Vertex Contabilidade",
    description: "Estrutura que posiciona o escritório como referência técnica e gera contatos qualificados de empresários em busca de gestão contábil.",
    image: portfolioVertex,
    url: "vertexcontabilidade.netlify.app",
    fullUrl: "https://vertexcontabilidade.netlify.app/",
    tag: "Contabilidade",
  },
  {
    id: 5,
    title: "Arco Arquitetura",
    description: "Visual sofisticado e editorial que valoriza o portfólio e posiciona o escritório como referência no mercado de arquitetura.",
    image: portfolioArco,
    url: "arcoarquiteturavix.netlify.app",
    fullUrl: "https://arcoarquiteturavix.netlify.app/",
    tag: "Arquitetura",
  },
];

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedUrl, setDisplayedUrl] = useState(portfolioItems[0].url);
  const [isTyping, setIsTyping] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);

      // Animate URL bar typing
      const targetUrl = portfolioItems[index].url;
      setIsTyping(true);
      setDisplayedUrl("");

      let i = 0;
      const typeInterval = setInterval(() => {
        i++;
        setDisplayedUrl(targetUrl.slice(0, i));
        if (i >= targetUrl.length) {
          clearInterval(typeInterval);
          setIsTyping(false);
        }
      }, 35);

      setTimeout(() => {
        setActiveIndex(index);
        setTimeout(() => setIsTransitioning(false), 400);
      }, 200);
    },
    [isTransitioning]
  );

  const nextSlide = () => goTo((activeIndex + 1) % portfolioItems.length);
  const prevSlide = () => goTo((activeIndex - 1 + portfolioItems.length) % portfolioItems.length);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeIndex, isTransitioning]);

  const active = portfolioItems[activeIndex];

  return (
    <section
      id="portfolio"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 px-4 overflow-hidden"
      style={{
        maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
      }}
    >
      {/* Ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Projetos que{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
              convertem de verdade
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada projeto é tratado com o mesmo nível de atenção. Veja o padrão de qualidade que você vai receber.
          </p>
        </div>

        {/* Browser Mockup */}
        <div
          className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          {/* Outer glow */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-yellow-500/10 to-accent/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Browser shell */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-[#1a1d23]">

              {/* Browser chrome — top bar */}
              <div className="flex items-center gap-3 px-4 py-3 bg-[#141720] border-b border-white/5">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-sm" />
                </div>

                {/* URL bar */}
                <div className="flex-1 flex items-center gap-2 bg-[#0d0f14] border border-white/8 rounded-md px-3 py-1.5 max-w-sm mx-auto">
                  {/* Lock icon */}
                  <svg className="w-3 h-3 text-green-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-muted-foreground font-mono truncate">
                    {displayedUrl}
                    {isTyping && (
                      <span className="inline-block w-px h-3 bg-accent ml-0.5 animate-pulse" />
                    )}
                  </span>
                </div>

                {/* Tag badge */}
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/20 shrink-0 hidden sm:block">
                  {active.tag}
                </span>
              </div>

              {/* Screenshot area */}
              <div className="relative overflow-hidden aspect-video bg-[#0d0f14]">
                {portfolioItems.map((item, index) => (
                  <img
                    key={item.id}
                    src={item.image}
                    alt={item.title}
                    className={`absolute inset-0 w-full h-full object-contain object-top transition-all duration-500 ease-in-out ${index === activeIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-[1.02]"
                      }`}
                  />
                ))}

                {/* Bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1a1d23] via-[#1a1d23]/60 to-transparent pointer-events-none" />

                {/* Info overlay inside the screenshot */}
                <div className="absolute bottom-0 inset-x-0 px-6 pb-4 flex items-end justify-between">
                  <div>
                    <h3 className="text-lg md:text-2xl font-bold text-white leading-tight">
                      {active.title}
                    </h3>
                    <p className="text-white/60 text-xs md:text-sm mt-1 max-w-md leading-relaxed hidden sm:block">
                      {active.description}
                    </p>
                  </div>

                  {/* Nav arrows */}
                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    <button
                      onClick={prevSlide}
                      className="p-2 rounded-full bg-black/50 hover:bg-accent hover:text-black border border-white/10 backdrop-blur-md transition-all duration-200 hover:scale-110"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 rounded-full bg-black/50 hover:bg-accent hover:text-black border border-white/10 backdrop-blur-md transition-all duration-200 hover:scale-110"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom status bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#141720] border-t border-white/5">
                {/* Dots */}
                <div className="flex items-center gap-2">
                  {portfolioItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goTo(index)}
                      className={`rounded-full transition-all duration-300 ${index === activeIndex
                        ? "w-6 h-2 bg-accent"
                        : "w-2 h-2 bg-white/20 hover:bg-white/40"
                        }`}
                    />
                  ))}
                </div>

                <a
                  href={active.fullUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent font-medium hover:underline hover:text-accent/80 transition-colors duration-200 flex items-center gap-1"
                >
                  Ver projeto ao vivo →
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-bold shadow-lg shadow-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300 gap-2"
              asChild
            >
              <a href="#cta">
                <Calendar className="w-5 h-5" />
                Quero uma página nesse nível
              </a>
            </Button>
          </div>

          {/* Hook de transição */}
          <SectionHook text="E você não precisa de nada pra começar" />
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
