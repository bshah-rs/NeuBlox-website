import { ReplitConnectors } from "@replit/connectors-sdk";

interface SendEmailParams {
  to: string;
  from: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail(params: SendEmailParams): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    if (!process.env.REPL_ID) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const connectors = new ReplitConnectors();
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
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: params.from,
      to: [params.to],
      subject: params.subject,
      html: params.html,
      reply_to: params.replyTo,
    }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Resend request failed (${response.status}): ${text}`);
  }
}
