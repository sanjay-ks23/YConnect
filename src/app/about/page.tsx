import type { Metadata } from "next";
import Image from "next/image";
import { Globe2, HeartHandshake, Users, Target, Rocket, ShieldCheck, Building2, GraduationCap } from "lucide-react";
import { WaveDivider } from "@/components/ui/WaveDivider";

export const metadata: Metadata = {
    title: "About Us — YConnect | Bridging European Startups & Indian Engineers",
    description:
        "Meet the YConnect team. We connect early-stage European startups with India's top 5% engineering talent — saving up to 90% on hiring costs with direct, reliable contracts.",
    alternates: { canonical: "https://yconnect.info/about" },
    openGraph: {
        title: "About YConnect — Where Talent Meets Innovation",
        description:
            "We exist because world-class engineering talent should be accessible to every ambitious startup, without any barriers.",
        url: "https://yconnect.info/about",
    },
};



export default function AboutPage() {
    return (
        <div className="relative min-h-screen bg-white">
            {/* Hero */}
            <section className="min-h-[100dvh] pt-28 pb-20 lg:pt-36 lg:pb-28 relative z-10 flex flex-col justify-center items-center bg-gradient-to-b from-vibrant-blue/10 via-white to-white">
                <div className="container-superhi relative z-10 -mt-20">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="heading-hero mb-6">
                            Where Talent Meets{" "}
                            <span className="text-vibrant-blue font-display">Innovation</span>
                        </h1>
                        <div className="w-max max-w-full mx-auto text-justify [text-align-last:justify] text-base sm:text-lg md:text-xl text-[#001738]/70 leading-relaxed font-sans font-normal">
                            We exist because world class engineering talent should be accessible<br className="hidden md:block" />
                            to every ambitious early stage startup, without any barriers.
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
                            <h2 className="heading-section mb-6">
                                Why <span className="text-vibrant-blue font-display">YConnect ?</span>
                            </h2>
                            <p className="text-justify [text-justify:inter-word] text-base sm:text-lg md:text-xl text-[#001738]/70 leading-relaxed font-sans font-normal">
                                We built YConnect because European startups need affordable, top tier engineering talent, while Indian students deserve direct global opportunities. We focus on matching the right people and handling the contracts.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-vibrant-blue/5 p-8 rounded-[2.5rem] border border-vibrant-blue/10 flex flex-col items-center text-center gap-4">
                                <Building2 className="w-10 h-10 text-vibrant-blue" />
                                <h3 className="text-xl font-bold text-[#001738]">Up to 90%</h3>
                                <p className="text-center text-sm text-[#001738]/50 outline-none">Save on hiring cost</p>
                            </div>
                            <div className="bg-vibrant-blue/5 p-8 rounded-[2.5rem] border border-vibrant-blue/10 flex flex-col items-center text-center gap-4">
                                <GraduationCap className="w-10 h-10 text-vibrant-blue" />
                                <h3 className="text-xl font-bold text-[#001738]">Top 5%</h3>
                                <p className="text-center text-sm text-[#001738]/50 outline-none">Engineers from India</p>
                            </div>
                            <div className="bg-vibrant-blue/5 p-8 rounded-[2.5rem] border border-vibrant-blue/10 flex flex-col items-center text-center gap-4">
                                <ShieldCheck className="w-10 h-10 text-vibrant-blue" />
                                <h3 className="text-xl font-bold text-[#001738]">100% Reliable</h3>
                                <p className="text-center text-sm text-[#001738]/50 outline-none">Direct contracts</p>
                            </div>
                            <div className="bg-vibrant-blue/5 p-8 rounded-[2.5rem] border border-vibrant-blue/10 flex flex-col items-center text-center gap-4">
                                <Users className="w-10 h-10 text-vibrant-blue" />
                                <h3 className="text-xl font-bold text-[#001738]">3 Month Average</h3>
                                <p className="text-center text-sm text-[#001738]/50 outline-none">Typical project duration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-24 bg-white relative z-10">
                <div className="container-superhi">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-[#001738]">
                            Team
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Team Member 1 */}
                        <a
                            href="https://www.linkedin.com/in/sanjayks2317/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#F5F5F5] rounded-xl overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="w-full aspect-[4/5] relative overflow-hidden bg-gray-200">
                                <Image
                                    src="/images/Sanjay.jpg"
                                    alt="Sanjay — Founder and CTO of YConnect"
                                    width={400}
                                    height={500}
                                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4 sm:p-5">
                                <h3 className="text-base sm:text-lg font-bold text-[#001738] mb-0.5 leading-tight">Sanjay</h3>
                                <p className="text-xs sm:text-sm text-[#001738]/60 font-medium">Founder and CTO</p>
                            </div>
                        </a>

                        {/* Team Member 2 */}
                        <a
                            href="https://www.linkedin.com/in/dauren-oberhuber-3602a4330/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#F5F5F5] rounded-xl overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="w-full aspect-[4/5] relative overflow-hidden bg-gray-200">
                                <Image
                                    src="/images/Dauren_new.jpeg"
                                    alt="Dauren Oberhuber — Co-Founder and CFO of YConnect"
                                    width={400}
                                    height={500}
                                    className="w-full h-full object-cover scale-[1.55] object-center transition-all duration-300 group-hover:scale-[1.65]"
                                />
                            </div>
                            <div className="p-4 sm:p-5">
                                <h3 className="text-base sm:text-lg font-bold text-[#001738] mb-0.5 leading-tight">Dauren Oberhuber</h3>
                                <p className="text-xs sm:text-sm text-[#001738]/60 font-medium">Co-Founder and CFO</p>
                            </div>
                        </a>

                        {/* Team Member 3 */}
                        <a
                            href="https://www.linkedin.com/in/pavithranks/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#F5F5F5] rounded-xl overflow-hidden flex flex-col group transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <div className="w-full aspect-[4/5] relative overflow-hidden bg-gray-200">
                                <Image
                                    src="/images/pavithran_HD.jpeg"
                                    alt="Pavithran — Co-Founder of YConnect"
                                    width={400}
                                    height={500}
                                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4 sm:p-5">
                                <h3 className="text-base sm:text-lg font-bold text-[#001738] mb-0.5 leading-tight">Pavithran</h3>
                                <p className="text-xs sm:text-sm text-[#001738]/60 font-medium">Co-Founder</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
