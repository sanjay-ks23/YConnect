"use client";

import React, { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Seeded PRNG (mulberry32) — produces identical results on server and client
function mulberry32(seed: number) {
    return function() {
        seed |= 0; seed = seed + 0x6D2B79F5 | 0;
        let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}

const rng = mulberry32(42);
const BUBBLES = Array.from({ length: 48 }, () => ({
    size: `${1.5 + rng() * 3}rem`,
    distance: `${4 + rng() * 3}rem`,
    position: `${-5 + rng() * 110}%`,
    time: `${2 + rng() * 2}s`,
    delay: `${-1 * (2 + rng() * 2)}s`,
}));

/**
 * RealisticJourneyFooter Component
 * 
 * Layout:
 * 1. Terrain image (landscape)
 * 2. Content overlaid in the center of the terrain, above the gooey bar
 * 3. Small gooey bubble bar at the very bottom (empty, decorative only)
 */
export default function RealisticJourneyFooter() {
    const footerRef = useRef<HTMLElement>(null);
    const terrainRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Parallax for terrain
        gsap.fromTo(terrainRef.current,
            { y: 80 },
            {
                y: -30,
                ease: "none",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top bottom",
                    end: "bottom bottom",
                    scrub: 1.5,
                }
            }
        );

        // Content entrance — once only, stays visible
        if (contentRef.current) {
            const elements = contentRef.current.querySelectorAll(".footer-reveal");
            gsap.from(elements, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.12,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 85%",
                    once: true,
                }
            });
        }
    }, { scope: footerRef });

    return (
        <footer 
            ref={footerRef}
            className="relative w-full overflow-hidden"
            style={{ marginBottom: 0, paddingBottom: 0 }}
        >
            {/* Terrain Image */}
            <div 
                ref={terrainRef}
                className="w-full pointer-events-none"
                style={{
                    maskImage: "linear-gradient(to bottom, transparent 0%, transparent 20%, black 50%, black 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, transparent 20%, black 50%, black 100%)"
                }}
            >
                <img 
                    src="/rise-plasma-terrain-8k.png"
                    alt="High Fidelity Terrain 8K"
                    className="w-full h-auto block"
                    style={{ imageRendering: "auto" }}
                />
            </div>

            {/* Dark gradient overlay for text readability */}
            <div 
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0.6) 100%)"
                }}
            />

            {/* Footer Content — centered in the middle of the terrain, above the gooey bar */}
            <div 
                ref={contentRef}
                className="absolute inset-x-0 bottom-0 z-30 flex flex-col justify-end items-center pointer-events-none min-h-screen"
                style={{ paddingBottom: "26rem" }}
            >
                <div className="w-full max-w-5xl mx-auto flex flex-col items-center px-6 text-center pointer-events-auto relative z-30">
                    {/* CTA */}
                    <span className="footer-reveal text-xs md:text-sm font-black text-white/70 tracking-[0.3em] uppercase mb-6">
                        START YOUR JOURNEY
                    </span>
                    <h2 className="footer-reveal text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 leading-[0.95]">
                        Connect Globally.<br/>
                        <span className="text-white/80 italic font-medium">Grow Locally.</span>
                    </h2>
                    <p className="footer-reveal text-lg md:text-xl text-white/60 max-w-md mb-8 leading-relaxed">
                        A seamless bridge between Europe and India. We manage everything from vetting to payments, so you can focus on building.
                    </p>
                    <Link 
                        href="#" 
                        className="footer-reveal inline-flex items-center gap-2 bg-white text-[#001738] px-10 py-4 rounded-full text-base font-bold tracking-wider hover:bg-white/90 transition-all duration-300"
                    >
                        Get Started →
                    </Link>
 
                    {/* Navigation Links */}
                    <nav className="footer-reveal flex flex-wrap justify-center gap-8 mt-14 text-sm font-semibold text-white/50 uppercase tracking-[0.15em]">
                        {["How It Works", "For Startups", "For Students", "About Us"].map((link) => (
                            <Link 
                                key={link} 
                                href="#" 
                                className="hover:text-white transition-colors duration-300"
                            >
                                {link}
                            </Link>
                        ))}
                    </nav>
 
                    {/* Social Icons */}
                    <div className="footer-reveal flex gap-5 mt-6">
                        {[
                            { label: "Twitter", icon: "𝕏" },
                            { label: "LinkedIn", icon: "in" },
                            { label: "Instagram", icon: "IG" },
                        ].map((s) => (
                            <Link 
                                key={s.label}
                                href="#" 
                                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-white hover:text-[#001738] transition-all duration-300 text-xs font-bold"
                                aria-label={s.label}
                            >
                                {s.icon}
                            </Link>
                        ))}
                    </div>
 
                    {/* Large Brand Name */}
                    <div className="footer-reveal mt-12 select-none pointer-events-none">
                        <h2 className="text-8xl md:text-9xl font-display font-medium text-white/85 leading-none tracking-tight">
                            YConnect
                        </h2>
                    </div>

                    {/* Copyright */}
                    <p className="footer-reveal mt-8 text-white/20 text-xs tracking-wider">
                        © 2026 YConnect. All rights reserved.
                    </p>
                </div>
            </div>

            {/* ===== GOOEY BUBBLE BAR — empty, decorative only, reduced size ===== */}
            <div className="relative z-40" style={{ marginTop: "-1px" }}>
                {/* SVG Filter */}
                <svg style={{ position: "fixed", top: "100vh", width: 0, height: 0 }} aria-hidden="true">
                    <defs>
                        <filter id="gooey-blob">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix 
                                in="blur" 
                                mode="matrix" 
                                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" 
                                result="blob" 
                            />
                        </filter>
                    </defs>
                </svg>

                {/* Bubbles */}
                <div 
                    className="absolute top-0 left-0 right-0"
                    style={{
                        height: "1rem",
                        background: "#3F8F45",
                        filter: "url(#gooey-blob)",
                        transform: "translateY(-100%)",
                    }}
                >
                    {BUBBLES.map((b, i) => (
                        <div 
                            key={i}
                            className="absolute rounded-full"
                            style={{
                                left: b.position,
                                background: "#3F8F45",
                                animation: `bubble-size ${b.time} ease-in infinite ${b.delay}, bubble-move ${b.time} ease-in infinite ${b.delay}`,
                                transform: "translate(-50%, 100%) translateZ(0)",
                                willChange: "transform",
                                ["--size" as string]: b.size,
                                ["--distance" as string]: b.distance,
                            }}
                        />
                    ))}
                </div>

                {/* Thin solid bar — just the gooey base, no content */}
                <div style={{ background: "#3F8F45", height: "3rem" }} />
            </div>
        </footer>
    );
}
