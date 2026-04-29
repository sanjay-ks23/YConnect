"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.search.includes('success=true')) {
            setIsSubmitted(true);
        }
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        const form = document.createElement("form");
        form.method = "POST";
        form.action = "https://formsubmit.co/sanjaysaravanan2317@gmail.com";
        form.style.display = "none";
        
        const nextUrl = window.location.origin + window.location.pathname + "?success=true";
        const configs = [
            { name: "_next", value: nextUrl },
            { name: "_captcha", value: "false" },
            { name: "_template", value: "table" },
            { name: "_subject", value: `New Inquiry from ${data.name}: ${data.subject}` },
        ];
        
        configs.forEach(({ name, value }) => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = name;
            input.value = value;
            form.appendChild(input);
        });

        Object.keys(data).forEach(key => {
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = key;
            input.value = data[key as keyof ContactFormValues];
            form.appendChild(input);
        });

        document.body.appendChild(form);
        form.submit();
    };

    if (isSubmitted) {
        return (
            <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-vibrant-blue/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-vibrant-blue" />
                </div>
                <h3 className="text-2xl font-display font-medium mb-3 text-[#001738]">Message sent!</h3>
                <p className="text-justify text-[#001738]/50 max-w-sm mx-auto">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
                <button onClick={() => window.location.href = window.location.pathname} className="mt-8 text-vibrant-blue font-bold hover:underline">
                    Send another message
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-sm font-bold text-[#001738]">Name</Label>
                    <Input
                        id="contact-name"
                        placeholder="Your name"
                        className="rounded-xl h-12 bg-white border-gray-200 focus:border-vibrant-blue focus:bg-white transition-all shadow-none"
                        {...register("name")}
                    />
                    {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="contact-email" className="text-sm font-bold text-[#001738]">Email</Label>
                    <Input
                        id="contact-email"
                        type="email"
                        placeholder="you@example.com"
                        className="rounded-xl h-12 bg-white border-gray-200 focus:border-vibrant-blue focus:bg-white transition-all shadow-none"
                        {...register("email")}
                    />
                    {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="contact-type" className="text-sm font-bold text-[#001738]">I am a...</Label>
                    <select
                        id="contact-type"
                        className="flex w-full rounded-xl h-12 bg-white border border-gray-200 focus:border-vibrant-blue focus:bg-white transition-all shadow-none px-3 py-2 text-sm text-[#001738] outline-none"
                        {...register("inquiryType")}
                    >
                        <option value="">Select an option</option>
                        <option value="startup">Startup Founder / Team</option>
                        <option value="student">Engineering Student</option>
                        <option value="partner">Potential Partner</option>
                        <option value="other">Other</option>
                    </select>
                    {errors.inquiryType && <p className="text-xs text-red-500 font-medium">{errors.inquiryType.message}</p>}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="contact-subject" className="text-sm font-bold text-[#001738]">Subject</Label>
                    <Input
                        id="contact-subject"
                        placeholder="What's this about?"
                        className="rounded-xl h-12 bg-white border-gray-200 focus:border-vibrant-blue focus:bg-white transition-all shadow-none"
                        {...register("subject")}
                    />
                    {errors.subject && <p className="text-xs text-red-500 font-medium">{errors.subject.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-sm font-bold text-[#001738]">Message</Label>
                <Textarea
                    id="contact-message"
                    placeholder="Tell us how we can help..."
                    className="rounded-xl bg-white border-gray-200 focus:border-vibrant-blue focus:bg-white transition-all min-h-[150px] resize-none shadow-none"
                    {...register("message")}
                />
                {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 bg-vibrant-blue text-white rounded-full font-bold hover:bg-vibrant-blue-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message <ArrowRight className="w-5 h-5" />
                    </>
                )}
            </button>
        </form>
    );
}
