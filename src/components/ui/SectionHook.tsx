/**
 * SectionHook — Transição visual entre seções
 * Estilo: pill centralizado com linhas horizontais nas laterais
 * Inspirado no design da Arco Arquitetura, adaptado ao tema escuro da Lumen Pages
 */

interface SectionHookProps {
  text: string;
}

export function SectionHook({ text }: SectionHookProps) {
  return (
    <div className="flex items-center gap-4 mt-14 px-2">
      <div className="flex-1 h-px bg-white/8" />
      <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141720] border border-white/10 shadow-sm shrink-0">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
        <span className="text-sm text-[#8B9ABB] whitespace-nowrap">
          {text} ↓
        </span>
      </div>
      <div className="flex-1 h-px bg-white/8" />
    </div>
  );
}
