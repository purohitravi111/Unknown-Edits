"use client";
import React from 'react';
import { motion } from 'motion/react';
import { contact, faq } from '../data/content';
import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export function ContactAndFAQ() {
  return (
    <section id="contact" className="py-32 bg-[var(--bg-default)] relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        {/* Contact Form */}
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)] mb-6">Let&apos;s Talk.</h2>
          <p className="text-[var(--secondary)] mb-10">
            Ready to scale your content? Fill out the form and we&apos;ll get back to you within 24 hours.
          </p>

          <form action="https://formspree.io/f/xvzedvrw"
  method="POST" className="space-y-4" >
            <div className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full px-5 py-4 bg-[var(--bg-paper)] border border-white/5 rounded-[var(--radius-base)] text-[var(--primary)] focus:border-[var(--accent)] outline-none transition-colors"
              />
              <input
              name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full px-5 py-4 bg-[var(--bg-paper)] border border-white/5 rounded-[var(--radius-base)] text-[var(--primary)] focus:border-[var(--accent)] outline-none transition-colors"
              />
            </div>
            <input
            name="email"
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-4 bg-[var(--bg-paper)] border border-white/5 rounded-[var(--radius-base)] text-[var(--primary)] focus:border-[var(--accent)] outline-none transition-colors"
            />
            <textarea
            name="message"
              placeholder="Tell us about your project..."
              rows={4}
              className="w-full px-5 py-4 bg-[var(--bg-paper)] border border-white/5 rounded-[var(--radius-base)] text-[var(--primary)] focus:border-[var(--accent)] outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 bg-[var(--accent)] text-white font-bold rounded-[var(--radius-base)] hover:bg-opacity-90 transition-all shadow-[var(--glow)]"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 text-[var(--secondary)]">
              <Mail className="w-5 h-5 text-[var(--accent)]" />
              <span className="text-sm">{contact.email}</span>
            </div>
            <div className="flex items-center gap-4 text-[var(--secondary)]">
              <Phone className="w-5 h-5 text-[var(--accent)]" />
              <span className="text-sm">{contact.phone}</span>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-3xl font-black text-[var(--primary)] mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faq.map((item, idx) => (
              <details key={idx} className="group bg-[var(--bg-paper)] border border-white/5 rounded-[var(--radius-base)] overflow-hidden">
                <summary className="px-6 py-4 font-bold text-[var(--primary)] cursor-pointer flex justify-between items-center outline-none">
                  {item.question}
                  <span className="text-[var(--accent)] transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                </summary>
                <div className="px-6 pb-4 text-[var(--secondary)] text-sm leading-relaxed">
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
