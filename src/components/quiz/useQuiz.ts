import { useState, useCallback } from "react";
import { STEPS, calculateProfile, type Profile, type LeadData } from "./quizData";

export interface QuizState {
  currentStep: number;
  answers: Record<string, number>; // questionId -> option index (0-based)
  profile: Profile | null;
  leadData: LeadData | null;
  totalSteps: number;
}

export interface QuizActions {
  selectAnswer: (questionId: string, optionIndex: number) => void;
  goNext: () => void;
  goPrev: () => void;
  getAnswer: (questionId: string) => number | undefined;
  setLeadData: (data: LeadData) => void;
  progressPercent: number;
}

export function useQuiz(): [QuizState, QuizActions] {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [profile, setProfile] = useState<Profile | null>(null);
  const [leadData, setLeadDataState] = useState<LeadData | null>(null);

  const totalSteps = STEPS.length;

  const progressPercent = Math.round((currentStep / (totalSteps - 1)) * 100);

  const selectAnswer = useCallback((questionId: string, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }, []);

  const goNext = useCallback(() => {
    setCurrentStep((prev) => {
      const next = Math.min(prev + 1, totalSteps - 1);
      // When reaching the loading step (17), calculate profile from all answers
      if (next === 17) {
        setProfile(calculateProfile(answers));
      }
      return next;
    });
  }, [totalSteps, answers]);

  const goPrev = useCallback(() => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  }, []);

  const getAnswer = useCallback(
    (questionId: string) => answers[questionId],
    [answers]
  );

  const setLeadData = useCallback((data: LeadData) => {
    setLeadDataState(data);
  }, []);

  const state: QuizState = { currentStep, answers, profile, leadData, totalSteps };
  const actions: QuizActions = { selectAnswer, goNext, goPrev, getAnswer, setLeadData, progressPercent };

  return [state, actions];
}
