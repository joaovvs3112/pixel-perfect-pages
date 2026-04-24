import { useSearchParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar as CalendarIcon } from "lucide-react";
import { InlineWidget } from "react-calendly";
import Logo from "@/components/ui/Logo";

const PROFILE_NAMES: Record<string, string> = {
  A: "Presença Invisível",
  B: "Potencial Represado",
  C: "Investimento Sem Retorno",
};

export default function Agendar() {
  const [params] = useSearchParams();
  const perfil = params.get("perfil");
  const nome = params.get("nome") || "";
  const emailParam = params.get("email") || "";
  const profileName = perfil ? PROFILE_NAMES[perfil] : null;

  return (
    <div className="min-h-screen" style={{ background: "#0D0F14" }}>
      {/* Header */}
      <header className="w-full px-4 py-4 flex items-center justify-between max-w-5xl mx-auto">
        <Link to="/" className="flex items-center gap-2 group">
          <ArrowLeft className="w-4 h-4 text-[#8B9ABB] group-hover:text-amber-400 transition-colors" />
          <Logo />
        </Link>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-16">
        {/* Context section */}
        <div className="text-center py-6 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20">
            <CalendarIcon className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-medium">
              Agende sua consultoria gratuita
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {nome ? (
              <>
                {nome.split(" ")[0]}, escolha o melhor
                <span className="text-amber-400"> horário</span> para você.
              </>
            ) : (
              <>
                Escolha o melhor
                <span className="text-amber-400"> horário</span> para sua consultoria.
              </>
            )}
          </h1>

          {profileName && (
            <p className="text-[#8B9ABB] text-sm max-w-lg mx-auto">
              Perfil: <strong className="text-amber-400">{profileName}</strong>, vamos conversar sobre as melhores estratégias para o seu caso.
            </p>
          )}
        </div>

        {/* Calendly Embed */}
        <div className="rounded-2xl overflow-hidden border border-[#1E2433]">
          <InlineWidget
            url="https://calendly.com/lumenpages"
            prefill={{
              name: nome,
              email: emailParam,
            }}
            pageSettings={{
              backgroundColor: "0D0F14",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "F59E0B",
              textColor: "F2F2F5",
              hideGdprBanner: true,
            }}
            styles={{
              height: "700px",
              width: "100%",
            }}
          />
        </div>

        {/* Trust signals */}
        <div className="flex flex-col items-center gap-3 mt-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[#8B9ABB] text-sm">Gratuita e sem compromisso</span>
          </div>
          <div className="flex items-center gap-4 text-[#6B7A99] text-xs">
            <span>30 minutos</span>
            <span>·</span>
            <span>Sem enrolação</span>
          </div>
        </div>
      </main>
    </div>
  );
}
