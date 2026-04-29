import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Building2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact — YConnect",
    description:
        "Get in touch with YConnect. We're here to help startups and students connect globally.",
};

export default function ContactPage() {
    return (
        <div className="relative min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-44 pb-20 lg:pt-52 lg:pb-32 relative z-10 bg-gradient-to-b from-vibrant-blue/10 to-white">
                <div className="container-superhi relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-vibrant-blue/10 border border-vibrant-blue/20 px-4 py-2 mb-6 shadow-sm">
                            <span className="text-sm font-bold text-vibrant-blue uppercase tracking-widest">Get In Touch</span>
                        </span>
                        <h1 className="heading-hero mb-8">
                            Let's build something <span className="text-vibrant-blue">extraordinary</span> together
                        </h1>
                        <div className="w-full md:w-max mx-auto text-left md:text-justify md:[text-align-last:justify] text-xl md:text-2xl text-[#001738]/60 leading-relaxed font-sans">
                            Whether you're a founder looking to scale or a student ready to<br className="hidden md:block" />
                            leap into the global tech world, we're here to bridge the gap.
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section - Simplified */}
            <section className="py-24 bg-white relative z-10">
                <div className="container-superhi">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                        {/* Sidebar: Contact Info */}
                        <div className="lg:col-span-1 space-y-10">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-display font-medium text-[#001738]">Reach Out</h2>
                                <div className="w-full md:w-max text-left md:text-justify md:[text-align-last:justify] text-lg text-[#001738]/60 leading-relaxed font-sans">
                                    Our team is based across Europe,<br className="hidden md:block" />
                                    ensuring seamless coordination<br className="hidden md:block" />
                                    throughout your entire journey.
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-8 rounded-[2rem] bg-vibrant-blue/5 border border-vibrant-blue/10 flex items-start gap-5 hover:scale-[1.02] transition-transform">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                        <Mail className="w-6 h-6 text-vibrant-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#001738] mb-1">Email Us</h3>
                                        <p className="text-justify text-[#001738]/60 font-sans">hello@yconnect.io</p>
                                    </div>
                                </div>

                                <div className="p-8 rounded-[2rem] bg-vibrant-blue/5 border border-vibrant-blue/10 flex items-start gap-5 hover:scale-[1.02] transition-transform">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                        <Building2 className="w-6 h-6 text-vibrant-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#001738] mb-1">Visit Us</h3>
                                        <p className="text-justify text-[#001738]/60 font-sans">Amsterdam, Netherlands</p>
                                        <p className="text-justify text-[#001738]/60 font-sans">Amsterdam Office</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content: Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-10 md:p-16 rounded-[3.5rem] border border-gray-100 relative overflow-hidden h-full">
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-display font-medium text-[#001738] mb-4">
                                        Send us a message
                                    </h2>
                                    <div className="w-full md:w-max text-left md:text-justify md:[text-align-last:justify] text-[#001738]/50 mb-12 text-lg font-sans">
                                        We typically respond within 2-4 business hours. Let us know<br className="hidden md:block" />
                                        how our team can help you scale your startup or career.
                                    </div>
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
