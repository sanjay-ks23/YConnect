import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (!user || !pass) {
    return null;
  }

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });
  }

  return transporter;
}

interface NotifyParams {
  subject: string;
  html: string;
}

/**
 * Best-effort email notification via Gmail SMTP. Never throws — a failed
 * email should not fail the underlying form submission, since the database
 * insert is the source of truth.
 */
export async function sendAdminNotification({ subject, html }: NotifyParams): Promise<void> {
  const transport = getTransporter();
  const user = process.env.GMAIL_USER;

  if (!transport || !user) {
    console.warn("Email notification skipped: GMAIL_USER / GMAIL_APP_PASSWORD not configured.");
    return;
  }

  try {
    await transport.sendMail({
      from: `"YConnect Notifications" <${user}>`,
      to: user,
      subject,
      html,
    });
  } catch (error) {
    console.error("Failed to send admin notification email:", error);
  }
}
