"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const startupSteps = [
    {
        id: "s1",
        title: "Submit Requirements",
        description: "Tell us what role you need filled and your timeline. We'll start matching you with the right talent right away.",
    },
    {
        id: "s2",
        title: "Get Matched",
        description: "We hand pick a qualified student who genuinely fits your tech stack and the way your team works.",
    },
    {
        id: "s3",
        title: "Start Working",
        description: "Your match starts part time. We handle the contract and payments, so you can focus on the product.",
    }
];

const studentSteps = [
    {
        id: "st1",
        title: "Apply & Profile",
        description: "Create a simple profile that shows your skills and the projects you're proud of.",
    },
    {
        id: "st2",
        title: "Get Selected",
        description: "We match you with a startup that fits your stack, then you'll go through a short interview with honest feedback either way.",
    },
    {
        id: "st3",
        title: "Start Earning",
        description: "Work on real projects, build genuine experience, and get paid on a schedule that fits around your studies.",
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
        <section ref={triggerRef} className="relative h-auto md:h-[300vh] bg-[#FAF9F6] pb-24 md:pb-0 pt-16 md:pt-0">
            <div className="relative md:sticky md:top-0 h-auto md:h-screen w-full flex flex-col justify-center">
                
                <div className="relative z-20 w-[94%] max-w-[110rem] mx-auto px-4 md:px-8">
                    <div className="text-center mb-10 md:mb-16 flex flex-col items-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#001738] mb-4 md:mb-6 tracking-tight max-w-2xl px-2 z-50 mt-8 md:mt-0">
                            How It Works
                        </h2>
                        <p lang="en" className="text-justify [text-align-last:justify] [text-justify:inter-word] [text-wrap:balance] [hyphens:auto] text-lg sm:text-xl text-[#001738]/50 max-w-xl mx-auto mb-8 md:mb-10 leading-snug px-2 z-50">
                            A seamless bridge between Europe and India. We handle screening and payments so you can focus on building.
                        </p>

                        {/* Professional Toggle */}
                        <div className="relative bg-gray-100 p-1.5 rounded-full flex gap-1 border border-gray-200 z-50">
                            {["startups", "students"].map((mode) => (
                                <button
                                    key={mode}
                                    onClick={() => { setViewMode(mode as any); setActiveIndex(0); triggerRef.current?.scrollIntoView({ behavior: 'smooth' }); }}
                                    className={`relative px-6 sm:px-12 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-bold transition-all duration-500 z-10 ${viewMode === mode ? "text-white" : "text-[#001738]/50 hover:text-[#001738]"
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

                    <div className="relative z-10 bg-white border border-gray-100 rounded-[2rem] md:rounded-[4rem] p-6 sm:p-10 md:p-16 shadow-xl overflow-hidden mt-6 md:mt-0">
                        
                        {/* Mobile View: Stacked (Hidden on md and up) */}
                        <div className="flex md:hidden flex-col gap-6">
                            {steps.map((step, idx) => (
                                <div key={step.id} className="flex flex-col gap-3 relative p-6 bg-[#FAF9F6]/50 rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${viewMode === "startups" ? "bg-vibrant-blue" : "bg-vibrant-crimson"}`} />
                                    <h3 className="text-2xl font-display font-medium text-[#001738] ml-2">
                                        {idx + 1}. {step.title}
                                    </h3>
                                    <p lang="en" className="text-justify [text-align-last:justify] [text-justify:inter-word] [text-wrap:balance] [hyphens:auto] text-[#001738]/60 text-base leading-snug ml-2">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Desktop View: Interactive Timeline (Hidden on small screens) */}
                        <div className="hidden md:flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
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
                                            <motion.h3
                                                key={step.id}
                                                className={`relative origin-left ml-6 text-3xl md:text-4xl lg:text-5xl font-display font-medium transition-all duration-500 py-4 ${isActive
                                                    ? "text-[#001738] scale-100"
                                                    : "text-[#001738]/20 scale-[0.95]"
                                                    }`}
                                            >
                                                {step.title}
                                            </motion.h3>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Right Side: Active Step Description */}
                            <div className="flex-1 w-full relative min-h-[400px] flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`${viewMode}-${activeIndex}`}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -12 }}
                                        transition={{ duration: 0.4 }}
                                        className="w-full"
                                    >
                                        <p
                                            lang="en"
                                            className="text-justify [text-align-last:justify] [text-justify:inter-word] [text-wrap:balance] [hyphens:auto] text-[#001738]/50 text-2xl md:text-3xl font-medium leading-snug max-w-[550px] mx-auto"
                                        >
                                            {steps[activeIndex].description}
                                        </p>
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
