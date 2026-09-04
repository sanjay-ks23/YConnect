import { z } from "zod";

export const availabilityOptions = [
  "5-10 hrs/week",
  "10-15 hrs/week",
  "15-20 hrs/week",
  "20+ hrs/week",
];

export const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024; // 5MB
export const ALLOWED_RESUME_TYPES = ["application/pdf"];

export const startupFormSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  country: z.string().min(2, "Please select a country"),
  otherCountry: z.string().optional(),
  contactPerson: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Please enter a valid email address"),
  duration: z.string().optional(),
  budget: z.string().optional(),
  roles: z.array(z.string()).min(1, "Please select at least one role"),
  description: z.string().min(20, "Description must be at least 20 characters"),
});

export type StartupFormValues = z.infer<typeof startupFormSchema>;

export const studentFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  university: z.string().min(2, "University name is required"),
  degree: z.string().min(2, "Degree information is required"),
  skills: z.array(z.string()).min(1, "Please select at least one role"),
  availability: z.string().min(1, "Please specify your availability"),
  experience: z.string().min(10, "Please describe your experience"),
  portfolio: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  email: z.string().email("Please enter a valid email address"),
  resume: z
    .custom<FileList>()
    .refine((files) => files && files.length === 1, "Resume (PDF) is required")
    .refine((files) => files?.[0]?.size <= MAX_RESUME_SIZE_BYTES, "Resume must be 5MB or smaller")
    .refine((files) => ALLOWED_RESUME_TYPES.includes(files?.[0]?.type), "Only PDF files are accepted"),
});

export type StudentFormValues = z.infer<typeof studentFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  inquiryType: z.string().min(1, "Please select an inquiry type"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
