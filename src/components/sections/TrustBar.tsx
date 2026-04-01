"use client";

import { motion } from "framer-motion";

const logos = [
    "TechCrunch",
    "Y Combinator",
    "Stripe",
    "Notion",
    "Figma",
    "Vercel",
    "Linear",
    "Spotify",
];

export function TrustBar() {
    return (
        <section className="py-12 bg-white border-y border-gray-50">
            <div className="container-superhi">
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <p className="text-center text-[10px] font-bold text-gray-400 mb-10 uppercase tracking-[0.3em]">
                        Trusted by industry leaders
                    </p>
                    <div className="flex items-center justify-center gap-8 sm:gap-16 lg:gap-24 flex-wrap opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                        {logos.map((logo) => (
                            <div
                                key={logo}
                                className="group cursor-default"
                            >
                                <span className="text-lg sm:text-xl font-display font-bold tracking-tight text-gray-900 group-hover:text-vibrant-blue transition-colors">
                                    {logo}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
