import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
    return (
        <div className={`flex items-center gap-2 font-bold tracking-tighter ${className}`}>
            {/* Icon Symbol */}
            <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300 via-amber-500 to-yellow-600 rounded-lg opacity-20 blur-[2px]" />
                <div className="relative w-full h-full border-2 border-amber-500/50 rounded-lg flex items-center justify-center bg-background/50 backdrop-blur-sm">
                    <svg
                        className="w-5 h-5 text-amber-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 3l10 9-10 9-10-9-10 9 10-9z" />
                        <path d="M12 3v18" />
                        <path d="M12 12l8.5-1.5" opacity="0.5" />
                        <path d="M3.5 10.5L12 12" opacity="0.5" />
                    </svg>
                </div>
            </div>

            {/* Text Logo */}
            <div className="flex flex-col leading-none">
                <span className="text-xl md:text-2xl text-foreground font-black tracking-tighter">
                    LUMEN
                </span>
                <span className="text-[0.6rem] md:text-[0.7rem] bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent font-bold tracking-[0.2em] uppercase">
                    PAGES
                </span>
            </div>
        </div>
    );
};

export default Logo;
