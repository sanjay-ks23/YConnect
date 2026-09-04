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
  subtitle?: string;
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
  const accentBg = isPink ? "bg-vibrant-crimson/10" : isBlue ? "bg-vibrant-blue/10" : "bg-vibrant-orange/10";

  return (
    <>
      {/* Mobile: Stacked cards (Hidden on md and up) — natural vertical scroll, no scroll-jacking */}
      <div className={`md:hidden relative ${bgColor}`}>
        <div className="container-superhi py-14">
          <div className="text-center mb-8 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-[#001738] mb-3 tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-base sm:text-lg text-[#001738]/70 max-w-md mx-auto leading-relaxed mb-2 font-normal">
                {subtitle}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-4 w-full max-w-xl mx-auto">
            {cards.map((card) => (
              <div
                key={card.title}
                className="relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm flex flex-col gap-3.5 transition-all duration-300 hover:shadow-md"
              >
                {card.icon && (
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${card.iconBg ?? accentBg} shadow-sm border border-black/5`}>
                    <card.icon className={`w-6 h-6 ${card.iconColor ?? accentColor}`} strokeWidth={2.2} />
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-display font-medium text-[#001738] tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-[#001738]/70 text-[15px] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Pinned horizontal scroll (Hidden below md) */}
      <section ref={sectionRef} className={`hidden md:block relative ${bgColor}`} style={{ height: `${cards.length * 100}vh` }}>
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
                    <p className="text-xl md:text-2xl lg:text-3xl text-[#001738]/60 leading-relaxed max-w-3xl mx-auto">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
