import type { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Globe2, HeartHandshake, Users, Target } from "lucide-react";
import { CloudScenery } from "@/components/animations/CloudScenery";

export const metadata: Metadata = {
    title: "About — YConnect",
    description:
        "Learn about YConnect's mission to connect European startups with Indian engineering talent.",
};

const values = [
    {
        icon: Target,
        title: "Mission",
        description:
            "To bridge the gap between European innovation and Indian engineering excellence, creating opportunities for both startups and students.",
        color: "bg-vibrant-blue",
    },
    {
        icon: Globe2,
        title: "Vision",
        description:
            "A world where geography is no barrier to talent. Where every startup can access world-class engineers, and every student can access global opportunities.",
        color: "bg-vibrant-green",
    },
    {
        icon: HeartHandshake,
        title: "Values",
        description:
            "Transparency, quality, fairness, and mutual growth. We believe in creating genuine value for both startups and students.",
        color: "bg-vibrant-orange",
    },
    {
        icon: Users,
        title: "Community",
        description:
            "We're building a community of innovators and builders across continents. Together, we're shaping the future of work.",
        color: "bg-vibrant-yellow",
    },
];

const stats = [
    { value: "200+", label: "Startups Connected" },
    { value: "1,500+", label: "Students in Pool" },
    { value: "15+", label: "EU Countries" },
    { value: "95%", label: "Success Rate" },
    { value: "50+", label: "Universities" },
    { value: "3 mo", label: "Avg. Engagement" },
];

export default function AboutPage() {
    return (
        <div className="relative min-h-screen" suppressHydrationWarning>
            <CloudScenery 
                variant="scattered"
                customClouds={[
                    { src: "/clouds/cloud-xl-final.png", style: { top: "10%", left: "-10%", opacity: 0.4 }, className: "w-[600px] blur-3xl" },
                    { src: "/clouds/puffy-clean-1.png", style: { top: "40%", right: "-5%", opacity: 0.3 }, className: "w-[500px] blur-2xl" },
                ]}
            />

            {/* Hero */}
            <section className="pt-40 pb-12 lg:pt-48 lg:pb-20 relative z-10">
                <div className="container-superhi">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 rounded-full bg-vibrant-blue/10 border border-vibrant-blue/20 px-4 py-2 mb-6">
                                <span className="text-sm font-medium text-vibrant-blue">About Us</span>
                            </span>
                            <h1 className="heading-hero mb-6">
                                Connecting{" "}
                                <span className="text-vibrant-blue">Europe</span> and{" "}
                                <span className="text-vibrant-green">India</span>
                            </h1>
                            <p className="text-lg md:text-xl text-[#001738]/60 leading-relaxed max-w-2xl mx-auto font-sans">
                                YConnect was founded with a simple belief: the best talent
                                should be accessible regardless of geography. We connect
                                early-stage European startups with top engineering students from
                                India&apos;s premier institutions.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Story */}
            <section className="py-12 lg:py-20 relative z-10">
                <div className="container-superhi">
                    <ScrollReveal>
                        <div className="bg-gradient-to-br from-white/60 via-white/40 to-sky-100/30 backdrop-blur-3xl border-2 border-white/80 p-8 sm:p-12 lg:p-16 rounded-[3rem] shadow-[0_20px_50px_rgba(0,23,56,0.06)] overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                                <div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-[#001738] mb-8 tracking-tight">Our Story</h2>
                                    <div className="space-y-6 text-[#001738]/70 leading-relaxed font-sans text-lg">
                                        <p>
                                            Many early-stage startups in Europe need skilled technical
                                            talent but cannot afford full-time employees. At the same time,
                                            many highly talented engineering students in India are looking
                                            for real-world experience and flexible paid opportunities.
                                        </p>
                                        <p>
                                            We saw an opportunity to bridge this gap. YConnect acts as
                                            a mediator — carefully matching startups with students, handling
                                            all the complexity of contracts, payments, and coordination.
                                        </p>
                                        <p>
                                            Our typical engagement is a 3-month part-time role, with the
                                            possibility of extending into longer-term contracts. We handle
                                            everything so both parties can focus on what matters: building
                                            great products.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="aspect-square rounded-[2.5rem] bg-gradient-to-br from-vibrant-blue/10 via-vibrant-green/10 to-vibrant-orange/10 flex items-center justify-center border-2 border-white/60">
                                        <div className="relative w-48 h-48">
                                            <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-vibrant-blue/20 blur-xl" />
                                            <div className="absolute bottom-0 right-0 w-28 h-28 rounded-full bg-vibrant-green/20 blur-xl" />
                                            <div className="absolute top-1/2 left-1/2 -track-x-1/2 -translate-y-1/2">
                                                <HeartHandshake className="w-16 h-16 text-vibrant-blue" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Values */}
            <section className="py-12 lg:py-20 relative z-10">
                <div className="container-superhi">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-[#001738] text-center mb-16 tracking-tight">What drives us</h2>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                        {values.map((v, i) => (
                            <ScrollReveal key={v.title} delay={i * 0.1}>
                                <div className={`relative bg-gradient-to-br from-white/60 via-white/40 to-sky-100/30 backdrop-blur-3xl border-2 border-white/80 p-10 h-full rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,23,56,0.05)] group hover:-translate-y-1 transition-all duration-300`}>
                                    <div className={`w-16 h-16 rounded-2xl ${v.color} flex items-center justify-center mb-8 shadow-lg`}>
                                        <v.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-display font-medium text-[#001738] mb-4">{v.title}</h3>
                                    <p className="text-[#001738]/70 leading-relaxed font-sans text-lg">{v.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 lg:pt-20 pb-32 relative z-10">
                <div className="container-superhi">
                    <ScrollReveal>
                        <div className="bg-[#001738] p-12 sm:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-vibrant-blue/20 blur-[100px]" />
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-white text-center mb-16 tracking-tight relative z-10">By the numbers</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 relative z-10">
                                {stats.map((s) => (
                                    <div key={s.label} className="text-center">
                                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">{s.value}</div>
                                        <div className="text-sm font-semibold uppercase tracking-widest text-white/40">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
}
