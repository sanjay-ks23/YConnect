"use client";

import { ReactNode } from "react";

interface GooeyButtonProps {
    children: ReactNode;
    type?: "button" | "submit";
    disabled?: boolean;
    onClick?: () => void;
    accentColor?: string;
    className?: string;
}

export function GooeyButton({
    children,
    type = "submit",
    disabled = false,
    onClick,
    accentColor = "#275EFE",
    className = "",
}: GooeyButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`gooey-btn ${className}`}
            style={{ "--c-gooey-accent": accentColor } as React.CSSProperties}
        >
            <span className="gooey-btn-text">{children}</span>
            <svg className="gooey-btn-svg" preserveAspectRatio="none" viewBox="0 0 132 45">
                <g clipPath="url(#gooey-clip)" filter="url(#goo-big)">
                    <circle className="top-left" cx="49.5" cy="-0.5" r="26.5" />
                    <circle className="middle-bottom" cx="70.5" cy="40.5" r="26.5" />
                    <circle className="top-right" cx="104" cy="6.5" r="27" />
                    <circle className="right-bottom" cx="123.5" cy="36.5" r="26.5" />
                    <circle className="left-bottom" cx="16.5" cy="28" r="30" />
                </g>
                <defs>
                    <clipPath id="gooey-clip">
                        <rect width="132" height="45" rx="7" />
                    </clipPath>
                </defs>
            </svg>
        </button>
    );
}
