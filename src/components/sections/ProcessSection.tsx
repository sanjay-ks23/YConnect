"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { type LucideIcon } from "lucide-react";

export interface ProcessStep {
    step: string;
    title: string;
    description: string;
    icon?: LucideIcon; 
    image?: string; 
    color?: string; 
    shadowColor?: string; 
}

interface ProcessSectionProps {
    badgeText: string;
    title: React.ReactNode;
    subtitle: string;
    steps: ProcessStep[];
    theme: "crimson" | "orange" | "blue";
    onCtaClick?: () => void;
    bgColor?: string;
}

export function ProcessSection({ badgeText, title, subtitle, steps, theme, onCtaClick, bgColor = "bg-white" }: ProcessSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const isPink = theme === "crimson";
    const isBlue = theme === "blue";
    const badgeBg = isPink ? "bg-vibrant-crimson/10" : isBlue ? "bg-vibrant-blue/10" : "bg-vibrant-orange/10";
    const badgeTextClass = isPink ? "text-vibrant-crimson" : isBlue ? "text-vibrant-blue" : "text-vibrant-orange-dark";
    const titleColor = isPink ? "text-vibrant-crimson" : isBlue ? "text-vibrant-blue" : "text-vibrant-orange-dark";
    const lineBaseBg = "bg-gray-100";
    const lineActiveBg = isPink ? "bg-vibrant-crimson" : isBlue ? "bg-vibrant-blue" : "bg-vibrant-orange";

    return (
        <section ref={containerRef} className={`relative w-full pt-48 pb-32 sm:pt-64 sm:pb-40 ${bgColor}`}>
            <div className="container-superhi flex flex-col lg:flex-row relative z-10">

                {/* Left Side: Sticky Sidebar */}
                <div className="w-full lg:w-1/2 mb-16 lg:mb-0 relative z-[15] pr-8 lg:pr-24">
                    <div className="lg:sticky lg:top-1/2 lg:-translate-y-1/2">
                        <div className={`inline-flex items-center gap-2.5 rounded-full ${badgeBg} px-4 py-1.5 mb-6 lg:mb-8`}>
                            <span className={`text-xs font-bold tracking-wider uppercase ${badgeTextClass}`}>
                                {badgeText}
                            </span>
                        </div>
                        <h2 className="heading-section mb-6">
                            {title}
                        </h2>
                        <p className="text-lg text-[#001738]/50 leading-relaxed max-w-[420px]">
                            {subtitle}
                        </p>
                    </div>
                </div>

                {/* Vertical Connecting Progress Line - Exactly centered */}
                <div className={`hidden lg:block absolute left-1/2 top-0 bottom-[10%] w-[1.5px] ${lineBaseBg} ml-[-0.75px] rounded-full z-0`}>
                    <motion.div
                        className={`absolute top-0 left-0 w-full rounded-full ${lineActiveBg}`}
                        style={{ height: lineHeight }}
                    />
                </div>

                {/* Right Side: Scrolling Steps */}
                <div className="w-full lg:w-1/2 flex flex-col gap-[15vh] lg:pl-[10%] relative z-10 lg:py-[10vh]">
                    {steps.map((step, i) => (
                        <StepCard
                            key={step.step}
                            step={step}
                            theme={theme}
                            titleColor={titleColor}
                            isLast={i === steps.length - 1}
                            onCtaClick={i === steps.length - 1 ? onCtaClick : undefined}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

interface StepCardProps {
    step: ProcessStep;
    theme: "crimson" | "orange" | "blue";
    titleColor: string;
    isLast: boolean;
    onCtaClick?: () => void;
}

function StepCard({ step, theme, titleColor, isLast, onCtaClick }: StepCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start 90%", "center center"]
    });

    const yVal = useTransform(scrollYProgress, [0, 1], [40, 0]);
    const opacityVal = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const isPink = theme === "crimson";
    const isBlue = theme === "blue";
    const hoverBorder = isPink ? "hover:border-vibrant-crimson/30" : isBlue ? "hover:border-vibrant-blue/30" : "hover:border-vibrant-orange/30";

    return (
        <motion.div
            ref={cardRef}
            style={{ y: yVal, opacity: opacityVal }}
            className="relative flex flex-col items-center sm:items-start lg:items-center max-w-[480px] mx-auto lg:mx-0 w-full"
        >
            <div className={`bg-white border border-gray-100 p-8 sm:p-12 rounded-[2.5rem] shadow-sm w-full min-h-[350px] transition-all duration-500 ${hoverBorder} group flex flex-col items-center justify-center text-center relative overflow-hidden`}>
                
                <div className="w-24 h-24 sm:w-28 sm:h-28 mb-8 relative group-hover:-translate-y-1 transition-transform duration-500 flex items-center justify-center">
                    {step.image ? (
                        <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-contain z-10 group-hover:scale-[1.05] transition-all duration-500 opacity-80 group-hover:opacity-100 filter brightness-[0.9] group-hover:brightness-100"
                        />
                    ) : step.icon ? (
                        <step.icon
                            className="w-12 h-12 text-[#001738]/30"
                            strokeWidth={1.5}
                        />
                    ) : null}
                </div>

                <div className="flex flex-col items-center relative z-10">
                    <h3 className={`text-2xl sm:text-3xl font-display font-medium mb-4 ${titleColor}`}>{step.title}</h3>

                    <p className="text-[#001738]/50 text-base leading-relaxed mb-0 max-w-[320px]">
                        {step.description}
                    </p>

                    {isLast && onCtaClick && (
                        <button 
                            onClick={onCtaClick}
                            className={`mt-8 px-8 py-3 rounded-full text-white font-bold transition-all ${isPink ? "bg-vibrant-crimson hover:bg-vibrant-crimson-dark" : isBlue ? "bg-vibrant-blue hover:bg-vibrant-blue-dark" : "bg-vibrant-orange hover:bg-vibrant-orange-dark"}`}
                        >
                            Get Started
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
