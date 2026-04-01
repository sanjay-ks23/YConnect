"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
    return (
        <section className="py-24 pb-32 overflow-hidden bg-white">
            <div className="container-superhi relative z-10 px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* For Startups CTA */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-vibrant-blue p-10 sm:p-14 rounded-[2.5rem] flex flex-col justify-between min-h-[350px] group shadow-xl hover:shadow-2xl transition-all duration-500"
                    >
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                                <span className="text-3xl">🚀</span>
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-display font-medium text-white mb-6">
                                Ready to hire top talent?
                            </h3>
                            <p className="text-white/70 leading-relaxed mb-12 max-w-sm text-lg">
                                Submit your requirements and get matched with the perfect
                                student within days.
                            </p>
                        </div>
                        <Link
                            href="/startups"
                            className="inline-flex items-center gap-2 bg-white text-vibrant-blue-dark px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-sm self-start"
                        >
                            Hire Talent <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>

                    {/* For Students CTA */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 p-10 sm:p-14 rounded-[2.5rem] flex flex-col justify-between min-h-[350px] group shadow-xl hover:shadow-2xl transition-all duration-500"
                    >
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                                <span className="text-3xl">🎓</span>
                            </div>
                            <h3 className="text-3xl sm:text-4xl font-display font-medium text-white mb-6">
                                Looking for real experience?
                            </h3>
                            <p className="text-white/50 leading-relaxed mb-12 max-w-sm text-lg">
                                Join our talent pool and get matched with innovative European
                                startups looking for your skills.
                            </p>
                        </div>
                        <Link
                            href="/students"
                            className="inline-flex items-center gap-2 bg-vibrant-blue text-white px-8 py-4 rounded-full font-bold hover:bg-vibrant-blue-dark transition-colors shadow-sm self-start"
                        >
                            Join as Student <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
