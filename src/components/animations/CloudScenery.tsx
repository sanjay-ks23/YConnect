"use client";

import { useId, useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface CloudSceneryProps {
    variant: "hero" | "scattered";
    count?: number; // Only for 'scattered' variant
    customClouds?: {
        src: "/clouds/puffy-clean-1.png" | "/clouds/cloud-xl-final.png";
        style: React.CSSProperties;
        className?: string;
    }[];
}

// Simple seeded PRNG to ensure hydration matches client
function seededRandom(seed: number) {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

export function CloudScenery({ variant, count = 2, customClouds }: CloudSceneryProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const id = useId();
    const [mounted, setMounted] = useState(false);

    // Prevent hydration mismatch for scattered random placement
    useEffect(() => {
        setMounted(true);
    }, []);

    useLayoutEffect(() => {
        if (!containerRef.current || !mounted) return;

        const ctx = gsap.context(() => {
            if (variant === "hero") {
                const cloud1 = containerRef.current!.querySelector('.cloud-hero-1');
                const cloud2 = containerRef.current!.querySelector('.cloud-hero-2');
                const cloud4 = containerRef.current!.querySelector('.cloud-hero-4');

                if (cloud1) {
                    // Floating bounce (Y only)
                    gsap.to(cloud1, {
                        y: -30,
                        duration: 5,
                        ease: "sine.inOut",
                        yoyo: true,
                        repeat: -1,
                    });
                    // Parallax X
                    gsap.to(cloud1, {
                        x: -120,
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top top",
                            end: "bottom top",
                            scrub: 1.2,
                        }
                    });
                }

                if (cloud2) {
                    // Floating bounce (Y only)
                    gsap.to(cloud2, {
                        y: -25,
                        duration: 6,
                        ease: "sine.inOut",
                        yoyo: true,
                        repeat: -1,
                        delay: 1.5,
                    });
                    // Parallax X
                    gsap.to(cloud2, {
                        x: 140,
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top top",
                            end: "bottom top",
                            scrub: 1.2,
                        }
                    });
                }

                if (cloud4) {
                    // Floating bounce (Y only - removed X to prevent conflict)
                    gsap.to(cloud4, {
                        y: 25,
                        duration: 7,
                        ease: "sine.inOut",
                        yoyo: true,
                        repeat: -1,
                        delay: 0.5,
                    });
                    // Parallax X
                    gsap.to(cloud4, {
                        x: 100,
                        ease: "none",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top top",
                            end: "bottom top",
                            scrub: 1.8,
                        }
                    });
                }
            } else {
                // Scattered animation
                const scatters = containerRef.current!.querySelectorAll('.cloud-scatter');
                scatters.forEach((cloud, i) => {
                    // Unique bounce for each (Y only)
                    gsap.to(cloud, {
                        y: -30 - (i * 5),
                        duration: 5 + (i * 0.8),
                        ease: "sine.inOut",
                        yoyo: true,
                        repeat: -1,
                        delay: i * 0.6,
                    });

                    // Scroll Parallax X
                    const moveDir = i % 2 === 0 ? -80 : 80;
                    gsap.to(cloud, {
                        x: moveDir * (1 + (i * 0.25)),
                        ease: "none",
                        scrollTrigger: {
                            trigger: cloud,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1.5,
                        }
                    });
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, [variant, mounted]);

    if (!mounted && variant === "scattered") return null; // Avoid exact position hydration errors

    if (variant === "hero") {
        return (
            <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {/* Cloud Left */}
                <div className="cloud-hero-1 absolute top-[28%] -left-[3%] md:left-[5%] will-change-transform">
                    <Image
                        src="/clouds/puffy-clean-1.png"
                        alt=""
                        width={500}
                        height={500}
                        className="w-[240px] md:w-[380px] lg:w-[460px] h-auto object-contain opacity-95"
                        priority
                    />
                </div>
                {/* Cloud Top Right */}
                <div className="cloud-hero-2 absolute top-[2%] -right-[5%] md:right-[5%] lg:right-[8%] will-change-transform">
                    <Image
                        src="/clouds/cloud-xl-final.png"
                        alt=""
                        width={500}
                        height={500}
                        className="w-[260px] md:w-[410px] lg:w-[520px] h-auto object-contain opacity-95"
                        priority
                    />
                </div>
                {/* Large Bottom-Right Cloud (The one from subpages) */}
                <div className="cloud-hero-4 absolute bottom-[10%] right-[-10%] will-change-transform">
                    <Image
                        src="/clouds/cloud-xl-final.png"
                        alt=""
                        width={700}
                        height={700}
                        className="w-[350px] md:w-[500px] lg:w-[700px] h-auto object-contain opacity-95 drop-shadow-2xl"
                        priority
                    />
                </div>
            </div>
        );
    }

    // Generate strict deterministic random positions based on the component ID
    // So that we don't get wildly different clouds every render.
    // Using string sum as seed
    const seed = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {customClouds ? (
                customClouds.map((cloud, i) => (
                    <div
                        key={`custom-${i}`}
                        className="cloud-scatter absolute will-change-transform"
                        style={cloud.style}
                    >
                        <Image
                            src={cloud.src}
                            alt=""
                            width={550}
                            height={550}
                            className={`w-[260px] md:w-[380px] lg:w-[500px] h-auto object-contain ${cloud.className || ""}`}
                            priority={i < 2}
                        />
                    </div>
                ))
            ) : (
                Array.from({ length: count }).map((_, i) => {
                    const rng = seededRandom(seed + i);
                    const cloudType = Math.floor(rng * 4);
                    const cloudSources = [
                        "/clouds/puffy-clean-1.png",
                        "/clouds/cloud-xl-final.png",
                        "/clouds/puffy-clean-2.png",
                        "/clouds/cloud-wide-v2.png"
                    ];
                    const src = cloudSources[cloudType] || "/clouds/puffy-clean-1.png";

                    // Randomize positions slightly
                    let style: React.CSSProperties = {};
                    if (i % 2 === 0) {
                        style = { left: `${(rng * 15).toFixed(1)}%`, top: `${(seededRandom(seed + i + 10) * 85).toFixed(1)}%` };
                    } else {
                        style = { right: `${(rng * 20).toFixed(1)}%`, top: `${(seededRandom(seed + i + 10) * 85).toFixed(1)}%` };
                    }

                    const opacity = 0.35 + (rng * 0.45); // 35% to 80% opacity

                    return (
                        <div
                            key={i}
                            className="cloud-scatter absolute will-change-transform"
                            style={style}
                        >
                            <Image
                                src={src}
                                alt=""
                                width={550}
                                height={550}
                                className="w-[260px] md:w-[380px] lg:w-[500px] h-auto object-contain"
                                style={{ opacity }}
                            />
                        </div>
                    );
                })
            )}
        </div>
    );
}
