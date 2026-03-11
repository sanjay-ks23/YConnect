"use client";

import { useState, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { startupFormSchema, type StartupFormValues } from "@/lib/validations";
import { ArrowRight, ArrowLeft, Loader2, Check, Building2, Wrench, FileText } from "lucide-react";
import { GooeyButton } from "@/components/ui/GooeyButton";
import { GooeyRadio } from "@/components/ui/GooeyRadio";
import { LottiePlayer } from "@/components/ui/LottiePlayer";
import { MultiSelect } from "@/components/ui/multi-selector";

const mainCountries = [
    "Netherlands", "Germany", "France", "Sweden", "Denmark",
    "Finland", "Norway", "Belgium", "Austria", "Switzerland",
    "Spain", "Italy", "Portugal", "Ireland", "Poland",
    "Czech Republic",
];

const otherEUCountries = [
    "Estonia", "Latvia", "Lithuania", "Luxembourg", "Malta",
    "Slovenia", "Slovakia", "Croatia", "Bulgaria", "Romania",
    "Hungary", "Greece", "Cyprus",
];

const durations = [
    "1 month", "2 months", "3 months", "4-6 months", "6+ months",
];

const budgets = [
    "< €500/mo", "€500 – €1,000/mo", "€1,000 – €1,500/mo", "€1,500 – €2,500/mo", "€2,500+/mo",
];

const roleOptions = [
    { value: "frontend-developer", label: "Frontend Developer" },
    { value: "backend-developer", label: "Backend Developer" },
    { value: "fullstack-developer", label: "Full Stack Developer" },
    { value: "mobile-developer", label: "Mobile Developer" },
    { value: "ml-engineer", label: "ML / AI Engineer" },
    { value: "data-scientist", label: "Data Scientist" },
    { value: "data-analyst", label: "Data Analyst" },
    { value: "devops-engineer", label: "DevOps / Cloud Engineer" },
    { value: "ui-ux-designer", label: "UI/UX Designer" },
    { value: "product-designer", label: "Product Designer" },
    { value: "graphic-designer", label: "Graphic Designer" },
    { value: "qa-engineer", label: "QA / Test Engineer" },
    { value: "embedded-engineer", label: "Embedded Systems Engineer" },
    { value: "blockchain-developer", label: "Blockchain Developer" },
    { value: "technical-writer", label: "Technical Writer" },
    { value: "research-intern", label: "Research Intern" },
];

const skillOptions = [
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "typescript", label: "TypeScript" },
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "nodejs", label: "Node.js" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C/C++" },
    { value: "rust", label: "Rust" },
    { value: "go", label: "Go" },
    { value: "flutter", label: "Flutter" },
    { value: "react-native", label: "React Native" },
    { value: "swift", label: "Swift" },
    { value: "kotlin", label: "Kotlin" },
    { value: "tensorflow", label: "TensorFlow" },
    { value: "pytorch", label: "PyTorch" },
    { value: "scikit-learn", label: "Scikit-Learn" },
    { value: "pandas", label: "Pandas / NumPy" },
    { value: "sql", label: "SQL / Databases" },
    { value: "mongodb", label: "MongoDB" },
    { value: "aws", label: "AWS" },
    { value: "gcp", label: "GCP" },
    { value: "docker", label: "Docker / Kubernetes" },
    { value: "figma", label: "Figma" },
    { value: "adobe", label: "Adobe Suite" },
    { value: "tailwindcss", label: "Tailwind CSS" },
    { value: "graphql", label: "GraphQL" },
    { value: "rest-api", label: "REST APIs" },
    { value: "git", label: "Git / GitHub" },
    { value: "ci-cd", label: "CI/CD" },
    { value: "nlp", label: "NLP" },
    { value: "computer-vision", label: "Computer Vision" },
    { value: "arduino", label: "Arduino / IoT" },
    { value: "solidity", label: "Solidity / Web3" },
];

const steps = [
    { num: 1, label: "Company", icon: Building2 },
    { num: 2, label: "Project", icon: Wrench },
    { num: 3, label: "Details", icon: FileText },
];

export function StartupForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [direction, setDirection] = useState<"right" | "left">("right");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showOtherEU, setShowOtherEU] = useState(false);

    const {
        register,
        control,
        handleSubmit,
        trigger,
        watch,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<StartupFormValues>({
        resolver: zodResolver(startupFormSchema),
        mode: "onTouched",
        defaultValues: {
            roleNeeded: [],
            skillsNeeded: [],
        },
    });

    const countryValue = watch("country");

    const onSubmit = async (data: StartupFormValues) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Startup form submitted:", data);
        setIsSubmitted(true);
    };

    const goNext = useCallback(async () => {
        let fieldsToValidate: (keyof StartupFormValues)[] = [];
        if (currentStep === 1) fieldsToValidate = ["companyName", "country", "contactPerson", "email"];
        if (currentStep === 2) fieldsToValidate = ["roleNeeded", "skillsNeeded", "duration", "budget"];

        const valid = await trigger(fieldsToValidate);
        if (valid) {
            setDirection("right");
            setCurrentStep((s) => s + 1);
        }
    }, [currentStep, trigger]);

    const goBack = () => {
        setDirection("left");
        setCurrentStep((s) => s - 1);
    };

    // Enter key to go next (except on textarea and when on last step)
    const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !(e.target instanceof HTMLTextAreaElement) && currentStep < 3) {
            e.preventDefault();
            goNext();
        }
    }, [currentStep, goNext]);

    if (isSubmitted) {
        return (
            <div className="text-center py-12 px-6">
                <div className="mx-auto mb-6 flex items-center justify-center">
                    <LottiePlayer
                        src="https://lottie.host/f365c8a1-a7c7-4295-bd2d-ad0e123436d2/gjGybtWoFL.lottie"
                        width={180}
                        height={180}
                    />
                </div>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Requirements submitted!</h3>
                <p className="text-foreground/50 max-w-md mx-auto text-lg leading-relaxed">
                    Our team will review and get back to you within 48 hours with potential matches.
                </p>
            </div>
        );
    }

    return (
        <div onKeyDown={handleKeyDown}>
            {/* Step Progress */}
            <div className="flex items-center justify-center mb-4">
                {steps.map((step, i) => (
                    <div key={step.num} className="flex items-center">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${currentStep === step.num
                                ? "bg-vibrant-blue text-white shadow-lg shadow-vibrant-blue/30"
                                : currentStep > step.num
                                    ? "bg-vibrant-crimson text-white"
                                    : "bg-[#e8ecf4] text-foreground/30"
                                }`}
                        >
                            {currentStep > step.num ? <Check className="w-4 h-4" /> : step.num}
                        </div>
                        {i < steps.length - 1 && (
                            <div className="w-20 sm:w-28 h-[3px] mx-2 bg-[#e8ecf4] rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-vibrant-crimson rounded-full transition-all duration-500"
                                    style={{ width: currentStep > step.num ? "100%" : "0%" }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Step Labels - properly centered under dots */}
            <div className="flex items-center justify-center mb-8">
                {steps.map((step, i) => (
                    <div key={step.num} className="flex items-center">
                        <div className="w-10 text-center">
                            <span className={`text-[10px] font-semibold tracking-wider uppercase ${currentStep >= step.num ? "text-foreground/70" : "text-foreground/25"
                                }`}>{step.label}</span>
                        </div>
                        {i < steps.length - 1 && (
                            <div className="w-20 sm:w-28 mx-2" />
                        )}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Step 1: Company Info */}
                {currentStep === 1 && (
                    <div key="step1" className={direction === "right" ? "animate-slide-right" : "animate-slide-left"}>
                        <div className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground/70 block">Company Name</label>
                                    <input className="input-bouncy" placeholder="Your startup name"
                                        style={{ "--ring": "#2E31D1" } as React.CSSProperties} {...register("companyName")} />
                                    {errors.companyName && <p className="text-xs text-coral-red font-medium mt-1">{errors.companyName.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground/70 block">Country</label>
                                    <select
                                        className="select-bouncy"
                                        style={{ "--ring": "#2E31D1" } as React.CSSProperties}
                                        {...register("country")}
                                        onChange={(e) => {
                                            register("country").onChange(e);
                                            if (e.target.value === "Other EU") {
                                                setShowOtherEU(true);
                                            } else {
                                                setShowOtherEU(false);
                                            }
                                        }}
                                    >
                                        <option value="">Select country</option>
                                        {mainCountries.map((c) => <option key={c} value={c}>{c}</option>)}
                                        <option value="Other EU">Other EU Country...</option>
                                    </select>
                                    {errors.country && <p className="text-xs text-coral-red font-medium mt-1">{errors.country.message}</p>}

                                    {/* Other EU Country Popover */}
                                    {(showOtherEU || countryValue === "Other EU") && (
                                        <div className="mt-3 p-4 bg-vibrant-blue/5 border border-vibrant-blue/10 rounded-2xl animate-slide-right">
                                            <label className="text-xs font-semibold text-foreground/50 block mb-2">Select your EU country</label>
                                            <div className="grid grid-cols-2 gap-1.5 max-h-[200px] overflow-y-auto">
                                                {otherEUCountries.map((c) => (
                                                    <button
                                                        key={c}
                                                        type="button"
                                                        className={`text-left px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${countryValue === c
                                                            ? "bg-vibrant-blue text-white"
                                                            : "text-foreground/60 hover:bg-foreground/5"
                                                            }`}
                                                        onClick={() => {
                                                            setValue("country", c);
                                                            setShowOtherEU(false);
                                                        }}
                                                    >
                                                        {c}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground/70 block">Contact Person</label>
                                    <input className="input-bouncy" placeholder="Your full name"
                                        style={{ "--ring": "#2E31D1" } as React.CSSProperties} {...register("contactPerson")} />
                                    {errors.contactPerson && <p className="text-xs text-coral-red font-medium mt-1">{errors.contactPerson.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground/70 block">Email</label>
                                    <input type="email" className="input-bouncy" placeholder="you@startup.eu"
                                        style={{ "--ring": "#2E31D1" } as React.CSSProperties} {...register("email")} />
                                    {errors.email && <p className="text-xs text-coral-red font-medium mt-1">{errors.email.message}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Project Needs */}
                {currentStep === 2 && (
                    <div key="step2" className={direction === "right" ? "animate-slide-right" : "animate-slide-left"}>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground/70 block">Role Needed</label>
                                <Controller
                                    name="roleNeeded"
                                    control={control}
                                    render={({ field }) => (
                                        <MultiSelect
                                            options={roleOptions}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                            placeholder="Select roles..."
                                            maxCount={3}
                                            accentColor="#2E31D1"
                                        />
                                    )}
                                />
                                {errors.roleNeeded && <p className="text-xs text-coral-red font-medium mt-1">{errors.roleNeeded.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground/70 block">Skills Needed</label>
                                <Controller
                                    name="skillsNeeded"
                                    control={control}
                                    render={({ field }) => (
                                        <MultiSelect
                                            options={skillOptions}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                            placeholder="Select skills..."
                                            maxCount={4}
                                            accentColor="#2E31D1"
                                        />
                                    )}
                                />
                                {errors.skillsNeeded && <p className="text-xs text-coral-red font-medium mt-1">{errors.skillsNeeded.message}</p>}
                            </div>
                            <div className="grid grid-cols-1 gap-6 pt-2 border-t border-border/40 mt-6">
                                <div className="space-y-4">
                                    <label className="text-sm font-semibold text-foreground/70 block">Duration</label>
                                    <Controller
                                        name="duration"
                                        control={control}
                                        render={({ field }) => (
                                            <div className="flex flex-wrap gap-x-2 gap-y-3">
                                                {durations.map((d) => (
                                                    <label key={d} className="flex items-center gap-2.5 cursor-pointer group bg-foreground/5 hover:bg-foreground/10 px-4 py-2.5 rounded-2xl transition-all duration-300">
                                                        <GooeyRadio
                                                            name="duration"
                                                            value={d}
                                                            checked={field.value === d}
                                                            onChange={field.onChange}
                                                            accentColor="#2E31D1"
                                                        />
                                                        <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">{d}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    />
                                    {errors.duration && <p className="text-xs text-coral-red font-medium mt-1">{errors.duration.message}</p>}
                                </div>
                                <div className="space-y-4 mt-2">
                                    <label className="text-sm font-semibold text-foreground/70 block">Budget</label>
                                    <Controller
                                        name="budget"
                                        control={control}
                                        render={({ field }) => (
                                            <div className="flex flex-wrap gap-x-2 gap-y-3">
                                                {budgets.map((b) => (
                                                    <label key={b} className="flex items-center gap-2.5 cursor-pointer group bg-foreground/5 hover:bg-foreground/10 px-4 py-2.5 rounded-2xl transition-all duration-300">
                                                        <GooeyRadio
                                                            name="budget"
                                                            value={b}
                                                            checked={field.value === b}
                                                            onChange={field.onChange}
                                                            accentColor="#00C853"
                                                        />
                                                        <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">{b}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    />
                                    {errors.budget && <p className="text-xs text-coral-red font-medium mt-1">{errors.budget.message}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Description */}
                {currentStep === 3 && (
                    <div key="step3" className={direction === "right" ? "animate-slide-right" : "animate-slide-left"}>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground/70 block">Project Description</label>
                                <textarea className="textarea-bouncy min-h-[180px]"
                                    placeholder="Tell us about the project, key deliverables, and any other relevant details..."
                                    style={{ "--ring": "#2E31D1" } as React.CSSProperties} {...register("description")} />
                                {errors.description && <p className="text-xs text-coral-red font-medium mt-1">{errors.description.message}</p>}
                            </div>
                            <div className="rounded-2xl bg-vibrant-blue/5 border border-vibrant-blue/10 p-5">
                                <p className="text-sm text-foreground/50 leading-relaxed">
                                    <span className="font-semibold text-foreground/70">What happens next?</span>{" "}
                                    We&apos;ll review within 24-48 hours and present 2-3 matched student profiles.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-10 pt-6 border-t border-border/30">
                    {currentStep > 1 ? (
                        <button type="button" onClick={goBack}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-foreground/50 hover:text-foreground hover:bg-foreground/5 transition-all duration-300">
                            <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                    ) : <div />}

                    {currentStep < 3 ? (
                        <GooeyButton type="button" onClick={goNext} accentColor="#C70039" className="bg-white/40 backdrop-blur-3xl border border-white/60 shadow-sm text-[#001738] rounded-full px-6 py-3">
                            Continue <ArrowRight className="w-4 h-4" />
                        </GooeyButton>
                    ) : (
                        <GooeyButton type="submit" disabled={isSubmitting} accentColor="#00C853" className="bg-white/40 backdrop-blur-3xl border border-white/60 shadow-sm text-[#001738] rounded-full px-8 py-3">
                            {isSubmitting ? (
                                <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                            ) : (
                                <>Submit Requirements <ArrowRight className="w-4 h-4" /></>
                            )}
                        </GooeyButton>
                    )}
                </div>
            </form>
        </div>
    );
}
