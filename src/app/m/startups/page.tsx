"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Users, TrendingDown, Zap, CheckCircle2, Award, FileText, Handshake, CheckSquare, FileSignature, Rocket, TrendingUp } from "lucide-react";
import { ProcessSection } from "@/components/mobile/sections/ProcessSection";
import { StartupForm } from "@/components/mobile/forms/StartupForm";
import { FormModal } from "@/components/mobile/ui/FormModal";
import { HorizontalScrollSection } from "@/components/mobile/sections/HorizontalScrollSection";
import { StackedGrid } from "@/components/mobile/sections/StackedGrid";
import { WaveDivider } from "@/components/mobile/ui/WaveDivider";

const benefits = [
  {
    icon: Users,
    title: "Top Tier Talent",
    description: "Tap into India's brightest engineering minds from top technical universities.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: TrendingDown,
    title: "Massive Savings",
    description: "Cut your operational costs by up to 90% while keeping quality high.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Zap,
    title: "Flexible Scaling",
    description: "Scale your team up or down with 3 month contracts and easy extensions.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: CheckCircle2,
    title: "Easy Process",
    description: "Startups handle contracts directly. We help you find the right person.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: Award,
    title: "Talent Quality",
    description: "Every student is thoroughly assessed for both technical excellence and communication skills.",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Submit Requirements",
    description: "Define your exact role requirements and your project scope in minutes.",
    icon: FileText,
    color: "bg-gradient-to-br from-indigo-400 to-indigo-600",
    shadowColor: "bg-indigo-800"
  },
  {
    step: "02",
    title: "Matching",
    description: "Get a curated shortlist of vetted candidates matched to your tech stack.",
    icon: Handshake,
    color: "bg-gradient-to-br from-blue-400 to-blue-600",
    shadowColor: "bg-blue-800"
  },
  {
    step: "03",
    title: "Selection",
    description: "Interview your top candidate choices and select the best fit for your team.",
    icon: CheckSquare,
    color: "bg-gradient-to-br from-cyan-400 to-cyan-600",
    shadowColor: "bg-cyan-800"
  },
  {
    step: "04",
    title: "Contract",
    description: "You handle the contract directly with your chosen candidate.",
    icon: FileSignature,
    color: "bg-gradient-to-br from-vibrant-blue to-blue-700",
    shadowColor: "bg-blue-900"
  },
  {
    step: "05",
    title: "Work Begins",
    description: "Onboard your new remote team member and start building your core product.",
    icon: Rocket,
    color: "bg-gradient-to-br from-indigo-500 to-blue-600",
    shadowColor: "bg-blue-800"
  },
  {
    step: "06",
    title: "Extension",
    description: "Easily extend the engagement contract or hire full time as your needs grow.",
    icon: TrendingUp,
    color: "bg-gradient-to-br from-purple-400 to-purple-600",
    shadowColor: "bg-purple-800"
  },
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
      <section className="min-h-[85vh] pt-28 pb-14 relative overflow-hidden flex items-center bg-gradient-to-b from-vibrant-blue/10 via-white to-white">
        <div className="absolute top-20 right-10 w-96 h-96 bg-vibrant-blue/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-superhi relative z-10">
          <div className="max-w-lg mx-auto text-center flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl font-display font-medium text-center mb-5 leading-[1.2] tracking-tight">
              <span className="text-[#001738] block">Hire elite Indian</span>
              <span className="text-vibrant-blue block mt-1">technical talent</span>
            </h1>
            <p className="max-w-sm mx-auto text-base sm:text-lg text-[#001738]/70 leading-relaxed mb-8 text-center">
              We connect you with India's top 5% vetted engineering talent, saving you 90% on costs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto">
              <button
                onClick={() => setFormOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 bg-vibrant-blue text-white rounded-full font-bold text-base shadow-lg shadow-vibrant-blue/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                Submit Requirements <ArrowRight className="w-4 h-4" />
              </button>
              <Link href="/m/about" className="w-full sm:w-auto">
                <button className="w-full px-7 py-3.5 bg-white border-2 border-gray-100 text-[#001738] rounded-full font-bold text-base hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                  How It Works <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits transition */}
      <div className="bg-[#FAF9F6]">
        <WaveDivider variant={1} color="#FAF9F6" />
        <HorizontalScrollSection
          theme="blue"
          title={
            <>
              Why founders <span className="font-display text-vibrant-blue">choose us</span>
            </>
          }
          cards={benefits}
          bgColor="bg-transparent"
        />
      </div>

      {/* Talent Pool transition */}
      <div className="bg-[#F6F4FB]">
        <WaveDivider variant={2} color="#F6F4FB" flip />
        <StackedGrid
          title="Our Talent Network"
          subtitle="Connect with top 5% engineering talent from India's elite universities."
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
          badgeText=""
          bgColor="bg-transparent"
          title={
            <>
              The <span className="font-display text-vibrant-blue">Process</span>
            </>
          }
          subtitle="We streamline the hiring lifecycle so you focus on building products."
          steps={processSteps}
          onCtaClick={() => setFormOpen(true)}
        />
      </div>

      {/* CTA */}
      <div className="bg-[#FAF9F6]">
        <WaveDivider variant={2} color="#FAF9F6" flip />
        <section className="py-16 md:py-32 bg-[#FAF9F6] relative">
          <div className="container-superhi">
            <div className="bg-vibrant-blue rounded-3xl md:rounded-[3rem] p-8 sm:p-14 md:p-20 text-center relative overflow-hidden shadow-xl shadow-vibrant-blue/25">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-white mb-4">
                Ready to hire?
              </h2>
              <p className="max-w-sm mx-auto text-white/80 text-base sm:text-lg mb-8 leading-relaxed text-center">
                Share your requirements and see profiles in 24 hours.
              </p>
              <button
                onClick={() => setFormOpen(true)}
                className="px-8 py-4 bg-white text-vibrant-blue rounded-full font-bold text-base hover:scale-105 transition-transform shadow-lg"
              >
                Submit Requirements
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      <FormModal
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        title="Hire Indian Talent"
        subtitle="Tell us about the role and skills you need"
      >
        <StartupForm />
      </FormModal>
    </div>
  );
}
