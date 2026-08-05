import type { Metadata } from "next";
import { Globe2, HeartHandshake, Users, Target, Rocket, ShieldCheck, Building2, GraduationCap } from "lucide-react";
import { WaveDivider } from "@/components/mobile/ui/WaveDivider";

export const metadata: Metadata = {
 title: "About — YConnect",
 description:
 "Our journey in bridging the gap between European innovation and Indian engineering excellence.",
};

export default function AboutPage() {
 return (
 <div className="relative min-h-screen bg-white">
 {/* Hero */}
 <section className="pt-44 pb-20 lg:pt-52 lg:pb-32 relative z-10 bg-gradient-to-b from-vibrant-blue/5 to-white">
 <div className="container-superhi relative z-10">
 <div className="max-w-4xl mx-auto text-center">
 <h1 className="text-[1.75rem] sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-[-0.1em] leading-[0.98] mb-8">
 Where Talent Meets{" "}
 <span className="text-vibrant-green font-display">Innovation</span>
 </h1>
 <div className="max-w-full mx-auto text-xl md:text-2xl text-[#001738]/60 leading-relaxed font-sans text-justify [text-align-last:left] [hyphens:auto] [text-wrap:balance]">
 We exist because world class engineering talent should be accessible to every ambitious startup, without any barriers.
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
 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-[-0.1em] leading-[1.0] mb-8">
 Connecting <span className="text-vibrant-blue">Early Stage Startups</span> with <span className="text-vibrant-orange font-display">Indian Engineers</span>
 </h2>
 <div className="text-lg md:text-xl text-[#001738]/70 leading-relaxed font-sans w-full text-justify [text-align-last:left] [hyphens:auto] [text-wrap:balance]">
 We built YConnect because European startups need affordable, top tier engineering talent, while Indian students deserve direct global opportunities to gain exposure and experience. We handle administrative work such as vetting, contracts, and payments so you can focus on building your startups and your careers.
 </div>
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
 <p className="text-center text-sm text-[#001738]/50 outline-none">Safe payment & contracts</p>
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
 <img
 src="/images/Sanjay.jpg"
 alt="Sanjay"
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
 <img
 src="/images/Dauren.png"
 alt="Dauren Oberhuber"
 className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
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
 <img
 src="/images/pavithran_HD.jpeg"
 alt="Pavithran"
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
