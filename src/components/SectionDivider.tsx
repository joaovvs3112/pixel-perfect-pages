interface SectionDividerProps {
  variant?: "wave" | "curve" | "angle" | "fade";
  flip?: boolean;
  className?: string;
}

const SectionDivider = ({ variant = "curve", flip = false, className = "" }: SectionDividerProps) => {
  const baseClass = `w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`;
  
  if (variant === "wave") {
    return (
      <div className={baseClass}>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-12 md:h-16"
        >
          <path 
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,120 L0,120 Z" 
            className="fill-current text-card"
          />
        </svg>
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div className={baseClass}>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-10 md:h-14"
        >
          <path 
            d="M0,80 Q600,0 1200,80 L1200,120 L0,120 Z" 
            className="fill-current text-card"
          />
        </svg>
      </div>
    );
  }

  if (variant === "angle") {
    return (
      <div className={baseClass}>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-8 md:h-12"
        >
          <polygon 
            points="0,120 1200,40 1200,120" 
            className="fill-current text-card"
          />
        </svg>
      </div>
    );
  }

  // fade variant
  return (
    <div className={`h-16 md:h-24 bg-gradient-to-b from-transparent to-card ${className}`} />
  );
};

export default SectionDivider;