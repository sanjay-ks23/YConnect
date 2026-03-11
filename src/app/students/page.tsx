"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Globe, Wallet, Briefcase, CalendarCheck, Award, GraduationCap, Sparkles, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StudentForm } from "@/components/forms/StudentForm";
import { FormModal } from "@/components/ui/FormModal";
import { GooeyButton } from "@/components/ui/GooeyButton";
import { HorizontalScrollSection } from "@/components/sections/HorizontalScrollSection";
import { CloudScenery } from "@/components/animations/CloudScenery";

const benefits = [
    {
        icon: Globe,
        title: "International Exposure",
        description: "Work with innovative startups across 15+ European countries from the comfort of your campus.",
        color: "bg-vibrant-orange/15",
        iconBg: "bg-vibrant-orange/15",
        iconColor: "text-vibrant-orange-dark",
    },
    {
        icon: Wallet,
        title: "Paid Opportunities",
        description: "Get paid competitively for real project work. No unpaid internships.",
        color: "bg-vibrant-yellow",
        iconBg: "bg-white/50",
        iconColor: "text-vibrant-orange-dark",
    },
    {
        icon: Briefcase,
        title: "Real Experience",
        description: "Build production-grade products, not toy projects. Add real startup experience to your CV.",
        color: "bg-vibrant-teal",
        iconBg: "bg-white/50",
        iconColor: "text-vibrant-green-dark",
    },
    {
        icon: CalendarCheck,
        title: "Flexible Hours",
        description: "Work part-time (15-20 hrs/week) on your schedule. Balance studies and work easily.",
        color: "bg-vibrant-crimson",
        iconBg: "bg-white/40",
        iconColor: "text-coral-red-dark",
    },
    {
        icon: Award,
        title: "Career Growth",
        description: "Develop skills in demand by top tech companies. Many students get full-time offers.",
        color: "bg-lavender",
        iconBg: "bg-vibrant-blue/10",
        iconColor: "text-vibrant-blue",
    },
    {
        icon: GraduationCap,
        title: "Learn from the Best",
        description: "Work alongside experienced founders and CTOs who will mentor and guide you.",
        color: "bg-vibrant-green/20",
        iconBg: "bg-vibrant-green/20",
        iconColor: "text-vibrant-green-dark",
    },
];

const processSteps = [
    { step: "01", title: "Apply", description: "Create your profile and showcase your skills, projects, and availability.", image: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Laptop/3D/laptop_3d.png", color: "bg-gradient-to-br from-blue-400 to-blue-600", shadowColor: "bg-blue-800" },
    { step: "02", title: "Get Matched", description: "We match you with European startups looking for your exact skill set.", image: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Handshake/3D/handshake_3d.png", color: "bg-gradient-to-br from-emerald-400 to-emerald-600", shadowColor: "bg-emerald-800" },
    { step: "03", title: "Interview", description: "Meet the founders, learn about the project, and see if it's a fit.", image: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Speech%20balloon/3D/speech_balloon_3d.png".replace(/ /g, "%20"), color: "bg-gradient-to-br from-orange-400 to-orange-600", shadowColor: "bg-[#BF360C]" },
    { step: "04", title: "Get Selected", description: "Receive an offer, agree on terms, and start building real-world experience.", image: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/1st%20place%20medal/3D/1st_place_medal_3d.png".replace(/ /g, "%20"), color: "bg-gradient-to-br from-indigo-400 to-indigo-600", shadowColor: "bg-indigo-800" },
];

export default function StudentsPage() {
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
                                Launch your career with{" "}
                                <span className="text-gradient-orange font-display">European startups</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-foreground/50 leading-relaxed mb-12 max-w-2xl mx-auto">
                                Gain real-world experience, earn competitively, and work with
                                innovative startups — all while completing your degree.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <GooeyButton type="button" onClick={() => setFormOpen(true)} accentColor="#FF6D00" className="bg-white/40 backdrop-blur-3xl border border-white/60 shadow-lg text-[#001738] rounded-full px-8 py-3.5">
                                    Fill Out Application <ArrowRight className="w-4 h-4" />
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
                theme="orange"
                title={<>Why students <span className="font-display text-gradient-orange">love us</span></>}
                subtitle="Real projects, real pay, real growth — all on your schedule"
                cards={benefits}
            />


            {/* ===== Process ===== */}
            <ProcessSection
                theme="orange"
                badgeText="The Process"
                title={<>From application to <span className="font-display text-vibrant-orange-dark">your first real project in days</span></>}
                subtitle="We match you with exciting startups eager for your talent."
                steps={processSteps}
                onCtaClick={() => setFormOpen(true)}
            />

            {/* ===== CTA ===== */}
            <section className="section-spacing">
                <div className="container-superhi">
                    <ScrollReveal>
                        <div className="text-center max-w-2xl mx-auto">
                            <h2 className="heading-section mb-6">
                                Ready to start your{" "}
                                <span className="font-display text-gradient-orange">journey</span>?
                            </h2>
                            <p className="text-lg text-foreground/50 leading-relaxed mb-10">
                                Apply in under 3 minutes. We&apos;ll review your profile and match
                                you with exciting startup opportunities within 48 hours.
                            </p>
                            <GooeyButton type="button" onClick={() => setFormOpen(true)} accentColor="#FF6D00" className="bg-white/40 backdrop-blur-3xl border border-white/60 shadow-lg text-[#001738] rounded-full px-8 py-3.5">
                                Fill Out Application <ArrowRight className="w-4 h-4" />
                            </GooeyButton>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ===== Modal ===== */}
            <FormModal
                isOpen={formOpen}
                onClose={() => setFormOpen(false)}
                title="Student Application"
                subtitle="Tell us about yourself and your skills"
            >
                <StudentForm />
            </FormModal>
        </>
    );
}
