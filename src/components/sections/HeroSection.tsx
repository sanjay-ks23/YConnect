"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CloudScenery } from "@/components/animations/CloudScenery";
import { Globe } from "@/registry/magicui/globe";
import { GooeyButton } from "@/components/ui/GooeyButton";

export function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const globeContainerRef = useRef<HTMLDivElement>(null);

    // Build semantic headline logic
    const headlineText = "Connecting European startups with top Indian student talent,";
    const headlineParts = headlineText.split(" ").map((word) => ({ text: word + " ", className: "" }));

    return (
        <section
            id="hero-section"
            ref={sectionRef}
            // Strict screen height so no scrolling artifacts or extending beyond the page
            className="relative min-h-[100svh] flex flex-col items-center justify-start pt-24 md:pt-32 overflow-hidden"
        >
            {/* The 3D Clouds (Rise Style) */}
            <div className="absolute inset-0 z-25 pointer-events-none">
                <CloudScenery variant="hero" />
            </div>

            {/* Content - strictly vertically centered above the globe */}
            <div ref={textRef} id="hero-text-content" className="container-superhi relative z-30 flex flex-col items-center text-center mt-6 md:mt-12 max-w-5xl mx-auto px-4 md:px-8">

                {/* Main Text — Compact, bold, and incredibly bubbly layout */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl text-center max-w-5xl mx-auto mb-10 leading-[1.05] drop-shadow-2xl font-display tracking-tight">
                    <span className="text-white inline-block hover:scale-105 transition-transform duration-300 drop-shadow-[4px_4px_0_#FF4081,8px_8px_0_#001738] -rotate-2">Connecting</span>
                    <br />
                    <span className="text-[#00E5FF] inline-block hover:scale-105 transition-transform duration-300 drop-shadow-[4px_4px_0_#FFF,8px_8px_0_#001738] rotate-1 mt-4">European Startups</span>
                    <br />
                    <span className="text-[#FFD600] inline-block hover:scale-105 transition-transform duration-300 drop-shadow-[4px_4px_0_#FF4081,8px_8px_0_#001738] -rotate-1 mt-4">with Indian Talent</span>
                </h1>

                {/* CTA Buttons - Gooey Style with Glassmorphic Base */}
                <div className="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-6">
                    <Link href="/startups" className="w-full sm:w-auto">
                        <GooeyButton type="button" accentColor="#C70039" className="w-full px-8 py-3.5 text-lg md:text-xl font-bold bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_12px_40px_rgba(0,23,56,0.06)] text-[#001738]">
                            Hire Talent <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </GooeyButton>
                    </Link>

                    <Link href="/students" className="w-full sm:w-auto">
                        <GooeyButton type="button" accentColor="#FF6D00" className="w-full px-8 py-3.5 text-lg md:text-xl font-bold bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_12px_40px_rgba(0,23,56,0.06)] text-[#001738]">
                            Join as Student <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </GooeyButton>
                    </Link>
                </div>
            </div>

            {/* THE MAGIC UI GLOBE LAYER */}
            {/* Brought the globe further up into the viewport to match the reference image's dominant globe styling */}
            <div ref={globeContainerRef} className="absolute inset-0 top-[40%] md:top-[45%] flex items-center justify-center pointer-events-none z-10 w-full overflow-hidden">
                <Globe className="max-w-[700px] md:max-w-[1000px] lg:max-w-[1200px] mx-auto w-full aspect-square opacity-[0.85]" />
            </div>

            {/* Subtle radial overlay for blending perfectly into a pure white ground at the end of the Hero section, creating the "cloudy" effect before transitioning back to blue in HowItWorks */}
            <div className="pointer-events-none absolute inset-0 z-20 h-full bg-[radial-gradient(circle_at_50%_150%,rgba(255,255,255,1),rgba(255,255,255,0.9)_30%,rgba(255,255,255,0)_75%)]" />

            {/* Hard bottom white fade to ensure the hero section seamlessly merges into the white background we'll create for the next section */}
            <div className="absolute bottom-0 left-0 w-full h-[25vh] bg-gradient-to-t from-white via-white/95 to-transparent z-30 pointer-events-none" />
        </section>
    );
}
