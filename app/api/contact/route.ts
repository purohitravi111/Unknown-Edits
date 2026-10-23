import { contact } from "../../../data/content";

export const runtime = "nodejs";

type Submission = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

function cleanText(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim().slice(0, maxLength)
    : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[character];
  });
}

export async function POST(request: Request) {
  let submission: Submission;
  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return Response.json({ error: "Invalid form submission." }, { status: 400 });
    }
    submission = body as Submission;
  } catch {
    return Response.json({ error: "Invalid form submission." }, { status: 400 });
  }

  // Quietly accept bot submissions that fill the hidden honeypot field.
  if (cleanText(submission.website, 200)) {
    return Response.json({ ok: true });
  }

  const firstName = cleanText(submission.firstName, 80).replace(/[\u0000-\u001f\u007f]/g, " ");
  const lastName = cleanText(submission.lastName, 80).replace(/[\u0000-\u001f\u007f]/g, " ");
  const email = cleanText(submission.email, 254);
  const message = cleanText(submission.message, 5000);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!firstName || !lastName || !validEmail || !message) {
    return Response.json({ error: "Please provide your name, a valid email, and a project message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form email is not configured: RESEND_API_KEY is missing.");
    return Response.json({ error: "Contact form email is temporarily unavailable." }, { status: 503 });
  }

  const fullName = `${firstName} ${lastName}`;
  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");
  const recipient = process.env.CONTACT_TO_EMAIL || contact.email;

  try {
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "Unknown Edits <onboarding@resend.dev>",
        to: [recipient],
        reply_to: email,
        subject: `New portfolio enquiry from ${firstName} ${lastName}`,
        text: `Name: ${fullName}\nEmail: ${email}\n\nProject details:\n${message}`,
        html: `<h2>New portfolio enquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Project details:</strong><br>${safeMessage}</p>`
      })
    });

    if (!emailResponse.ok) {
      console.error("Contact form email delivery failed with status:", emailResponse.status);
      return Response.json({ error: "We couldn’t send your message right now." }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    console.error("Contact form could not reach the email service.");
    return Response.json({ error: "We couldn’t send your message right now." }, { status: 502 });
  }
}
