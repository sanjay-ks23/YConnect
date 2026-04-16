"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BadgeCheck, Coins, LayoutGrid, Zap, Clock, ShieldCheck, ArrowUpRight, Users, TrendingDown, CheckCircle2, Award, FileText, Handshake, CheckSquare, FileSignature, Rocket, TrendingUp } from "lucide-react";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StartupForm } from "@/components/forms/StartupForm";
import { FormModal } from "@/components/ui/FormModal";
import { HorizontalScrollSection } from "@/components/sections/HorizontalScrollSection";
import { StackedGrid } from "@/components/sections/StackedGrid";
import { WaveDivider } from "@/components/ui/WaveDivider";

const benefits = [
    {
        icon: Users,
        title: "Why Hire Students",
        description: "Access highly motivated, tech-savvy students from the world's premier engineering institutions.",
        color: "bg-vibrant-blue/10",
        iconBg: "bg-white/50",
        iconColor: "text-vibrant-blue",
    },
    {
        icon: TrendingDown,
        title: "Cost Savings",
        description: "Reduce your operational costs by over 70% compared to local European hiring.",
        color: "bg-vibrant-green/10",
        iconBg: "bg-white/50",
        iconColor: "text-vibrant-green-dark",
    },
    {
        icon: Zap,
        title: "Flexible Hiring",
        description: "Scale your team up or down with ease. 3-month engagements with simple extension options.",
        color: "bg-vibrant-yellow/40",
        iconBg: "bg-white/50",
        iconColor: "text-vibrant-orange-dark",
    },
    {
        icon: CheckCircle2,
        title: "Easy Process",
        description: "We handle all contracts, payments, and legalities. You just focus on the interview.",
        color: "bg-vibrant-teal/30",
        iconBg: "bg-white/50",
        iconColor: "text-vibrant-green-dark",
    },
    {
        icon: Award,
        title: "Talent Quality",
        description: "Every student is vetted for technical excellence and communication skills.",
        color: "bg-lavender",
        iconBg: "bg-vibrant-blue/10",
        iconColor: "text-vibrant-blue",
    },
];

const processSteps = [
    { step: "01", title: "Submit Requirements", description: "Define the role, skills needed, and project scope in minutes.", icon: FileText, color: "bg-gradient-to-br from-indigo-400 to-indigo-600", shadowColor: "bg-indigo-800" },
    { step: "02", title: "Matching", description: "Get a curated shortlist of pre-vetted candidates matched to your stack.", icon: Handshake, color: "bg-gradient-to-br from-blue-400 to-blue-600", shadowColor: "bg-blue-800" },
    { step: "03", title: "Selection", description: "Interview your top choices and select the talent that fits your team.", icon: CheckSquare, color: "bg-gradient-to-br from-cyan-400 to-cyan-600", shadowColor: "bg-cyan-800" },
    { step: "04", title: "Contract", description: "We handle all the legal and administrative paperwork instantly.", icon: FileSignature, color: "bg-gradient-to-br from-vibrant-blue to-blue-700", shadowColor: "bg-blue-900" },
    { step: "05", title: "Work Begins", description: "Onboard your new team member and start building your product.", icon: Rocket, color: "bg-gradient-to-br from-indigo-500 to-blue-600", shadowColor: "bg-blue-800" },
    { step: "06", title: "Extension", description: "Easily extend the contract or hire full-time as your needs grow.", icon: TrendingUp, color: "bg-gradient-to-br from-purple-400 to-purple-600", shadowColor: "bg-purple-800" },
];

const talentPool = [
    { id: "eng", title: "Engineering", image: "/images/talents/engineering.jpg" },
    { id: "sw", title: "Software Developers", image: "/images/talents/software.jpg" },
    { id: "des", title: "Designers", image: "/images/talents/designers.jpg" },
    { id: "tech", title: "Technical Pool", image: "/images/talents/talent pool.jpg" },
    { id: "more", title: "And many more...", bgImage: "/images/destinations/universities_grid_1775029924897.png" },
];

export default function StartupsPage() {
    const [formOpen, setFormOpen] = useState(false);

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="min-h-[90vh] pt-36 pb-20 lg:pt-44 lg:pb-32 relative overflow-hidden flex items-center bg-gradient-to-b from-lavender/40 via-white to-white">
                <div className="absolute top-20 right-10 w-96 h-96 bg-vibrant-blue/5 rounded-full blur-3xl pointer-events-none" />
                <div className="container-superhi relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="heading-hero mb-8">
                            Scale your tech team with{" "}
                            <span className="text-vibrant-blue font-display">top international talent</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-[#001738]/60 leading-relaxed mb-12 max-w-2xl mx-auto">
                            Access pre-vetted engineering talent, reduce costs, and accelerate
                            your product roadmap without the overhead of local hiring.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                            <button onClick={() => setFormOpen(true)} className="px-10 py-4 bg-vibrant-blue text-white rounded-full font-bold shadow-xl shadow-vibrant-blue/20 hover:-translate-y-1 transition-all flex items-center gap-2">
                                Submit Requirements <ArrowRight className="w-5 h-5" />
                            </button>
                            <Link href="/about" className="px-10 py-4 bg-white border-2 border-gray-100 text-[#001738] rounded-full font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                                How It Works <ArrowUpRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="h-24 bg-white" />

            {/* Benefits transition */}
            <div className="bg-[#FAF9F6]">
                <WaveDivider variant={1} color="#FAF9F6" />
                <HorizontalScrollSection
                    theme="blue"
                    title={<>Why founders <span className="font-display text-vibrant-blue">choose us</span></>}
                    subtitle="Elite engineering talent at a fraction of the cost, handled entirely by us."
                    cards={benefits}
                    bgColor="bg-transparent"
                />
            </div>

            {/* Talent Pool transition */}
            <div className="bg-[#F6F4FB]">
                <WaveDivider variant={2} color="#FAF9F6" flip />
                <StackedGrid
                    title="Elite Talent Pool"
                    subtitle="Connect with the top 1% of engineering talent from the world's premier technical universities."
                    items={talentPool}
                    theme="blue"
                    bgColor="bg-transparent"
                />
            </div>

            {/* Process transition */}
            <div className="bg-[#F0F8EC]">
                <WaveDivider variant={3} color="#F0F8EC" />
                <ProcessSection
                    theme="blue"
                    badgeText="The process"
                    bgColor="bg-transparent"
                    title={<>The straightforward path to <span className="font-display text-vibrant-blue text-7xl">scaling fast</span></>}
                    subtitle="We streamline the entire hiring lifecycle for European startups."
                    steps={processSteps}
                    onCtaClick={() => setFormOpen(true)}
                />
            </div>

            {/* CTA */}
            <section className="py-32 bg-[#FAF9F6] relative">
                <div className="container-superhi">
                    <div className="bg-vibrant-blue rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-vibrant-blue/30">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                        <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-8">
                            Ready to hire?
                        </h2>
                        <p className="text-white/80 text-xl max-w-xl mx-auto mb-12 leading-relaxed">
                            Share your requirements and see your first candidate profiles within 24 hours.
                        </p>
                        <button onClick={() => setFormOpen(true)} className="px-12 py-5 bg-white text-vibrant-blue rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                            Submit Requirements
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <FormModal
                isOpen={formOpen}
                onClose={() => setFormOpen(false)}
                title="Hire International Talent"
                subtitle="Tell us about the role and skills you need"
            >
                <StartupForm />
            </FormModal>
        </div>
    );
}
