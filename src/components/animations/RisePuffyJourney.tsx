"use client";

import React, { useLayoutEffect } from "react";
import gsap from "gsap";

/**
 * RisePuffyJourney Component
 * 
 * Manages:
 * 1. Ambient "Weightless Floating" for all puffy/3D assets
 * (GSAP background coloring was removed to ensure a perfectly smooth, bug-free CSS gradient scroll)
 */
export default function RisePuffyJourney() {

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // AMBIENT WEIGHTLESS FLOATING
            // Soft bobbing for all puffy/3D assets
            const floaters = document.querySelectorAll(".puffy-float");
            if (floaters.length > 0) {
                gsap.to(floaters, {
                    y: -20,
                    duration: 4,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    stagger: {
                        amount: 1,
                        from: "random"
                    }
                });
            }
        });

        return () => ctx.revert();
    }, []);

    return null; // The background gradient is now handled via pure CSS on the <body> tag
}
