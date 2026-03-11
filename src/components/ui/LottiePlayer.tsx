"use client";

import { useEffect, useRef } from "react";
import { DotLottie } from "@lottiefiles/dotlottie-web";

interface LottiePlayerProps {
    src: string;
    width?: number;
    height?: number;
    loop?: boolean;
    autoplay?: boolean;
    className?: string;
}

export function LottiePlayer({
    src,
    width = 200,
    height = 200,
    loop = true,
    autoplay = true,
    className = "",
}: LottiePlayerProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dotLottieRef = useRef<DotLottie | null>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        dotLottieRef.current = new DotLottie({
            autoplay,
            loop,
            canvas: canvasRef.current,
            src,
        });

        return () => {
            dotLottieRef.current?.destroy();
            dotLottieRef.current = null;
        };
    }, [src, loop, autoplay]);

    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className={className}
            style={{ width: `${width}px`, height: `${height}px` }}
        />
    );
}
