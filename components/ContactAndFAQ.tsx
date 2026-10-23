"use client";

import React, { useState } from "react";
import { contact, faq } from "../data/content";
import { Mail, Phone } from "lucide-react";

type SubmissionState = "idle" | "sending" | "success" | "error";

export function ContactAndFAQ() {
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setSubmissionState("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });

      if (!response.ok) throw new Error("Contact form submission failed");

      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  return (
    <section id="contact" className="relative z-10 bg-[var(--bg-default)] py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-4xl font-black text-[var(--primary)] md:text-5xl">Let&apos;s Talk.</h2>
          <p className="mb-10 text-[var(--secondary)]">
            Ready to scale your content? Fill out the form and we&apos;ll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                autoComplete="given-name"
                maxLength={80}
                required
                className="w-full rounded-[var(--radius-base)] border border-white/5 bg-[var(--bg-paper)] px-5 py-4 text-[var(--primary)] outline-none transition-colors focus:border-[var(--accent)]"
              />
              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                autoComplete="family-name"
                maxLength={80}
                required
                className="w-full rounded-[var(--radius-base)] border border-white/5 bg-[var(--bg-paper)] px-5 py-4 text-[var(--primary)] outline-none transition-colors focus:border-[var(--accent)]"
              />
            </div>
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              autoComplete="email"
              maxLength={254}
              required
              className="w-full rounded-[var(--radius-base)] border border-white/5 bg-[var(--bg-paper)] px-5 py-4 text-[var(--primary)] outline-none transition-colors focus:border-[var(--accent)]"
            />
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={4}
              maxLength={5000}
              required
              className="w-full resize-none rounded-[var(--radius-base)] border border-white/5 bg-[var(--bg-paper)] px-5 py-4 text-[var(--primary)] outline-none transition-colors focus:border-[var(--accent)]"
            />
            <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
              <label htmlFor="contact-website">Leave this field empty</label>
              <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <button
              type="submit"
              disabled={submissionState === "sending"}
              className="w-full rounded-[var(--radius-base)] bg-[var(--accent)] py-4 font-bold text-white shadow-[var(--glow)] transition-all hover:bg-opacity-90 disabled:cursor-wait disabled:opacity-70"
            >
              {submissionState === "sending" ? "Sending…" : "Send Message"}
            </button>
            <p aria-live="polite" className="min-h-5 text-sm text-[var(--secondary)]">
              {submissionState === "success" && "Thanks — your message has been sent. We’ll be in touch soon."}
              {submissionState === "error" && "We couldn’t send your message. Please try again or email us directly."}
            </p>
          </form>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="flex items-center gap-4 text-[var(--secondary)]">
              <Mail className="h-5 w-5 text-[var(--accent)]" />
              <span className="text-sm">{contact.email}</span>
            </div>
            <div className="flex items-center gap-4 text-[var(--secondary)]">
              <Phone className="h-5 w-5 text-[var(--accent)]" />
              <span className="text-sm">{contact.phone}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-3xl font-black text-[var(--primary)]">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faq.map((item, idx) => (
              <details key={idx} className="group overflow-hidden rounded-[var(--radius-base)] border border-white/5 bg-[var(--bg-paper)]">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 font-bold text-[var(--primary)] outline-none">
                  {item.question}
                  <span className="text-2xl leading-none text-[var(--accent)] transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="px-6 pb-4 text-sm leading-relaxed text-[var(--secondary)]">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
