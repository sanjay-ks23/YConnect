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
 <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0F2942] transition-all duration-300 shadow-sm">
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
 </a>
 <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0F2942] transition-all duration-300 shadow-sm">
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
 </a>
 </div>
 </div>

 {/* Right Side: Navigation Grid */}
 <div className="grid grid-cols-2 gap-8 md:gap-16">
 <div className="flex flex-col gap-6">
 <span className="text-xs font-bold uppercase tracking-widest text-white/40">Platform</span>
 <nav className="flex flex-col gap-4">
 <Link href="/m/startups" className="text-lg font-display font-medium hover:text-[#00E58A] transition-colors">For Startups</Link>
 <Link href="/m/students" className="text-lg font-display font-medium hover:text-[#00E58A] transition-colors">For Students</Link>
 </nav>
 </div>

 <div className="flex flex-col gap-6">
 <span className="text-xs font-bold uppercase tracking-widest text-white/40">Company</span>
 <nav className="flex flex-col gap-4">
 <Link href="/m/about" className="text-lg font-display font-medium hover:text-[#00E58A] transition-colors">About Us</Link>
 <Link href="/m/contact" className="text-lg font-display font-medium hover:text-[#00E58A] transition-colors">Contact</Link>
 </nav>
 </div>
 </div>
 </div>

 {/* Bottom Bar */}
 </div>
 </footer>
 );
}
