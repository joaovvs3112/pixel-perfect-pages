
import React, { useEffect, useRef, useState } from 'react';

const ReactiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[-1] overflow-hidden bg-background"
    >
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(
              600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
              hsl(var(--accent) / 0.15), 
              transparent 40%
            )
          `
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />
    </div>
  );
};

export default ReactiveBackground;
