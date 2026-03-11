"use client";

import { useRef, useState } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
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
        <section className="section-spacing relative">
            <div className="container-superhi relative z-10">
                <ScrollReveal variant="scale-in">
                    <div className="superhi-section bg-vibrant-yellow p-8 sm:p-12 lg:p-16">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
                            <div>
                                <h2 className="heading-section mb-2">What people say</h2>
                                <p className="text-foreground/40 text-sm lg:text-base">
                                    Trusted by startups and students across Europe and India
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => scroll("left")}
                                    disabled={!canScrollLeft}
                                    className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center hover:bg-white hover:shadow-md transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                                    aria-label="Scroll left"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => scroll("right")}
                                    disabled={!canScrollRight}
                                    className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center hover:bg-white hover:shadow-md transition-all disabled:opacity-25 disabled:cursor-not-allowed"
                                    aria-label="Scroll right"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Carousel */}
                        <div
                            ref={scrollRef}
                            onScroll={checkScroll}
                            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
                            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        >
                            {testimonials.map((t) => (
                                <div
                                    key={t.name}
                                    className="flex-shrink-0 w-[320px] sm:w-[380px] bg-white rounded-3xl p-8 lg:p-10 snap-start flex flex-col group card-hover"
                                >
                                    <Quote className="w-8 h-8 text-vibrant-yellow mb-5 group-hover:text-vibrant-orange transition-colors duration-300" />
                                    <p className="text-foreground/65 leading-relaxed flex-1 mb-8">
                                        &ldquo;{t.quote}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-3 pt-5 border-t border-border/20">
                                        <div className="w-11 h-11 rounded-full bg-lavender flex items-center justify-center">
                                            <span className="text-sm font-bold text-vibrant-blue">
                                                {t.name.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">{t.name}</p>
                                            <p className="text-xs text-foreground/45">
                                                {t.role} · {t.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
