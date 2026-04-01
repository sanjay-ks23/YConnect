"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section
            id="hero-section"
            className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-lavender via-white to-white"
        >
            {/* Subtle decorative elements instead of clouds */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-vibrant-blue/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-vibrant-green/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-vibrant-orange/5 rounded-full blur-2xl pointer-events-none" />

            {/* Content */}
            <div className="container-superhi relative z-10 flex flex-col items-center text-center px-4 md:px-8">
                <h1 className="text-5xl md:text-7xl lg:text-8xl text-center max-w-5xl mx-auto mb-10 leading-[1.05] font-display tracking-tight">
                    <span className="text-[#001738] inline-block">Connecting</span>
                    <br />
                    <span className="text-vibrant-blue inline-block mt-4">European Startups</span>
                    <br />
                    <span className="text-vibrant-crimson inline-block mt-4">with International Talent</span>
                </h1>

                <p className="text-lg lg:text-xl text-foreground/50 leading-relaxed mb-12 max-w-2xl mx-auto">
                    Bridging European innovation with the world&apos;s premier engineering talent. 
                    Scale your startup with top-tier freelance developers or accelerate your career 
                    with global project experience. We handle everything.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                    <Link href="/startups" className="w-full sm:w-auto">
                        <button className="w-full px-8 py-3.5 text-lg font-bold bg-vibrant-blue text-white rounded-full shadow-lg hover:shadow-vibrant-blue/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                            Hire Talent <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>

                    <Link href="/students" className="w-full sm:w-auto">
                        <button className="w-full px-8 py-3.5 text-lg font-bold bg-vibrant-crimson text-white rounded-full shadow-lg hover:shadow-vibrant-crimson/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                            Join as Student <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
