"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * GlobalScrollBackground Component
 * 
 * Manages a fixed background layer that morphs colors based on total page scroll.
 * Morphs from Sky Blue (#4ea5ff) to Sunset Amber (#fee2e2).
 */
export default function GlobalScrollBackground() {
    const bgRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(bgRef.current, {
                background: "linear-gradient(to bottom, #87CEEB, #3F8F45)", // Sky Blue to Grass Green
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={bgRef}
            className="fixed inset-0 z-[-10] pointer-events-none"
            style={{
                background: "linear-gradient(to bottom, #4ea5ff, #87CEEB)", // Initial Sky Blue
                transition: "background 0.2s ease-out"
            }}
        />
    );
}
