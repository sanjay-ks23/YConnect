"use client";

import { useEffect, useRef, ReactNode, useCallback } from "react";
import { X } from "lucide-react";

interface FormModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
    subtitle?: string;
}

export function FormModal({ isOpen, onClose, children, title, subtitle }: FormModalProps) {
    const backdropRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

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

    if (!isOpen) return null;

    return (
        <div
            ref={backdropRef}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#001738]/40 backdrop-blur-md animate-in fade-in duration-300"
            onClick={handleBackdropClick}
        >
            <div className="bg-white w-full max-w-[800px] max-h-[90vh] rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col animate-in zoom-in-95 slide-in-from-bottom-8 duration-500 ease-out">
                {/* Header */}
                <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-xl px-6 sm:px-10 pt-8 pb-6 border-b border-gray-100 flex items-start justify-between">
                    <div>
                        {title && <h2 className="text-2xl sm:text-3xl font-display font-medium text-[#001738] tracking-tight">{title}</h2>}
                        {subtitle && <p className="text-justify text-[#001738]/50 mt-1 font-medium">{subtitle}</p>}
                    </div>
                    <button
                        onClick={onClose}
                        className="w-12 h-12 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-all duration-300 hover:rotate-90 flex-shrink-0 ml-4 group shadow-sm"
                        aria-label="Close"
                    >
                        <X className="w-6 h-6 text-[#001738]/40 group-hover:text-[#001738] transition-colors" />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto custom-scrollbar px-6 sm:px-10 py-8">
                    <div className="max-w-2xl mx-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
