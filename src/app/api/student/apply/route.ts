import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseServiceClient } from "@/lib/supabase/server";
import { sendAdminNotification } from "@/lib/email";
import { MAX_RESUME_SIZE_BYTES, ALLOWED_RESUME_TYPES } from "@/lib/validations";

const studentApiSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  university: z.string().min(2),
  degree: z.string().min(2),
  skills: z.array(z.string()).min(1),
  availability: z.string().min(1),
  experience: z.string().min(10),
  portfolio: z.string().url().optional().or(z.literal("")),
});

export async function POST(req: NextRequest) {
  try {
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
      return NextResponse.json({ error: "Resume must be 5MB or smaller" }, { status: 400 });
    }
    if (!ALLOWED_RESUME_TYPES.includes(resumeFile.type)) {
      return NextResponse.json({ error: "Only PDF files are accepted" }, { status: 400 });
    }

    const supabase = getSupabaseServiceClient();
    const data = parsed.data;

    const timestamp = Date.now();
    const safeFileName = resumeFile.name.replace(/[^a-zA-Z0-9._-]/g, "_");
    const resumePath = `student_applications/${timestamp}_${safeFileName}`;

    const arrayBuffer = await resumeFile.arrayBuffer();
    const { error: uploadError } = await supabase.storage
      .from("resumes")
      .upload(resumePath, Buffer.from(arrayBuffer), {
        contentType: resumeFile.type,
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
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>University:</strong> ${data.university}</p>
        <p><strong>Degree:</strong> ${data.degree}</p>
        <p><strong>Skills:</strong> ${data.skills.join(", ")}</p>
        <p><strong>Availability:</strong> ${data.availability}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
        ${data.portfolio ? `<p><strong>Portfolio:</strong> ${data.portfolio}</p>` : ""}
        <p>View in the <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/students">admin dashboard</a>.</p>
      `,
    });

    return NextResponse.json({ success: true, id: inserted?.id }, { status: 201 });
  } catch (error) {
    console.error("Student application error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
