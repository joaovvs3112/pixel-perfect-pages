import { questions } from "../quizData";

interface QuestionCardProps {
  questionIndex: number;
  selectedAnswer: number | undefined;
  onSelect: (qId: string, idx: number) => void;
  onNext: () => void;
  animDir: string;
  questionNumber: number; // 1-based display number
}

export function QuestionCard({
  questionIndex,
  selectedAnswer,
  onSelect,
  onNext,
  animDir,
  questionNumber,
}: QuestionCardProps) {
  const q = questions[questionIndex];
  if (!q) return null;

  const handleSelect = (idx: number) => {
    onSelect(q.id, idx);
    // Auto-advance after short delay for feel
    setTimeout(() => onNext(), 420);
  };

  return (
    <div className={`quiz-card ${animDir} w-full max-w-2xl mx-auto`}>
      {/* Question number */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-8 h-8 rounded-full border border-amber-400/40 bg-amber-400/10 flex items-center justify-center text-amber-400 text-xs font-bold">
          {String(questionNumber).padStart(2, "0")}
        </span>
        <span className="text-[#8B9ABB] text-sm">de 10 perguntas</span>
      </div>

      {/* Question text */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 leading-snug">
        {q.text}
      </h2>

      {/* Options */}
      <div className="flex flex-col gap-3">
        {q.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            className={`quiz-option ${selectedAnswer === idx ? "quiz-option--selected" : ""}`}
            style={{
              animation: `fadeInUp 0.4s ${idx * 80 + 100}ms ease both`,
            }}
          >
            <span className="quiz-option-letter">
              {String.fromCharCode(65 + idx)}
            </span>
            <span className="flex-1 text-left">{option}</span>
            {selectedAnswer === idx && (
              <svg
                className="w-5 h-5 text-amber-400 shrink-0"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
