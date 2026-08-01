import { NextRequest, NextResponse } from "next/server";
import { startupFormSchema } from "@/lib/validations";
import { getSupabaseServiceClient } from "@/lib/supabase/server";
import { sendAdminNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = startupFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid submission" },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const supabase = getSupabaseServiceClient();

    const { data: inserted, error: insertError } = await supabase
      .from("startup_applications")
      .insert({
        company_name: data.companyName,
        country: data.country,
        contact_person: data.contactPerson,
        email: data.email,
        duration: data.duration,
        budget: data.budget,
        description: data.description,
        status: "pending",
      })
      .select("id")
      .single();

    if (insertError) {
      console.error("Failed to insert startup application:", insertError);
      return NextResponse.json({ error: "Failed to save application. Please try again." }, { status: 500 });
    }

    await sendAdminNotification({
      subject: `New Startup Requirement: ${data.companyName}`,
      html: `
        <h2>New Startup Requirement</h2>
        <p><strong>Company:</strong> ${data.companyName}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Contact Person:</strong> ${data.contactPerson}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Duration:</strong> ${data.duration}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Description:</strong> ${data.description}</p>
        <p>View in the <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/startups">admin dashboard</a>.</p>
      `,
    });

    return NextResponse.json({ success: true, id: inserted?.id }, { status: 201 });
  } catch (error) {
    console.error("Startup application error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
