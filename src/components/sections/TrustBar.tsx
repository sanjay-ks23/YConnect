import { ScrollReveal } from "@/components/animations/ScrollReveal";

const logos = [
    "TechCrunch",
    "Y Combinator",
    "Stripe",
    "Notion",
    "Figma",
    "Vercel",
    "Linear",
    "Spotify",
];

export function TrustBar() {
    return (
        <section className="py-8">
            <div className="container-superhi">
                <ScrollReveal variant="scale-in">
                    <div className="superhi-section bg-white/70 backdrop-blur-sm border border-white/40 px-8 py-10">
                        <p className="text-center text-xs font-semibold text-foreground/35 mb-8 uppercase tracking-[0.2em]">
                            Our students work at the best
                        </p>
                        <div className="relative overflow-hidden">
                            <div className="flex items-center justify-center gap-8 sm:gap-14 lg:gap-20 flex-wrap">
                                {logos.map((logo) => (
                                    <div
                                        key={logo}
                                        className="text-foreground/20 hover:text-foreground/50 transition-all duration-400 hover:scale-105 cursor-default"
                                    >
                                        <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight">
                                            {logo}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
