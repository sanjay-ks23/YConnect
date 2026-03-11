"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";

interface GooeyCheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    accentColor?: string;
}

export function GooeyCheckbox({ checked = false, onChange, accentColor = "#275EFE" }: GooeyCheckboxProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const elemRef = useRef<HTMLLabelElement>(null);

    const handleChange = useCallback(() => {
        const input = inputRef.current;
        const svg = svgRef.current;
        const elem = elemRef.current;
        if (!input || !svg || !elem) return;

        const newChecked = !checked;
        onChange?.(newChecked);

        if (!newChecked) return;

        gsap.fromTo(input, {
            "--goo-border-width": "3px",
        }, {
            "--goo-border-color": accentColor,
            "--goo-border-width": "12px",
            duration: 0.2,
            clearProps: "all",
        });

        gsap.set(svg, {
            "--dot-x": "14px",
            "--dot-y": "-14px",
            "--tick-offset": "20.5px",
            "--tick-array": "16.5px",
            "--drop-s": 1,
        });

        gsap.to(elem, {
            keyframes: [{
                "--border-radius-corner": "14px",
                duration: 0.2,
                delay: 0.2,
            }, {
                "--border-radius-corner": "5px",
                duration: 0.3,
                clearProps: "all",
            }],
        });

        gsap.to(svg, {
            "--dot-x": "0px",
            "--dot-y": "0px",
            "--dot-s": 1,
            duration: 0.4,
            delay: 0.4,
        });

        gsap.to(svg, {
            keyframes: [{
                "--tick-offset": "48px",
                "--tick-array": "14px",
                duration: 0.3,
                delay: 0.2,
            }, {
                "--tick-offset": "46.5px",
                "--tick-array": "16.5px",
                duration: 0.35,
                clearProps: "all",
            }],
        });
    }, [checked, onChange, accentColor]);

    return (
        <label ref={elemRef} className="gooey-checkbox" style={{ "--c-active": accentColor } as React.CSSProperties}>
            <input
                ref={inputRef}
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
            <svg ref={svgRef} viewBox="0 0 24 24" filter="url(#goo-light)">
                <path className="tick" d="M4.5 10L10.5 16L24.5 1" />
                <circle className="dot" cx="10.5" cy="15.5" r="1.5" />
                <circle className="drop" cx="25" cy="-1" r="2" />
            </svg>
        </label>
    );
}
