import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Dr. Ricardo Mendes",
    role: "Cirurgião Plástico",
    content: "A landing page aumentou minhas consultas em 40% no primeiro mês. O investimento se pagou na primeira semana.",
    rating: 5,
    initials: "RM",
    color: "from-blue-500/30 to-blue-700/30",
  },
  {
    name: "Dra. Camila Torres",
    role: "Dentista — Ortodontia",
    content: "Finalmente uma página que transmite a qualidade do meu trabalho. Profissionalismo e entrega dentro do prazo.",
    rating: 5,
    initials: "CT",
    color: "from-rose-500/30 to-rose-700/30",
  },
  {
    name: "Fernando Costa",
    role: "Academia FitPro",
    content: "Simples, direto e eficiente. Recebo muito mais contatos pelo WhatsApp desde que a página foi ao ar.",
    rating: 5,
    initials: "FC",
    color: "from-emerald-500/30 to-emerald-700/30",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-16 px-4" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
      <div className="max-w-5xl mx-auto relative overflow-hidden">
        {/* Dynamic background */}
        {/* Dynamic background */}
        <div className="absolute -top-20 left-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

        <div
          ref={ref}
          className={`max-w-5xl mx-auto relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="text-center mb-12">
            <p className="text-accent font-medium mb-2">Depoimentos</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Resultados reais de profissionais que pararam de perder leads e passaram a converter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl bg-white/5 border border-border/10 backdrop-blur-sm transition-all duration-700 hover:border-primary/30 hover:bg-white/10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} border border-white/10 flex items-center justify-center shrink-0`}>
                    <span className="text-sm font-bold text-foreground/90">{testimonial.initials}</span>
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 rounded-xl blur-lg animate-pulse" />
              <Button
                className="relative gap-2 px-6 py-5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://wa.me/5527997983112", "_blank")}
              >
                <MessageCircle className="w-4 h-4" />
                Quero ter esses resultados
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
