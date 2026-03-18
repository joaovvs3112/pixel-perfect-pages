import { Instagram, MessageCircle, Mail } from "lucide-react";
import Logo from "@/components/ui/Logo";

const Footer = () => {
  const whatsappLink = "https://wa.me/5527997983112?text=Olá! Tenho interesse em uma landing page profissional.";

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 scale-110">
          <Logo />
        </div>

        {/* Gold Divider */}
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-12 opacity-50" />

        {/* Contatos Grandes */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-16">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium text-amber-500 uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">WhatsApp</span>
            <span className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-amber-400 transition-colors">
              (27) 99798-3112
            </span>
          </a>

          <div className="hidden md:block w-[1px] h-12 bg-white/10" />

          <a
            href="mailto:lumenpages.dev@gmail.com"
            className="group flex flex-col items-center gap-2"
          >
            <span className="text-xs font-medium text-amber-500 uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">Email</span>
            <span className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-amber-400 transition-colors">
              lumenpages.dev@gmail.com
            </span>
          </a>
        </div>

        {/* Copyright & Links */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground/40 text-xs">
            © {new Date().getFullYear()} Lumen Pages. Todos os direitos reservados.
          </p>

          <a
            href="/privacidade"
            className="inline-block text-[10px] uppercase tracking-widest text-muted-foreground/30 hover:text-amber-500 transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
