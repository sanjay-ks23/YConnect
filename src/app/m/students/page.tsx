"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Globe, Wallet, Briefcase, CalendarCheck, Award, ArrowUpRight, Laptop, UserCircle, Handshake, MessageSquare, Rocket } from "lucide-react";
import { ProcessSection } from "@/components/mobile/sections/ProcessSection";
import { StudentForm } from "@/components/mobile/forms/StudentForm";
import { FormModal } from "@/components/mobile/ui/FormModal";
import { HorizontalScrollSection } from "@/components/mobile/sections/HorizontalScrollSection";
import { WaveDivider } from "@/components/mobile/ui/WaveDivider";

const benefits = [
  {
    icon: Globe,
    title: "European Startups",
    description: "Work directly with innovative startups across the Netherlands, France, Belgium, and Germany.",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Wallet,
    title: "Paid Opportunities",
    description: "Every engagement is a fully paid role. Earn competitively while gaining valuable experience.",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Briefcase,
    title: "Real Experience",
    description: "Build production software and solve complex engineering challenges with real impact.",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Work",
    description: "Part-time or full-time roles matched to your schedule without affecting your studies.",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    icon: Award,
    title: "Global Exposure",
    description: "Learn how European startups operate, expand your network, and grow your tech career.",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Apply",
    description: "Submit your application with your best projects, GitHub repos, and technical skills.",
    icon: Laptop,
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
    shadowColor: "bg-pink-800"
  },
  {
    step: "02",
    title: "Profile Verification",
    description: "We review your background and build a curated profile that European founders love.",
    icon: UserCircle,
    color: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    shadowColor: "bg-emerald-800"
  },
  {
    step: "03",
    title: "Direct Matching",
    description: "We match you with startups looking for your exact tech stack and skill set.",
    icon: Handshake,
    color: "bg-gradient-to-br from-orange-400 to-orange-600",
    shadowColor: "bg-[#BF360C]"
  },
  {
    step: "04",
    title: "Founder Interview",
    description: "Meet the founders directly to discuss project goals, expectations, and culture.",
    icon: MessageSquare,
    color: "bg-gradient-to-br from-indigo-400 to-indigo-600",
    shadowColor: "bg-indigo-800"
  },
  {
    step: "05",
    title: "Start Building",
    description: "Join the team remotely, gain international experience, and get paid on time.",
    icon: Rocket,
    color: "bg-gradient-to-br from-pink-400 to-pink-600",
    shadowColor: "bg-pink-800"
  },
];

export default function StudentsPage() {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="min-h-[85vh] pt-28 pb-14 relative overflow-hidden flex items-center bg-gradient-to-b from-vibrant-crimson/10 via-white to-white">
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-vibrant-crimson/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-superhi relative z-10">
          <div className="max-w-lg mx-auto text-center flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl font-display font-medium text-center mb-5 leading-[1.2] tracking-tight">
              <span className="text-[#001738] block">Work with the best</span>
              <span className="text-vibrant-crimson block mt-1">European startups</span>
            </h1>
            <p className="max-w-sm mx-auto text-base sm:text-lg text-[#001738]/70 leading-relaxed mb-8 text-center">
              Join elite technical teams, earn in Euros, and build a global career.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto">
              <button
                onClick={() => setFormOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 bg-vibrant-crimson text-white rounded-full font-bold text-base shadow-lg shadow-vibrant-crimson/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                Apply as Student <ArrowRight className="w-4 h-4" />
              </button>
              <Link href="/m/about" className="w-full sm:w-auto">
                <button className="w-full px-7 py-3.5 bg-white border-2 border-gray-100 text-[#001738] rounded-full font-bold text-base hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                  Learn More <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <div className="bg-[#FAF9F6]">
        <WaveDivider variant={1} color="#FAF9F6" />
        <HorizontalScrollSection
          theme="crimson"
          title={
            <>
              Why students <span className="font-display text-vibrant-crimson">love us</span>
            </>
          }
          cards={benefits}
          bgColor="bg-transparent"
        />
      </div>

      {/* Process */}
      <div className="bg-[#F0F8EC]">
        <WaveDivider variant={3} color="#F0F8EC" />
        <ProcessSection
          theme="crimson"
          badgeText=""
          bgColor="bg-transparent"
          title={
            <>
              The <span className="font-display text-vibrant-crimson">Process</span>
            </>
          }
          subtitle={<>We help you find the right match. <br />You focus on writing great code.</>}
          subtitleClassName="max-w-[280px] text-right ml-auto mr-20 md:mr-24 lg:mr-32"
          steps={processSteps}
          onCtaClick={() => setFormOpen(true)}
        />
      </div>

      {/* CTA */}
      <div className="bg-[#FAF9F6]">
        <WaveDivider variant={2} color="#FAF9F6" flip />
        <section className="py-16 md:py-32 bg-[#FAF9F6] relative">
          <div className="container-superhi">
            <div className="bg-vibrant-crimson rounded-3xl md:rounded-[3rem] p-8 sm:p-14 md:p-20 text-center relative overflow-hidden shadow-xl shadow-vibrant-crimson/25">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-white mb-4">
                Ready to join?
              </h2>
              <p className="max-w-sm mx-auto text-white/80 text-base sm:text-lg mb-8 leading-relaxed text-center">
                Apply in minutes and work with great founders.
              </p>
              <button
                onClick={() => setFormOpen(true)}
                className="px-8 py-4 bg-white text-vibrant-crimson rounded-full font-bold text-base hover:scale-105 transition-transform shadow-lg"
              >
                Fill Questionnaire
              </button>
            </div>
          </div>
        </section>
      </div>

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
