"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HeroConnections() {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef1 = useRef<SVGPathElement>(null);
    const pathRef2 = useRef<SVGPathElement>(null);
    const pathRef3 = useRef<SVGPathElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const paths = [pathRef1.current, pathRef2.current, pathRef3.current];

            // Set initial state for drawing (strokeDasharray/offset approach)
            paths.forEach((path) => {
                if (!path) return;
                const length = path.getTotalLength();
                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length,
                    opacity: 0.8
                });

                // Scrub draw the line on scroll
                gsap.to(path, {
                    strokeDashoffset: 0,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: "#hero-section",
                        start: "top top",
                        end: "bottom center",
                        scrub: 1.5, // The scroll scrubbing creates the "drawing" effect
                    }
                });
            });

            // Ambient floating/bouncing of the container itself
            gsap.to(containerRef.current, {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none opacity-90">
            {/* SVG to draw thick tech beams coming directly out of the center globe */}
            <svg viewBox="-500 -500 1000 1000" className="w-[120%] h-[120%] max-w-[1200px] overflow-visible drop-shadow-[0_0_20px_rgba(45,104,255,0.7)]">
                <defs>
                    <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#84fab0" />
                        <stop offset="100%" stopColor="#4facfe" />
                    </linearGradient>
                    <linearGradient id="beam2" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#a18cd1" />
                        <stop offset="100%" stopColor="#fbc2eb" />
                    </linearGradient>
                    <linearGradient id="beam3" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#ff9a9e" />
                        <stop offset="100%" stopColor="#fecfef" />
                    </linearGradient>
                </defs>

                {/* Beams radiating from center (0,0 is center of globe) */}
                <path
                    ref={pathRef1}
                    d="M 120 -120 Q 300 -400 600 -300"
                    fill="none"
                    stroke="url(#beam1)"
                    strokeWidth="10"
                    strokeLinecap="round"
                />

                <path
                    ref={pathRef2}
                    d="M -150 50 Q -300 300 -500 400"
                    fill="none"
                    stroke="url(#beam2)"
                    strokeWidth="12"
                    strokeLinecap="round"
                />

                <path
                    ref={pathRef3}
                    d="M 180 30 Q 500 100 700 -50"
                    fill="none"
                    stroke="url(#beam3)"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}
