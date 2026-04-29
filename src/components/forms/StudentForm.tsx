"use client";

import { useState, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentFormSchema, type StudentFormValues } from "@/lib/validations";
import { ArrowRight, ArrowLeft, Loader2, Check, User, Code2, Calendar, CheckCircle } from "lucide-react";

const skillOptions = [
    { value: "react", label: "React" },
    { value: "nextjs", label: "Next.js" },
    { value: "typescript", label: "TypeScript" },
    { value: "nodejs", label: "Node.js" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C/C++" },
    { value: "flutter", label: "Flutter" },
    { value: "figma", label: "Figma" },
    { value: "sql", label: "SQL" },
];

const steps = [
    { num: 1, label: "Personal", icon: User },
    { num: 2, label: "Skills", icon: Code2 },
    { num: 3, label: "Availability", icon: Calendar },
];

export function StudentForm() {
    const [currentStep, setCurrentStep] = useState(1);
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
        setIsSubmitted(true);
    };

    const goNext = useCallback(async () => {
        let fieldsToValidate: (keyof StudentFormValues)[] = [];
        if (currentStep === 1) fieldsToValidate = ["name", "email", "university", "degree"];
        if (currentStep === 2) fieldsToValidate = ["skills", "experience"];

        const valid = await trigger(fieldsToValidate);
        if (valid) setCurrentStep((s) => s + 1);
    }, [currentStep, trigger]);

    const goBack = () => setCurrentStep((s) => s - 1);

    if (isSubmitted) {
        return (
            <div className="text-center py-12 px-6">
                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-display font-medium mb-4 text-[#001738]">Application sent!</h3>
                <p className="text-justify text-[#001738]/50 max-w-sm mx-auto text-lg leading-relaxed">
                    We&apos;ll review your profile and match you with relevant opportunities.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full">
            {/* Step Progress */}
            <div className="flex items-center justify-center mb-12">
                {steps.map((step, i) => (
                    <div key={step.num} className="flex items-center">
                        <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${currentStep === step.num
                                ? "bg-vibrant-blue text-white shadow-lg"
                                : currentStep > step.num
                                    ? "bg-green-600 text-white"
                                    : "bg-gray-100 text-gray-400"
                                }`}
                        >
                            {currentStep > step.num ? <Check className="w-5 h-5" /> : step.num}
                        </div>
                        {i < steps.length - 1 && (
                            <div className="w-12 sm:w-20 h-0.5 mx-2 bg-gray-100">
                                <div
                                    className="h-full bg-green-600 transition-all duration-500"
                                    style={{ width: currentStep > step.num ? "100%" : "0%" }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {currentStep === 1 && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#001738]">Full Name</label>
                                <input className="w-full h-12 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-blue focus:bg-white outline-none transition-all" placeholder="Your full name" {...register("name")} />
                                {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#001738]">Email</label>
                                <input type="email" className="w-full h-12 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-blue focus:bg-white outline-none transition-all" placeholder="you@university.edu" {...register("email")} />
                                {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#001738]">University</label>
                                <input className="w-full h-12 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-blue focus:bg-white outline-none transition-all" placeholder="e.g., Stanford University" {...register("university")} />
                                {errors.university && <p className="text-xs text-red-500 font-medium">{errors.university.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#001738]">Degree</label>
                                <input className="w-full h-12 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-blue focus:bg-white outline-none transition-all" placeholder="e.g., B.Tech CS" {...register("degree")} />
                                {errors.degree && <p className="text-xs text-red-500 font-medium">{errors.degree.message}</p>}
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#001738]">Experience</label>
                            <textarea className="w-full min-h-[120px] p-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-blue focus:bg-white outline-none transition-all resize-none" placeholder="Projects, internships, hackathons..." {...register("experience")} />
                            {errors.experience && <p className="text-xs text-red-500 font-medium">{errors.experience.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#001738]">Portfolio URL (optional)</label>
                            <input className="w-full h-12 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-blue focus:bg-white outline-none transition-all" placeholder="https://github.com/you" {...register("portfolio")} />
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#001738]">Select Skills</label>
                            <div className="flex flex-wrap gap-2">
                                {skillOptions.map(skill => (
                                    <label key={skill.value} className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full cursor-pointer hover:bg-gray-100 transition-all">
                                        <input type="checkbox" className="w-4 h-4 rounded text-vibrant-blue focus:ring-vibrant-blue" value={skill.value} {...register("skills")} />
                                        <span className="text-sm font-medium text-[#001738]">{skill.label}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.skills && <p className="text-xs text-red-500 font-medium">{errors.skills.message}</p>}
                        </div>
                    </div>
                )}

                <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-50">
                    {currentStep > 1 ? (
                        <button type="button" onClick={goBack} className="flex items-center gap-2 text-gray-500 hover:text-[#001738] font-bold transition-all">
                            <ArrowLeft className="w-5 h-5" /> Back
                        </button>
                    ) : <div />}

                    {currentStep < 3 ? (
                        <button type="button" onClick={goNext} className="flex items-center gap-2 bg-[#001738] text-white px-8 py-3 rounded-full font-bold hover:bg-[#001738]/90 transition-all shadow-md">
                            Continue <ArrowRight className="w-5 h-5" />
                        </button>
                    ) : (
                        <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 bg-vibrant-blue text-white px-10 py-3 rounded-full font-bold hover:bg-vibrant-blue-dark transition-all shadow-md disabled:opacity-50">
                            {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <>Apply Now <ArrowRight className="w-5 h-5" /></>}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
