import { z } from "zod";

export const startupFormSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  country: z.string().min(2, "Please select a country"),
  otherCountry: z.string().optional(),
  contactPerson: z.string().min(2, "Contact person name is required"),
  email: z.string().email("Please enter a valid email address"),
  roleNeeded: z.array(z.string()).min(1, "Please select at least one role"),
  skillsNeeded: z.array(z.string()).min(1, "Please select at least one skill"),
  duration: z.string().min(1, "Please specify the project duration"),
  budget: z.string().min(1, "Please specify the budget range"),
  description: z.string().min(20, "Description must be at least 20 characters"),
});

export type StartupFormValues = z.infer<typeof startupFormSchema>;

export const studentFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  university: z.string().min(2, "University name is required"),
  degree: z.string().min(2, "Degree information is required"),
  skills: z.array(z.string()).min(1, "Please select at least one skill"),
  experience: z.string().min(10, "Please describe your experience"),
  portfolio: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  availability: z.string().min(1, "Please specify your availability"),
  email: z.string().email("Please enter a valid email address"),
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
