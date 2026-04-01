"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface HorizontalCard {
    title: string;
    description: string;
    icon?: any;
    color?: string;
    iconBg?: string;
    iconColor?: string;
}

interface HorizontalScrollSectionProps {
    title: React.ReactNode;
    subtitle: string;
    cards: HorizontalCard[];
    theme: "crimson" | "orange" | "blue";
    bgColor?: string;
}

export function HorizontalScrollSection({ title, subtitle, cards, theme, bgColor = "bg-white" }: HorizontalScrollSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(cards.length - 1) * 100}%`]);

    const isPink = theme === "crimson";
    const isBlue = theme === "blue";
    const accentColor = isPink ? "text-vibrant-crimson" : isBlue ? "text-vibrant-blue" : "text-vibrant-orange-dark";

    return (
        <section ref={sectionRef} className={`relative ${bgColor}`} style={{ height: `${cards.length * 100}vh` }}>
            <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
                {/* Section Header (Fixed at top) */}
                <div className={`container-superhi pt-32 pb-12 relative z-20 ${bgColor}`}>
                    <h2 className="heading-section mb-4">{title}</h2>
                    <p className="text-lg lg:text-xl text-[#001738]/50 max-w-2xl">{subtitle}</p>
                </div>

                {/* Horizontal Sliding Content */}
                <div className="flex-1 flex items-center relative">
                    <motion.div 
                        style={{ x }} 
                        className="flex h-full w-full"
                    >
                        {cards.map((card, i) => (
                            <div
                                key={card.title}
                                className="h-full w-screen flex-shrink-0 flex flex-col items-center justify-center px-6 relative"
                            >
                                {/* Large watermark number behind */}
                                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-black/[0.02] select-none pointer-events-none leading-none z-0">
                                    {String(i + 1).padStart(2, "0")}
                                </span>

                                <div className="relative z-10 text-center max-w-4xl mx-auto">
                                    <h3 className={`text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-tight mb-8 ${accentColor}`}>
                                        {card.title}
                                    </h3>
                                    <p className="text-xl md:text-2xl lg:text-3xl text-[#001738]/60 leading-relaxed max-w-2xl mx-auto">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
