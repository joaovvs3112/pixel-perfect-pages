import React from "react";

interface WordRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  baseDelay?: number; // ms before first word
  stagger?: number;   // ms between words
  highlight?: string[]; // words to highlight in amber
}

/**
 * Splits text into individual words, each fading in with a staggered delay.
 * Words listed in `highlight` are rendered in amber.
 */
export function WordReveal({
  text,
  className = "",
  wordClassName = "",
  baseDelay = 100,
  stagger = 80,
  highlight = [],
}: WordRevealProps) {
  const words = text.split(" ");

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => {
        const isHighlight = highlight.some(
          (h) => h.toLowerCase() === word.replace(/[.,!?]/g, "").toLowerCase()
        );
        return (
          <React.Fragment key={i}>
            <span
              className={`inline-block opacity-0 ${wordClassName}`}
              style={{
                animation: `wordFadeIn 0.5s ease forwards`,
                animationDelay: `${baseDelay + i * stagger}ms`,
              }}
            >
              <span className={isHighlight ? "text-amber-400" : ""}>{word}</span>
            </span>
            {i < words.length - 1 && " "}
          </React.Fragment>
        );
      })}
    </span>
  );
}
