"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";

const faqs = [
    {
        question: "How does the matching process work?",
        answer:
            "After a startup submits their requirements, our expert team reviews the project needs and identifies the best-matched students from our curated talent pool. We carefully consider technical skills, experience level, timezone compatibility, and project fit. The startup then interviews and selects the ideal candidates.",
    },
    {
        question: "What is the typical engagement duration?",
        answer:
            "Most engagements are 3-month part-time contracts (15-20 hours/week). However, startups can easily extend contracts based upon mutual agreement. We also offer highly flexible working arrangements for shorter, highly specialized, sprint-based, highly targeted pilot projects.",
    },
    {
        question: "How do you ensure quality of talent?",
        answer:
            "We source top students from the world's best engineering universities and conduct thorough vetting, including technical assessments, deep portfolio reviews, and soft-skills evaluations. Only the top 10% of all applicants make it into our highly exclusive, exceptionally well-vetted talent pool.",
    },
    {
        question: "Who handles contracts and payments?",
        answer:
            "YConnect takes care of absolutely everything — contracts, secure global payments, invoicing, and strict compliance. The startup pays us, and we ensure timely payments to students. No need to ever worry about your complex international payment and general compliance regulations.",
    },
    {
        question: "What if the match doesn't work out?",
        answer:
            "We always offer a 100% complete satisfaction guarantee. If a startup isn't perfectly happy with the match within the first two weeks, we will rapidly find a suitable replacement at no additional costs. Our global matching success rate is currently standing at well over 95% for every single one of our elite, world-class and innovative global startup partners across the world.",
    },
    {
        question: "Is there a fee for students to join?",
        answer:
            "No, YConnect is completely free for students. We charge a standard service fee to startups only. Our primary objective is to create truly incredible opportunities for highly talented engineering students across the entire world and within all our various world-class global partner ecosystems.",
    },
    {
        question: "Which countries do you operate in?",
        answer:
            "We actively work with modern startups across the European Union, with particular focus on the Netherlands, Denmark, France, and Sweden, plus several other EU countries. Our massive student talent pool covers all major global, elite, and international engineering institutions as well as all top-tier universities across the entire world.",
    },
];

export function FAQ() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-transparent">
            <div className="container-superhi relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-32 items-start px-4 md:px-8">
                    {/* Left Column: Context Header */}
                    <div className="lg:sticky lg:top-32 space-y-6">
                        <span className="text-xs md:text-sm font-bold text-vibrant-blue tracking-widest uppercase mb-4 block">
                            FAQ
                        </span>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-[#001738] tracking-tight leading-tight">
                            All the <span className="font-normal">details.</span>
                        </h2>
                        <p className="text-justify [text-align-last:justify] text-xl text-[#001738]/50 max-w-sm leading-relaxed">
                            Got a question? We can answer it.
                        </p>
                    </div>

                    {/* Right Column: High-Fidelity Accordion */}
                    <div className="w-full">
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <AccordionItem
                                        value={`item-${i}`}
                                        className="group relative bg-white/80 rounded-[2rem] border-2 border-white/60 mb-6 overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-vibrant-blue/30 data-[state=open]:shadow-xl"
                                    >
                                        <AccordionTrigger className="relative z-10 px-6 sm:px-8 py-6 sm:py-8 text-left text-base sm:text-xl font-semibold text-[#001738] tracking-tight hover:no-underline transition-all duration-300 [&[data-state=open]>div>svg]:rotate-[135deg] [&>svg]:hidden">
                                            <span className="pr-16 leading-tight">{faq.question}</span>
                                            <div className="absolute right-8 top-1/2 -translate-y-1/2 p-2 bg-[#001738]/5 rounded-full backdrop-blur-md border border-white/40 shadow-inner group-hover:bg-[#001738]/10 transition-colors">
                                                <Plus className="size-6 text-[#001738] transition-transform duration-500 ease-[0.16, 1, 0.3, 1]" />
                                            </div>
                                        </AccordionTrigger>

                                        <AccordionContent className="relative z-10 px-6 sm:px-8 pb-8 sm:pb-10 text-[#001738]/70 text-base sm:text-xl font-sans leading-relaxed">
                                            <div className="pt-4 w-full md:w-[475px] text-justify [text-align-last:justify]">
                                                {faq.answer}
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
