"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

const testimonialPairs = [
  {
    id: "pair-1",
    startup: {
      quote: "YConnect made hiring simple and fast. They matched us with Sanjay within days, and he's been a genuine asset to our engineering team ever since. The entire process, from screening to onboarding, was seamless.",
      name: "Mats van der Gulik",
      role: "Founder, Hyer Power",
      logo: "/images/logos/hyer-power-icon.svg",
      initials: "MG",
      tag: "Startup Founder",
    },
    student: {
      quote: "YConnect matched me with Hyer Power, where I've been able to work on real-world engineering challenges. The support from YConnect made the entire process incredibly smooth.",
      name: "Sanjay",
      role: "Engineering Student",
      initials: "S",
      tag: "Engineering Student",
    }
  },
  {
    id: "pair-2",
    startup: {
      quote: "We hired Sathiyanarayanan as a CFD Engineering Intern through YConnect. He quickly adapted to our workflow and has been delivering outstanding results. YConnect's selection process is truly top-notch.",
      name: "Federico van Eijnatten",
      role: "Founder, Stealth Startup TLV",
      logo: "/images/logos/stealth-startup-tlv.jpg",
      initials: "FE",
      tag: "Startup Founder",
    },
    student: {
      quote: "YConnect helped me secure an internship as a CFD Engineering Intern at a stealth startup in Tel Aviv. Their guidance and support made the process smooth and helped me land an opportunity that perfectly aligns with my interests. I'm truly grateful to YConnect for helping me take this important step in my career.",
      name: "Sathiyanarayanan",
      role: "CFD Intern, Stealth Startup TLV",
      initials: "S",
      tag: "Engineering Student",
    }
  }
];

export function Testimonials() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-transparent">
      <div className="container-superhi relative z-10">
        <div className="text-center mb-10 md:mb-16 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#001738] mb-3 md:mb-6 tracking-tight max-w-2xl px-2">
            Testimonials
          </h2>
          <p className="text-center text-base sm:text-xl text-[#001738]/60 max-w-md mx-auto mb-6 md:mb-10 leading-relaxed px-2">
            Straight from the founders who hired, and the students who got hired.
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full max-w-xl mx-auto">
          {testimonialPairs.map((pair) => (
            <div
              key={pair.id}
              className="flex flex-col gap-4 w-full"
            >
              {/* Startup Card */}
              <div className="w-full bg-[#E8EDFB] rounded-2xl p-6 sm:p-8 shadow-sm border border-vibrant-blue/10 flex flex-col transition-all duration-300 hover:shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-7 h-7 text-vibrant-blue opacity-50" strokeWidth={2.5} />
                  <span className="text-[11px] font-bold text-vibrant-blue uppercase tracking-wider bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-vibrant-blue/10">
                    {pair.startup.tag}
                  </span>
                </div>
                <p className="text-[#001738]/85 text-[15px] sm:text-base leading-relaxed mb-6 text-justify-clean">
                  {pair.startup.quote}
                </p>
                <div className="flex items-center gap-3 mt-auto pt-2 border-t border-vibrant-blue/10">
                  {pair.startup.logo ? (
                    <div className="w-10 h-10 rounded-full flex items-center justify-center p-1.5 flex-shrink-0 bg-white shadow-sm border border-vibrant-blue/15 overflow-hidden">
                      <Image
                        src={pair.startup.logo}
                        alt={pair.startup.role}
                        width={36}
                        height={36}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0 bg-vibrant-blue shadow-sm">
                      {pair.startup.initials}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-sm text-[#001738] leading-tight">{pair.startup.name}</p>
                    <p className="text-xs font-medium text-vibrant-blue">{pair.startup.role}</p>
                  </div>
                </div>
              </div>

              {/* Student Card */}
              <div className="w-full bg-[#FDF2F4] rounded-2xl p-6 sm:p-8 shadow-sm border border-vibrant-crimson/10 flex flex-col transition-all duration-300 hover:shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-7 h-7 text-vibrant-crimson opacity-50" strokeWidth={2.5} />
                  <span className="text-[11px] font-bold text-vibrant-crimson uppercase tracking-wider bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full border border-vibrant-crimson/10">
                    {pair.student.tag}
                  </span>
                </div>
                <p className="text-[#001738]/85 text-[15px] sm:text-base leading-relaxed mb-6 text-justify-clean">
                  {pair.student.quote}
                </p>
                <div className="flex items-center gap-3 mt-auto pt-2 border-t border-vibrant-crimson/10">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0 bg-vibrant-crimson shadow-sm">
                    {pair.student.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#001738] leading-tight">{pair.student.name}</p>
                    <p className="text-xs font-medium text-vibrant-crimson">{pair.student.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
