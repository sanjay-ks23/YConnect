"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, GraduationCap, Building2, MessageSquare, Settings, LogOut } from "lucide-react";
import { getSupabaseBrowserClient } from "@/lib/supabase/client";

const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/students", label: "Students", icon: GraduationCap },
    { href: "/admin/startups", label: "Startups", icon: Building2 },
    { href: "/admin/contact", label: "Contact", icon: MessageSquare },
    { href: "/admin/settings", label: "Settings", icon: Settings },
];

export function AdminSidebar({ userEmail }: { userEmail: string }) {
    const pathname = usePathname();
    const router = useRouter();

    const handleSignOut = async () => {
        const supabase = getSupabaseBrowserClient();
        await supabase.auth.signOut();
        router.push("/admin/login");
        router.refresh();
    };

    return (
        <aside className="w-64 flex-shrink-0 bg-white border-r border-gray-100 min-h-screen p-6 flex flex-col">
            <div className="mb-10">
                <span className="text-2xl font-medium text-[#001738]" style={{ fontFamily: "var(--font-inter), sans-serif", letterSpacing: "-0.05em" }}>
                    YConnect
                </span>
                <p className="text-xs text-[#001738]/40 font-bold uppercase tracking-widest mt-1">Admin</p>
            </div>

            <nav className="flex-1 space-y-1">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${isActive
                                ? "bg-vibrant-blue text-white shadow-md"
                                : "text-[#001738]/60 hover:bg-gray-50"
                                }`}
                        >
                            <Icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="pt-6 border-t border-gray-100">
                <p className="text-xs text-[#001738]/40 truncate mb-3">{userEmail}</p>
                <button
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-2 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 font-medium transition-all"
                >
                    <LogOut className="w-5 h-5" /> Sign out
                </button>
            </div>
        </aside>
    );
}
