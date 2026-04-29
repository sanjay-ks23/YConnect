"use client";

import { motion } from "framer-motion";
import { Globe2, Shield, HeartHandshake, Clock, Target, Headphones } from "lucide-react";

const features = [
    {
        icon: Target,
        title: "Precise Matching",
        description: "We link you with highly elite talent, to fulfill all of your exact precise needs.",
        iconStyle: "text-blue-600",
        bgBadge: "bg-blue-50 border-blue-100",
    },
    {
        icon: Clock,
        title: "Fast Turnaround",
        description: "Get matched with highly vetted global talent in days. Start scaling your startup.",
        iconStyle: "text-orange-600",
        bgBadge: "bg-orange-50 border-orange-100",
    },
    {
        icon: Globe2,
        title: "Cross-Border Made Easy",
        description: "We handle all complex foreign contracts, and totally secure your global payments.",
        iconStyle: "text-green-600",
        bgBadge: "bg-green-50 border-green-100",
    },
    {
        icon: Headphones,
        title: "Ongoing Communication",
        description: "Enjoy regular milestone check-ins today, and detailed tracking to ensure success.",
        iconStyle: "text-pink-600",
        bgBadge: "bg-pink-50 border-pink-100",
    },
    {
        icon: Shield,
        title: "Risk-Free Hiring",
        description: "Enjoy short-term flexible contracts. Hold absolutely zero commitments, risk-free.",
        iconStyle: "text-indigo-600",
        bgBadge: "bg-indigo-50 border-indigo-100",
    },
    {
        icon: HeartHandshake,
        title: "Full Support",
        description: "Receive elite, dedicated expert support from initial onboarding until the finish.",
        iconStyle: "text-sky-600",
        bgBadge: "bg-sky-50 border-sky-100",
    },
];

export function WhyChooseUs() {
    return (
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-transparent">
            <div className="container-superhi relative z-10">
                <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
                    <span className="text-xs md:text-sm font-bold text-vibrant-blue tracking-widest uppercase mb-4">
                        WHAT WE DO & THE BENEFITS
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#001738] mb-6 md:mb-8 tracking-tight max-w-2xl px-2">
                        Talent you can count on.
                    </h2>
                    <p className="text-justify [text-align-last:justify] text-base sm:text-lg text-[#001738]/50 max-w-xl mx-auto mb-8 leading-relaxed px-2">
                        Access incredible engineering talent without the usual cross-border hiring friction. Productive, reliable, and perfectly matched.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1400px] mx-auto relative z-10">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="relative bg-white border-2 border-gray-50 p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] flex flex-col sm:flex-row items-start gap-4 sm:gap-8 group hover:border-vibrant-blue/20 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            {/* Icon Container */}
                            <div className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-[1.25rem] sm:rounded-[1.5rem] ${feature.bgBadge} border-2 flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300`}>
                                <feature.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${feature.iconStyle}`} strokeWidth={2} />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col relative z-10">
                                <h3 className="text-2xl font-display font-medium text-[#001738] mb-3 tracking-tight">{feature.title}</h3>
                                <p className="text-justify [text-align-last:justify] text-[#001738]/50 leading-relaxed text-base lg:text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
