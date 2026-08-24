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
            "Startups submit their requirements, and we match them with qualified students from our talent pool based on technical skills and project fit. The startup then interviews and selects their preferred candidate.",
    },
    {
        question: "What is the typical engagement duration?",
        answer:
            "Most engagements are 3-month part-time contracts at 15 to 20 hours per week. Contracts can be extended or adjusted based on mutual agreement and project needs.",
    },
    {
        question: "How do you ensure quality of talent?",
        answer:
            "We source students from India's top engineering universities and assess them through technical assessments, portfolio reviews, and communication evaluations. Only the top 5% of applicants make it into our talent pool.",
    },
    {
        question: "Who handles contracts and payments?",
        answer:
            "Startups handle contracts and payments directly with the student. YConnect focuses on matching — we help you find the right talent and guide both sides through the process.",
    },
    {
        question: "What if the match doesn't work out?",
        answer:
            "We offer a satisfaction guarantee within the first two weeks. If the match isn't right, we'll find a replacement at no extra cost. Our matching success rate is over 95%.",
    },
    {
        question: "Is there a fee for students to join?",
        answer:
            "No, YConnect is completely free for students. We charge a service fee to startups only, so students can focus on finding the right opportunity.",
    },
    {
        question: "Which countries do you operate in?",
        answer:
            "We work with startups across the EU, with a focus on the Netherlands, Denmark, France, and Sweden. Our student talent pool spans top engineering universities across India.",
    },
];

export function FAQ() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-transparent">
            <div className="container-superhi relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-32 items-start px-4 md:px-8">
                    {/* Left Column: Context Header */}
                    <div className="lg:sticky lg:top-32 space-y-6">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-[#001738] tracking-tight leading-tight">
                            FAQ
                        </h2>
                        <p className="text-lg sm:text-xl text-[#001738]/50 max-w-sm leading-relaxed">
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
                                            <div lang="en" className="pt-4 w-full md:w-[475px] text-justify [text-align-last:justify] [text-justify:inter-word] [text-wrap:balance] [hyphens:auto]">
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
