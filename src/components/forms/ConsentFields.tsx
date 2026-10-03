import Link from "next/link";
import type { ReactNode } from "react";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

type FormKind = "student" | "startup" | "contact";

interface ConsentFieldsProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  theme: "crimson" | "blue";
  /** "" for desktop routes, "/m" for mobile routes — links stay in-locale */
  basePath?: "" | "/m";
  kind: FormKind;
}

const NOTICES: Record<FormKind, string> = {
  student:
    "We collect your name, email, university, degree, skills, availability, experience and resume to assess your application and match you with European startups. If you are shortlisted or matched, these details — including your resume — may be shared with the relevant startup(s).",
  startup:
    "We collect your company details, contact name and email to evaluate your requirements and respond to your enquiry.",
  contact:
    "We collect your name, email and message to respond to your enquiry.",
};

function ConsentCheckbox({
  register,
  errors,
  name,
  accentClass,
  children,
}: {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  name: string;
  accentClass: string;
  children: ReactNode;
}) {
  const error = errors?.[name]?.message;
  return (
    <div className="space-y-1.5">
      <label className="flex items-start gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          aria-invalid={!!error}
          className={`mt-0.5 h-5 w-5 shrink-0 rounded border-gray-300 ${accentClass}`}
          {...register(name)}
        />
        <span className="text-sm text-[#001738]/80 leading-relaxed">{children}</span>
      </label>
      {typeof error === "string" && (
        <p className="text-xs text-red-500 font-medium pl-8" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * Shared legal-consent block rendered on the final step of each public form.
 * Student: 18+ confirmation + Terms + Privacy. Startup: Terms + Privacy.
 * Contact: Privacy acknowledgement only.
 */
export function ConsentFields({ register, errors, theme, basePath = "", kind }: ConsentFieldsProps) {
  const accentClass = theme === "crimson" ? "accent-[#C70039]" : "accent-[#2E31D1]";
  const termsPath = `${basePath}/terms`;
  const privacyPath = `${basePath}/privacy-policy`;

  return (
    <div className="space-y-4 rounded-2xl bg-gray-50 border border-gray-100 p-4 sm:p-5">
      <p className="text-xs sm:text-sm text-[#001738]/60 leading-relaxed">
        {NOTICES[kind]} You can request access, correction, or deletion of your
        data at any time — see our{" "}
        <Link href={privacyPath} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#001738]">
          Privacy Policy
        </Link>
        .
      </p>

      {kind === "student" && (
        <ConsentCheckbox register={register} errors={errors} name="ageConfirmed" accentClass={accentClass}>
          I confirm that I am at least 18 years old.
        </ConsentCheckbox>
      )}

      {kind !== "contact" && (
        <ConsentCheckbox register={register} errors={errors} name="termsAccepted" accentClass={accentClass}>
          I have read and agree to the{" "}
          <Link href={termsPath} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#001738]">
            Terms of Service
          </Link>
          .
        </ConsentCheckbox>
      )}

      <ConsentCheckbox register={register} errors={errors} name="privacyAcknowledged" accentClass={accentClass}>
        {kind === "student" ? (
          <>
            I acknowledge the{" "}
            <Link href={privacyPath} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#001738]">
              Privacy Policy
            </Link>{" "}
            and consent to my application details and resume being shared with
            European startups for matching purposes.
          </>
        ) : (
          <>
            I acknowledge the{" "}
            <Link href={privacyPath} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#001738]">
              Privacy Policy
            </Link>{" "}
            and consent to being contacted about this enquiry.
          </>
        )}
      </ConsentCheckbox>
    </div>
  );
}
