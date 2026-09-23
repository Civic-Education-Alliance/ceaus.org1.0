"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { orgContact } from "@/lib/content/site";

type Labels = {
  heading: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  optional: string;
  submit: string;
  success: string;
  error: string;
};

export function ContactForm({ labels }: { labels: Labels }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }
    const subject = encodeURIComponent(`Message from ${name}`);
    const bodyLines = [
      message,
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${orgContact.emailPrimary}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-border bg-surface-alt p-6 sm:p-8"
    >
      <h2 className="text-2xl font-semibold text-navy dark:text-white">{labels.heading}</h2>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-sm font-medium text-ink">
          {labels.name}
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 dark:focus:border-gold dark:focus:ring-gold/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-sm font-medium text-ink">
          {labels.email}
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 dark:focus:border-gold dark:focus:ring-gold/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-phone" className="text-sm font-medium text-ink">
          {labels.phone} <span className="text-ink-muted">({labels.optional})</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 dark:focus:border-gold dark:focus:ring-gold/20"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-ink">
          {labels.message}
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20 dark:focus:border-gold dark:focus:ring-gold/20"
        />
      </div>

      {status === "error" ? (
        <p className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
          <WarningCircle className="h-4 w-4 shrink-0" weight="fill" />
          {labels.error}
        </p>
      ) : null}
      {status === "sent" ? (
        <p className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400">
          <CheckCircle className="h-4 w-4 shrink-0" weight="fill" />
          {labels.success}
        </p>
      ) : null}

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-navy-deep"
      >
        {labels.submit}
      </button>
    </form>
  );
}
