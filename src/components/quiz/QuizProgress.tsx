interface QuizProgressProps {
  percent: number;
  currentStep: number;
  totalSteps: number;
  onBack?: () => void;
  showBack: boolean;
}

export function QuizProgress({ percent, onBack, showBack }: QuizProgressProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0D0F14]/90 backdrop-blur-sm border-b border-[#1E2433]">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-4">
        {/* Back button */}
        <button
          onClick={onBack}
          className={`shrink-0 text-[#8B9ABB] hover:text-white transition-colors text-sm flex items-center gap-1 ${
            showBack ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-label="Voltar"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Voltar
        </button>

        {/* Progress bar */}
        <div className="flex-1 h-1.5 bg-[#1E2433] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Logo text */}
        <span className="shrink-0 text-xs font-semibold text-amber-400 tracking-widest">
          LUMEN PAGES
        </span>
      </div>
    </div>
  );
}
