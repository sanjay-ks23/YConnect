"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";

interface GooeyRadioProps {
    name: string;
    value: string;
    checked?: boolean;
    onChange?: (value: string) => void;
    accentColor?: string;
}

export function GooeyRadio({ name, value, checked = false, onChange, accentColor = "#275EFE" }: GooeyRadioProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    const handleChange = useCallback(() => {
        const input = inputRef.current;
        const svg = svgRef.current;
        if (!input || !svg) return;

        onChange?.(value);

        gsap.fromTo(input, {
            "--goo-border-width": "3px",
        }, {
            "--goo-border-color": accentColor,
            "--goo-border-width": "12px",
            duration: 0.2,
        });

        gsap.to(svg, {
            keyframes: [{
                "--top-y": "6px",
                "--top-s-x": 1,
                "--top-s-y": 1.25,
                duration: 0.2,
                delay: 0.2,
            }, {
                "--top-y": "0px",
                "--top-s-x": 1.75,
                "--top-s-y": 1,
                duration: 0.6,
            }],
        });

        gsap.to(svg, {
            keyframes: [{
                "--dot-y": "2px",
                duration: 0.3,
                delay: 0.2,
            }, {
                "--dot-y": "0px",
                duration: 0.3,
            }],
        });

        gsap.to(svg, {
            "--drop-y": "0px",
            duration: 0.6,
            delay: 0.4,
            clearProps: "all",
            onComplete() {
                input.removeAttribute("style");
            },
        });
    }, [value, onChange, accentColor]);

    return (
        <label className="gooey-radio" style={{ "--c-active": accentColor } as React.CSSProperties}>
            <input
                ref={inputRef}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={handleChange}
            />
            <svg ref={svgRef} viewBox="0 0 24 24" filter="url(#goo-light)">
                <circle className="top" cx="12" cy="-12" r="8" />
                <circle className="dot" cx="12" cy="12" r="5" />
                <circle className="drop" cx="12" cy="12" r="2" />
            </svg>
        </label>
    );
}
