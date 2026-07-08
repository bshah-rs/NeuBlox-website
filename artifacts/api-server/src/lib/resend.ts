import { ReplitConnectors } from "@replit/connectors-sdk";

// Resend integration (connector: ccfg_resend). Do not cache the connectors
// client or any derived credentials — tokens can expire and are refreshed
// transparently by the SDK on each call.
const connectors = new ReplitConnectors();

interface SendEmailParams {
  to: string;
  from: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail(params: SendEmailParams): Promise<void> {
  const response = await connectors.proxy("resend", "/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {
      from: params.from,
      to: [params.to],
      subject: params.subject,
      html: params.html,
      reply_to: params.replyTo,
    },
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Resend request failed (${response.status}): ${text}`);
  }
}
