import type { Metadata } from "next";
import { StartupForm } from "@/components/forms/StartupForm";
import { Mail, Building2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact — YConnect",
    description:
        "Get in touch with YConnect. We're here to help startups and students connect across Europe and India.",
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
                        <p className="text-xl md:text-2xl text-[#001738]/60 leading-relaxed max-w-2xl mx-auto font-sans">
                            Whether you're a founder looking to scale or a student ready to 
                            leap into the global tech world, we're here to bridge the gap.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section - Unified Background */}
            <section className="py-24 bg-white relative z-10">
                <div className="container-superhi">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                        {/* Sidebar: Contact Info */}
                        <div className="lg:col-span-1 space-y-10">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-display font-medium text-[#001738]">Reach Out</h2>
                                <p className="text-lg text-[#001738]/60 leading-relaxed font-sans">
                                    Our team is based across Europe and India, ensuring seamless 
                                    coordination throughout your journey.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="p-8 rounded-[2rem] bg-vibrant-blue/5 border border-vibrant-blue/10 flex items-start gap-5 hover:scale-[1.02] transition-transform">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                        <Mail className="w-6 h-6 text-vibrant-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#001738] mb-1">Email Us</h3>
                                        <p className="text-[#001738]/60 font-sans">hello@yconnect.io</p>
                                    </div>
                                </div>

                                <div className="p-8 rounded-[2rem] bg-vibrant-blue/5 border border-vibrant-blue/10 flex items-start gap-5 hover:scale-[1.02] transition-transform">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                                        <Building2 className="w-6 h-6 text-vibrant-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#001738] mb-1">Visit Us</h3>
                                        <p className="text-[#001738]/60 font-sans">Amsterdam, Netherlands</p>
                                        <p className="text-[#001738]/60 font-sans">Bangalore, India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 rounded-[2rem] border border-gray-100 bg-gray-50/50 space-y-4">
                                <h3 className="font-bold text-[#001738]">Company Info</h3>
                                <div className="space-y-2 text-sm text-[#001738]/50 font-sans">
                                    <p>YConnect B.V.</p>
                                    <p>KVK: 12345678</p>
                                    <p>VAT: NL123456789B01</p>
                                </div>
                            </div>

                            <div className="p-8 rounded-[2rem] bg-[#001738] text-white flex items-start gap-5 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-vibrant-blue/20 blur-3xl group-hover:scale-150 transition-transform duration-700" />
                                <ShieldCheck className="w-10 h-10 text-vibrant-blue/60 relative z-10" />
                                <div className="relative z-10">
                                    <h3 className="font-bold mb-1">Verified Platform</h3>
                                    <p className="text-white/60 text-sm">Protected by our legal & secure framework.</p>
                                </div>
                            </div>
                        </div>

                        {/* Main Content: Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-2xl shadow-vibrant-blue/5 border border-gray-100 relative overflow-hidden h-full">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-vibrant-blue/5 to-transparent pointer-events-none" />
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-display font-medium text-[#001738] mb-4">
                                        Send us a message
                                    </h2>
                                    <p className="text-[#001738]/50 mb-12 text-lg font-sans">
                                        We typically respond within 2-4 business hours. Let us know how we can help you scale or grow.
                                    </p>
                                    <StartupForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
