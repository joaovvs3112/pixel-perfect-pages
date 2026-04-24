import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar } from "lucide-react";
import { SectionHook } from "@/components/ui/SectionHook";
import { Button } from "@/components/ui/button";
import { TestimonialsColumn } from "@/components/ui/TestimonialsColumn";
import { Link } from "react-router-dom";
import React from "react";

import type { Testimonial } from "@/components/ui/TestimonialsColumn";

const testimonials: Testimonial[] = [
  // Coluna 1
  {
    name: "Dr. Ricardo Mendes",
    role: "Cirurgião Plástico",
    content:
      "A landing page aumentou minhas consultas em 40% no primeiro mês. O investimento se pagou na primeira semana.",
    initials: "RM",
    color: "from-blue-500/30 to-blue-700/30",
  },
  {
    name: "Dra. Camila Torres",
    role: "Dentista · Ortodontia",
    content:
      "Finalmente uma página que transmite a qualidade do meu trabalho. Profissionalismo e entrega dentro do prazo.",
    initials: "CT",
    color: "from-rose-500/30 to-rose-700/30",
  },
  {
    name: "Fernando Costa",
    role: "Academia FitPro",
    content:
      "Simples, direto e eficiente. Recebo muito mais contatos pelo WhatsApp desde que a página foi ao ar.",
    initials: "FC",
    color: "from-emerald-500/30 to-emerald-700/30",
  },
  // Coluna 2
  {
    name: "Ana Beatriz Lima",
    role: "Nutricionista Clínica",
    content:
      "Antes eu perdia leads no Instagram. Agora, os pacientes já chegam decididos a agendar. A página faz o trabalho por mim.",
    initials: "AL",
    color: "from-violet-500/30 to-violet-700/30",
  },
  {
    name: "Marcos Oliveira",
    role: "Advogado Trabalhista",
    content:
      "Achei que não precisava de landing page. Em duas semanas, entendi que estava deixando dinheiro na mesa. Melhor investimento do ano.",
    initials: "MO",
    color: "from-amber-500/30 to-amber-700/30",
  },
  {
    name: "Juliana Reis",
    role: "Studio de Pilates",
    content:
      "O João entendeu exatamente o que eu precisava. A página ficou a minha cara e os agendamentos aumentaram muito desde que subiu.",
    initials: "JR",
    color: "from-teal-500/30 to-teal-700/30",
  },
  // Coluna 3
  {
    name: "Rafael Duarte",
    role: "Gestor de Tráfego",
    content:
      "Custo por lead caiu pela metade depois que troquei o Instagram por uma LP dedicada. O cliente fecha mais rápido e mais qualificado.",
    initials: "RD",
    color: "from-sky-500/30 to-sky-700/30",
  },
  {
    name: "Dra. Patrícia Neves",
    role: "Psicóloga Clínica",
    content:
      "Precisava de algo que transmitisse acolhimento e profissionalismo ao mesmo tempo. A página superou minhas expectativas.",
    initials: "PN",
    color: "from-pink-500/30 to-pink-700/30",
  },
  {
    name: "Lucas Ferreira",
    role: "Barbearia Premium",
    content:
      "Meus clientes elogiam a página antes mesmo de chegar na barbearia. Passou credibilidade que o perfil do Instagram nunca passou.",
    initials: "LF",
    color: "from-orange-500/30 to-orange-700/30",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Quem já tem uma página profissional{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
              não volta atrás
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que dizem os profissionais que pararam de perder clientes.
          </p>
        </div>

        {/* Columns */}
        <div
          className={`flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden transition-opacity duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Button
            className="gap-2 px-8 py-5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link to="/agendar">
              <Calendar className="w-4 h-4" />
              Quero ter esses resultados
            </Link>
          </Button>
        </div>
      </div>

      {/* Hook de transição */}
      <SectionHook text="Ainda tem dúvidas?" />
    </section>
  );
};

export default TestimonialsSection;
