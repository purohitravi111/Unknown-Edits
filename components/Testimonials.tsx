"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "../data/content";

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const entries = testimonials.filter((item) => item.review.trim() && item.clientName.trim());

  useEffect(() => {
    if (entries.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % entries.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [entries.length]);

  if (entries.length === 0) return null;

  const active = entries[activeIndex % entries.length];
  const previous = () => setActiveIndex((current) => (current - 1 + entries.length) % entries.length);
  const next = () => setActiveIndex((current) => (current + 1) % entries.length);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[var(--bg-default)] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[var(--accent)]/5 blur-[150px]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            Client testimonials
          </p>
          {entries.some((item) => item.isSample) && (
            <p className="mb-4 inline-flex rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent)]">
              Sample content — replace with real client feedback before publishing
            </p>
          )}
          <h2 className="text-4xl font-black leading-tight text-[var(--primary)] md:text-5xl">
            Good work speaks.<br />Our clients speak louder.
          </h2>
        </div>

        <div className="relative mx-auto max-w-4xl rounded-[var(--radius-lg)] border border-white/10 bg-[var(--bg-paper)] px-7 py-9 shadow-[var(--glow)] md:px-14 md:py-12">
          <Quote aria-hidden="true" className="absolute right-8 top-8 h-12 w-12 rotate-180 text-[var(--accent)]/15 md:right-12 md:top-10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              aria-live="polite"
            >
              {active.rating > 0 && (
                <div className="mb-6 flex items-center gap-1" aria-label={`${active.rating} out of 5 stars`}>
                  {Array.from({ length: active.rating }, (_, index) => (
                    <Star key={index} aria-hidden="true" className="h-4 w-4 fill-[var(--accent)] text-[var(--accent)]" />
                  ))}
                </div>
              )}
              <blockquote className="relative z-10 min-h-28 text-xl font-medium leading-relaxed text-[var(--primary)] md:text-2xl">
                “{active.review}”
              </blockquote>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-7">
                <div className="flex min-w-0 items-center gap-4">
                  {active.photo ? (
                    <Image
                      src={active.photo}
                      alt=""
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  ) : (
                    <div aria-hidden="true" className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 font-bold text-[var(--accent)]">
                      {initials(active.clientName)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <p className="truncate font-bold text-[var(--primary)]">{active.clientName}</p>
                    {active.company && <p className="mt-1 truncate text-sm text-[var(--secondary)]">{active.company}</p>}
                  </div>
                </div>

                <div className="flex items-center gap-2" aria-label="Testimonial navigation">
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous testimonial"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-[var(--primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                  >
                    <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next testimonial"
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 text-[var(--primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
                  >
                    <ChevronRight aria-hidden="true" className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {entries.length > 1 && (
            <div className="mt-7 flex items-center justify-center gap-2" aria-label="Choose testimonial">
              {entries.map((item, index) => (
                <button
                  key={`${item.clientName}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all ${index === activeIndex ? "w-9 bg-[var(--accent)]" : "w-5 bg-white/20 hover:bg-white/40"}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
