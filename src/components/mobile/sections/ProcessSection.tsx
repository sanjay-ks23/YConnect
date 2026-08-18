"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { type LucideIcon } from "lucide-react";

export interface ProcessStep {
  step: string;
  title: string;
  description: string | React.ReactNode;
  icon?: LucideIcon; 
  image?: string; 
  color?: string; 
  shadowColor?: string; 
}

interface ProcessSectionProps {
  badgeText: string;
  title: React.ReactNode;
  subtitle: string | React.ReactNode;
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
  const lineBaseBg = "bg-gray-200";
  const lineActiveBg = isPink ? "bg-vibrant-crimson" : isBlue ? "bg-vibrant-blue" : "bg-vibrant-orange";

  return (
    <section ref={containerRef} className={`relative w-full pt-14 pb-16 sm:pt-40 sm:pb-32 ${bgColor}`}>
      <div className="container-superhi flex flex-col lg:flex-row relative z-10">

        {/* Left Side: Sticky Sidebar */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative z-[15] text-center lg:text-left flex flex-col items-center lg:items-start pr-0 lg:pr-24">
          <div className="lg:sticky lg:top-1/2 lg:-translate-y-1/2 flex flex-col items-center lg:items-start">
            {badgeText && (
              <div className={`inline-flex items-center gap-2.5 rounded-full ${badgeBg} px-4 py-1.5 mb-3 lg:mb-8`}>
                <span className={`text-xs font-bold tracking-wider uppercase ${badgeTextClass}`}>
                  {badgeText}
                </span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-3 text-[#001738]">
              {title}
            </h2>
            <div className="max-w-md text-base sm:text-lg text-[#001738]/65 leading-relaxed text-center lg:text-left">
              {subtitle}
            </div>
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
        <div className="w-full lg:w-1/2 flex flex-col gap-3.5 lg:gap-[15vh] lg:pl-[10%] relative z-10 lg:py-[10vh]">
          {steps.map((step, i) => (
            <StepCard
              key={step.step}
              step={step}
              theme={theme}
              titleColor={titleColor}
              badgeBg={badgeBg}
              badgeTextClass={badgeTextClass}
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
  badgeBg: string;
  badgeTextClass: string;
  isLast: boolean;
  onCtaClick?: () => void;
}

function StepCard({ step, theme, titleColor, badgeBg, badgeTextClass, isLast, onCtaClick }: StepCardProps) {
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
      className="relative flex flex-col items-center sm:items-start lg:items-center max-w-[500px] mx-auto lg:mx-0 w-full opacity-100"
    >
      <div className={`bg-white border border-gray-100 p-5 sm:p-7 rounded-2xl shadow-sm w-full transition-all duration-300 ${hoverBorder} group flex flex-col relative overflow-hidden`}>
        {step.icon && (
          <div className="mb-3">
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
              <step.icon className="w-5 h-5 text-[#001738]/60" />
            </div>
          </div>
        )}

        <div className="flex flex-col relative z-10 w-full">
          <h3 className={`text-lg sm:text-xl font-display font-medium mb-1.5 ${titleColor}`}>{step.title}</h3>
          <div className="max-w-full text-[#001738]/70 text-[14px] leading-relaxed text-left">
            {step.description}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
