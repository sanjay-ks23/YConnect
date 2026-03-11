"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GlobeProps {
    className?: string;
    config?: any;
}

const GLOBE_CONFIG: any = {
    width: 800 * 2,
    height: 800 * 2,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 6,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5072, -0.1276], size: 0.05 }, // London
        { location: [19.0760, 72.8777], size: 0.1 },  // Mumbai
        { location: [28.7041, 77.1025], size: 0.08 }, // Delhi
        { location: [12.9716, 77.5946], size: 0.1 },  // Bangalore
        { location: [48.8566, 2.3522], size: 0.05 },  // Paris
        { location: [52.5200, 13.4050], size: 0.05 }, // Berlin
    ],
};

export function Globe({ className, config = GLOBE_CONFIG }: GlobeProps) {
    let width = 0;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef<number | null>(null);
    const pointerInteractionMovement = useRef(0);

    useEffect(() => {
        let phi = 0;
        let focusRef = 0;

        const onResize = () => {
            if (canvasRef.current) {
                width = canvasRef.current.offsetWidth;
            }
        };
        window.addEventListener("resize", onResize);
        onResize();

        let globe = createGlobe(canvasRef.current!, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender: (state) => {
                if (!pointerInteracting.current) {
                    // Reduced spin speed from 0.005 as requested
                    phi += 0.0025;
                }
                state.phi = phi + (pointerInteractionMovement.current * Math.PI) / 180;
                state.width = width * 2;
                state.height = width * 2;
            },
        });

        return () => {
            globe.destroy();
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <div className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
            <canvas
                ref={canvasRef}
                className={cn(
                    "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
                    "opacity-100"
                )}
                onPointerDown={(e) => {
                    pointerInteracting.current =
                        e.clientX - pointerInteractionMovement.current;
                    if (canvasRef.current) {
                        canvasRef.current.style.cursor = "grabbing";
                    }
                }}
                onPointerUp={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) {
                        canvasRef.current.style.cursor = "grab";
                    }
                }}
                onPointerOut={() => {
                    pointerInteracting.current = null;
                    if (canvasRef.current) {
                        canvasRef.current.style.cursor = "grab";
                    }
                }}
                onMouseMove={(e) => {
                    if (pointerInteracting.current !== null) {
                        const delta = e.clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta;
                    }
                }}
                onTouchMove={(e) => {
                    if (pointerInteracting.current !== null && e.touches[0]) {
                        const delta = e.touches[0].clientX - pointerInteracting.current;
                        pointerInteractionMovement.current = delta;
                    }
                }}
                style={{
                    width: "100%",
                    height: "100%",
                    contain: "layout paint size",
                    cursor: "grab",
                }}
            />
        </div>
    );
}
