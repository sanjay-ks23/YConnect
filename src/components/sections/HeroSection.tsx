"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section
            id="hero-section"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-lavender via-white to-white py-20 lg:py-28"
        >
            {/* Subtle decorative elements instead of clouds */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-vibrant-blue/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-vibrant-green/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-vibrant-orange/5 rounded-full blur-2xl pointer-events-none" />

            {/* Content */}
            <div className="container-superhi relative z-10 flex flex-col items-center text-center px-4 md:px-8">
                <h1 className="heading-hero font-display font-medium text-center max-w-4xl mx-auto mb-6 leading-[1.12]">
                    <span className="text-[#001738] block">Connecting</span>
                    <span className="text-vibrant-blue block mt-1 sm:mt-2">European Startups</span>
                    <span className="text-vibrant-crimson block mt-1">with Indian Talent</span>
                </h1>

                <div className="w-max max-w-full mx-auto text-justify [text-align-last:justify] text-base sm:text-lg md:text-xl text-[#001738]/70 leading-relaxed mb-10 font-normal">
                    Skip relocation and administration hassles. We match early stage<br className="hidden md:block" />
                    European startups with the best engineering talent India has to offer.
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full max-w-md mx-auto">
                    <Link href="/startups" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-7 py-3.5 text-base font-bold bg-vibrant-blue text-white rounded-full shadow-lg shadow-vibrant-blue/20 hover:shadow-vibrant-blue/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                            Hire Talent <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>

                    <Link href="/students" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-7 py-3.5 text-base font-bold bg-vibrant-crimson text-white rounded-full shadow-lg shadow-vibrant-crimson/20 hover:shadow-vibrant-crimson/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                            Join as Student <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
