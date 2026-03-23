import { STEPS } from "../components/quiz/quizData";
import { useQuiz } from "../components/quiz/useQuiz";
import { QuizProgress } from "../components/quiz/QuizProgress";
import { FloatingElements } from "../components/quiz/FloatingElements";
import { submitToNetlify, sendWhatsAppAlert } from "../components/quiz/submitLead";
import type { LeadData } from "../components/quiz/quizData";

import { WelcomeCard } from "../components/quiz/cards/WelcomeCard";
import { QuestionCard } from "../components/quiz/cards/QuestionCard";
import { InsightCard1 } from "../components/quiz/cards/InsightCard1";
import { InsightCard2 } from "../components/quiz/cards/InsightCard2";
import { InsightCard3 } from "../components/quiz/cards/InsightCard3";
import { InsightCard4 } from "../components/quiz/cards/InsightCard4";
import { InsightCard5 } from "../components/quiz/cards/InsightCard5";
import { InsightCard6 } from "../components/quiz/cards/InsightCard6";
import { LoadingCard } from "../components/quiz/cards/LoadingCard";
import { LeadCaptureCard } from "../components/quiz/cards/LeadCaptureCard";
import { ResultCard } from "../components/quiz/cards/ResultCard";
import { AuthorityCard } from "../components/quiz/cards/AuthorityCard";
import { SocialProofCard } from "../components/quiz/cards/SocialProofCard";
import { PortfolioCTACard } from "../components/quiz/cards/PortfolioCTACard";

// Animation direction cycles based on step index
const ANIM_DIRS = ["quiz-from-left", "quiz-from-right", "quiz-from-bottom"];
function animDir(step: number) {
  return ANIM_DIRS[step % 3];
}

// Map question steps to their 1-based display number
const questionNumbers: Record<number, number> = {
  1: 1, 3: 2, 5: 3, 6: 4, 8: 5, 10: 6, 11: 7, 13: 8, 14: 9, 16: 10,
};

export default function Quiz() {
  const [state, actions] = useQuiz();
  const { currentStep, answers, profile } = state;
  const step = STEPS[currentStep];
  const dir = animDir(currentStep);

  // Don't allow going back from loading card (17) onwards
  const showBack = currentStep > 0 && currentStep < 17;

  // ─── Lead capture handler ───────────────────────────────────────────────────
  // Called when the user submits their contact info (or skips).
  // Fires submissions in parallel then advances to the result.
  const handleLeadCapture = (lead: LeadData) => {
    actions.setLeadData(lead);
    // Fire-and-forget — failures are silent and won't block the quiz
    submitToNetlify(lead, answers, profile);
    sendWhatsAppAlert(lead, profile);
    actions.goNext();
  };

  const renderCard = () => {
    switch (step.kind) {
      case "welcome":
        return <WelcomeCard onNext={actions.goNext} animDir={dir} />;

      case "question":
        return (
          <QuestionCard
            key={currentStep}
            questionIndex={step.index}
            selectedAnswer={actions.getAnswer(`q${step.index + 1}`)}
            onSelect={actions.selectAnswer}
            onNext={actions.goNext}
            animDir={dir}
            questionNumber={questionNumbers[currentStep] ?? step.index + 1}
          />
        );

      case "insight":
        switch (step.id) {
          case 1:
            return (
              <InsightCard1
                key={currentStep}
                onNext={actions.goNext}
                animDir={dir}
                q1Answer={answers["q1"]}
              />
            );
          case 2:
            return (
              <InsightCard2
                key={currentStep}
                onNext={actions.goNext}
                animDir={dir}
                q2Answer={answers["q2"]}
              />
            );
          case 3:
            return (
              <InsightCard3
                key={currentStep}
                onNext={actions.goNext}
                animDir={dir}
                q4Answer={answers["q4"]}
                onSelectTicket={(idx) => actions.selectAnswer("q6", idx)}
              />
            );
          case 4:
            return (
              <InsightCard4
                key={currentStep}
                onNext={actions.goNext}
                animDir={dir}
                q5Answer={answers["q5"]}
              />
            );
          case 5:
            return (
              <InsightCard5
                key={currentStep}
                onNext={actions.goNext}
                animDir={dir}
                q7Answer={answers["q7"]}
              />
            );
          case 6:
            return (
              <InsightCard6
                key={currentStep}
                onNext={actions.goNext}
                animDir={dir}
                q9Answer={answers["q9"]}
              />
            );
        }
        break;

      case "loading":
        return (
          <LoadingCard key={currentStep} onNext={actions.goNext} animDir={dir} />
        );

      case "leadcapture":
        return (
          <LeadCaptureCard
            key={currentStep}
            animDir={dir}
            onNext={handleLeadCapture}
          />
        );

      case "result":
        return (
          <ResultCard
            key={currentStep}
            onNext={actions.goNext}
            animDir={dir}
            profile={profile}
            answers={answers}
          />
        );

      case "authority":
        return (
          <AuthorityCard key={currentStep} onNext={actions.goNext} animDir={dir} />
        );

      case "social":
        return (
          <SocialProofCard key={currentStep} onNext={actions.goNext} animDir={dir} />
        );

      case "cta":
        return (
          <PortfolioCTACard
            key={currentStep}
            animDir={dir}
            profile={profile}
            answers={answers}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div
      className="quiz-page"
      style={{
        minHeight: "100dvh",
        background: "#0D0F14",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Floating parallax decorative elements */}
      <FloatingElements />

      {/* Progress bar */}
      <QuizProgress
        percent={actions.progressPercent}
        currentStep={currentStep}
        totalSteps={state.totalSteps}
        onBack={actions.goPrev}
        showBack={showBack}
      />

      {/* Main card area */}
      <div
        style={{
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 16px 40px",
        }}
      >
        <div style={{ width: "100%", maxWidth: 700 }}>
          {renderCard()}
        </div>
      </div>
    </div>
  );
}
