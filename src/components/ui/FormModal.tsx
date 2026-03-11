"use client";

import { useEffect, useState, useRef, ReactNode, useCallback } from "react";
import { X } from "lucide-react";

interface FormModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    subtitle?: string;
}

export function FormModal({ isOpen, onClose, children, title, subtitle }: FormModalProps) {
    const [phase, setPhase] = useState<"closed" | "entering" | "open" | "exiting">("closed");
    const backdropRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && phase === "closed") {
            setPhase("entering");
            document.body.style.overflow = "hidden";
            const t = setTimeout(() => setPhase("open"), 350);
            return () => clearTimeout(t);
        }
        if (!isOpen && (phase === "open" || phase === "entering")) {
            setPhase("exiting");
            const t = setTimeout(() => {
                setPhase("closed");
                document.body.style.overflow = "";
            }, 250);
            return () => clearTimeout(t);
        }
    }, [isOpen, phase]);

    const handleBackdropClick = useCallback((e: React.MouseEvent) => {
        if (e.target === backdropRef.current) {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleEscape);
            return () => window.removeEventListener("keydown", handleEscape);
        }
    }, [isOpen, onClose]);

    if (phase === "closed") return null;

    return (
        <div
            ref={backdropRef}
            className={`modal-backdrop ${phase === "entering" ? "entering" : ""} ${phase === "exiting" ? "exiting" : ""}`}
            onClick={handleBackdropClick}
        >
            <div className="modal-content">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-2xl px-6 sm:px-8 pt-6 pb-4 border-b border-white/30 flex items-start justify-between rounded-t-[24px]">
                    <div>
                        {title && <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{title}</h2>}
                        {subtitle && <p className="text-sm text-foreground/45 mt-1">{subtitle}</p>}
                    </div>
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-all duration-200 hover:rotate-90 flex-shrink-0 ml-4"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5 text-foreground/50" />
                    </button>
                </div>

                {/* Body */}
                <div className="px-6 sm:px-8 py-6 sm:py-8">
                    {children}
                </div>
            </div>
        </div>
    );
}
