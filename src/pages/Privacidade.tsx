import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/ui/Logo";

const Privacidade = () => {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <header className="py-8 px-4 border-b border-border/10 bg-background/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Logo className="scale-75 origin-left" />
          </Link>
          <Link
            to="/"
            className="group flex items-center gap-2 text-muted-foreground hover:text-amber-500 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Voltar para o site
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="py-20 px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <p className="text-amber-500 text-sm font-bold uppercase tracking-widest mb-2">Legal</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground text-lg">
              Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-12 text-muted-foreground/80">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <span className="w-8 h-[1px] bg-amber-500/50"></span>
                1. Introdução
              </h2>
              <p className="leading-relaxed">
                A Lumen Pages está comprometida em proteger a privacidade dos visitantes do nosso site e dos nossos clientes.
                Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais
                quando você visita nosso site ou utiliza nossos serviços de criação de landing pages.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <span className="w-8 h-[1px] bg-amber-500/50"></span>
                2. Informações que Coletamos
              </h2>
              <p>Podemos coletar os seguintes tipos de informações:</p>
              <ul className="list-disc pl-6 space-y-3 marker:text-amber-500">
                <li><strong className="text-foreground">Informações de contato:</strong> nome, e-mail, telefone e WhatsApp fornecidos voluntariamente através de formulários ou contato direto.</li>
                <li><strong className="text-foreground">Informações do projeto:</strong> dados sobre seu negócio necessários para a criação da landing page.</li>
                <li><strong className="text-foreground">Dados de navegação:</strong> informações técnicas como endereço IP, tipo de navegador, páginas visitadas e tempo de permanência.</li>
                <li><strong className="text-foreground">Cookies:</strong> pequenos arquivos de texto armazenados em seu dispositivo para melhorar sua experiência de navegação.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <span className="w-8 h-[1px] bg-amber-500/50"></span>
                3. Como Usamos Suas Informações
              </h2>
              <p>Utilizamos as informações coletadas para:</p>
              <ul className="list-disc pl-6 space-y-3 marker:text-amber-500">
                <li>Responder às suas solicitações e fornecer suporte ao cliente.</li>
                <li>Desenvolver e entregar os serviços contratados.</li>
                <li>Enviar comunicações relacionadas aos nossos serviços.</li>
                <li>Melhorar nosso site e serviços.</li>
                <li>Cumprir obrigações legais.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <span className="w-8 h-[1px] bg-amber-500/50"></span>
                4. Compartilhamento de Informações
              </h2>
              <p>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing.
                Podemos compartilhar suas informações apenas nas seguintes situações:
              </p>
              <ul className="list-disc pl-6 space-y-3 marker:text-amber-500">
                <li>Com prestadores de serviços que nos auxiliam na operação do negócio.</li>
                <li>Quando exigido por lei ou ordem judicial.</li>
                <li>Para proteger nossos direitos, propriedade ou segurança.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <span className="w-8 h-[1px] bg-amber-500/50"></span>
                Contato
              </h2>
              <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                <p className="mb-4">
                  Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados pessoais,
                  entre em contato conosco:
                </p>
                <ul className="list-none space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <strong className="text-foreground">E-mail:</strong>
                    <span className="text-muted-foreground">contato@lumenpages.com.br</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <strong className="text-foreground">WhatsApp:</strong>
                    <span className="text-muted-foreground">(11) 99999-9999</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <footer className="py-8 px-4 border-t border-border/10 bg-background/50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground/40 text-xs">
            © {new Date().getFullYear()} Lumen Pages. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Privacidade;
