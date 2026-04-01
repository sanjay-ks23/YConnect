import Link from "next/link";
import { MessageCircle, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F2942] text-white pt-24 pb-8 min-h-[400px] flex flex-col justify-between">
      <div className="container-superhi w-full h-full flex flex-col justify-between flex-1">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
            {/* Left: Brand Name */}
            <div className="flex flex-col">
                <Link href="/" className="inline-flex items-center gap-3 group">
                   <div className="flex flex-col">
                       {/* Same text styling as Navbar, but larger and white */}
                       <span className="text-4xl md:text-5xl lg:text-7xl font-display font-semibold tracking-tight text-white mb-2 group-hover:opacity-90 transition-opacity">
                           YConnect
                       </span>
                   </div>
                </Link>
            </div>

            {/* Right: Contact */}
            <div className="text-left md:text-right flex flex-col items-start md:items-end gap-2">
                <span className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-2">Contact</span>
                <a href="tel:+4917661743661" className="text-2xl md:text-4xl font-display font-medium hover:text-white/80 transition-colors">
                    + 49 176 617 436 61
                </a>
                <a href="mailto:info@yconnect.org" className="text-xl md:text-3xl font-display font-medium hover:text-white/80 transition-colors">
                    info@yconnect.org
                </a>
                
                <div className="flex gap-4 mt-6">
                    <a href="#" className="w-10 h-10 bg-white text-[#001738] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                        <MessageCircle size={20} strokeWidth={2.5} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white text-[#001738] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                        <Globe size={20} strokeWidth={2.5} />
                    </a>
                </div>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-6">
            <div className="flex items-center gap-4 text-xs text-white/50">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                    <span className="font-display font-bold text-white text-[10px]">YC</span>
                </div>
                <span>&copy; YConnect - {new Date().getFullYear()}</span>
            </div>
            
            <div className="flex gap-6 mt-4 md:mt-0 text-xs text-white/50">
                <Link href="/terms" className="hover:text-white transition-colors">Impressum</Link>
                <Link href="/privacy" className="hover:text-white transition-colors">Datenschutz</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
