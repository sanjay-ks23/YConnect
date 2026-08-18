"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-x-hidden bg-gradient-to-b from-lavender via-white to-white pt-28 pb-16"
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-vibrant-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-vibrant-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-vibrant-orange/5 rounded-full blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="container-superhi relative z-10 flex flex-col items-center text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-center max-w-xl mx-auto mb-6 leading-[1.15] tracking-tight">
          <span className="text-[#001738] block">Connecting</span>
          <span className="text-vibrant-blue block mt-1">European Startups</span>
          <span className="text-vibrant-crimson block mt-1">with Indian Talent</span>
        </h1>

        <p className="mx-auto max-w-md text-base sm:text-lg text-[#001738]/70 leading-relaxed mb-8 text-center">
          Skip the relocation and administration hassle. We match early stage European startups with the best engineering talent India has to offer.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto">
          <Link href="/m/startups" className="w-full sm:w-auto">
            <button className="w-full px-7 py-3.5 text-base font-bold bg-vibrant-blue text-white rounded-full shadow-lg shadow-vibrant-blue/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              Hire Talent <ArrowRight className="w-4 h-4" />
            </button>
          </Link>

          <Link href="/m/students" className="w-full sm:w-auto">
            <button className="w-full px-7 py-3.5 text-base font-bold bg-vibrant-crimson text-white rounded-full shadow-lg shadow-vibrant-crimson/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              Join as Student <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
