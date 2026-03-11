"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface LogoProps {
    className?: string;
    showText?: boolean;
    isScrolled?: boolean;
    size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({
    className = "",
    showText = true,
    isScrolled = false,
    size = "md"
}: LogoProps) {
    const sizeClasses = {
        sm: "w-8 h-8",
        md: "w-10 h-10",
        lg: "w-12 h-12",
        xl: "w-14 h-14"
    };

    const textClasses = {
        sm: "text-base",
        md: "text-lg",
        lg: "text-xl",
        xl: "text-2xl"
    };

    return (
        <div className={`flex items-center ${className}`}>
            <div className={`relative ${sizeClasses[size]} flex items-center justify-center -mr-1`}>
                <motion.div
                    animate={{ y: [0, -1.5, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/branding/yconnect-logo.png"
                        alt="YConnect Logo"
                        fill
                        className="object-contain"
                        priority
                        unoptimized
                    />
                </motion.div>
            </div>

            {showText && (
                <span className={`font-display font-medium tracking-tight transition-colors duration-300 ml-1 ${textClasses[size]} ${isScrolled ? "text-[#001738]" : "text-white"
                    }`}>
                    YConnect
                </span>
            )}
        </div>
    );
}
