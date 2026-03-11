import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export function CTASection() {
    return (
        <section className="py-12 pb-16 overflow-hidden">
            <div className="container-superhi relative z-10">
                <ScrollReveal stagger={0.15}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* For Startups CTA */}
                        <div className="superhi-section bg-vibrant-blue p-8 sm:p-12 lg:p-14 flex flex-col justify-between min-h-[320px] group card-hover">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">🚀</span>
                                </div>
                                <h3 className="heading-card text-white mb-4">
                                    Ready to hire top talent?
                                </h3>
                                <p className="text-white/60 leading-relaxed mb-10 max-w-sm text-base lg:text-lg">
                                    Submit your requirements and get matched with the perfect
                                    student within days.
                                </p>
                            </div>
                            <Link
                                href="/startups"
                                className="btn-pill bg-white text-vibrant-blue-dark hover:bg-white/90 hover:shadow-xl self-start font-semibold"
                            >
                                Hire Talent <ArrowRight className="w-4 h-4 btn-arrow" />
                            </Link>
                        </div>

                        {/* For Students CTA */}
                        <div className="superhi-section bg-vibrant-teal p-8 sm:p-12 lg:p-14 flex flex-col justify-between min-h-[320px] group card-hover">
                            <div>
                                <div className="w-14 h-14 rounded-2xl bg-white/25 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-2xl">🎓</span>
                                </div>
                                <h3 className="heading-card text-foreground mb-4">
                                    Looking for real experience?
                                </h3>
                                <p className="text-foreground/55 leading-relaxed mb-10 max-w-sm text-base lg:text-lg">
                                    Join our talent pool and get matched with innovative European
                                    startups looking for your skills.
                                </p>
                            </div>
                            <Link
                                href="/students"
                                className="btn-pill-dark self-start font-semibold"
                            >
                                Join as Student <ArrowRight className="w-4 h-4 btn-arrow" />
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
