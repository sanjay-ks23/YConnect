"use client";

import { useState, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentFormSchema, type StudentFormValues } from "@/lib/validations";
import { ArrowRight, ArrowLeft, Loader2, Check, User, Code2, Calendar, CheckCircle, X } from "lucide-react";
import { indianUniversities, searchUniversities } from "@/lib/universities";

const roleOptions = [
 { value: "software_engineer", label: "Software Engineer" },
 { value: "ml_engineer", label: "ML Engineer" },
 { value: "frontend_developer", label: "Frontend Developer" },
 { value: "backend_developer", label: "Backend Developer" },
 { value: "fullstack_developer", label: "Fullstack Developer" },
 { value: "mobile_developer", label: "Mobile Developer" },
 { value: "data_scientist", label: "Data Scientist" },
 { value: "data_analyst", label: "Data Analyst" },
 { value: "ui_ux_designer", label: "UI/UX Designer" },
 { value: "graphic_designer", label: "Graphic Designer" },
 { value: "cad_designer", label: "CAD Designer" },
 { value: "product_manager", label: "Product Manager" },
 { value: "digital_marketer", label: "Digital Marketer" },
 { value: "content_writer", label: "Content Writer" },
];

const steps = [
 { num: 1, label: "Personal", icon: User },
 { num: 2, label: "Details", icon: Code2 },
 { num: 3, label: "Roles", icon: Calendar },
];

export function StudentForm() {
 const [currentStep, setCurrentStep] = useState(1);
 const [isSubmitted, setIsSubmitted] = useState(false);
 const [customRoles, setCustomRoles] = useState<{value: string, label: string}[]>([]);
 const [customRoleInput, setCustomRoleInput] = useState("");
 const [showUniDropdown, setShowUniDropdown] = useState(false);

 const handleAddCustomRole = (e?: React.MouseEvent | React.KeyboardEvent) => {
     if (e) e.preventDefault();
     if (!customRoleInput.trim()) return;
     
     const newValue = customRoleInput.trim().toLowerCase().replace(/[^a-z0-9]+/g, '_');
     const newLabel = customRoleInput.trim();
     
     if (!roleOptions.find(r => r.value === newValue) && !customRoles.find(r => r.value === newValue)) {
         setCustomRoles(prev => [...prev, { value: newValue, label: newLabel }]);
         const currentSkills = watch("skills") || [];
         if (!currentSkills.includes(newValue)) {
             setValue("skills", [...currentSkills, newValue], { shouldValidate: true });
         }
     }
     setCustomRoleInput("");
 };

 const {
 register,
 control,
 handleSubmit,
 trigger,
 watch,
 setValue,
 formState: { errors, isSubmitting },
 } = useForm<StudentFormValues>({
 resolver: zodResolver(studentFormSchema),
 mode: "onSubmit",
 defaultValues: {
  skills: [],
  availability: "20+ hrs/week", // Default since it's missing in UI
 },
 });

 const watchedSkills = watch("skills");

 const watchedUniversity = watch("university");
 const filteredUnis = searchUniversities(watchedUniversity || "");

 const onSubmit = async (data: StudentFormValues) => {
 await new Promise((resolve) => setTimeout(resolve, 1500));
 setIsSubmitted(true);
 };

 const goNext = useCallback(async () => {
 let fieldsToValidate: (keyof StudentFormValues)[] = [];
 if (currentStep === 1) fieldsToValidate = ["name", "email", "university", "degree"];
 if (currentStep === 2) fieldsToValidate = ["experience"];

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
 <p lang="en" className="text-[#001738]/50 max-w-sm mx-auto text-lg leading-relaxed">
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
 ? "bg-vibrant-crimson text-white shadow-lg"
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
 <input className="w-full h-12 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-crimson focus:bg-white outline-none transition-all" placeholder="Your full name" {...register("name")} />
 {errors.name && <p className="text-xs text-red-500 font-medium">{errors.name.message}</p>}
 </div>
 <div className="space-y-2">
 <label className="text-sm font-bold text-[#001738]">Email</label>
 <input type="email" className="w-full h-12 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-crimson focus:bg-white outline-none transition-all" placeholder="you@university.edu" {...register("email")} />
 {errors.email && <p className="text-xs text-red-500 font-medium">{errors.email.message}</p>}
 </div>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
 <div className="space-y-2 relative">
 <label className="text-sm font-bold text-[#001738]">University</label>
 <input 
    className="w-full h-12 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-crimson focus:bg-white outline-none transition-all" 
    placeholder="e.g., Stanford University" 
    autoComplete="off"
    {...register("university")} 
    onFocus={() => setShowUniDropdown(true)}
    onBlur={() => setTimeout(() => setShowUniDropdown(false), 200)}
 />
 {showUniDropdown && (
     <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto">
         {filteredUnis.length > 0 ? (
             filteredUnis.map((uni, idx) => (
                 <div 
                     key={idx} 
                     className="px-4 py-2 hover:bg-vibrant-crimson/10 hover:text-vibrant-crimson cursor-pointer text-sm text-gray-700 transition-colors"
                     onClick={() => {
                         setValue("university", uni, { shouldValidate: true });
                         setShowUniDropdown(false);
                     }}
                 >
                     {uni}
                 </div>
             ))
         ) : (
             <div className="px-4 py-2 text-sm text-gray-500">No matching university found</div>
         )}
     </div>
 )}
 {errors.university && <p className="text-xs text-red-500 font-medium">{errors.university.message}</p>}
 </div>
 <div className="space-y-2">
 <label className="text-sm font-bold text-[#001738]">Degree</label>
 <input className="w-full h-12 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-crimson focus:bg-white outline-none transition-all" placeholder="e.g., B.Tech CS" {...register("degree")} />
 {errors.degree && <p className="text-xs text-red-500 font-medium">{errors.degree.message}</p>}
 </div>
 </div>
 </div>
 )}

 {currentStep === 2 && (
 <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
 <div className="space-y-2">
 <label className="text-sm font-bold text-[#001738]">Experience</label>
 <textarea className="w-full min-h-[120px] p-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-crimson focus:bg-white outline-none transition-all resize-none" placeholder="Projects, internships, hackathons..." {...register("experience")} />
 {errors.experience && <p className="text-xs text-red-500 font-medium">{errors.experience.message}</p>}
 </div>
 <div className="space-y-2">
 <label className="text-sm font-bold text-[#001738]">Portfolio URL (optional)</label>
 <input className="w-full h-12 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-crimson focus:bg-white outline-none transition-all" placeholder="https://github.com/you" {...register("portfolio")} />
 </div>
 </div>
 )}

 {currentStep === 3 && (
 <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
 <div className="space-y-3">
 <label className="text-sm font-bold text-[#001738]">Select Roles</label>
 
 <select 
     className="w-full h-12 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-crimson focus:bg-white outline-none transition-all text-sm mb-2"
     onChange={(e) => {
         if (!e.target.value) return;
         const selected = e.target.value;
         const currentSkills = watchedSkills || [];
         if (!currentSkills.includes(selected)) {
             setValue("skills", [...currentSkills, selected], { shouldValidate: true });
         }
         e.target.value = "";
     }}
 >
     <option value="">Select a role from the list...</option>
     {roleOptions.map(r => (
         <option key={r.value} value={r.value} disabled={watchedSkills?.includes(r.value)}>{r.label}</option>
     ))}
 </select>

 {watchedSkills && watchedSkills.length > 0 && (
     <div className="flex flex-wrap gap-2 mb-3">
         {watchedSkills.map(skillValue => {
             const label = [...roleOptions, ...customRoles].find(r => r.value === skillValue)?.label || skillValue;
             return (
                 <div key={skillValue} className="flex items-center gap-2 px-3 py-1.5 bg-vibrant-crimson text-white rounded-full text-sm font-medium shadow-sm">
                     {label}
                     <button 
                         type="button" 
                         onClick={() => setValue("skills", watchedSkills.filter(s => s !== skillValue), { shouldValidate: true })} 
                         className="hover:bg-white/20 rounded-full p-0.5 transition-colors"
                     >
                         <X className="w-3 h-3" />
                     </button>
                 </div>
             )
         })}
     </div>
 )}

 <div className="flex gap-2 w-full">
     <input
         type="text"
         className="flex-1 h-10 px-4 rounded-xl bg-gray-50 border-gray-100 focus:border-vibrant-crimson focus:bg-white outline-none transition-all text-sm"
         placeholder="If your role is not listed, add it here..."
         value={customRoleInput}
         onChange={(e) => setCustomRoleInput(e.target.value)}
         onKeyDown={(e) => e.key === 'Enter' ? handleAddCustomRole(e) : null}
     />
     <button
         type="button"
         onClick={handleAddCustomRole}
         className="px-5 h-10 bg-vibrant-crimson hover:bg-vibrant-crimson/90 text-white font-bold rounded-xl transition-all text-sm shadow-sm"
     >
         Add
     </button>
 </div>
 {errors.skills && <p className="text-xs text-red-500 font-medium mt-1">{errors.skills.message}</p>}
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
 <button type="button" onClick={goNext} className="flex items-center gap-2 bg-vibrant-crimson text-white px-8 py-3 rounded-full font-bold hover:bg-vibrant-crimson/90 transition-all shadow-md">
 Continue <ArrowRight className="w-5 h-5" />
 </button>
 ) : (
 <button type="submit" disabled={isSubmitting} className="flex items-center gap-2 bg-vibrant-crimson text-white px-10 py-3 rounded-full font-bold hover:bg-vibrant-crimson/90 transition-all shadow-md disabled:opacity-50">
 {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : <>Apply Now <ArrowRight className="w-5 h-5" /></>}
 </button>
 )}
 </div>
 </form>
 </div>
 );
}
