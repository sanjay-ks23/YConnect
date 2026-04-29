"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { startupFormSchema, type StartupFormValues } from "@/lib/validations";
import { ArrowRight, ArrowLeft, Loader2, Check, Building2, Wrench, FileText, CheckCircle } from "lucide-react";

const durations = ["1 month", "2 months", "3 months", "4-6 months", "6+ months"];
const budgets = ["< €500/mo", "€500 – €1,000/mo", "€1,000 – €1,500/mo", "€1,500 – €2,500/mo", "€2,500+/mo"];

const steps = [
    { num: 1, label: "Company", icon: Building2 },
    { num: 2, label: "Project", icon: Wrench },
    { num: 3, label: "Details", icon: FileText },
];

export function StartupForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        trigger,
        formState: { errors, isSubmitting },
    } = useForm<StartupFormValues>({
        resolver: zodResolver(startupFormSchema),
        mode: "onTouched",
    });

    const onSubmit = async (data: StartupFormValues) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitted(true);
    };

    const goNext = useCallback(async () => {
        let fieldsToValidate: (keyof StartupFormValues)[] = [];
        if (currentStep === 1) fieldsToValidate = ["companyName", "country", "contactPerson", "email"];
        if (currentStep === 2) fieldsToValidate = ["duration", "budget"];

        const valid = await trigger(fieldsToValidate);
        if (valid) setCurrentStep((s) => s + 1);
    }, [currentStep, trigger]);

    const goBack = () => setCurrentStep((s) => s - 1);

    if (isSubmitted) {
        return (
            <div className="text-center py-12 px-6">
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-10 h-10 text-vibrant-blue" />
                </div>
                <h3 className="text-3xl font-display font-medium mb-4 text-[#001738]">Requirements sent!</h3>
                <p className="text-justify text-[#001738]/50 max-w-sm mx-auto text-lg leading-relaxed">
                    We&apos;ll review and get back to you within 48 hours with matches.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-center mb-12">
                {steps.map((step, i) => (
                    <div key={step.num} className="flex items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                            currentStep === step.num ? "bg-vibrant-blue text-white shadow-lg" : 
                            currentStep > step.num ? "bg-green-600 text-white" : "bg-gray-100 text-gray-400"
                        }`}>
                            {currentStep > step.num ? <Check className="w-5 h-5" /> : step.num}
                        </div>
                        {i < steps.length - 1 && <div className="w-12 sm:w-20 h-0.5 mx-2 bg-gray-100" />}
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {currentStep === 1 && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#001738]">Company Name</label>
                                <input className="w-full h-12 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-blue focus:bg-white outline-none transition-all" placeholder="Your startup name" {...register("companyName")} />
                                {errors.companyName && <p className="text-xs text-red-500 font-medium">{errors.companyName.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#001738]">Country</label>
                                <input className="w-full h-12 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-blue focus:bg-white outline-none transition-all" placeholder="e.g. Netherlands" {...register("country")} />
                                {errors.country && <p className="text-xs text-red-500 font-medium">{errors.country.message}</p>}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#001738]">Contact Person</label>
                                <input className="w-full h-12 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-blue focus:bg-white outline-none transition-all" placeholder="Your full name" {...register("contactPerson")} />
                                {errors.contactPerson && <p className="text-xs text-red-500 font-medium">{errors.contactPerson.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#001738]">Email</label>
                                <input type="email" className="w-full h-12 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-blue focus:bg-white outline-none transition-all" placeholder="you@startup.eu" {...register("email")} />
                                {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="space-y-4">
                            <label className="text-sm font-bold text-[#001738]">Duration</label>
                            <div className="flex flex-wrap gap-2">
                                {durations.map(d => (
                                    <label key={d} className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full cursor-pointer hover:bg-gray-100">
                                        <input type="radio" className="w-4 h-4 text-vibrant-blue focus:ring-vibrant-blue" value={d} {...register("duration")} />
                                        <span className="text-sm font-medium text-[#001738]">{d}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-4">
                            <label className="text-sm font-bold text-[#001738]">Budget</label>
                            <div className="flex flex-wrap gap-2">
                                {budgets.map(b => (
                                    <label key={b} className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 rounded-full cursor-pointer hover:bg-gray-100">
                                        <input type="radio" className="w-4 h-4 text-vibrant-blue focus:ring-vibrant-blue" value={b} {...register("budget")} />
                                        <span className="text-sm font-medium text-[#001738]">{b}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 3 && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#001738]">Project Description</label>
                            <textarea className="w-full min-h-[150px] p-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-blue focus:bg-white outline-none transition-all resize-none" placeholder="Tell us about the project..." {...register("description")} />
                            {errors.description && <p className="text-xs text-red-500 font-medium">{errors.description.message}</p>}
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
                            {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <>Submit <ArrowRight className="w-5 h-5" /></>}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
