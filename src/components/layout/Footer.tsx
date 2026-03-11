import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Logo } from "@/components/ui/Logo";

const footerLinks = {
    platform: [
        { href: "/startups", label: "For Startups" },
        { href: "/students", label: "For Students" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
    ],
    resources: [
        { href: "#", label: "How It Works" },
        { href: "#", label: "FAQ" },
        { href: "#", label: "Blog" },
        { href: "#", label: "Careers" },
    ],
    legal: [
        { href: "#", label: "Privacy Policy" },
        { href: "#", label: "Terms of Service" },
        { href: "#", label: "Cookie Policy" },
    ],
};

export function Footer() {
    return (
        <footer className="relative mt-20 pb-8 overflow-hidden">
            {/* NATURAL ECOSYSTEM — grass hill with trees */}
            <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none overflow-hidden">
                <svg viewBox="0 0 1440 300" preserveAspectRatio="none" className="w-full h-[280px]">
                    {/* Grass hill */}
                    <defs>
                        <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#66BB6A" />
                            <stop offset="100%" stopColor="#388E3C" />
                        </linearGradient>
                    </defs>
                    <path d="M0,180 Q360,100 720,160 T1440,140 L1440,300 L0,300 Z" fill="url(#grassGrad)" />
                    {/* Lighter grass highlight layer */}
                    <path d="M0,200 Q400,140 800,180 T1440,160 L1440,300 L0,300 Z" fill="#4CAF50" opacity="0.5" />

                    {/* Left tree — trunk */}
                    <rect x="120" y="100" width="16" height="90" rx="4" fill="#5D4037" />
                    {/* Left tree — foliage */}
                    <ellipse cx="128" cy="75" rx="50" ry="55" fill="#2E7D32" />
                    <ellipse cx="128" cy="60" rx="38" ry="42" fill="#43A047" />
                    <ellipse cx="128" cy="50" rx="24" ry="30" fill="#66BB6A" />

                    {/* Right tree — trunk */}
                    <rect x="1290" y="80" width="18" height="100" rx="4" fill="#5D4037" />
                    {/* Right tree — foliage */}
                    <ellipse cx="1299" cy="52" rx="55" ry="60" fill="#2E7D32" />
                    <ellipse cx="1299" cy="36" rx="42" ry="46" fill="#43A047" />
                    <ellipse cx="1299" cy="24" rx="28" ry="34" fill="#66BB6A" />

                    {/* Small grass tufts scattered */}
                    <ellipse cx="300" cy="188" rx="8" ry="5" fill="#4CAF50" />
                    <ellipse cx="600" cy="172" rx="6" ry="4" fill="#66BB6A" />
                    <ellipse cx="900" cy="165" rx="7" ry="4" fill="#4CAF50" />
                    <ellipse cx="1100" cy="155" rx="6" ry="4" fill="#66BB6A" />
                </svg>
            </div>

            <div className="container-superhi relative z-10">
                {/* Your Journey Takes Root Here */}
                <div className="text-center mb-20 lg:mb-32">
                    <h2 className="text-5xl lg:text-7xl font-extrabold text-[#002f6c] tracking-tighter mb-4 opacity-90 drop-shadow-md">
                        Your Journey Takes Root Here
                    </h2>
                    <p className="text-lg lg:text-xl text-[#002f6c]/80 font-semibold drop-shadow-sm">
                        Connect globally, grow locally.
                    </p>
                </div>

                {/* Main Footer Card using Fresh GlassPanel */}
                <div className="superhi-section glass-panel border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.03)] bg-white/40 p-8 sm:p-12 lg:p-16 mb-12">
                    {/* Top Row */}
                    <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
                        {/* Brand */}
                        <div className="max-w-sm">
                            <Logo />
                            <p className="text-[#001738]/80 text-sm leading-relaxed mb-6 font-medium">
                                Connecting early-stage European startups with top engineering
                                talent from Indian universities. Flexible, affordable, and
                                quality-driven.
                            </p>
                            <Link
                                href="/contact"
                                className="btn-pill bg-vibrant-blue text-white hover:bg-vibrant-blue-dark inline-flex shadow-xl"
                            >
                                Get Started <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        {/* Link Columns */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
                            <div>
                                <h4 className="font-semibold text-sm mb-4 text-[#001738]/70 uppercase tracking-wider font-bold">
                                    Platform
                                </h4>
                                <ul className="space-y-3">
                                    {footerLinks.platform.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-[#001738]/90 hover:text-[#001738] transition-colors duration-200 font-medium font-bold"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm mb-4 text-[#001738]/70 uppercase tracking-wider font-bold">
                                    Resources
                                </h4>
                                <ul className="space-y-3">
                                    {footerLinks.resources.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-[#001738]/90 hover:text-[#001738] transition-colors duration-200 font-medium font-bold"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm mb-4 text-[#001738]/70 uppercase tracking-wider font-bold">
                                    Legal
                                </h4>
                                <ul className="space-y-3">
                                    {footerLinks.legal.map((link) => (
                                        <li key={link.label}>
                                            <Link
                                                href={link.href}
                                                className="text-sm text-[#001738]/90 hover:text-[#001738] transition-colors duration-200 font-medium font-bold"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-[#001738]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-[#001738]/70 font-semibold">
                            © {new Date().getFullYear()} YConnect. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#001738]/70 hover:text-[#001738] transition-colors text-xs font-semibold"
                            >
                                Twitter
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#001738]/70 hover:text-[#001738] transition-colors text-xs font-semibold"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="mailto:hello@talentbridge.eu"
                                className="text-[#001738]/70 hover:text-[#001738] transition-colors text-xs font-semibold"
                            >
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
