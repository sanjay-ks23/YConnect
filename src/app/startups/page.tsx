"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BadgeCheck, Coins, LayoutGrid, Zap, Clock, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StartupForm } from "@/components/forms/StartupForm";
import { FormModal } from "@/components/ui/FormModal";
import { GooeyButton } from "@/components/ui/GooeyButton";
import { HorizontalScrollSection } from "@/components/sections/HorizontalScrollSection";
import { CloudScenery } from "@/components/animations/CloudScenery";

const benefits = [
    {
        icon: Coins,
        title: "Cost-Effective",
        description: "Hire top talent at a fraction of local rates without compromising quality.",
        color: "bg-vibrant-teal",
        iconBg: "bg-white/50",
        iconColor: "text-vibrant-crimson",
    },
    {
        icon: BadgeCheck,
        title: "Vetted Talent",
        description: "Students from India's top engineering institutions — IITs, NITs, BITS, and more.",
        color: "bg-vibrant-yellow",
        iconBg: "bg-white/50",
        iconColor: "text-vibrant-orange-dark",
    },
    {
        icon: LayoutGrid,
        title: "Flexible Contracts",
        description: "3-month part-time engagements with option to extend. No long-term commitment.",
        color: "bg-vibrant-crimson",
        iconBg: "bg-white/40",
        iconColor: "text-vibrant-crimson",
    },
    {
        icon: Zap,
        title: "Fast Matching",
        description: "Get matched with the right student in days, not weeks.",
        color: "bg-lavender",
        iconBg: "bg-vibrant-blue/10",
        iconColor: "text-vibrant-blue",
    },
    {
        icon: Clock,
        title: "Full Coordination",
        description: "We handle contracts, payments, onboarding, and ongoing support.",
        color: "bg-vibrant-crimson/20",
        iconBg: "bg-vibrant-crimson/20",
        iconColor: "text-vibrant-crimson",
    },
    {
        icon: ShieldCheck,
        title: "Risk-Free",
        description: "Satisfaction guarantee — if the match doesn't work, we find a replacement.",
        color: "bg-vibrant-orange/15",
        iconBg: "bg-vibrant-orange/15",
        iconColor: "text-vibrant-orange-dark",
    },
];

const processSteps = [
    { step: "01", title: "Submit Requirements", description: "Tell us what you need — role, skills, timeline, and budget.", image: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Clipboard/3D/clipboard_3d.png", color: "bg-gradient-to-br from-blue-400 to-blue-600", shadowColor: "bg-blue-800" },
    { step: "02", title: "We Match", description: "Our team finds the perfect students for your project.", image: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Handshake/3D/handshake_3d.png", color: "bg-gradient-to-br from-emerald-400 to-emerald-600", shadowColor: "bg-emerald-800" },
    { step: "03", title: "You Select", description: "Interview matched candidates and choose your pick.", image: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Check%20mark%20button/3D/check_mark_button_3d.png".replace(/ /g, "%20"), color: "bg-gradient-to-br from-orange-400 to-orange-600", shadowColor: "bg-[#BF360C]" },
    { step: "04", title: "Work Begins", description: "Student starts working. We handle everything else.", image: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Rocket/3D/rocket_3d.png", color: "bg-gradient-to-br from-indigo-400 to-indigo-600", shadowColor: "bg-indigo-800" },
];

export default function StartupsPage() {
    const [formOpen, setFormOpen] = useState(false);

    return (
        <>
            {/* ===== Hero ===== */}
            <section className="min-h-screen pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden flex items-center">
                {/* 3D Hero Clouds */}
                <CloudScenery variant="hero" />

                <div className="container-superhi relative z-10">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto text-center">

                            <h1 className="heading-hero mb-8">
                                Hire exceptional talent,{" "}
                                <span className="text-vibrant-crimson font-display">affordably</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-foreground/50 leading-relaxed mb-12 max-w-2xl mx-auto">
                                Access India&apos;s brightest engineering students for your startup.
                                Flexible 3-month contracts, dedicated support, and seamless
                                cross-border collaboration.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <GooeyButton type="button" onClick={() => setFormOpen(true)} accentColor="#C70039" className="bg-white/40 backdrop-blur-3xl border border-white/60 shadow-lg text-[#001738] rounded-full px-8 py-3.5">
                                    Fill Out Questionnaire <ArrowRight className="w-4 h-4" />
                                </GooeyButton>
                                <Link href="/about" className="btn-pill-outline text-base px-10 py-4">
                                    Learn How It Works <ArrowUpRight className="w-4 h-4 btn-arrow" />
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ===== Benefits ===== */}
            <HorizontalScrollSection
                theme="crimson"
                title={<>Why startups <span className="font-display text-vibrant-crimson">choose us</span></>}
                subtitle="Everything you need to hire international talent, without the headaches"
                cards={benefits}
            />


            {/* ===== Process ====== */}
            <ProcessSection
                theme="crimson"
                badgeText="The Process"
                title={<>Four simple steps from <span className="font-display text-vibrant-crimson">requirements to working product</span></>}
                subtitle="We handle the heavy lifting so you can focus on building."
                steps={processSteps}
                onCtaClick={() => setFormOpen(true)}
            />

            {/* ===== CTA ===== */}
            <section className="section-spacing">
                <div className="container-superhi">
                    <ScrollReveal>
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="heading-section mb-6">
                                Ready to find your{" "}
                                <span className="font-display text-vibrant-crimson">next hire</span>?
                            </h2>
                            <p className="text-lg text-foreground/50 leading-relaxed mb-10">
                                It takes less than 3 minutes to submit your requirements. Our team
                                will match you with top student talent within 48 hours.
                            </p>
                            <GooeyButton type="button" onClick={() => setFormOpen(true)} accentColor="#C70039" className="bg-white/40 backdrop-blur-3xl border border-white/60 shadow-lg text-[#001738] rounded-full px-8 py-3.5">
                                Fill Out Questionnaire <ArrowRight className="w-4 h-4" />
                            </GooeyButton>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ===== Modal ===== */}
            <FormModal
                isOpen={formOpen}
                onClose={() => setFormOpen(false)}
                title="Startup Questionnaire"
                subtitle="Tell us about your hiring needs"
            >
                <StartupForm />
            </FormModal>
        </>
    );
}
