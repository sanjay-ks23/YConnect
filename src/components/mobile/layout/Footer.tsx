import Link from "next/link";
import { MessageCircle, Globe } from "lucide-react";

export function Footer() {
 return (
 <footer className="bg-[#0F2942] text-white pt-24 pb-12 relative overflow-hidden">
 {/* Decorative background accent */}
 <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-vibrant-blue/10 rounded-full blur-3xl pointer-events-none" />

 <div className="container-superhi relative z-10">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-20">
 {/* Left Side: Brand */}
 <div className="flex flex-col max-w-md">
 <a href="/m" className="inline-block mb-6 group">
 <span className="text-5xl md:text-6xl font-medium text-white group-hover:opacity-90 transition-opacity" style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '-0.1em' }}>
 YConnect
 </span>
 </a>

 <div className="max-w-full mb-8">
 <div className=" text-white/70 text-xl md:text-2xl italic leading-relaxed font-body w-full">
 Grow beyond borders.
 </div>
 </div>

 {/* Social Icons moved here */}
 <div className="flex gap-4">
 <a href="https://www.linkedin.com/company/yconnect-info/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0F2942] transition-all duration-300 shadow-sm">
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
 </a>
 </div>
 </div>

 {/* Right Side: Navigation Grid */}
 <div className="grid grid-cols-2 gap-8 md:gap-16 mt-2">
 <div className="flex flex-col gap-6">
 <span className="text-sm sm:text-base font-bold uppercase tracking-widest text-white/60">Platform</span>
 <nav className="flex flex-col gap-4">
 <Link href="/m/startups" className="text-lg font-body font-normal italic text-white/70 hover:text-[#00E58A] transition-colors">For Startups</Link>
 <Link href="/m/students" className="text-lg font-body font-normal italic text-white/70 hover:text-[#00E58A] transition-colors">For Students</Link>
 </nav>
 </div>

 <div className="flex flex-col gap-6">
 <span className="text-sm sm:text-base font-bold uppercase tracking-widest text-white/60">Company</span>
 <nav className="flex flex-col gap-4">
 <Link href="/m/about" className="text-lg font-body font-normal italic text-white/70 hover:text-[#00E58A] transition-colors">About Us</Link>
 <Link href="/m/contact" className="text-lg font-body font-normal italic text-white/70 hover:text-[#00E58A] transition-colors">Contact</Link>
 </nav>
 </div>
 </div>
 </div>

 {/* Bottom Bar */}
 </div>
 </footer>
 );
}
