"use client";

/**
 * SVG filter definitions for gooey effects.
 * Render once in layout — provides #goo, #goo-light, #goo-big filters.
 */
export function GooeyFilters() {
    return (
        <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
                <filter id="goo" x="-50%" width="200%" y="-50%" height="200%" colorInterpolationFilters="sRGB">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
                </filter>
                <filter id="goo-light" x="-50%" width="200%" y="-50%" height="200%" colorInterpolationFilters="sRGB">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1.25" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
                </filter>
                <filter id="goo-big" x="-50%" width="200%" y="-50%" height="200%" colorInterpolationFilters="sRGB">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
                </filter>
            </defs>
        </svg>
    );
}
