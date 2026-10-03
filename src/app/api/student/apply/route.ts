import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseServiceClient } from "@/lib/supabase/server";
import { sendAdminNotification } from "@/lib/email";
import { MAX_RESUME_SIZE_BYTES, ALLOWED_RESUME_TYPES } from "@/lib/validations";
import { checkRateLimit, escapeHtml } from "@/lib/security";
import { LEGAL_DOCS } from "@/lib/legal";

// Hard cap on the whole multipart body — resume (max 4MB) plus fields.
const MAX_SUBMISSION_BYTES = 6 * 1024 * 1024;

const studentApiSchema = z.object({
  name: z.string().min(2).max(200),
  email: z.string().email().max(254),
  university: z.string().min(2).max(300),
  degree: z.string().min(2).max(300),
  skills: z.array(z.string().max(100)).min(1).max(30),
  availability: z.string().min(1).max(100),
  experience: z.string().min(10).max(10000),
  portfolio: z
    .string()
    .max(500)
    .refine((v) => /^https?:\/\//i.test(v) && URL.canParse(v), "Portfolio must be a valid http(s) URL")
    .optional()
    .or(z.literal("")),
  // FormData sends checkboxes as the string "true"
  ageConfirmed: z.literal("true"),
  termsAccepted: z.literal("true"),
  privacyAcknowledged: z.literal("true"),
});

export async function POST(req: NextRequest) {
  try {
    const rateLimitError = checkRateLimit(req);
    if (rateLimitError) return rateLimitError;

    const contentLength = Number(req.headers.get("content-length") ?? 0);
    if (contentLength > MAX_SUBMISSION_BYTES) {
      return NextResponse.json({ error: "Submission too large" }, { status: 413 });
    }

    const formData = await req.formData();

    const rawSkills = formData.get("skills");
    let skills: string[] = [];
    try {
      skills = rawSkills ? JSON.parse(rawSkills.toString()) : [];
    } catch {
      return NextResponse.json({ error: "Invalid skills payload" }, { status: 400 });
    }

    const parsed = studentApiSchema.safeParse({
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      university: formData.get("university")?.toString() ?? "",
      degree: formData.get("degree")?.toString() ?? "",
      skills,
      availability: formData.get("availability")?.toString() ?? "",
      experience: formData.get("experience")?.toString() ?? "",
      portfolio: formData.get("portfolio")?.toString() ?? "",
      ageConfirmed: formData.get("ageConfirmed")?.toString() ?? "",
      termsAccepted: formData.get("termsAccepted")?.toString() ?? "",
      privacyAcknowledged: formData.get("privacyAcknowledged")?.toString() ?? "",
    });

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid submission" },
        { status: 400 }
      );
    }

    const resumeFile = formData.get("resume");
    if (!(resumeFile instanceof File) || resumeFile.size === 0) {
      return NextResponse.json({ error: "Resume (PDF) is required" }, { status: 400 });
    }
    if (resumeFile.size > MAX_RESUME_SIZE_BYTES) {
      return NextResponse.json({ error: "Resume must be 4MB or smaller" }, { status: 400 });
    }
    if (!ALLOWED_RESUME_TYPES.includes(resumeFile.type)) {
      return NextResponse.json({ error: "Only PDF files are accepted" }, { status: 400 });
    }

    // The client-supplied MIME type is not trustworthy — verify the %PDF-
    // magic bytes so a renamed executable/HTML file can't be stored and
    // later opened by an admin as if it were a document.
    const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());
    if (resumeBuffer.length < 5 || resumeBuffer.subarray(0, 5).toString("latin1") !== "%PDF-") {
      return NextResponse.json({ error: "Resume must be a valid PDF file" }, { status: 400 });
    }

    const supabase = getSupabaseServiceClient();
    const data = parsed.data;
    const confirmedAt = new Date().toISOString();

    const timestamp = Date.now();
    const safeFileName = resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const resumePath = `student_applications/${timestamp}_${safeFileName}`;

    const { error: uploadError } = await supabase.storage
      .from("resumes")
      .upload(resumePath, resumeBuffer, {
        contentType: "application/pdf",
        upsert: false,
      });

    if (uploadError) {
      console.error("Resume upload failed:", uploadError);
      return NextResponse.json({ error: "Failed to upload resume. Please try again." }, { status: 500 });
    }

    const { data: inserted, error: insertError } = await supabase
      .from("student_applications")
      .insert({
        name: data.name,
        email: data.email,
        university: data.university,
        degree: data.degree,
        skills: data.skills,
        availability: data.availability,
        experience: data.experience,
        portfolio: data.portfolio || null,
        resume_path: resumePath,
        status: "pending",
        // Server-generated confirmation metadata — never trust client timestamps
        age_confirmed_at: confirmedAt,
        terms_accepted_at: confirmedAt,
        terms_version: LEGAL_DOCS.terms_of_service.version,
        privacy_acknowledged_at: confirmedAt,
        privacy_version: LEGAL_DOCS.privacy_policy.version,
      })
      .select("id")
      .single();

    if (insertError) {
      console.error("Failed to insert student application:", insertError);
      return NextResponse.json({ error: "Failed to save application. Please try again." }, { status: 500 });
    }

    await sendAdminNotification({
      subject: `New Student Application: ${data.name}`,
      html: `
        <h2>New Student Application</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>University:</strong> ${escapeHtml(data.university)}</p>
        <p>View the full application in the <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/students">admin dashboard</a>.</p>
      `,
    });

    return NextResponse.json({ success: true, id: inserted?.id }, { status: 201 });
  } catch (error) {
    console.error("Student application error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
