"use client";
import React from 'react';
import { motion } from 'motion/react';
import { services } from '../data/content';
import { ArrowRight } from 'lucide-react';

export function Services() {
  const displayServices = services.sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section id="services" className="py-32 bg-[var(--bg-default)] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)] mb-4">Our Services</h2>
          <p className="text-[var(--secondary)] max-w-2xl">
            We offer end-to-end video post-production tailored for modern platforms, designed to maximize engagement and conversion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayServices.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-8 md:p-10 rounded-[var(--radius-lg)] bg-[var(--bg-paper)] border border-white/5 overflow-hidden flex flex-col items-start hover:border-white/20 transition-colors"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-48 h-48 text-[var(--accent)]" />
                </div>
                
                <div className="w-14 h-14 rounded-[var(--radius-base)] bg-[var(--accent)]/10 flex items-center justify-center mb-8 relative z-10">
                  <Icon className="w-7 h-7 text-[var(--accent)]" />
                </div>
                
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-4 relative z-10">{service.title}</h3>
                <p className="text-[var(--secondary)] mb-10 relative z-10 leading-relaxed flex-grow">{service.description}</p>
                
                <a 
                  href={service.cta.url}
                  className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:text-[var(--accent)] transition-colors relative z-10 mt-auto"
                >
                  {service.cta.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
