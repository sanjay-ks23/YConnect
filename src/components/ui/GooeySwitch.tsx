"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";

interface GooeySwitchProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    accentColor?: string;
}

export function GooeySwitch({ checked = false, onChange, accentColor = "#275EFE" }: GooeySwitchProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);

    const handleChange = useCallback(() => {
        const input = inputRef.current;
        const svg = svgRef.current;
        if (!input || !svg) return;

        const newChecked = !checked;
        onChange?.(newChecked);

        const hide = newChecked ? "default" : "dot";
        const show = newChecked ? "dot" : "default";

        gsap.fromTo(svg, {
            "--default-s": newChecked ? 1 : 0,
            "--default-x": newChecked ? "0px" : "8px",
            "--dot-s": newChecked ? 0 : 1,
            "--dot-x": newChecked ? "-8px" : "0px",
        }, {
            [`--${hide}-s`]: 0,
            [`--${hide}-x`]: newChecked ? "8px" : "-8px",
            duration: 0.25,
            delay: 0.15,
        });

        gsap.fromTo(input, {
            "--input-background": newChecked ? "#D2D6E9" : accentColor,
        }, {
            "--input-background": newChecked ? accentColor : "#D2D6E9",
            duration: 0.35,
            clearProps: "all",
        });

        gsap.to(svg, {
            keyframes: [{
                [`--${show}-x`]: newChecked ? "2px" : "-2px",
                [`--${show}-s`]: 1,
                duration: 0.25,
            }, {
                [`--${show}-x`]: "0px",
                duration: 0.2,
                clearProps: "all",
            }],
        });
    }, [checked, onChange, accentColor]);

    return (
        <label className="gooey-switch" style={{ "--c-active": accentColor } as React.CSSProperties}>
            <input
                ref={inputRef}
                type="checkbox"
                checked={checked}
                onChange={handleChange}
            />
            <svg ref={svgRef} viewBox="0 0 38 24" filter="url(#goo)">
                <circle className="default" cx="12" cy="12" r="8" />
                <circle className="dot" cx="26" cy="12" r="8" />
            </svg>
        </label>
    );
}
