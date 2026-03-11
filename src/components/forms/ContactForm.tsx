"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { GooeyButton } from "@/components/ui/GooeyButton";

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
                <div className="w-16 h-16 rounded-full bg-vibrant-green/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-vibrant-green" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Message sent!</h3>
                <p className="text-foreground/60 max-w-md mx-auto">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                    <Label htmlFor="contact-name" className="text-sm font-medium">
                        Name *
                    </Label>
                    <Input
                        id="contact-name"
                        placeholder="Your name"
                        className="rounded-xl h-12 bg-white border-border/50 focus:border-vibrant-blue"
                        {...register("name")}
                    />
                    {errors.name && (
                        <p className="text-xs text-coral-red">{errors.name.message}</p>
                    )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <Label htmlFor="contact-email" className="text-sm font-medium">
                        Email *
                    </Label>
                    <Input
                        id="contact-email"
                        type="email"
                        placeholder="you@example.com"
                        className="rounded-xl h-12 bg-white border-border/50 focus:border-vibrant-blue"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-xs text-coral-red">{errors.email.message}</p>
                    )}
                </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
                <Label htmlFor="contact-subject" className="text-sm font-medium">
                    Subject *
                </Label>
                <Input
                    id="contact-subject"
                    placeholder="What's this about?"
                    className="rounded-xl h-12 bg-white border-border/50 focus:border-vibrant-blue"
                    {...register("subject")}
                />
                {errors.subject && (
                    <p className="text-xs text-coral-red">{errors.subject.message}</p>
                )}
            </div>

            {/* Message */}
            <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-sm font-medium">
                    Message *
                </Label>
                <Textarea
                    id="contact-message"
                    placeholder="Tell us how we can help..."
                    className="rounded-xl bg-white border-border/50 focus:border-vibrant-blue min-h-[150px] resize-none"
                    {...register("message")}
                />
                {errors.message && (
                    <p className="text-xs text-coral-red">{errors.message.message}</p>
                )}
            </div>

            {/* Submit */}
            <GooeyButton
                type="submit"
                disabled={isSubmitting}
                accentColor="#2E31D1"
                className="w-full justify-center text-base py-4 bg-white/20 backdrop-blur-2xl border border-white/80 shadow-sm text-[#001738] rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                )}
            </GooeyButton>
        </form>
    );
}
