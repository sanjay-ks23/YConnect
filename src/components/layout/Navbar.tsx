"use client";

import Link from "next/link";
import { useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { GooeyButton } from "@/components/ui/GooeyButton";

import { Logo } from "@/components/ui/Logo";

const navLinks = [
    { href: "/startups", label: "For Startups" },
    { href: "/students", label: "For Students" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Sync state efficiently with Framer Motion event
    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-8 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="mx-auto flex flex-col items-center">
                <div
                    className={`flex w-full h-[80px] items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isScrolled
                        ? "bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_12px_40px_rgba(0,23,56,0.06)] rounded-full max-w-7xl px-8 sm:px-10"
                        : "bg-transparent rounded-full max-w-[1400px] px-4"
                        }`}
                >
                    <Link href="/" className="flex items-center group shrink-0">
                        <Logo isScrolled={isScrolled} size="lg" />
                    </Link>

                    <div className="flex items-center gap-8">
                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`px-6 py-2.5 rounded-full text-[16px] font-medium transition-all duration-300 whitespace-nowrap ${isScrolled
                                        ? "text-[#001738] hover:bg-black/5"
                                        : "text-white hover:text-white/80 hover:bg-white/10"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* CTA & Mobile Toggle */}
                        <div className="flex items-center gap-3 shrink-0">
                            <Link href="/contact" className="hidden sm:block">
                                <GooeyButton type="button" accentColor="#2E31D1" className="text-[15px] py-2.5 px-7 font-bold bg-white/20 backdrop-blur-2xl border border-white/80 shadow-sm text-[#001738] rounded-full">
                                    Get Started <ArrowRight className="w-4.5 h-4.5 ml-2 transition-transform group-hover:translate-x-1" />
                                </GooeyButton>
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden mt-3 w-full max-w-[500px] bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_12px_40px_rgba(0,23,56,0.1)] rounded-3xl p-6"
                        >
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="px-4 py-3 text-base font-bold text-[#001738]/80 hover:text-[#001738] rounded-2xl hover:bg-white/40 transition-colors drop-shadow-sm"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="pt-4 mt-2 border-t border-border/50">
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="w-full"
                                    >
                                        <GooeyButton type="button" accentColor="#2E31D1" className="w-full justify-center text-[16px] py-3.5 bg-white/20 backdrop-blur-2xl border border-white/80 shadow-sm text-[#001738] rounded-full">
                                            Get Started <ArrowRight className="w-5 h-5 ml-2" />
                                        </GooeyButton>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
