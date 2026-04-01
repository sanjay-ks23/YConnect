import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MapPin, Clock, Building, MessageSquare, ShieldCheck } from "lucide-react";
import { WaveDivider } from "@/components/ui/WaveDivider";

export const metadata: Metadata = {
    title: "Contact — YConnect",
    description:
        "Get in touch with YConnect. We're here to help startups and students connect across Europe and India.",
};

const contactInfo = [
    {
        icon: Mail,
        title: "Email us",
        content: "hello@yconnect.eu",
        description: "General inquiries & support",
    },
    {
        icon: MessageSquare,
        title: "Partnerships",
        content: "partners@yconnect.eu",
        description: "For universities & accelerators",
    },
];

const companyDetails = [
    {
        icon: Building,
        title: "Registration",
        content: "YConnect B.V.",
        description: "KvK: 12345678 (Amsterdam)",
    },
    {
        icon: MapPin,
        title: "Location",
        content: "Amsterdam, Netherlands",
        description: "Operating globally",
    },
];

export default function ContactPage() {
    return (
        <div className="relative min-h-screen bg-white">
            {/* Hero */}
            <section className="pt-44 pb-20 lg:pt-52 lg:pb-32 relative z-10 bg-gradient-to-b from-vibrant-crimson/5 via-vibrant-crimson/5 to-white overflow-hidden">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-vibrant-crimson/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="container-superhi relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="heading-hero mb-8">
                            Let&apos;s start a{" "}
                            <span className="text-vibrant-crimson font-display italic">conversation</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-[#001738]/60 leading-relaxed max-w-2xl mx-auto font-sans">
                            Whether you&apos;re a founder looking for elite talent or a student seeking
                            global opportunities, our team is here to help.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Area - Single Background, No Dividers */}
            <section className="py-24 bg-white relative z-10">
                <div className="container-superhi">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                        
                        {/* Left Info Column */}
                        <div className="flex flex-col gap-8">
                            {/* Reach Out Card */}
                            <div className="bg-[#FAF9F6] p-10 rounded-[3rem] border border-gray-100 shadow-sm transition-all hover:shadow-md">
                                <h2 className="text-2xl font-display font-medium text-[#001738] mb-8">Reach Out</h2>
                                <div className="space-y-8">
                                    {contactInfo.map((item) => (
                                        <div key={item.title} className="flex gap-4 group">
                                            <div className="w-12 h-12 rounded-2xl bg-vibrant-crimson/5 flex items-center justify-center border border-vibrant-crimson/10 flex-shrink-0 group-hover:bg-vibrant-crimson/10 transition-colors">
                                                <item.icon className="w-5 h-5 text-vibrant-crimson" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[#001738]">{item.title}</h3>
                                                <p className="text-[#001738] font-medium">{item.content}</p>
                                                <p className="text-sm text-[#001738]/40 mt-0.5">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Company Info Card */}
                            <div className="bg-[#FAF9F6] p-10 rounded-[3rem] border border-gray-100 shadow-sm transition-all hover:shadow-md">
                                <h2 className="text-2xl font-display font-medium text-[#001738] mb-8">Company Info</h2>
                                <div className="space-y-8">
                                    {companyDetails.map((item) => (
                                        <div key={item.title} className="flex gap-4 group">
                                            <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-gray-100 flex-shrink-0 group-hover:bg-gray-50 transition-colors">
                                                <item.icon className="w-5 h-5 text-[#001738]/40" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[#001738]">{item.title}</h3>
                                                <p className="text-[#001738] font-medium">{item.content}</p>
                                                <p className="text-sm text-[#001738]/40 mt-0.5">{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Verified Platform Card */}
                            <div className="bg-[#001738] p-10 rounded-[3rem] text-white overflow-hidden relative group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-vibrant-crimson/10 blur-3xl group-hover:scale-150 transition-transform duration-700" />
                                <ShieldCheck className="w-10 h-10 text-vibrant-crimson/60 mb-6" />
                                <h3 className="text-xl font-bold mb-2">Verified Platform</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Every partnership on YConnect is protected by our legal framework and secure payment systems.
                                </p>
                            </div>
                        </div>

                        {/* Form Area - Spans 2 columns */}
                        <div className="lg:col-span-2">
                            <div className="bg-[#FAF9F6] p-10 sm:p-16 lg:p-20 rounded-[3.5rem] border border-gray-100 shadow-xl shadow-[#001738]/5 h-full relative overflow-hidden">
                                <div className="absolute -top-24 -right-24 w-64 h-64 bg-vibrant-crimson/5 rounded-full blur-3xl pointer-events-none" />
                                
                                <div className="relative z-10 max-w-2xl">
                                    <h2 className="text-4xl md:text-5xl font-display font-medium text-[#001738] mb-4 tracking-tight">Send a message</h2>
                                    <p className="text-[#001738]/50 mb-12 text-lg lg:text-xl leading-relaxed">
                                        We typically respond within 2-4 business hours. Let us know how we can help you scale or grow.
                                    </p>
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
