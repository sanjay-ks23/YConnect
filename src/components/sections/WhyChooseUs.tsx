"use client";

import { motion } from "framer-motion";
import { Globe2, Shield, HeartHandshake, Clock, Target, Headphones } from "lucide-react";

const features = [
    {
        icon: Target,
        title: "Precise Matching",
        description: "We carefully match startups with students based on skills, experience, and project needs.",
        iconStyle: "text-blue-600",
        bgBadge: "bg-blue-50 border-blue-100",
    },
    {
        icon: Clock,
        title: "Fast Turnaround",
        description: "Get matched with talent within days, not weeks. Start your project quickly.",
        iconStyle: "text-orange-600",
        bgBadge: "bg-orange-50 border-orange-100",
    },
    {
        icon: Globe2,
        title: "Cross-Border Made Easy",
        description: "We handle all the complexity of international contracts, payments, and coordination.",
        iconStyle: "text-green-600",
        bgBadge: "bg-green-50 border-green-100",
    },
    {
        icon: Headphones,
        title: "Ongoing Communication",
        description: "Regular check-ins and progress tracking to ensure everything runs smoothly.",
        iconStyle: "text-pink-600",
        bgBadge: "bg-pink-50 border-pink-100",
    },
    {
        icon: Shield,
        title: "Risk-Free Hiring",
        description: "Short-term contracts with no long-term commitment. Try before you extend.",
        iconStyle: "text-indigo-600",
        bgBadge: "bg-indigo-50 border-indigo-100",
    },
    {
        icon: HeartHandshake,
        title: "Full Support",
        description: "Dedicated support throughout the engagement — from onboarding to project completion.",
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
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#001738] mb-8 tracking-tight max-w-2xl">
                        Talent you can count on.
                    </h2>
                    <p className="text-lg text-[#001738]/50 max-w-xl mx-auto mb-8 leading-relaxed">
                        Access incredible engineering talent without the usual cross-border hiring friction. Productive, reliable, and perfectly matched.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1200px] mx-auto relative z-10">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="relative bg-white border-2 border-gray-50 p-8 sm:p-10 rounded-[2.5rem] flex flex-col sm:flex-row items-start gap-6 sm:gap-8 group hover:border-vibrant-blue/20 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                            {/* Icon Container */}
                            <div className={`flex-shrink-0 w-20 h-20 rounded-[1.5rem] ${feature.bgBadge} border-2 flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-300`}>
                                <feature.icon className={`w-10 h-10 ${feature.iconStyle}`} strokeWidth={2} />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col relative z-10">
                                <h3 className="text-2xl font-display font-medium text-[#001738] mb-3 tracking-tight">{feature.title}</h3>
                                <p className="text-[#001738]/50 leading-relaxed text-base lg:text-lg">
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
