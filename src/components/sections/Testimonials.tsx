"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Henrik Larsson",
        role: "CTO, NordicSaaS",
        location: "Stockholm, Sweden",
        quote:
            "YConnect connected us with an incredible React developer from IIT Bombay. The quality of work exceeded our expectations, and at a fraction of what we'd pay locally.",
    },
    {
        name: "Priya Sharma",
        role: "CS Student, IIT Delhi",
        location: "New Delhi, India",
        quote:
            "Working with a Danish fintech startup gave me real-world experience I could never get in a classroom. The flexible hours meant I could balance my studies perfectly.",
    },
    {
        name: "Klaus Weber",
        role: "Founder, AutomatDE",
        location: "Berlin, Germany",
        quote:
            "We've hired 3 students through YConnect now. The matching process is incredibly fast, and the platform handles all the international paperwork. Game changer.",
    },
    {
        name: "Ananya Patel",
        role: "Engineering Student, BITS Pilani",
        location: "Pilani, India",
        quote:
            "The international exposure and the chance to work on a real product was amazing. I learned more in 3 months than I did in a full semester. Plus, the pay was great!",
    },
    {
        name: "Marie Dupont",
        role: "Head of Product, FluxAI",
        location: "Paris, France",
        quote:
            "Finding ML talent is hard and expensive in Paris. YConnect introduced us to a brilliant student from IISc who built our entire recommendation engine.",
    },
];

export function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setCanScrollLeft(scrollLeft > 10);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const amount = direction === "left" ? -400 : 400;
        scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
        setTimeout(checkScroll, 400);
    };

    return (
        <section className="py-24 md:py-32 relative bg-white overflow-hidden">
            <div className="container-superhi relative z-10 px-4 md:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
                    <div className="space-y-4">
                        <span className="text-xs md:text-sm font-bold text-vibrant-blue tracking-widest uppercase block">
                            TESTIMONIALS
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#001738] tracking-tight">
                            Trusted by <span className="italic font-normal">visionaries.</span>
                        </h2>
                        <p className="text-lg text-[#001738]/50 max-w-md leading-relaxed">
                            Startups and students bridging the gap between Europe and India.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => scroll("left")}
                            disabled={!canScrollLeft}
                            className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:border-vibrant-blue hover:text-vibrant-blue transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            disabled={!canScrollRight}
                            className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:border-vibrant-blue hover:text-vibrant-blue transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-2"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex-shrink-0 w-[300px] sm:w-[400px] bg-white border border-gray-100 rounded-[2.5rem] p-10 snap-start flex flex-col group hover:border-vibrant-blue/20 hover:shadow-xl transition-all duration-500"
                        >
                            <Quote className="w-10 h-10 text-vibrant-blue/10 mb-8 group-hover:text-vibrant-blue/20 transition-colors duration-500" />
                            <p className="text-[#001738]/60 text-lg leading-relaxed flex-1 mb-10">
                                &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="flex items-center gap-4 pt-8 border-t border-gray-50">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                                    <span className="text-sm font-bold text-vibrant-blue">
                                        {t.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-bold text-[#001738]">{t.name}</p>
                                    <p className="text-sm text-gray-400">
                                        {t.role} · {t.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
