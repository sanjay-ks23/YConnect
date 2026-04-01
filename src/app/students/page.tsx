"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Globe, Wallet, Briefcase, CalendarCheck, Award, GraduationCap, ArrowUpRight } from "lucide-react";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { StudentForm } from "@/components/forms/StudentForm";
import { FormModal } from "@/components/ui/FormModal";
import { HorizontalScrollSection } from "@/components/sections/HorizontalScrollSection";
import { StackedGrid } from "@/components/sections/StackedGrid";
import { WaveDivider } from "@/components/ui/WaveDivider";

const benefits = [
    {
        icon: Globe,
        title: "European Startups",
        description: "Direct access to early-stage innovative startups across the Netherlands, Germany, France, and more.",
        color: "bg-vibrant-orange/15",
        iconBg: "bg-vibrant-orange/15",
        iconColor: "text-vibrant-orange-dark",
    },
    {
        icon: Wallet,
        title: "Paid Opportunities",
        description: "Every engagement is a paid role. Earn competitively while gaining international work experience.",
        color: "bg-vibrant-yellow",
        iconBg: "bg-white/50",
        iconColor: "text-vibrant-orange-dark",
    },
    {
        icon: Briefcase,
        title: "Gain Experience",
        description: "Build production software and products. Solve real challenges that go beyond toy projects.",
        color: "bg-vibrant-teal",
        iconBg: "bg-white/50",
        iconColor: "text-vibrant-green-dark",
    },
    {
        icon: CalendarCheck,
        title: "Flexible Work",
        description: "Part-time (15-20 hrs/week) roles that respect your university schedule and exams.",
        color: "bg-vibrant-crimson",
        iconBg: "bg-white/40",
        iconColor: "text-coral-red-dark",
    },
    {
        icon: Award,
        title: "International Exposure",
        description: "Learn how global startups operate, build your network, and showcase your talent to the world.",
        color: "bg-lavender",
        iconBg: "bg-vibrant-crimson/10",
        iconColor: "text-vibrant-crimson",
    },
];

const processSteps = [
    { step: "01", title: "Apply", description: "Submit your application and highlight your best projects and skills.", image: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Laptop/3D/laptop_3d.png", color: "bg-gradient-to-br from-pink-400 to-pink-600", shadowColor: "bg-pink-800" },
    { step: "02", title: "Profile Creation", description: "Create a detailed technical profile that founders will love to see.", image: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Pencil/3D/pencil_3d.png", color: "bg-gradient-to-br from-emerald-400 to-emerald-600", shadowColor: "bg-emerald-800" },
    { step: "03", title: "Matching", description: "We match you with startups looking for your specific engineering stack.", image: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Handshake/3D/handshake_3d.png", color: "bg-gradient-to-br from-orange-400 to-orange-600", shadowColor: "bg-[#BF360C]" },
    { step: "04", title: "Interview", description: "Meet the founders directly to discuss the role and project goals.", image: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Speech%20balloon/3D/speech_balloon_3d.png", color: "bg-gradient-to-br from-indigo-400 to-indigo-600", shadowColor: "bg-indigo-800" },
    { step: "05", title: "Work Begins", description: "Join the team and start building international-grade products.", image: "https://raw.githubusercontent.com/microsoft/fluentui-emoji/main/assets/Rocket/3D/rocket_3d.png", color: "bg-gradient-to-br from-pink-400 to-pink-600", shadowColor: "bg-pink-800" },
];

const countries = [
    { id: "nl", title: "Netherlands", image: "/images/destinations/netherlands_grid_1775029759032.png" },
    { id: "de", title: "Germany", image: "/images/destinations/germany_grid_1775029777210.png" },
    { id: "fr", title: "France", image: "/images/destinations/france_grid_1775029795354.png" },
    { id: "se", title: "Sweden", image: "/images/destinations/sweden_grid_1775029813502.png" },
    { id: "more", title: "Other EU Countries", bgImage: "/images/destinations/denmark_grid_1775029829651.png" },
];

export default function StudentsPage() {
    const [formOpen, setFormOpen] = useState(false);

    return (
        <div className="bg-white">
            {/* Hero */}
            <section className="min-h-[90vh] pt-36 pb-20 lg:pt-44 lg:pb-32 relative overflow-hidden flex items-center bg-gradient-to-b from-[#FADADD]/10 via-white to-white">
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-vibrant-crimson/5 rounded-full blur-3xl pointer-events-none" />
                <div className="container-superhi relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="heading-hero mb-8">
                            Work with the best{" "}
                            <span className="text-vibrant-crimson font-display italic">European startups</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-[#001738]/60 leading-relaxed mb-12 max-w-2xl mx-auto">
                            Join elite technical teams, earn in Euros, and build a global career
                            right from India. Pre-vetted roles for top-tier students.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                            <button onClick={() => setFormOpen(true)} className="px-10 py-4 bg-vibrant-crimson text-white rounded-full font-bold shadow-xl shadow-vibrant-crimson/20 hover:-translate-y-1 transition-all flex items-center gap-2">
                                Fill the questionnaire <ArrowRight className="w-5 h-5" />
                            </button>
                            <Link href="/about" className="px-10 py-4 bg-white border-2 border-gray-100 text-[#001738] rounded-full font-bold hover:bg-gray-50 transition-all flex items-center gap-2">
                                Learn More <ArrowUpRight className="w-5 h-5" />
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
                    theme="crimson"
                    title={<>Why students <span className="font-display text-vibrant-crimson">love us</span></>}
                    subtitle="Real projects, international exposure, and competitive pay — on your terms."
                    cards={benefits}
                    bgColor="bg-transparent"
                />
            </div>

            {/* Destinations transition */}
            <div className="bg-[#F6F4FB]">
                <WaveDivider variant={2} color="#FAF9F6" flip />
                <StackedGrid
                    title="European Hubs"
                    subtitle="Join startups from Europe's most vibrant tech ecosystems. From Amsterdam to Berlin."
                    items={countries}
                    theme="crimson"
                    bgColor="bg-transparent"
                />
            </div>

            {/* Process transition */}
            <div className="bg-[#F0F8EC]">
                <WaveDivider variant={3} color="#F0F8EC" />
                <ProcessSection
                    theme="crimson"
                    badgeText="The process"
                    bgColor="bg-transparent"
                    title={<>Five simple steps to <span className="font-display text-vibrant-crimson text-7xl">international work</span></>}
                    subtitle="We handle the complexity, you focus on the code."
                    steps={processSteps}
                    onCtaClick={() => setFormOpen(true)}
                />
            </div>

            {/* CTA */}
            <section className="py-32 bg-[#FAF9F6] relative">
                <div className="container-superhi">
                    <div className="bg-vibrant-crimson rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-vibrant-crimson/30">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                        <h2 className="text-4xl md:text-6xl font-display font-medium text-white mb-8">
                            Ready to join the pool?
                        </h2>
                        <p className="text-white/80 text-xl max-w-xl mx-auto mb-12 leading-relaxed">
                            Apply in minutes and get the chance to work with world-class European founders.
                        </p>
                        <button onClick={() => setFormOpen(true)} className="px-12 py-5 bg-white text-vibrant-crimson rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                            Fill Questionnaire
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal */}
            <FormModal
                isOpen={formOpen}
                onClose={() => setFormOpen(false)}
                title="Student Application"
                subtitle="Share your talent with European startups"
            >
                <StudentForm />
            </FormModal>
        </div>
    );
}
