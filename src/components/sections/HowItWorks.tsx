"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

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

    const progress0 = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
    const progress1 = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
    const progress2 = useTransform(scrollYProgress, [0.66, 1], [0, 1]);
    const progressValues = [progress0, progress1, progress2];

    return (
        <section ref={triggerRef} className="relative h-[300vh] bg-white">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center">
                
                <div className="relative z-20 w-[94%] max-w-[110rem] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16 flex flex-col items-center">
                        <span className="text-xs md:text-sm font-bold text-vibrant-blue tracking-widest uppercase mb-4">
                            THE PROCESS
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#001738] mb-6 tracking-tight max-w-2xl">
                            How It Works
                        </h2>
                        <p className="text-lg text-[#001738]/50 max-w-xl mx-auto mb-10 leading-relaxed">
                            A seamless bridge between Europe and India. We manage everything from vetting to payments, so you can focus on building.
                        </p>

                        {/* Professional Toggle */}
                        <div className="relative bg-gray-100 p-1.5 rounded-full flex gap-1 border border-gray-200">
                            {["startups", "students"].map((mode) => (
                                <button
                                    key={mode}
                                    onClick={() => { setViewMode(mode as any); setActiveIndex(0); }}
                                    className={`relative px-12 py-3 rounded-full text-lg font-bold transition-all duration-500 z-10 ${viewMode === mode ? "text-white" : "text-[#001738]/50 hover:text-[#001738]"
                                        }`}
                                >
                                    <span className="relative z-20">
                                        {mode === "startups" ? "For Startups" : "For Students"}
                                    </span>
                                    {viewMode === mode && (
                                        <motion.div
                                            layoutId="toggle-pill"
                                            className={`absolute inset-0 rounded-full shadow-md ${
                                                mode === "startups" ? "bg-vibrant-blue" : "bg-vibrant-crimson"
                                            }`}
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 bg-white border border-gray-100 rounded-[3rem] md:rounded-[4rem] p-12 md:p-16 shadow-xl overflow-hidden">
                        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                            <div className="flex-1 flex flex-col justify-center relative pl-16 md:pl-20 w-full">
                                <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center justify-center gap-8">
                                    {steps.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className="w-2 h-32 bg-gray-100 rounded-full relative overflow-hidden"
                                        >
                                            <motion.div
                                                className={`absolute top-0 left-0 w-full rounded-full ${
                                                    viewMode === "startups" ? "bg-vibrant-blue" : "bg-vibrant-crimson"
                                                }`}
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
                                                    className={`text-3xl md:text-4xl lg:text-5xl font-display font-medium transition-all duration-500 py-4 ${isActive
                                                        ? "text-[#001738] scale-100"
                                                        : "text-[#001738]/20 scale-[0.95]"
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
                                                            className="overflow-hidden"
                                                        >
                                                            <p className="text-[#001738]/50 text-xl md:text-2xl mt-6 mb-8 leading-tight max-w-2xl">
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

                            {/* Right Side: Simple Keyword Blocks */}
                            <div className="flex-1 w-full relative min-h-[400px] flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`${viewMode}-${activeIndex}`}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.1 }}
                                        className="relative w-full h-full flex flex-wrap content-center justify-center gap-4"
                                    >
                                        {steps[activeIndex].keywords.map((keyword, kidx) => (
                                            <motion.div
                                                key={keyword}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: kidx * 0.05 }}
                                                className="bg-white border-2 border-gray-100 px-8 py-4 rounded-full shadow-sm"
                                            >
                                                <span className="text-[#001738] text-xl md:text-2xl font-display font-medium">
                                                    {keyword}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
