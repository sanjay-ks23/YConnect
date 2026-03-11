"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export interface BenefitCard {
    title: string;
    description: string;
    // We keep these in the interface so it doesn't break the pages passing the data, 
    // but we won't render them in the component as requested.
    icon?: any;
    color?: string;
    iconBg?: string;
    iconColor?: string;
}

interface StackedCardsSectionProps {
    title: React.ReactNode;
    subtitle: string;
    cards: BenefitCard[];
    theme: "green" | "orange";
}

export function StackedCardsSection({ title, subtitle, cards, theme }: StackedCardsSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const numCards = cards.length;

    // Track scroll through the whole container, 100vh per card
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Shift the entire pile left as more cards arrive to keep it visually centered
    const containerX = useTransform(
        scrollYProgress,
        [0, (numCards - 1) / numCards],
        ["0px", `-${(numCards - 1) * 25}px`]
    );

    return (
        // Height equals N * 100vh so we have space to scroll through every card
        <section ref={containerRef} className="relative w-full" style={{ height: `${numCards * 100}vh` }}>
            <div className="sticky top-0 h-screen w-full flex flex-col items-center overflow-hidden bg-background py-20 lg:py-28">

                {/* Fixed Titles at the top */}
                <div className="absolute top-[8%] lg:top-[12%] text-center w-full px-4 z-50 pointer-events-none">
                    <h2 className="heading-section mb-6">
                        {title}
                    </h2>
                    <p className="text-lg lg:text-xl text-foreground/60 max-w-xl mx-auto drop-shadow-sm">
                        {subtitle}
                    </p>
                </div>

                {/* Wrapper for the pile of cards, shifting left progressively */}
                <motion.div
                    style={{ x: containerX }}
                    className="relative w-full max-w-sm sm:max-w-xl lg:max-w-3xl h-[450px] lg:h-[500px] mt-auto mb-[10vh] lg:mb-[15vh] perspective-[1000px] flex items-center justify-center pointer-events-auto"
                >
                    {cards.map((card, i) => (
                        <StackedPaperCard
                            key={card.title}
                            card={card}
                            index={i}
                            progress={scrollYProgress}
                            numCards={numCards}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function StackedPaperCard({ card, index, progress, numCards }: { card: BenefitCard, index: number, progress: any, numCards: number }) {
    // Generate an aggressive, coarse noise for a believable rough paper/cardboard texture
    const coarseNoiseSvg = encodeURIComponent(`
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <filter id="coarseNoise">
                <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#coarseNoise)" opacity="0.12"/>
        </svg>
    `);

    // Calculate when this card should fly in based on scroll progress
    const rangeStart = Math.max(0, (index - 1) / numCards);
    const rangeEnd = index / numCards;
    const isFirst = index === 0;

    // Card offset when fully stacked (50px strictly to the right per card)
    const stackedXPos = index * 50;

    // Frame animations dependent on scroll
    // Non-first cards start at 100vw (off screen right) and slide into their stackedXPos
    const xAnimation = useTransform(
        progress,
        isFirst ? [0, 1] : [rangeStart, rangeEnd],
        isFirst ? [`${stackedXPos}px`, `${stackedXPos}px`] : ["100vw", `${stackedXPos}px`]
    );

    // Give them a slight natural, messy rotation like a pile of physical papers
    const finalRotation = (index % 2 === 0 ? 1.5 : -2) * (index + 1);
    const rotateAnimation = useTransform(
        progress,
        isFirst ? [0, 1] : [rangeStart, rangeEnd],
        isFirst ? [finalRotation, finalRotation] : [35, finalRotation]
    );

    return (
        <motion.div
            style={{
                x: xAnimation,
                rotate: rotateAnimation,
                zIndex: index, // Ensure newer cards stack strictly ON TOP of older ones
                backgroundImage: `url("data:image/svg+xml;utf8,${coarseNoiseSvg}")`,
                backgroundColor: "#F7F5F0", // Warm coarse paper color
            }}
            className="absolute inset-0 w-full h-full p-10 lg:p-16 rounded-[2rem] border-[1px] border-[#e0dad0] flex flex-col items-center justify-center text-center shadow-[-15px_15px_30px_-5px_rgba(0,0,0,0.1),0_0_10px_rgba(0,0,0,0.03)] transition-shadow duration-300 hover:shadow-[-20px_20px_40px_-5px_rgba(0,0,0,0.15)] origin-center"
        >
            <h3 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-tight text-slate-800 !leading-tight drop-shadow-sm font-display">
                {card.title}
            </h3>
            <p className="text-lg lg:text-xl text-[#5a564e] leading-relaxed max-w-lg">
                {card.description}
            </p>
        </motion.div>
    );
}
