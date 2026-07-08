import { Router, type IRouter } from "express";
import { SubmitContactFormBody, SubmitContactFormResponse } from "@workspace/api-zod";
import { sendEmail } from "../lib/resend";

const router: IRouter = Router();

const CONTACT_RECIPIENT = process.env.CONTACT_RECIPIENT_EMAIL || "contact@neublox.ai";
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL || "NeuBlox Website <onboarding@resend.dev>";

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactFormBody.safeParse(req.body);

  if (!parsed.success) {
    req.log.warn({ issues: parsed.error.issues }, "Invalid contact form submission");
    res.status(400).json(SubmitContactFormResponse.parse({ success: false }));
    return;
  }

  const { name, email, company, interestArea, message } = parsed.data;

  try {
    await sendEmail({
      to: CONTACT_RECIPIENT,
      from: CONTACT_FROM,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New NeuBlox contact request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Interest area:</strong> ${escapeHtml(interestArea)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    res.json(SubmitContactFormResponse.parse({ success: true }));
  } catch (error) {
    req.log.error({ err: error }, "Failed to send contact form email");
    res.status(500).json(SubmitContactFormResponse.parse({ success: false }));
  }
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default router;
