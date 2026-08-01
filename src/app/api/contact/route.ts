import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { getSupabaseServiceClient } from "@/lib/supabase/server";
import { sendAdminNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid submission" },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const supabase = getSupabaseServiceClient();

    const { data: inserted, error: insertError } = await supabase
      .from("contact_messages")
      .insert({
        name: data.name,
        email: data.email,
        inquiry_type: data.inquiryType,
        subject: data.subject,
        message: data.message,
        status: "pending",
      })
      .select("id")
      .single();

    if (insertError) {
      console.error("Failed to insert contact message:", insertError);
      return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
    }

    await sendAdminNotification({
      subject: `New Contact Message: ${data.subject}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Inquiry Type:</strong> ${data.inquiryType}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong> ${data.message}</p>
        <p>View in the <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/contact">admin dashboard</a>.</p>
      `,
    });

    return NextResponse.json({ success: true, id: inserted?.id }, { status: 201 });
  } catch (error) {
    console.error("Contact message error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
