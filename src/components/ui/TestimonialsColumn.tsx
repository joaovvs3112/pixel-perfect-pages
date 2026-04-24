"use client";
import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  initials: string;
  color: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ content, name, role, initials, color }, i) => (
              <div
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg shadow-black/20 max-w-xs w-full hover:border-accent/30 transition-colors duration-300"
                key={i}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      className="w-3.5 h-3.5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  "{content}"
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${color} border border-white/10 flex items-center justify-center shrink-0`}
                  >
                    <span className="text-xs font-bold text-foreground/90">
                      {initials}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-sm text-foreground tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="text-xs text-muted-foreground leading-5">
                      {role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
