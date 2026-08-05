"use client";

import { usePathname } from "next/navigation";
import { Navbar as DesktopNavbar } from "@/components/layout/Navbar";
import { Footer as DesktopFooter } from "@/components/layout/Footer";
import { ScrollToTop as DesktopScrollToTop } from "@/components/layout/ScrollToTop";
import { Navbar as MobileNavbar } from "@/components/mobile/layout/Navbar";
import { Footer as MobileFooter } from "@/components/mobile/layout/Footer";
import { ScrollToTop as MobileScrollToTop } from "@/components/mobile/layout/ScrollToTop";

export function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isMobile = pathname.startsWith("/m");

    if (isMobile) {
        return (
            <>
                <MobileScrollToTop />
                <MobileNavbar />
                <main className="relative">{children}</main>
                <MobileFooter />
            </>
        );
    }

    return (
        <>
            <DesktopScrollToTop />
            <DesktopNavbar />
            <main className="relative">{children}</main>
            <DesktopFooter />
        </>
    );
}
