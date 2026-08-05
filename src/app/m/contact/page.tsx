import type { Metadata } from "next";
import { ContactForm } from "@/components/mobile/forms/ContactForm";
import { Clock3, Globe2, Mail } from "lucide-react";

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
                        <h1 className="heading-hero mb-8">
                            Ready to <span className="text-vibrant-blue">Connect?</span>
                        </h1>
                        <div className="w-max max-w-full mx-auto text-justify [text-align-last:justify] text-xl md:text-2xl text-[#001738]/60 leading-relaxed font-sans">
                            Whether you're a founder or a student, we're here to help.<br className="hidden md:block" />
                            Reach out and let's see how we can work together.
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section - Simplified */}
            <section className="py-24 bg-white relative z-10">
                <div className="container-superhi">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-12 lg:gap-16">
                        {/* Sidebar: Contact Info */}
                        <div className="lg:col-span-1 pt-10 md:pt-16 space-y-10">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-display font-medium text-[#001738]">Reach Out</h2>
                                <div className="max-w-[22rem] text-justify [text-align-last:justify] text-lg md:text-xl text-[#001738]/60 leading-relaxed font-sans">
                                    Have a question, idea, or a project?<br />
                                    Reach out and let us connect today.
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="p-8 rounded-[2rem] bg-vibrant-blue/5 border border-vibrant-blue/10 flex items-start gap-5 hover:scale-[1.02] transition-transform">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                                        <Mail className="w-6 h-6 text-vibrant-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#001738] mb-1">Email</h3>
                                        <p className="text-[#001738]/60 font-sans break-words">dauren.oberhuber@yconnect.info</p>
                                    </div>
                                </div>

                                <div className="p-8 rounded-[2rem] bg-vibrant-blue/5 border border-vibrant-blue/10 flex items-start gap-5 hover:scale-[1.02] transition-transform">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                                        <Clock3 className="w-6 h-6 text-vibrant-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#001738] mb-1">Response Time</h3>
                                        <p className="text-justify text-[#001738]/60 font-sans">Usually within 24 hours</p>
                                    </div>
                                </div>

                                <div className="p-8 rounded-[2rem] bg-vibrant-blue/5 border border-vibrant-blue/10 flex items-start gap-5 hover:scale-[1.02] transition-transform">
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
                                        <Globe2 className="w-6 h-6 text-vibrant-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[#001738] mb-1">Remote First</h3>
                                        <p className="text-justify text-[#001738]/60 font-sans">Fully remote by design</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content: Form */}
                        <div className="flex items-start">
                            <div className="bg-white p-10 md:p-16 rounded-[3.5rem] border border-gray-100 relative overflow-hidden h-full w-full">
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-display font-medium text-[#001738] mb-4">
                                        Send us a message
                                    </h2>
                                    <div className="max-w-[44rem] text-justify [text-align-last:justify] text-[#001738]/50 mb-12 text-lg font-sans">
                                        Our dedicated team typically responds within two to four business hours.
                                        Please let us know how we can help you.
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
