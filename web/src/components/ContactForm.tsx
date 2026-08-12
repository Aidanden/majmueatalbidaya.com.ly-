"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? "").trim(),
          email: String(data.get("email") ?? "").trim(),
          phone: String(data.get("phone") ?? "").trim(),
          subject: String(data.get("subject") ?? "").trim(),
          message: String(data.get("message") ?? "").trim(),
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        mailto?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "تعذر إرسال الرسالة");
      }

      if (result.mailto) {
        window.location.href = result.mailto;
        setStatus("success");
        setMessage("تم فتح تطبيق البريد لإكمال الإرسال.");
      } else {
        setStatus("success");
        setMessage("تم إرسال رسالتك بنجاح. سنعود إليك قريباً.");
      }
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "حدث خطأ أثناء الإرسال. حاول مرة أخرى.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-sm font-semibold text-ink">الاسم</span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="اسمك الكامل"
            className="field"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-semibold text-ink">البريد الإلكتروني</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            dir="ltr"
            placeholder="name@example.com"
            className="field text-start"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block space-y-2">
          <span className="text-sm font-semibold text-ink">رقم الهاتف</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            dir="ltr"
            placeholder="09xxxxxxxx"
            className="field text-start"
          />
        </label>
        <label className="block space-y-2">
          <span className="text-sm font-semibold text-ink">الموضوع</span>
          <input
            name="subject"
            required
            placeholder="استفسار عن منتج / عرض سعر"
            className="field"
          />
        </label>
      </div>

      <label className="block space-y-2">
        <span className="text-sm font-semibold text-ink">الرسالة</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="اكتب تفاصيل طلبك هنا..."
          className="field resize-y min-h-[140px]"
        />
      </label>

      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex w-full items-center justify-center rounded-md bg-brand px-7 py-3.5 text-base font-bold text-white transition duration-300 hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "loading" ? "جاري الإرسال..." : "إرسال الرسالة"}
        </button>

        {message ? (
          <p
            role="status"
            className={`text-sm font-medium sm:text-end ${
              status === "success" ? "text-brand-deep" : "text-red-600"
            }`}
          >
            {message}
          </p>
        ) : (
          <p className="text-sm text-muted sm:text-end">نرد عادة خلال يوم عمل واحد.</p>
        )}
      </div>
    </form>
  );
}
