import type { Metadata } from "next";
import { Globe2, HeartHandshake, Users, Target, Rocket, ShieldCheck, Building2, GraduationCap } from "lucide-react";
import { WaveDivider } from "@/components/ui/WaveDivider";

export const metadata: Metadata = {
    title: "About — YConnect",
    description:
        "Our journey in bridging the gap between European innovation and international engineering excellence.",
};

const supportStartups = [
    { title: "Vetted Talent", desc: <>Access the top 1% of pre-vetted<br className="block md:hidden" /> international<br className="hidden md:block" /> tech engineering<br className="block md:hidden" /> students and recent graduates.</> },
    { title: "Cost Efficiency", desc: <>Save up to 70% on your company's<br className="block md:hidden" /> core technical<br className="hidden md:block" /> operational and<br className="block md:hidden" /> complex infrastructure costs.</> },
    { title: "Full Coordination", desc: <>We handle all legal contracts,<br className="block md:hidden" /> global payments,<br className="hidden md:block" /> and all ongoing<br className="block md:hidden" /> daily administrative management.</> }
];

const supportStudents = [
    { title: "Paid Roles", desc: <>Every single engagement is a<br className="block md:hidden" /> highly rewarded,<br className="hidden md:block" /> fully paid<br className="block md:hidden" /> international tech engineering role.</> },
    { title: "Global Exposure", desc: <>Work directly with innovative<br className="block md:hidden" /> European startup<br className="hidden md:block" /> founders on real<br className="block md:hidden" /> production-grade tech products.</> },
    { title: "Flexible Work", desc: <>Part-time tech roles that perfectly<br className="block md:hidden" /> respect your<br className="hidden md:block" /> exams and your<br className="block md:hidden" /> rigorous academic study calendar.</> }
];

export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-44 pb-20 lg:pt-52 lg:pb-32 relative z-10 bg-gradient-to-b from-vibrant-blue/5 to-white">
                <div className="container-superhi relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-vibrant-blue/10 border border-vibrant-blue/20 px-4 py-2 mb-6 shadow-sm">
                            <span className="text-sm font-bold text-vibrant-blue uppercase tracking-widest">Our Mission</span>
                        </span>
                        <h1 className="heading-hero mb-8">
                            Bridging the gap between Europe and{" "}
                            <span className="text-vibrant-green font-display">The World</span>
                        </h1>
                        <div className="w-max max-w-full mx-auto text-justify [text-align-last:justify] text-xl md:text-2xl text-[#001738]/60 leading-relaxed font-sans">
                            At YConnect, we believe the<br className="block md:hidden" />
                            best technical talent should<br className="block md:hidden" /> be<br className="hidden md:block" />
                            accessible to innovative<br className="block md:hidden" />
                            startups, regardless of geography.
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision - Simplified Background */}
            <section className="py-24 bg-white relative z-10">
                <div className="container-superhi">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-vibrant-blue/5 border border-gray-100 flex flex-col items-start gap-6 group hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-vibrant-blue/10 flex items-center justify-center border border-vibrant-blue/10 group-hover:scale-110 transition-transform">
                                <Target className="w-8 h-8 text-vibrant-blue" />
                            </div>
                            <h2 className="text-3xl font-display font-medium text-[#001738]">Our Mission</h2>
                            <div className="w-max max-w-full text-justify [text-align-last:justify] text-lg text-[#001738]/60 leading-relaxed font-sans">
                                To bridge the crucial gap between European<br className="hidden md:block" />
                                innovation and top engineering excellence,<br className="hidden md:block" />
                                creating meaningful global opportunities<br className="hidden md:block" />
                                through a completely trust-based platform.
                            </div>
                        </div>
                        <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-vibrant-green/5 border border-gray-100 flex flex-col items-start gap-6 group hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 rounded-2xl bg-vibrant-green/10 flex items-center justify-center border border-vibrant-green/10 group-hover:scale-110 transition-transform">
                                <Rocket className="w-8 h-8 text-vibrant-green" />
                            </div>
                            <h2 className="text-3xl font-display font-medium text-[#001738]">Our Vision</h2>
                            <div className="w-max max-w-full text-justify [text-align-last:justify] text-lg text-[#001738]/60 leading-relaxed font-sans">
                                To create a world where local geography is<br className="hidden md:block" />
                                no barrier to finding the top tech talent.<br className="hidden md:block" />
                                We envision a future where every European<br className="hidden md:block" />
                                startup can access true global excellence.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Connecting Section - Simplified Background */}
            <section className="py-24 bg-white relative overflow-hidden z-10">
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(46,49,209,0.02),transparent_50%)]" />
                <div className="container-superhi relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="heading-section mb-8">
                                Connecting <span className="text-vibrant-blue">Europe</span> and <span className="text-vibrant-orange font-display">The World</span>
                            </h2>
                            <div className="space-y-6 text-lg text-[#001738]/70 leading-relaxed font-sans w-full lg:w-max">
                                <div className="w-full text-justify [text-align-last:justify]">
                                    YConnect acts as the vital<br className="block md:hidden" />
                                    connecting bridge between<br className="hidden md:block" /> two of<br className="block md:hidden" />
                                    the world's most vibrant tech<br className="block md:hidden" />
                                    ecosystems.<br className="hidden md:block" /> We completely handle<br className="block md:hidden" />
                                    all cross-border complexities,<br className="hidden md:block" /> so<br className="block md:hidden" />
                                    your team can focus on<br className="block md:hidden" />
                                    building core products.
                                </div>
                                <div className="w-full text-justify [text-align-last:justify]">
                                    As a trusted mediator, we manage<br className="block md:hidden" />
                                    the full lifecycle:<br className="hidden md:block" /> from sourcing<br className="block md:hidden" />
                                    and vetting top international<br className="block md:hidden" />
                                    talent<br className="hidden md:block" /> to handling complex contracts<br className="block md:hidden" />
                                    and global payments.<br className="hidden md:block" /> This ensures<br className="block md:hidden" />
                                    a truly risk-free hiring experience.
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-vibrant-blue/5 p-8 rounded-[2.5rem] border border-vibrant-blue/10 flex flex-col items-center text-center gap-4">
                                <Building2 className="w-10 h-10 text-vibrant-blue" />
                                <h3 className="text-xl font-bold text-[#001738]">45+ Startups</h3>
                                <p className="text-center text-sm text-[#001738]/50 outline-none">Partnered across the EU</p>
                            </div>
                            <div className="bg-vibrant-blue/5 p-8 rounded-[2.5rem] border border-vibrant-blue/10 flex flex-col items-center text-center gap-4">
                                <GraduationCap className="w-10 h-10 text-vibrant-blue" />
                                <h3 className="text-xl font-bold text-[#001738]">1500+ Pool</h3>
                                <p className="text-center text-sm text-[#001738]/50 outline-none">Pre-vetted Eng. Students</p>
                            </div>
                            <div className="bg-vibrant-blue/5 p-8 rounded-[2.5rem] border border-vibrant-blue/10 flex flex-col items-center text-center gap-4">
                                <ShieldCheck className="w-10 h-10 text-vibrant-blue" />
                                <h3 className="text-xl font-bold text-[#001738]">100% Reliable</h3>
                                <p className="text-center text-sm text-[#001738]/50 outline-none">Safe payment & contracts</p>
                            </div>
                            <div className="bg-vibrant-blue/5 p-8 rounded-[2.5rem] border border-vibrant-blue/10 flex flex-col items-center text-center gap-4">
                                <Users className="w-10 h-10 text-vibrant-blue" />
                                <h3 className="text-xl font-bold text-[#001738]">3-mo Average</h3>
                                <p className="text-center text-sm text-[#001738]/50 outline-none">Typical project duration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Support Sections - Simplified Background */}
            <section className="py-24 bg-white relative z-10">
                <div className="container-superhi">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Startups */}
                        <div className="bg-[#FAF9F6] p-12 rounded-[3.5rem] border border-gray-100 shadow-sm transition-all hover:bg-white hover:shadow-md">
                            <h3 className="text-3xl font-display font-medium text-[#001738] mb-8 flex items-center gap-3">
                                Supporting <span className="text-vibrant-blue">Startups</span>
                            </h3>
                            <div className="space-y-8 w-full xl:w-max">
                                {supportStartups.map((item) => (
                                    <div key={item.title} className="flex gap-5">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-vibrant-blue/10 flex-shrink-0 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-vibrant-blue" />
                                        </div>
                                        <div className="flex-1 w-full">
                                            <h4 className="text-xl font-bold text-[#001738] mb-1">{item.title}</h4>
                                            <div className="w-full text-justify [text-align-last:justify] text-[#001738]/60 leading-relaxed font-sans">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Students */}
                        <div className="bg-[#FAF9F6] p-12 rounded-[3.5rem] border border-gray-100 shadow-sm transition-all hover:bg-white hover:shadow-md">
                            <h3 className="text-3xl font-display font-medium text-[#001738] mb-8 flex items-center gap-3">
                                Supporting <span className="text-vibrant-crimson">Students</span>
                            </h3>
                            <div className="space-y-8 w-full xl:w-max">
                                {supportStudents.map((item) => (
                                    <div key={item.title} className="flex gap-5">
                                        <div className="mt-1 w-6 h-6 rounded-full bg-vibrant-crimson/10 flex-shrink-0 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-vibrant-crimson" />
                                        </div>
                                        <div className="flex-1 w-full">
                                            <h4 className="text-xl font-bold text-[#001738] mb-1">{item.title}</h4>
                                            <div className="w-full text-justify [text-align-last:justify] text-[#001738]/60 leading-relaxed font-sans">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
