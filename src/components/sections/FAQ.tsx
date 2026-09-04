"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";

const faqs: { question: string; plainAnswer: string; answer: React.ReactNode }[] = [
    {
        question: "How does the matching process work?",
        plainAnswer:
            "Startups submit their requirements, and we match them with qualified students from our talent pool based on technical skills and project fit. The startup then interviews and selects their preferred candidate.",
        answer:
            <>Startups <Link href="/startups" className="underline underline-offset-2 hover:text-vibrant-blue transition-colors">submit their requirements</Link>, and we match them with qualified students from our talent pool based on technical skills and project fit. The startup then interviews and selects their preferred candidate.</>,
    },
    {
        question: "What is the typical engagement duration?",
        plainAnswer:
            "Most engagements are 3-month part-time contracts at 15 to 20 hours per week. Contracts can be extended or adjusted based on mutual agreement and project needs.",
        answer:
            "Most engagements are 3-month part-time contracts at 15 to 20 hours per week. Contracts can be extended or adjusted based on mutual agreement and project needs.",
    },
    {
        question: "How do you ensure quality of talent?",
        plainAnswer:
            "We source students from top engineering universities and assess them through rigorous technical tests, projects, and interviews. Only the top 5% qualify.",
        answer:
            "We source students from top engineering universities and assess them through rigorous technical tests, projects, and interviews. Only the top 5% qualify.",
    },
    {
        question: "Who handles contracts and payments?",
        plainAnswer:
            "Startups handle contracts and payments directly with the student. YConnect focuses on matching, finding qualified talent and guiding both sides throughout.",
        answer:
            "Startups handle contracts and payments directly with the student. YConnect focuses on matching, finding qualified talent and guiding both sides throughout.",
    },
    {
        question: "What if the match doesn't work out?",
        plainAnswer:
            "We offer a satisfaction guarantee within the first two weeks. If the match isn't right, we'll find a replacement at no extra cost. Our matching success rate is over 95%.",
        answer:
            "We offer a satisfaction guarantee within the first two weeks. If the match isn't right, we'll find a replacement at no extra cost. Our matching success rate is over 95%.",
    },
    {
        question: "Is there a fee for students to join?",
        plainAnswer:
            "No, YConnect is completely free for students. We charge a service fee to startups only, so every student can focus on finding the right opportunity for them.",
        answer:
            <>No, YConnect is completely free for students. We charge a service fee to startups only, so every student can focus on <Link href="/students" className="underline underline-offset-2 hover:text-vibrant-crimson transition-colors">finding the right opportunity for them</Link>.</>,
    },
    {
        question: "Which countries do you operate in?",
        plainAnswer:
            "We work with startups across the EU, focusing on the Netherlands, France, Belgium, and Germany. We match them with top engineering talent across India remotely.",
        answer:
            "We work with startups across the EU, focusing on the Netherlands, France, Belgium, and Germany. We match them with top engineering talent across India remotely.",
    },
];

export function FAQ() {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden bg-transparent">
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqs.map((faq) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.plainAnswer,
                    },
                })),
            }} />
            <div className="container-superhi relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-32 items-start px-4 md:px-8">
                    {/* Left Column: Context Header */}
                    <div className="lg:sticky lg:top-32 space-y-6">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium text-[#001738] tracking-tight leading-tight">
                            FAQ
                        </h2>
                        <p className="text-left text-lg sm:text-xl text-[#001738]/70 max-w-xs leading-relaxed font-normal tracking-tight">
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

                                        <AccordionContent className="relative z-10 px-6 sm:px-8 pb-8 sm:pb-10 font-sans">
                                            <div lang="en" className="pt-4 w-full md:w-[475px] text-justify-clean text-[#001738]/80 text-base sm:text-lg leading-relaxed font-normal">
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
