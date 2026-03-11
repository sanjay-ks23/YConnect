"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { GooeyButton } from "@/components/ui/GooeyButton";
import { CloudScenery } from "@/components/animations/CloudScenery";

export interface ProcessStep {
    step: string;
    title: string;
    description: string;
    icon?: LucideIcon; // Optional, using lucide icons instead of URLs for talent bridge
    image?: string; // Optional 3D asset image
    color?: string; // Hex tailwind bg class for the box
    shadowColor?: string; // Hex tailwind bg class for the box shadow
}

interface ProcessSectionProps {
    badgeText: string;
    title: React.ReactNode;
    subtitle: string;
    steps: ProcessStep[];
    theme: "crimson" | "orange";
    onCtaClick?: () => void;
}

export function ProcessSection({ badgeText, title, subtitle, steps, theme, onCtaClick }: ProcessSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress through the entire section to animate the connecting line
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Determine theme colors based on the prop
    const isPink = theme === "crimson";
    const badgeBg = isPink ? "bg-vibrant-crimson/10" : "bg-vibrant-orange/10";
    const badgeTextClass = isPink ? "text-vibrant-crimson" : "text-vibrant-orange-dark";
    const titleColor = isPink ? "text-vibrant-crimson" : "text-vibrant-orange-dark";
    const lineBaseBg = isPink ? "bg-vibrant-crimson/10" : "bg-vibrant-orange/10";
    const lineActiveBg = isPink ? "bg-vibrant-crimson" : "bg-vibrant-orange";
    const accentColor = isPink ? "#FF4081" : "#FF6D00";

    return (
        <section ref={containerRef} className="relative w-full py-24 sm:py-32">
            <CloudScenery
                variant="scattered"
                customClouds={[
                    {
                        src: "/clouds/puffy-clean-1.png",
                        style: { top: "15%", left: "-5%", opacity: 0.9 },
                        className: "w-[300px] md:w-[450px]",
                    },
                    {
                        src: "/clouds/cloud-xl-final.png",
                        style: { bottom: "10%", right: "-5%", opacity: 0.9 },
                        className: "w-[400px] md:w-[550px]",
                    },
                ]}
            />
            {/* Footer Content — centered in the middle of the terrain, above the gooey bar */}
            <div className="container-superhi flex flex-col lg:flex-row relative z-10">

                {/* Left Side: Sticky Sidebar */}
                <div className="w-full lg:w-5/12 mb-16 lg:mb-0 relative z-[15]">
                    <div className="lg:sticky lg:top-[35vh]">
                        <div className={`inline-flex items-center gap-2.5 rounded-full ${badgeBg} px-4 py-1.5 mb-6 lg:mb-8`}>
                            <span className={`text-xs font-bold tracking-wider uppercase ${badgeTextClass}`}>
                                {badgeText}
                            </span>
                        </div>
                        <h2 className="heading-section mb-6 max-w-[400px]">
                            {title}
                        </h2>
                        <p className="text-lg text-foreground/50 leading-relaxed max-w-[360px]">
                            {subtitle}
                        </p>
                    </div>
                </div>

                {/* Vertical Connecting Progress Line */}
                <div className={`hidden lg:block absolute left-5/12 top-0 bottom-[10%] w-[2px] ${lineBaseBg} ml-[-1px] rounded-full z-0`}>
                    <motion.div
                        className={`absolute top-0 left-0 w-full rounded-full ${lineActiveBg}`}
                        style={{ height: lineHeight }}
                    />
                </div>

                {/* Right Side: Scrolling Steps */}
                <div className="w-full lg:w-7/12 flex flex-col gap-[20vh] lg:pl-[10%] relative z-10 lg:py-[15vh]">
                    {steps.map((step, i) => (
                        <StepCard
                            key={step.step}
                            step={step}
                            theme={theme}
                            badgeBg={badgeBg}
                            badgeTextClass={badgeTextClass}
                            titleColor={titleColor}
                            lineBaseBg={lineBaseBg}
                            isLast={i === steps.length - 1}
                            onCtaClick={i === steps.length - 1 ? onCtaClick : undefined}
                            accentColor={accentColor}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

interface StepCardProps {
    step: ProcessStep;
    theme: "crimson" | "orange";
    badgeBg: string;
    badgeTextClass: string;
    titleColor: string;
    lineBaseBg: string;
    isLast: boolean;
    onCtaClick?: () => void;
    accentColor: string;
}

function StepCard({ step, theme, badgeBg, badgeTextClass, titleColor, lineBaseBg, isLast, onCtaClick, accentColor }: StepCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Track when this specific card enters the viewport to trigger its entrance animation
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start 85%", "center center"]
    });

    const yVal = useTransform(scrollYProgress, [0, 1], [80, 0]);
    const opacityVal = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const isPink = theme === "crimson";
    // Construct gradient classes for the card hover effect similar to original talent bridge cards
    const hoverGradient = isPink
        ? "hover:shadow-[0_20px_40px_-15px_rgba(255,64,129,0.15)] hover:border-vibrant-crimson/20"
        : "hover:shadow-[0_20px_40px_-15px_rgba(255,109,0,0.15)] hover:border-vibrant-orange/20";

    return (
        <motion.div
            ref={cardRef}
            style={{ y: yVal, opacity: opacityVal }}
            className="relative flex flex-col items-center sm:items-start lg:items-center max-w-[480px] mx-auto lg:mx-0 w-full"
        >
            {/* The Process Card - Liquid Glass Card — uniform height */}
            <div className={`bg-gradient-to-br from-white/40 via-white/20 to-sky-100/30 backdrop-blur-2xl saturate-150 border border-white/40 p-8 sm:p-12 rounded-[2.5rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),inset_0_-1px_2px_rgba(0,0,0,0.04),0_20px_50px_-15px_rgba(0,0,0,0.08)] w-full min-h-[400px] transition-all duration-500 ${hoverGradient} group flex flex-col items-center justify-center text-center relative overflow-hidden`}>
                {/* Gradient overlay for glass tint */}
                <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/60 via-white/30 to-white/10 pointer-events-none" />

                {/* Icon placed directly on card — no white background, dulled down */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 mb-8 relative group-hover:-translate-y-2 transition-transform duration-500 flex items-center justify-center">
                    {step.image ? (
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img
                                src={step.image}
                                alt={step.title}
                                className="w-full h-full object-contain z-10 drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] group-hover:scale-[1.1] transition-transform duration-500 will-change-transform"
                                style={{ filter: "saturate(0.8) brightness(0.85) contrast(0.8)" }}
                            />
                            {/* Metallic Shine Overlay */}
                            <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/30 to-transparent skew-x-[-25deg] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />
                        </div>
                    ) : step.icon ? (
                        <step.icon
                            className="w-14 h-14 sm:w-16 sm:h-16 text-foreground/50 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] z-10"
                            strokeWidth={1.5}
                        />
                    ) : (
                        <div className="relative text-foreground/30 text-5xl font-light">
                            +
                        </div>
                    )}
                </div>

                <div className="flex flex-col items-center relative z-10">
                    {/* Title — Reverted to Bold styling */}
                    <h3 className={`text-3xl sm:text-4xl font-bold mb-4 tracking-tight pb-1 bg-clip-text ${titleColor}`}>{step.title}</h3>

                    <p className="text-[#001738]/50 text-lg leading-relaxed mb-0 max-w-[320px] font-medium">
                        {step.description}
                    </p>

                    {isLast && onCtaClick && (
                        <div className="mt-8">
                            <GooeyButton type="button" onClick={onCtaClick} accentColor={accentColor} className="w-full sm:w-auto">
                                Get Started
                            </GooeyButton>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
