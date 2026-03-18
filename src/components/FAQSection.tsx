import React from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo leva para a landing page ficar pronta?",
    answer: "O prazo médio é de 5 a 7 dias úteis após o envio de todas as informações necessárias. Projetos mais simples podem ser entregues em menos tempo.",
  },
  {
    question: "Tem garantia? E se eu não gostar?",
    answer: "Sim. Trabalhamos com uma rodada de revisões incluída após a entrega para garantir que a página esteja exatamente como você quer. Antes de qualquer desenvolvimento, você aprova a estrutura e o rascunho — sem surpresas no final.",
  },
  {
    question: "Preciso fornecer o texto da página?",
    answer: "Não. Criamos toda a copy personalizada com base nas informações do seu negócio. Você só precisa nos contar sobre seus serviços, diferenciais e público-alvo.",
  },
  {
    question: "A landing page funciona em celular?",
    answer: "Sim. Todas as páginas são 100% responsivas e otimizadas para smartphones, tablets e desktops — onde a maioria dos seus leads chega.",
  },
  {
    question: "Preciso ter domínio e hospedagem?",
    answer: "Para publicar a página com domínio próprio, sim. Um domínio transmite credibilidade — um endereço como 'suaclinica.com.br' converte muito mais do que um link genérico. Caso ainda não tenha, orientamos você nas melhores opções.",
  },
  {
    question: "A integração com pixel do Meta ou Google está inclusa?",
    answer: "A integração com pixels de rastreamento é opcional e pode ser adicionada ao pacote conforme sua necessidade.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-16 px-4"
      style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)' }}
    >
      <div className="max-w-4xl mx-auto relative overflow-hidden">
        {/* Dynamic background */}
        {/* Dynamic background */}


        <div
          ref={ref}
          className={`max-w-3xl mx-auto relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="text-center mb-12">
            <p className="text-accent font-medium mb-2">Dúvidas</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Respondemos o que mais aparece antes de fechar.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`border border-border/50 rounded-xl px-6 bg-card/30 backdrop-blur-sm transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm mb-4">
              Ainda tem dúvidas? Fala direto comigo pelo WhatsApp.
            </p>
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 rounded-xl blur-lg animate-pulse" />
              <Button
                className="relative gap-2 px-6 py-5 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://wa.me/5527997983112?text=Olá! Tenho uma dúvida sobre a landing page.", "_blank")}
              >
                <MessageCircle className="w-4 h-4" />
                Tirar dúvida no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
