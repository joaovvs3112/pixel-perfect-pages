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
    question: "Quanto tempo leva para ficar pronta?",
    answer:
      "O prazo médio é de 5 a 7 dias úteis após a conversa inicial. Você acompanha cada etapa e aprova antes de ir ao ar.",
  },
  {
    question: "Preciso fornecer o texto da página?",
    answer:
      "Não. Eu escrevo toda a copy do zero, com base no que conversamos sobre seu negócio, seus clientes e seus objetivos. Você só revisa e aprova.",
  },
  {
    question: "E se eu não gostar do resultado?",
    answer:
      "Revisões ilimitadas até você aprovar. Cada projeto passa por etapas de revisão antes de ir ao ar: você acompanha, opina e ajusta até ficar do jeito certo. Depois da entrega, ainda tem 30 dias de suporte para qualquer mudança significativa, sem custo extra.",
  },
  {
    question: "A página funciona em celular?",
    answer:
      "Sim. Todas as páginas são 100% responsivas, testadas em celular, tablet e desktop. Como a maioria dos cliques vem do celular, essa é a primeira coisa que eu garanto.",
  },
  {
    question: "Preciso ter domínio e hospedagem?",
    answer:
      "Para publicar com domínio próprio (ex: suaclinica.com.br), sim. Se você ainda não tem, eu te oriento nas melhores opções e ajudo a configurar tudo.",
  },
  {
    question: "R$997 é o valor final? Tem mensalidade?",
    answer:
      "O investimento começa em R$997 e pode variar conforme a complexidade do projeto. Sem mensalidade, sem taxa escondida. O valor é definido após a conversa inicial, quando entendo exatamente o que você precisa. Parcelo em até 3x sem juros.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-16 px-4"
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto relative overflow-hidden">
        <div
          className={`max-w-3xl mx-auto relative z-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Perguntas que você provavelmente está se fazendo
            </h2>
            <p className="text-muted-foreground text-lg">
              Se a resposta que você procura não está aqui, me chama no WhatsApp.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`border border-border/50 rounded-xl px-6 bg-card/30 backdrop-blur-sm transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-foreground hover:text-accent hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Texto pós-FAQ + CTA WhatsApp secundário */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm mb-4">
              Ainda ficou com alguma dúvida? Sem problema: me manda uma mensagem que eu respondo pessoalmente.
            </p>
            <Button
              variant="outline"
              className="gap-2 px-6 py-5 border-accent/30 text-accent hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://wa.me/5527997983112?text=Olá! Tenho uma dúvida sobre a landing page.",
                  "_blank"
                )
              }
            >
              <MessageCircle className="w-4 h-4" />
              Tirar dúvida no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
