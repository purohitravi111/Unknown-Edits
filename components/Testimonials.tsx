"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Pause, Play, Quote, Star } from "lucide-react";
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
  const [isPaused, setIsPaused] = useState(false);
  const entries = testimonials.filter((item) => item.review.trim() && item.clientName.trim());

  if (entries.length === 0) return null;

  const renderTestimonials = (isDuplicate = false) => (
    <div className="testimonial-marquee-group" aria-hidden={isDuplicate}>
      {entries.map((item, index) => (
        <article
          key={`${item.clientName}-${index}`}
          className="relative flex w-[min(84vw,390px)] shrink-0 flex-col justify-between overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-[var(--bg-paper)] p-6 shadow-[var(--glow)] sm:w-[390px]"
        >
          <Quote aria-hidden="true" className="absolute right-5 top-5 h-8 w-8 rotate-180 text-[var(--accent)]/20" />
          <div>
            {item.rating > 0 && (
              <div className="mb-3 flex items-center gap-1" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }, (_, starIndex) => (
                  <Star key={starIndex} aria-hidden="true" className="h-3.5 w-3.5 fill-[var(--accent)] text-[var(--accent)]" />
                ))}
              </div>
            )}
            <blockquote className="relative z-10 line-clamp-3 pr-6 text-sm leading-relaxed text-[var(--primary)] md:text-base">
              “{item.review}”
            </blockquote>
          </div>

          <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
            {item.photo ? (
              <Image src={item.photo} alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
            ) : (
              <div aria-hidden="true" className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-xs font-bold text-[var(--accent)]">
                {initials(item.clientName)}
              </div>
            )}
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-[var(--primary)]">{item.clientName}</p>
              {item.company && <p className="mt-0.5 truncate text-xs text-[var(--secondary)]">{item.company}</p>}
            </div>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="relative overflow-hidden bg-[var(--bg-default)] py-16 md:py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[var(--accent)]/5 blur-[130px]" />
      <div className="relative">
        <div className="mx-auto mb-8 max-w-5xl px-6 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
            Client testimonials
          </p>
          <h2 className="text-3xl font-black leading-tight text-[var(--primary)] md:text-4xl">
            Kind words from clients
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--secondary)] md:text-base">
            A little insight into the care, craft, and collaboration behind every project.
          </p>
        </div>

        <div className="testimonial-marquee-viewport" aria-label="Client testimonials">
          <div
            className="testimonial-marquee-track"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {renderTestimonials()}
            {renderTestimonials(true)}
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-5xl justify-center px-6">
          <button
            type="button"
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={isPaused ? "Resume testimonial movement" : "Pause testimonial movement"}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-[var(--secondary)] transition-colors hover:border-[var(--accent)]/50 hover:text-[var(--primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            {isPaused ? <Play aria-hidden="true" className="h-3.5 w-3.5" /> : <Pause aria-hidden="true" className="h-3.5 w-3.5" />}
            {isPaused ? "Play" : "Pause"}
          </button>
        </div>
      </div>
    </section>
  );
}
