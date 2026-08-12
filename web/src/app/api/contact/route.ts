import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getContactEmail() {
  return process.env.CONTACT_EMAIL?.trim() || "info@majmueatalbidaya.com.ly";
}

function buildMailto(payload: Required<Pick<ContactBody, "name" | "email" | "subject" | "message">> & { phone: string }) {
  const to = getContactEmail();
  const body = [
    `الاسم: ${payload.name}`,
    `البريد: ${payload.email}`,
    payload.phone ? `الهاتف: ${payload.phone}` : null,
    "",
    payload.message,
  ]
    .filter(Boolean)
    .join("\n");

  return `mailto:${to}?subject=${encodeURIComponent(payload.subject)}&body=${encodeURIComponent(body)}`;
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "طلب غير صالح" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { ok: false, error: "يرجى تعبئة جميع الحقول المطلوبة" },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { ok: false, error: "البريد الإلكتروني غير صالح" },
      { status: 400 },
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "الرسالة طويلة جداً" },
      { status: 400 },
    );
  }

  const contactEmail = getContactEmail();
  const smtpHost = process.env.SMTP_HOST?.trim();
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();
  const smtpPort = Number(process.env.SMTP_PORT || 587);

  // Without SMTP credentials: open the visitor's mail client as a reliable fallback.
  if (!smtpHost || !smtpUser || !smtpPass) {
    return NextResponse.json({
      ok: true,
      mailto: buildMailto({ name, email, phone, subject, message }),
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    await transporter.sendMail({
      from: `"موقع مجموعة البداية" <${smtpUser}>`,
      to: contactEmail,
      replyTo: email,
      subject: `[تواصل الموقع] ${subject}`,
      text: [
        `الاسم: ${name}`,
        `البريد: ${email}`,
        phone ? `الهاتف: ${phone}` : "الهاتف: —",
        "",
        message,
      ].join("\n"),
      html: `
        <div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;line-height:1.8;color:#14233a">
          <p><strong>الاسم:</strong> ${escapeHtml(name)}</p>
          <p><strong>البريد:</strong> ${escapeHtml(email)}</p>
          <p><strong>الهاتف:</strong> ${escapeHtml(phone || "—")}</p>
          <hr style="border:none;border-top:1px solid #d7e3f0;margin:16px 0" />
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("contact email failed", error);
    return NextResponse.json(
      {
        ok: true,
        mailto: buildMailto({ name, email, phone, subject, message }),
      },
      { status: 200 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
