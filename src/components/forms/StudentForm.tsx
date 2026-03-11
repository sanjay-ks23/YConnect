"use client";

import { useState, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentFormSchema, type StudentFormValues } from "@/lib/validations";
import { ArrowRight, ArrowLeft, Loader2, Check, User, Code2, Calendar } from "lucide-react";
import { GooeyButton } from "@/components/ui/GooeyButton";
import { LottiePlayer } from "@/components/ui/LottiePlayer";
import { MultiSelect } from "@/components/ui/multi-selector";

const skillOptions = [
    // Frontend
    { value: "html-css", label: "HTML / CSS" },
    { value: "javascript", label: "JavaScript" },
    { value: "typescript", label: "TypeScript" },
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "vue", label: "Vue.js" },
    { value: "angular", label: "Angular" },
    { value: "tailwindcss", label: "Tailwind CSS" },
    // Mobile
    { value: "flutter", label: "Flutter" },
    { value: "react-native", label: "React Native" },
    { value: "swift", label: "Swift" },
    { value: "kotlin", label: "Kotlin" },
    // Backend
    { value: "nodejs", label: "Node.js" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C / C++" },
    { value: "rust", label: "Rust" },
    { value: "go", label: "Go" },
    { value: "django", label: "Django" },
    { value: "flask", label: "Flask / FastAPI" },
    { value: "spring", label: "Spring Boot" },
    // Data / ML
    { value: "tensorflow", label: "TensorFlow" },
    { value: "pytorch", label: "PyTorch" },
    { value: "scikit-learn", label: "Scikit-Learn" },
    { value: "pandas", label: "Pandas / NumPy" },
    { value: "nlp", label: "NLP" },
    { value: "computer-vision", label: "Computer Vision" },
    { value: "data-analysis", label: "Data Analysis" },
    // DevOps / DB
    { value: "sql", label: "SQL / Databases" },
    { value: "mongodb", label: "MongoDB" },
    { value: "aws", label: "AWS" },
    { value: "gcp", label: "GCP" },
    { value: "docker", label: "Docker / Kubernetes" },
    { value: "ci-cd", label: "CI/CD" },
    { value: "git", label: "Git / GitHub" },
    // Design
    { value: "figma", label: "Figma" },
    { value: "adobe", label: "Adobe Suite" },
    { value: "ui-ux", label: "UI/UX Design" },
    { value: "3d-modeling", label: "3D Modeling / Blender" },
    // Other
    { value: "graphql", label: "GraphQL" },
    { value: "rest-api", label: "REST APIs" },
    { value: "blockchain", label: "Blockchain / Solidity" },
    { value: "arduino", label: "Arduino / IoT" },
    { value: "matlab", label: "MATLAB" },
    { value: "r-lang", label: "R" },
];

const availabilityOptions = [
    "Immediately", "Within 2 weeks", "Within 1 month", "Within 2 months", "Flexible",
];

const steps = [
    { num: 1, label: "Personal", icon: User },
    { num: 2, label: "Skills", icon: Code2 },
    { num: 3, label: "Availability", icon: Calendar },
];

export function StudentForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [direction, setDirection] = useState<"right" | "left">("right");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        control,
        handleSubmit,
        trigger,
        formState: { errors, isSubmitting },
    } = useForm<StudentFormValues>({
        resolver: zodResolver(studentFormSchema),
        mode: "onTouched",
        defaultValues: {
            skills: [],
        },
    });

    const onSubmit = async (data: StudentFormValues) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Student form submitted:", data);
        setIsSubmitted(true);
    };

    const goNext = useCallback(async () => {
        let fieldsToValidate: (keyof StudentFormValues)[] = [];
        if (currentStep === 1) fieldsToValidate = ["name", "email", "university", "degree"];
        if (currentStep === 2) fieldsToValidate = ["skills", "experience"];

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

    // Enter key to go next (except on textarea and last step)
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
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Application submitted!</h3>
                <p className="text-foreground/50 max-w-md mx-auto text-lg leading-relaxed">
                    We&apos;ll review your profile and match you with relevant startup opportunities.
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
                                ? "bg-vibrant-orange text-white shadow-lg shadow-vibrant-orange/30"
                                : currentStep > step.num
                                    ? "bg-vibrant-green text-white"
                                    : "bg-[#e8ecf4] text-foreground/30"
                                }`}
                        >
                            {currentStep > step.num ? <Check className="w-4 h-4" /> : step.num}
                        </div>
                        {i < steps.length - 1 && (
                            <div className="w-20 sm:w-28 h-[3px] mx-2 bg-[#e8ecf4] rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-vibrant-green rounded-full transition-all duration-500"
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
                {/* Step 1: Personal Info */}
                {currentStep === 1 && (
                    <div key="step1" className={direction === "right" ? "animate-slide-right" : "animate-slide-left"}>
                        <div className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground/70 block">Full Name</label>
                                    <input className="input-bouncy" placeholder="Your full name"
                                        style={{ "--ring": "#FF6D00" } as React.CSSProperties} {...register("name")} />
                                    {errors.name && <p className="text-xs text-coral-red font-medium mt-1">{errors.name.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground/70 block">Email</label>
                                    <input type="email" className="input-bouncy" placeholder="you@university.ac.in"
                                        style={{ "--ring": "#FF6D00" } as React.CSSProperties} {...register("email")} />
                                    {errors.email && <p className="text-xs text-coral-red font-medium mt-1">{errors.email.message}</p>}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground/70 block">University</label>
                                    <input className="input-bouncy" placeholder="e.g., IIT Bombay"
                                        style={{ "--ring": "#FF6D00" } as React.CSSProperties} {...register("university")} />
                                    {errors.university && <p className="text-xs text-coral-red font-medium mt-1">{errors.university.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-foreground/70 block">Degree</label>
                                    <input className="input-bouncy" placeholder="e.g., B.Tech CS"
                                        style={{ "--ring": "#FF6D00" } as React.CSSProperties} {...register("degree")} />
                                    {errors.degree && <p className="text-xs text-coral-red font-medium mt-1">{errors.degree.message}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Skills & Experience */}
                {currentStep === 2 && (
                    <div key="step2" className={direction === "right" ? "animate-slide-right" : "animate-slide-left"}>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground/70 block">Skills</label>
                                <Controller
                                    name="skills"
                                    control={control}
                                    render={({ field }) => (
                                        <MultiSelect
                                            options={skillOptions}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                            placeholder="Select your skills..."
                                            maxCount={5}
                                            accentColor="#FF6D00"
                                        />
                                    )}
                                />
                                {errors.skills && <p className="text-xs text-coral-red font-medium mt-1">{errors.skills.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground/70 block">Experience</label>
                                <textarea className="textarea-bouncy" placeholder="Projects, internships, hackathons, open source..."
                                    style={{ "--ring": "#FF6D00" } as React.CSSProperties} {...register("experience")} />
                                {errors.experience && <p className="text-xs text-coral-red font-medium mt-1">{errors.experience.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground/70 block">
                                    Portfolio URL <span className="text-foreground/30 font-normal">(optional)</span>
                                </label>
                                <input className="input-bouncy" placeholder="https://github.com/you"
                                    style={{ "--ring": "#FF6D00" } as React.CSSProperties} {...register("portfolio")} />
                                {errors.portfolio && <p className="text-xs text-coral-red font-medium mt-1">{errors.portfolio.message}</p>}
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 3: Availability */}
                {currentStep === 3 && (
                    <div key="step3" className={direction === "right" ? "animate-slide-right" : "animate-slide-left"}>
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground/70 block">Availability</label>
                                <select className="select-bouncy" style={{ "--ring": "#FF6D00" } as React.CSSProperties} {...register("availability")}>
                                    <option value="">When can you start?</option>
                                    {availabilityOptions.map((a) => <option key={a} value={a}>{a}</option>)}
                                </select>
                                {errors.availability && <p className="text-xs text-coral-red font-medium mt-1">{errors.availability.message}</p>}
                            </div>
                            <div className="rounded-2xl bg-vibrant-orange/5 border border-vibrant-orange/10 p-5">
                                <p className="text-sm text-foreground/50 leading-relaxed">
                                    <span className="font-semibold text-foreground/70">What happens next?</span>{" "}
                                    We&apos;ll review within 24-48 hours and match you with relevant opportunities.
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
                        <GooeyButton type="button" onClick={goNext} accentColor="#FF6D00" className="bg-white/40 backdrop-blur-3xl border border-white/60 shadow-sm text-[#001738] rounded-full px-6 py-3">
                            Continue <ArrowRight className="w-4 h-4" />
                        </GooeyButton>
                    ) : (
                        <GooeyButton type="submit" disabled={isSubmitting} accentColor="#00C853" className="bg-white/40 backdrop-blur-3xl border border-white/60 shadow-sm text-[#001738] rounded-full px-8 py-3">
                            {isSubmitting ? (
                                <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                            ) : (
                                <>Apply Now <ArrowRight className="w-4 h-4" /></>
                            )}
                        </GooeyButton>
                    )}
                </div>
            </form>
        </div>
    );
}
