"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/m/startups", label: "For Startups" },
  { href: "/m/students", label: "For Students" },
  { href: "/m/about", label: "About" },
  { href: "/m/contact", label: "Contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname ? pathname.replace(/\/$/, "") || "/" : "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-2 sm:pt-4 px-2 sm:px-4 md:px-8">
      <div className="mx-auto flex flex-col items-center">
        <div className="flex w-full h-[64px] sm:h-[72px] items-center justify-between bg-white/80 backdrop-blur-2xl border border-gray-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.04)] rounded-full max-w-6xl px-4 sm:px-8">
          
          <a href="/m" className="flex items-center group shrink-0 gap-1">
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
            {/* Desktop Nav - 3D tactile toggle pill */}
            <nav className="hidden md:flex items-center gap-1 bg-gray-100/70 p-1.5 rounded-full border border-gray-200/50 relative">
              {navLinks.map((link) => {
                const targetPath = link.href.replace(/\/$/, "") || "/";
                const isActive = currentPath === targetPath || (targetPath !== "/" && targetPath !== "/m" && currentPath.startsWith(targetPath));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-5 py-2 rounded-full text-[15px] transition-all duration-200 z-10 select-none ${
                      isActive
                        ? "font-bold text-[#001738] scale-[1.03]"
                        : "font-medium text-[#001738]/60 hover:text-[#001738]"
                    }`}
                  >
                    <span className="relative z-20 flex items-center justify-center">
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="mobile-navbar-pill"
                        className="absolute inset-0 rounded-full bg-white/90 backdrop-blur-md shadow-md border border-gray-200/60"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Toggle */}
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

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 w-full sm:max-w-[500px] bg-white/98 backdrop-blur-3xl border border-gray-200/60 shadow-lg rounded-3xl p-5">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const targetPath = link.href.replace(/\/$/, "") || "/";
                const isActive = currentPath === targetPath || (targetPath !== "/" && targetPath !== "/m" && currentPath.startsWith(targetPath));

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 text-base rounded-2xl transition-all flex items-center justify-between ${
                      isActive
                        ? "font-bold text-[#001738] bg-gray-100/90 shadow-sm border border-gray-200/40"
                        : "font-medium text-[#001738]/70 hover:text-[#001738] hover:bg-gray-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-vibrant-blue shadow-sm" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
