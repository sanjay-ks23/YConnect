"use client";

import { useEffect, useRef, Children, cloneElement, isValidElement } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationVariant = "fade-up" | "fade-left" | "fade-right" | "scale-in" | "fade-down";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    y?: number;
    x?: number;
    once?: boolean;
    variant?: AnimationVariant;
    stagger?: number; // stagger delay between children
}

export function ScrollReveal({
    children,
    className = "",
    delay = 0,
    duration = 0.8,
    y = 50,
    x = 0,
    once = true,
    variant = "fade-up",
    stagger = 0,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            // Determine animation start values based on variant
            const fromVars: gsap.TweenVars = {
                opacity: 0,
                duration,
                delay,
                ease: "power3.out",
            };

            switch (variant) {
                case "fade-up":
                    fromVars.y = y;
                    break;
                case "fade-down":
                    fromVars.y = -y;
                    break;
                case "fade-left":
                    fromVars.x = x || 60;
                    break;
                case "fade-right":
                    fromVars.x = -(x || 60);
                    break;
                case "scale-in":
                    fromVars.scale = 0.92;
                    fromVars.y = y * 0.5;
                    break;
            }

            if (stagger > 0) {
                // Stagger children
                const childElements = ref.current?.children;
                if (childElements && childElements.length > 0) {
                    gsap.from(childElements, {
                        ...fromVars,
                        stagger,
                        scrollTrigger: {
                            trigger: ref.current,
                            start: "top 88%",
                            once,
                        },
                    });
                }
            } else {
                // Single element reveal
                gsap.from(ref.current, {
                    ...fromVars,
                    scrollTrigger: {
                        trigger: ref.current,
                        start: "top 88%",
                        once,
                    },
                });
            }
        }, ref);

        return () => ctx.revert();
    }, [y, x, duration, delay, once, variant, stagger]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
}
