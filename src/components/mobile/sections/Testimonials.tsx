"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonialPairs = [
    {
        id: "pair-1",
        startup: {
            quote: "YConnect made hiring simple and fast. They matched us with Sanjay within days, and he's been a genuine asset to our engineering team ever since. The entire process, from vetting to onboarding, was seamless.",
            name: "Mats van der Gulik",
            role: "Founder, Hyer Power",
            initials: "MG",
            tag: "STARTUP FOUNDER",
        },
        student: {
            quote: "YConnect matched me with Hyer Power, where I've been able to work on real-world engineering challenges. The support from YConnect made the entire process incredibly smooth.",
            name: "Sanjay",
            role: "Engineering Student",
            initials: "S",
            tag: "ENGINEERING STUDENT",
        }
    },
    {
        id: "pair-2",
        startup: {
            quote: "We hired Sathiyanarayanan as a CFD Engineering Intern through YConnect. He quickly adapted to our workflow and has been delivering outstanding results. YConnect's vetting process is truly top-notch.",
            name: "Founder Name",
            role: "Founder, Company Name",
            initials: "FN",
            tag: "STARTUP FOUNDER",
        },
        student: {
            quote: "YConnect helped me secure an internship as a CFD Engineering Intern at a European startup. Their guidance and support made the process smooth and helped me land an opportunity that perfectly aligns with my interests. I'm truly grateful to YConnect for helping me take this important step in my career.",
            name: "Sathiyanarayanan",
            role: "CFD Intern, Company Name",
            initials: "S",
            tag: "ENGINEERING STUDENT",
        }
    }
];

export function Testimonials() {
    return (
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-transparent">
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-[#001738] mb-6 md:mb-8 tracking-tight max-w-2xl px-2">
                        Testimonials
                    </h2>
                    <p className="text-center text-lg sm:text-xl text-[#001738]/50 max-w-xl mx-auto leading-relaxed px-2">
                        Straight from the founders who hired,<br />
                        and the students who got hired.
                    </p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-32 gap-x-12 xl:gap-x-24 w-full mx-auto">
                    {testimonialPairs.map((pair, idx) => (
                        <motion.div 
                            key={pair.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="flex flex-col relative w-full max-w-[850px] mx-auto"
                        >
                            {/* Startup Card (Top layer visually, but back in z-index) */}
                            <div className="relative z-0 w-[90%] md:w-[85%] bg-[#E8EDFB] rounded-[2rem] p-8 md:p-10 pb-16 md:pb-20 shadow-sm border border-vibrant-blue/10">
                                <Quote className="w-10 h-10 mb-6 text-vibrant-blue opacity-40" strokeWidth={2.5} />
                                <p
                                    lang="en"
                                    className="text-justify [text-align-last:justify] [text-justify:inter-word] [text-wrap:balance] [hyphens:auto] text-[#001738]/80 text-base sm:text-lg leading-relaxed mb-8"
                                >
                                    {pair.startup.quote}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 bg-vibrant-blue">
                                        {pair.startup.initials}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#001738] leading-tight">{pair.startup.name}</p>
                                        <p className="text-sm font-medium text-vibrant-blue">{pair.startup.role}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Student Card (Bottom layer visually, overlapping empty space of startup card) */}
                            <div className="relative z-10 -mt-12 md:-mt-16 ml-[10%] md:ml-[15%] w-[90%] md:w-[85%] bg-[#FDF2F4] rounded-[2rem] p-8 md:p-10 shadow-xl border border-vibrant-crimson/10">
                                <Quote className="w-10 h-10 mb-6 text-vibrant-crimson opacity-40" strokeWidth={2.5} />
                                <p
                                    lang="en"
                                    className="text-justify [text-align-last:justify] [text-justify:inter-word] [text-wrap:balance] [hyphens:auto] text-[#001738]/80 text-base sm:text-lg leading-relaxed mb-10"
                                >
                                    {pair.student.quote}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 bg-vibrant-crimson">
                                        {pair.student.initials}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-[#001738] leading-tight">{pair.student.name}</p>
                                        <p className="text-sm font-medium text-vibrant-crimson">{pair.student.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
