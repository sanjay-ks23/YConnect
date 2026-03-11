import type { Metadata } from "next";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";
import { CloudScenery } from "@/components/animations/CloudScenery";

export const metadata: Metadata = {
    title: "Contact — YConnect",
    description:
        "Get in touch with YConnect. We're here to help startups and students connect.",
};

const contactInfo = [
    {
        icon: Mail,
        title: "Email us",
        content: "hello@talentbridge.eu",
        description: "We respond within 24 hours",
    },
    {
        icon: MapPin,
        title: "Our office",
        content: "Amsterdam, Netherlands",
        description: "Operating across the EU",
    },
    {
        icon: Clock,
        title: "Working hours",
        content: "Mon–Fri, 9AM–6PM CET",
        description: "Available across timezones",
    },
];

export default function ContactPage() {
    return (
        <div className="relative min-h-screen" suppressHydrationWarning>
            <CloudScenery 
                variant="scattered"
                customClouds={[
                    { src: "/clouds/cloud-xl-final.png", style: { top: "5%", right: "-10%", opacity: 0.4 }, className: "w-[600px] blur-3xl" },
                    { src: "/clouds/puffy-clean-1.png", style: { bottom: "20%", left: "-5%", opacity: 0.3 }, className: "w-[500px] blur-2xl" },
                ]}
            />

            {/* Hero */}
            <section className="pt-40 pb-12 lg:pt-48 lg:pb-16 relative z-10">
                <div className="container-superhi">
                    <ScrollReveal>
                        <div className="max-w-3xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 rounded-full bg-vibrant-blue/10 border border-vibrant-blue/20 px-4 py-2 mb-6">
                                <span className="text-sm font-medium text-vibrant-blue">Get in Touch</span>
                            </span>
                            <h1 className="heading-hero mb-6">
                                Let&apos;s start a{" "}
                                <span className="text-vibrant-blue">conversation</span>
                            </h1>
                            <p className="text-lg md:text-xl text-[#001738]/60 leading-relaxed max-w-2xl mx-auto font-sans">
                                Whether you&apos;re a startup looking for talent or a student seeking
                                opportunities, we&apos;d love to hear from you.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="py-12 lg:pb-32 relative z-10">
                <div className="container-superhi">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                        {/* Contact Info Cards */}
                        <div className="lg:col-span-1 flex flex-col gap-6 lg:gap-8">
                            {contactInfo.map((info, i) => (
                                <ScrollReveal key={info.title} delay={i * 0.1}>
                                    <div className="bg-gradient-to-br from-white/60 via-white/40 to-sky-100/30 backdrop-blur-3xl border-2 border-white/80 p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(0,23,56,0.05)] h-full group transition-all duration-300 hover:-translate-y-1">
                                        <div className="w-12 h-12 rounded-xl bg-vibrant-blue/10 flex items-center justify-center mb-6 border border-vibrant-blue/20 shadow-inner">
                                            <info.icon className="w-6 h-6 text-vibrant-blue" />
                                        </div>
                                        <h3 className="text-xl font-display font-medium text-[#001738] mb-2">{info.title}</h3>
                                        <p className="text-[#001738] font-semibold text-lg">{info.content}</p>
                                        <p className="text-[#001738]/50 text-sm mt-2">{info.description}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2">
                            <ScrollReveal delay={0.2}>
                                <div className="bg-gradient-to-br from-white/60 via-white/40 to-sky-100/30 backdrop-blur-3xl border-2 border-white/80 p-8 sm:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,23,56,0.06)]">
                                    <h2 className="text-2xl md:text-3xl font-display font-medium text-[#001738] mb-8 tracking-tight">Send us a message</h2>
                                    <ContactForm />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
