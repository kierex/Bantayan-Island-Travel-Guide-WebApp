"use server";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ActionResult {
  success: boolean;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<ActionResult> {
  // Validate required fields
  if (!data.name?.trim() || !data.email?.trim() || !data.subject?.trim() || !data.message?.trim()) {
    return { success: false, message: "All fields are required." };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  if (data.message.length < 20) {
    return { success: false, message: "Message must be at least 20 characters." };
  }

  // ── Wire up an email provider here for production ────────────────────────
  // Example with Resend (https://resend.com):
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "noreply@bantayan-island-guide.com",
  //   to: "info@bantayan-island-guide.com",
  //   subject: `Contact: ${data.subject}`,
  //   text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
  // });
  // ─────────────────────────────────────────────────────────────────────────

  // Log the submission server-side for development visibility
  console.log("[Contact Form Submission]", {
    name: data.name,
    email: data.email,
    subject: data.subject,
    messageLength: data.message.length,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message: "Your message has been received. We will get back to you within 24 hours.",
  };
}
