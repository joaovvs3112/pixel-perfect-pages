
import React, { useRef, useState } from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
}

const ProjectCard = ({ title, description, image }: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);

    // Calculate the transform value to scroll to the bottom
    const calculateTransform = () => {
        if (!imageRef.current) return 'translateY(0)';
        const imageHeight = imageRef.current.offsetHeight;
        const containerHeight = 400; // Fixed height of the viewable area
        // Scroll enough to show the bottom, with a little buffer
        return `translateY(-${Math.max(0, imageHeight - containerHeight)}px)`;
    };

    return (
        <div
            className="group relative w-full bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/40"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Browser Header */}
            <div className="h-8 bg-muted/50 border-b border-border/50 flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                <div className="ml-4 h-4 rounded-full bg-border/40 w-full max-w-[200px]" />
            </div>

            {/* Viewport */}
            <div className="relative h-[400px] w-full overflow-hidden bg-white">
                <img
                    ref={imageRef}
                    src={image}
                    alt={title}
                    className="w-full object-cover transition-transform duration-[4000ms] ease-linear"
                    style={{
                        transform: isHovered ? calculateTransform() : 'translateY(0)'
                    }}
                />

                {/* Overlay for initial state */}
                <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="bg-background/90 backdrop-blur-md px-6 py-3 rounded-full border border-border/50 shadow-xl">
                        <span className="text-sm font-medium text-foreground">Passe o mouse para visualizar</span>
                    </div>
                </div>
            </div>

            {/* Info Footer */}
            <div className="p-6 border-t border-border/50 bg-card/30">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {title}
                </h3>
                <p className="text-muted-foreground text-sm">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
