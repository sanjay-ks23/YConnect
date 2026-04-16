"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
    { href: "/startups", label: "For Startups" },
    { href: "/students", label: "For Students" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 pt-2 sm:pt-4 px-2 sm:px-4 md:px-8">
            <div className="mx-auto flex flex-col items-center">
                <div className="flex w-full h-[64px] sm:h-[72px] items-center justify-between bg-white/80 backdrop-blur-2xl border border-gray-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-full max-w-6xl px-4 sm:px-8">
                    
                    <a href="/" className="flex items-center group shrink-0 gap-1">
                        <Image
                            src="/branding/logo-clean.png"
                            alt="YConnect Logo"
                            width={44}
                            height={44}
                            className="object-contain"
                            priority
                            unoptimized
                        />
                        <span className="text-xl sm:text-2xl md:text-3xl font-medium text-[#001738]" style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '-0.1em' }}>
                            YConnect
                        </span>
                    </a>

                    <div className="flex items-center gap-6">
                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="px-5 py-2 rounded-full text-[15px] font-medium transition-all duration-300 text-[#001738]/70 hover:text-[#001738] hover:bg-gray-100"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA & Mobile Toggle */}
                        <div className="flex items-center gap-3 shrink-0">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-2 w-full sm:max-w-[500px] bg-white/98 backdrop-blur-3xl border border-gray-200/60 shadow-lg rounded-3xl p-5">
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-4 py-3 text-base font-medium text-[#001738]/80 hover:text-[#001738] rounded-2xl hover:bg-gray-50 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="pt-4 mt-2 border-t border-gray-200">
                                {/* Get Started removed */}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
