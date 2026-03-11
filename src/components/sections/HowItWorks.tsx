"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { CloudScenery } from "@/components/animations/CloudScenery";

const startupSteps = [
    {
        id: "s1",
        title: "Submit Requirements",
        description: "Tell us what role you need, skills required, and project duration. Our platform matches you with the top tier of Indian engineering talent instantly.",
        keywords: ["Job Profile", "Skill Gap", "Matching", "Requirement", "Tech Stack"]
    },
    {
        id: "s2",
        title: "Get Matched",
        description: "We hand-pick the perfect student talent from our curated pool. You get matched with highly vetted, motivated individuals perfectly suited to your tech stack.",
        keywords: ["Top Talent", "Vetted", "Pre-Screened", "Selection", "Engineering"]
    },
    {
        id: "s3",
        title: "Start Working",
        description: "Your matched student starts working part-time. We handle all contracts, payments, and timeline coordination so you can focus entirely on your core product.",
        keywords: ["Launch", "Scale", "Flexible", "Contract", "Success"]
    }
];

const studentSteps = [
    {
        id: "st1",
        title: "Apply & Profile",
        description: "Create your profile and showcase your skills to innovative European startups. Gain global visibility and real-world project opportunities.",
        keywords: ["Portfolio", "Skillset", "Visibility", "Apply", "Global"]
    },
    {
        id: "st2",
        title: "Get Selected",
        description: "Match with a startup that fits your tech stack and interests. Go through a streamlined selection process with direct feedback.",
        keywords: ["Matchmaking", "Selection", "Direct Hire", "Tech Fit", "Interview"]
    },
    {
        id: "st3",
        title: "Start Earning",
        description: "Work on real projects, gain international exposure, and get paid. Earn while you learn with flexible hours that fit your student schedule.",
        keywords: ["Paid Work", "Experience", "Career Growth", "Global Exposure", "Learn By Doing"]
    }
];

export function HowItWorks() {
    const [viewMode, setViewMode] = useState<"startups" | "students">("startups");
    const [activeIndex, setActiveIndex] = useState(0);
    const triggerRef = useRef<HTMLDivElement>(null);
    const steps = viewMode === "startups" ? startupSteps : studentSteps;

    const { scrollYProgress } = useScroll({
        target: triggerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.min(
            Math.floor(latest * steps.length),
            steps.length - 1
        );
        if (index !== activeIndex) {
            setActiveIndex(index);
        }
    });

    // Progress values for each individual pill
    const progress0 = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
    const progress1 = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
    const progress2 = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

    const progressValues = [progress0, progress1, progress2];

    return (
        <section ref={triggerRef} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center">
                {/* The white gradient fade from Hero */}
                <div className="absolute top-0 left-0 w-full h-[30vh] md:h-[40vh] bg-gradient-to-b from-white via-white/80 to-transparent pointer-events-none z-10" />

                {/* Background Scenery - Drifting Clouds (Pushed to Margins) */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-visible">
                    <CloudScenery
                        variant="scattered"
                        count={3}
                        customClouds={[
                            { src: "/clouds/cloud-xl-final.png", style: { top: "15%", left: "-15%", opacity: 0.6 }, className: "w-[500px] md:w-[700px] blur-[40px]" },
                            { src: "/clouds/puffy-clean-1.png", style: { bottom: "10%", right: "-12%", opacity: 0.5 }, className: "w-[550px] md:w-[750px] blur-[30px]" },
                            { src: "/clouds/cloud-xl-final.png", style: { top: "50%", right: "-5%", opacity: 0.3 }, className: "w-[400px] md:w-[600px] blur-[50px]" },
                        ]}
                    />
                </div>

                <div className="relative z-20 w-[94%] max-w-[110rem] mx-auto px-4 md:px-8">

                    {/* Header Area - Consistent with WhyChooseUs */}
                    <div className="text-center mb-16 flex flex-col items-center">
                        <span className="text-xs md:text-sm font-black text-[#0066FF] tracking-widest uppercase mb-4">
                            THE PROCESS
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium font-display text-[#001738] mb-6 tracking-tight max-w-2xl">
                            How It Works
                        </h2>
                        <p className="text-lg text-[#001738]/60 max-w-xl mx-auto mb-10 font-sans leading-relaxed">
                            A seamless bridge between Europe and India. We manage everything from vetting to payments, so you can focus on building.
                        </p>

                        {/* Professional Glassmorphic Toggle - Refined Pill Shape */}
                        <div className="relative bg-white/20 backdrop-blur-3xl p-1.5 rounded-full flex gap-1 border border-white/60 shadow-[0_8px_32px_rgba(0,23,56,0.05)]">
                            {["startups", "students"].map((mode) => (
                                <button
                                    key={mode}
                                    onClick={() => { setViewMode(mode as any); setActiveIndex(0); }}
                                    className={`relative px-12 py-3 rounded-full text-lg font-bold transition-all duration-500 z-10 ${viewMode === mode ? "text-white" : "text-[#001738]/60 hover:text-[#001738]"
                                        }`}
                                >
                                    <span className="relative z-20">
                                        {mode === "startups" ? "For Startups" : "For Students"}
                                    </span>
                                    {viewMode === mode && (
                                        <motion.div
                                            layoutId="toggle-pill"
                                            className="absolute inset-0 rounded-full shadow-[0_4px_15px_rgba(199,0,57,0.3)]"
                                            style={{
                                                backgroundColor: mode === "startups" ? "#C70039" : "#FF6D00",
                                            }}
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Clean Glassmorphic Container - No outer margin layers */}
                    <div className="relative z-10 bg-white/35 backdrop-blur-[40px] border-2 border-white/80 rounded-[3rem] md:rounded-[5rem] p-12 md:p-16 lg:p-20 shadow-[0_12px_60px_rgba(0,23,56,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] overflow-hidden mb-12">
                        {/* Inner glass sheen - strictly contained */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 pointer-events-none rounded-[3rem] md:rounded-[5rem]" />

                        <div className="flex flex-col relative">
                            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center relative">
                                {/* Left Side: Content */}
                                <div className="flex-1 flex flex-col justify-center relative pl-16 md:pl-20 w-full">

                                    {/* Vertical Progress Indicator Buttons - "Sand Clock" Style */}
                                    <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center justify-center gap-8">
                                        {steps.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className="w-5 h-32 bg-[#001738]/10 rounded-full relative overflow-hidden shadow-inner border border-white/20"
                                            >
                                                <motion.div
                                                    className="absolute top-0 left-0 w-full bg-[#001738] rounded-full"
                                                    style={{ height: "100%", originY: 0, scaleY: progressValues[idx] }}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="space-y-6 relative w-full">
                                        {steps.map((step, idx) => {
                                            const isActive = activeIndex === idx;
                                            return (
                                                <div key={step.id} className="relative origin-left ml-6">
                                                    <motion.h3
                                                        className={`text-3xl md:text-4xl lg:text-6xl font-display font-medium transition-all duration-500 py-4 ${isActive
                                                            ? "text-[#001738] scale-100"
                                                            : "text-[#001738]/30 scale-[0.95]"
                                                            }`}
                                                    >
                                                        {step.title}
                                                    </motion.h3>

                                                    <AnimatePresence>
                                                        {isActive && (
                                                            <motion.div
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: "auto" }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                                                className="overflow-hidden"
                                                            >
                                                                <p className="text-[#001738]/80 text-xl md:text-2xl lg:text-3xl mt-6 mb-8 leading-tight max-w-2xl font-sans">
                                                                    {step.description}
                                                                </p>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Right Side: Glassmorphic Keyword Blocks */}
                                <div className="flex-1 w-full relative min-h-[450px] lg:min-h-[700px] flex items-center justify-center">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`${viewMode}-${activeIndex}`}
                                            initial={{ opacity: 0, scale: 0.85, y: 30 }}
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 1.1, y: -30 }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            className="relative w-full h-full flex flex-wrap content-center justify-center gap-6 p-10"
                                        >
                                            {steps[activeIndex].keywords.map((keyword, kidx) => (
                                                <motion.div
                                                    key={keyword}
                                                    initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                                    transition={{
                                                        delay: kidx * 0.1,
                                                        duration: 0.6,
                                                        type: "spring",
                                                        stiffness: 120,
                                                        damping: 12
                                                    }}
                                                    whileHover={{ scale: 1.05, rotate: 1 }}
                                                    className="bg-gradient-to-br from-white/60 via-white/40 to-sky-100/30 backdrop-blur-3xl border-2 border-white/70 px-10 py-6 rounded-[3rem] shadow-[0_20px_50px_rgba(0,23,56,0.1)] hover:shadow-[0_25px_60px_rgba(0,23,56,0.15)] group transition-shadow"
                                                >
                                                    <span className="text-[#001738] text-2xl md:text-3xl lg:text-4xl font-bold font-display italic tracking-tight group-hover:text-[#0066FF] transition-colors">
                                                        {keyword}
                                                    </span>
                                                </motion.div>
                                            ))}

                                            {/* Floating decorative elements within the box for depth */}
                                            <motion.div
                                                animate={{ x: [-20, 20, -20], y: [0, -30, 0] }}
                                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                                className="absolute top-0 right-10 w-40 h-40 rounded-full bg-blue-300/20 blur-[80px]"
                                            />
                                            <motion.div
                                                animate={{ x: [20, -20, 20], y: [0, 30, 0] }}
                                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                                className="absolute bottom-0 left-10 w-56 h-56 rounded-full bg-purple-300/20 blur-[100px]"
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
