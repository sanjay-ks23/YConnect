"use client";

import { useEffect, useRef } from "react";
import { animate, scroll, spring } from "motion";
import { CloudScenery } from "@/components/animations/CloudScenery";

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
    theme: "crimson" | "orange";
}

export function HorizontalScrollSection({ title, subtitle, cards, theme }: HorizontalScrollSectionProps) {
    const ulRef = useRef<HTMLUListElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!ulRef.current || !sectionRef.current) return;

        const items = ulRef.current.querySelectorAll("li");
        if (items.length === 0) return;

        // Animate the ul horizontally as user scrolls through the section
        const controls = animate(
            ulRef.current as any,
            {
                transform: ["none", `translateX(-${items.length - 1}00vw)`],
            } as any,
            { easing: spring() } as any
        );

        scroll(controls, { target: sectionRef.current });

        // Parallax on each card's title for a premium feel
        const segmentLength = 1 / items.length;
        items.forEach((item, i) => {
            const heading = item.querySelector("h3");
            if (heading && sectionRef.current) {
                scroll(
                    animate(heading as any, { x: [300, -300] } as any),
                    {
                        target: sectionRef.current,
                        offset: [
                            [i * segmentLength, 1],
                            [(i + 1) * segmentLength, 0],
                        ],
                    }
                );
            }
        });
    }, []);

    return (
        // Height = number of cards * 100vh for scroll space
        <section ref={sectionRef} className="relative" style={{ height: `${cards.length * 100}vh` }}>
            <CloudScenery
                variant="scattered"
                customClouds={[
                    {
                        src: "/clouds/puffy-clean-1.png",
                        style: { top: "10vh", right: "-5vw", opacity: 0.9 },
                        className: "w-[350px] md:w-[500px]",
                    },
                    {
                        src: "/clouds/cloud-xl-final.png",
                        style: { bottom: "20vh", left: "-5vw", opacity: 0.9 },
                        className: "w-[400px] md:w-[600px]",
                    },
                ]}
            />
            <ul ref={ulRef} className="flex sticky top-0 list-none m-0 p-0">
                {cards.map((card, i) => (
                    <li
                        key={card.title}
                        className="h-screen w-screen flex-shrink-0 flex flex-col items-center justify-center overflow-hidden bg-transparent relative px-6"
                    >
                        {/* Large watermark number behind */}
                        <span className="absolute text-[30vw] font-black text-black/[0.03] select-none pointer-events-none leading-none">
                            {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Title with parallax */}
                        <h3 className="text-[10vw] lg:text-[6vw] font-extrabold tracking-tight text-slate-800 relative z-10 text-center leading-none font-display mb-8">
                            {card.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg lg:text-2xl text-foreground/50 max-w-2xl text-center leading-relaxed relative z-10">
                            {card.description}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

