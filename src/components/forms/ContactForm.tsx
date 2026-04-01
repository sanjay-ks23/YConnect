"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Contact form submitted:", data);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-vibrant-blue/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-vibrant-blue" />
                </div>
                <h3 className="text-2xl font-display font-medium mb-3 text-[#001738]">Message sent!</h3>
                <p className="text-[#001738]/50 max-w-sm mx-auto">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
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
                        className="rounded-xl h-12 bg-gray-50 border-gray-100 focus:border-vibrant-blue focus:bg-white transition-all"
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
                        className="rounded-xl h-12 bg-gray-50 border-gray-100 focus:border-vibrant-blue focus:bg-white transition-all"
                        {...register("email")}
                    />
                    {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="contact-subject" className="text-sm font-bold text-[#001738]">Subject</Label>
                <Input
                    id="contact-subject"
                    placeholder="What's this about?"
                    className="rounded-xl h-12 bg-gray-50 border-gray-100 focus:border-vibrant-blue focus:bg-white transition-all"
                    {...register("subject")}
                />
                {errors.subject && <p className="text-xs text-red-500 font-medium">{errors.subject.message}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-sm font-bold text-[#001738]">Message</Label>
                <Textarea
                    id="contact-message"
                    placeholder="Tell us how we can help..."
                    className="rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-blue focus:bg-white transition-all min-h-[150px] resize-none"
                    {...register("message")}
                />
                {errors.message && <p className="text-xs text-red-500 font-medium">{errors.message.message}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 bg-vibrant-blue text-white rounded-full font-bold hover:bg-vibrant-blue-dark transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
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
