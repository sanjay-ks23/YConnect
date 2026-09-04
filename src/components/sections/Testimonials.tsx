"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonialPairs = [
    {
        id: "pair-1",
        startup: {
            quote: "YConnect made hiring simple and extremely fast. They matched us with Sanjay within days, and he's been a great addition to our engineering team ever since. The whole process, from screening to onboarding, was perfect.",
            name: "Mats van der Gulik",
            role: "Founder, Hyer Power",
            logo: "/images/logos/hyer-power-icon.svg",
            initials: "MG",
            tag: "STARTUP FOUNDER",
        },
        student: {
            quote: "YConnect matched me with Hyer Power, where I've been able to work on real-world engineering challenges. The support from YConnect made the process incredibly smooth.",
            name: "Sanjay",
            role: "Engineering Student",
            initials: "S",
            tag: "ENGINEERING STUDENT",
        }
    },
    {
        id: "pair-2",
        startup: {
            quote: "We hired Sathiyanarayanan as a CFD Engineering Intern through YConnect. He quickly adapted to our specific workflow and has been consistently delivering solid results. YConnect's selection process was exceptionally good.",
            name: "Federico van Eijnatten",
            role: "Founder, Polar Cooling",
            logo: "/images/logos/stealth-startup-tlv.jpg",
            initials: "FE",
            tag: "STARTUP FOUNDER",
        },
        student: {
            quote: "YConnect helped me secure a great internship as a CFD Engineering Intern at Polar Cooling. Their support made the process smooth and helped me land an opportunity perfectly aligned with my interests. I'm so grateful to YConnect for helping me take this important step forward.",
            name: "Sathiyanarayanan",
            role: "CFD Intern, Polar Cooling",
            initials: "S",
            tag: "ENGINEERING STUDENT",
        }
    }
];

export function Testimonials() {
    return (
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-transparent">
            <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                <div className="text-center mb-12 lg:mb-16 flex flex-col items-center">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-[#001738] mb-6 tracking-tight max-w-2xl px-2">
                        Testimonials
                    </h2>
                    <p className="text-justify-clean text-lg sm:text-xl text-[#001738]/70 max-w-xl mx-auto leading-relaxed px-2 font-normal">
                        &nbsp;Straight from the founders who hired,<br />
                        &nbsp;and the students who got hired.
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
                            <blockquote cite="https://yconnect.info" className="relative z-0 w-[90%] md:w-[85%] bg-[#E8EDFB] rounded-[2rem] p-8 md:p-10 pb-16 md:pb-20 shadow-sm border border-vibrant-blue/10">
                                <Quote className="w-10 h-10 mb-6 text-vibrant-blue opacity-40" strokeWidth={2.5} />
                                <p
                                    lang="en"
                                    className="text-justify-clean text-[#001738]/80 text-base sm:text-lg leading-relaxed mb-8"
                                >
                                    {pair.startup.quote}
                                </p>
                                <footer className="flex items-center gap-4">
                                    {pair.startup.logo ? (
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center p-2 flex-shrink-0 bg-white shadow-sm border border-vibrant-blue/15 overflow-hidden">
                                            <Image
                                                src={pair.startup.logo}
                                                alt={`${pair.startup.role} logo`}
                                                width={44}
                                                height={44}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 bg-vibrant-blue">
                                            {pair.startup.initials}
                                        </div>
                                    )}
                                    <div>
                                        <cite className="font-semibold text-[#001738] leading-tight not-italic block">{pair.startup.name}</cite>
                                        <p className="text-sm font-medium text-vibrant-blue">{pair.startup.role}</p>
                                    </div>
                                </footer>
                            </blockquote>

                            {/* Student Card (Bottom layer visually, overlapping empty space of startup card) */}
                            <blockquote cite="https://yconnect.info" className="relative z-10 -mt-12 md:-mt-16 ml-[10%] md:ml-[15%] w-[90%] md:w-[85%] bg-[#FDF2F4] rounded-[2rem] p-8 md:p-10 shadow-xl border border-vibrant-crimson/10">
                                <Quote className="w-10 h-10 mb-6 text-vibrant-crimson opacity-40" strokeWidth={2.5} />
                                <p
                                    lang="en"
                                    className="text-justify-clean text-[#001738]/80 text-base sm:text-lg leading-relaxed mb-10"
                                >
                                    {pair.student.quote}
                                </p>
                                <footer className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 bg-vibrant-crimson">
                                        {pair.student.initials}
                                    </div>
                                    <div>
                                        <cite className="font-semibold text-[#001738] leading-tight not-italic block">{pair.student.name}</cite>
                                        <p className="text-sm font-medium text-vibrant-crimson">{pair.student.role}</p>
                                    </div>
                                </footer>
                            </blockquote>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
