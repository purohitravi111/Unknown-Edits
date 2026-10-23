import React from "react";
import { ArrowRight } from "lucide-react";

export function Pricing() {
  return (
    <section id="pricing" className="bg-[var(--bg-muted)] py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-[var(--bg-paper)] px-7 py-12 text-center md:px-16 md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--accent)]/10 via-transparent to-[var(--accent)]/10" />
          <div className="relative z-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
              Work with us
            </p>
            <h2 className="mx-auto max-w-3xl text-4xl font-black leading-tight text-[var(--primary)] md:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[var(--secondary)] md:text-lg">
              Tell us what you’re creating. We’ll help shape the right editing approach for your goals.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-[var(--radius-base)] bg-[var(--accent)] px-7 py-4 font-semibold text-white transition-all hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              Start a conversation
              <ArrowRight aria-hidden="true" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
