import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Globe2, Shield, HeartHandshake, Clock, Target, Headphones } from "lucide-react";
import { CloudScenery } from "@/components/animations/CloudScenery";
import Image from "next/image";

const features = [
    {
        icon: Target,
        title: "Precise Matching",
        description: "We carefully match startups with students based on skills, experience, and project needs.",
        iconStyle: "text-[#FFD600] drop-shadow-md",
        bgBadge: "bg-[#FFD600]/20 border-[#FFD600]/40",
    },
    {
        icon: Clock,
        title: "Fast Turnaround",
        description: "Get matched with talent within days, not weeks. Start your project quickly.",
        iconStyle: "text-[#FF6D00] drop-shadow-md",
        bgBadge: "bg-[#FF6D00]/20 border-[#FF6D00]/40",
    },
    {
        icon: Globe2,
        title: "Cross-Border Made Easy",
        description: "We handle all the complexity of international contracts, payments, and coordination.",
        iconStyle: "text-[#00C853] drop-shadow-md",
        bgBadge: "bg-[#00C853]/20 border-[#00C853]/40",
    },
    {
        icon: Headphones,
        title: "Ongoing Communication",
        description: "Regular check-ins and progress tracking to ensure everything runs smoothly.",
        iconStyle: "text-[#FF4081] drop-shadow-md",
        bgBadge: "bg-[#FF4081]/20 border-[#FF4081]/40",
    },
    {
        icon: Shield,
        title: "Risk-Free Hiring",
        description: "Short-term contracts with no long-term commitment. Try before you extend.",
        iconStyle: "text-[#2E31D1] drop-shadow-md",
        bgBadge: "bg-[#2E31D1]/20 border-[#2E31D1]/40",
    },
    {
        icon: HeartHandshake,
        title: "Full Support",
        description: "Dedicated support throughout the engagement — from onboarding to project completion.",
        iconStyle: "text-[#00B0FF] drop-shadow-md",
        bgBadge: "bg-[#00B0FF]/20 border-[#00B0FF]/40",
    },
];

export function WhyChooseUs() {
    return (
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-transparent via-[#8FD4FF]/30 to-transparent">
            {/* The giant ambient cloud overlapping the grid from the left, matching the reference image perfectly */}
            <div className="absolute top-[20%] -left-[10%] w-[500px] h-[300px] pointer-events-none z-20 opacity-90 hidden lg:block">
                <Image
                    src="/clouds/puffy-clean-1.png"
                    alt=""
                    fill
                    className="object-contain drop-shadow-2xl"
                />
            </div>

            <CloudScenery
                variant="scattered"
                customClouds={[
                    {
                        src: "/clouds/cloud-xl-final.png",
                        style: { bottom: "10%", right: "-5%", opacity: 0.7 },
                        className: "w-[400px] md:w-[600px] blur-sm",
                    },
                ]}
            />

            <div className="container-superhi relative z-10">
                <ScrollReveal>
                    <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
                        <span className="text-xs md:text-sm font-black text-[#0066FF] tracking-widest uppercase mb-4">
                            THE BENEFITS
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium font-display text-[#001738] mb-8 tracking-tight max-w-2xl">
                            Talent you can count on.
                        </h2>
                        <p className="text-lg text-[#001738]/60 max-w-xl mx-auto mb-8 font-sans leading-relaxed">
                            Access incredible engineering talent without the usual cross-border hiring friction. Productive, reliable, and perfectly matched.
                        </p>

                        <button className="bg-white/40 hover:bg-white/70 backdrop-blur-md transition-all duration-300 text-[#0066FF] font-bold px-8 py-3.5 rounded-full border border-white/60 shadow-sm hover:shadow-md">
                            Get Started
                        </button>
                    </div>
                </ScrollReveal>

                <ScrollReveal stagger={0.08}>
                    {/* 2-column layout matching the reference image's horizontal thick cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1200px] mx-auto relative z-10">
                        {features.map((feature, idx) => (
                            <div
                                key={feature.title}
                                className="relative bg-gradient-to-br from-white/60 via-white/40 to-sky-100/30 backdrop-blur-[40px] border-2 border-white/80 p-8 sm:p-10 rounded-[2.5rem] flex flex-col sm:flex-row items-start gap-6 sm:gap-8 group hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                suppressHydrationWarning
                                style={{
                                    boxShadow: '0 12px 40px rgba(0, 50, 150, 0.08), inset 0 2px 0px rgba(255, 255, 255, 1)'
                                }}
                            >
                                {/* Inner glossy sheen */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none rounded-[2.5rem]" />

                                {/* Icon Container - mimics the 3D icons from the reference */}
                                <div className={`flex-shrink-0 w-20 h-20 rounded-[1.5rem] ${feature.bgBadge} border-2 flex items-center justify-center shadow-inner relative z-10 group-hover:scale-105 transition-transform duration-300`}>
                                    <feature.icon className={`w-10 h-10 ${feature.iconStyle}`} strokeWidth={2.5} />
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col relative z-10">
                                    <h3 className="text-2xl font-medium text-[#001738] mb-3 tracking-tight">{feature.title}</h3>
                                    <p className="text-[#001738]/70 leading-relaxed font-sans text-base lg:text-lg">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
