"use client";

import { useEffect } from "react";

export function ScrollToTop() {
    useEffect(() => {
        // Prevent browser's native scroll restoration on refresh
        if (typeof window !== "undefined" && "history" in window && "scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        
        // Force scroll to top on component mount (which happens on refresh or initial load)
        window.scrollTo(0, 0);
    }, []);

    return null;
}
