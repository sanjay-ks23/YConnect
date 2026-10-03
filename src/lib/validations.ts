import { z } from "zod";

export const availabilityOptions = [
  "5-10 hrs/week",
  "10-15 hrs/week",
  "15-20 hrs/week",
  "20+ hrs/week",
];

// 4MB — Vercel serverless rejects request bodies above ~4.5MB, so a larger
// limit could never succeed in production anyway.
export const MAX_RESUME_SIZE_BYTES = 4 * 1024 * 1024; // 4MB
export const ALLOWED_RESUME_TYPES = ["application/pdf"];

export const CONSENT_MESSAGES = {
  age: "Please confirm you are at least 18 years old",
  terms: "You must agree to the Terms of Service",
  privacy: "Please acknowledge the Privacy Policy",
} as const;

/** Checkbox-style confirmations: must be explicitly ticked (true). */
const mustBeTrue = (message: string) =>
  z.boolean().refine((v) => v === true, { message });

export const startupFormSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters").max(200),
  country: z.string().min(2, "Please select a country").max(100),
  otherCountry: z.string().max(100).optional(),
  contactPerson: z.string().min(2, "Contact person name is required").max(200),
  email: z.string().email("Please enter a valid email address").max(254),
  duration: z.string().max(100).optional(),
  budget: z.string().max(100).optional(),
  roles: z.array(z.string().max(100)).min(1, "Please select at least one role").max(20),
  description: z.string().min(20, "Description must be at least 20 characters").max(5000),
  termsAccepted: mustBeTrue(CONSENT_MESSAGES.terms),
  privacyAcknowledged: mustBeTrue(CONSENT_MESSAGES.privacy),
});

export type StartupFormValues = z.infer<typeof startupFormSchema>;

export const studentFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(200),
  university: z.string().min(2, "University name is required").max(300),
  degree: z.string().min(2, "Degree information is required").max(300),
  skills: z.array(z.string().max(100)).min(1, "Please select at least one role").max(30),
  availability: z.string().min(1, "Please specify your availability").max(100),
  experience: z.string().min(10, "Please describe your experience").max(10000),
  portfolio: z.string().url("Please enter a valid URL").max(500).optional().or(z.literal("")),
  email: z.string().email("Please enter a valid email address").max(254),
  resume: z
    .custom<FileList>()
    .refine((files) => files && files.length === 1, "Resume (PDF) is required")
    .refine((files) => files?.[0]?.size <= MAX_RESUME_SIZE_BYTES, "Resume must be 4MB or smaller")
    .refine((files) => ALLOWED_RESUME_TYPES.includes(files?.[0]?.type), "Only PDF files are accepted"),
  ageConfirmed: mustBeTrue(CONSENT_MESSAGES.age),
  termsAccepted: mustBeTrue(CONSENT_MESSAGES.terms),
  privacyAcknowledged: mustBeTrue(CONSENT_MESSAGES.privacy),
});

export type StudentFormValues = z.infer<typeof studentFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(200),
  email: z.string().email("Please enter a valid email address").max(254),
  inquiryType: z.string().min(1, "Please select an inquiry type").max(100),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(300),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  privacyAcknowledged: mustBeTrue(CONSENT_MESSAGES.privacy),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
