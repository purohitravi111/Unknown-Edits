"use client";
import React from 'react';
import { motion } from 'motion/react';
import { workflow } from '../data/content';

export function Workflow() {
  return (
    <section id="workflow" className="py-32 bg-[var(--bg-default)] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-[var(--primary)] mb-4">How We Work</h2>
          <p className="text-[var(--secondary)] max-w-2xl mx-auto">
            A streamlined, transparent process designed to take your raw footage to final delivery with zero friction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {workflow.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative h-full"
              >
                {/* Connector Line (desktop only) */}
                {idx < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[58%] w-[84%] h-[1px] bg-gradient-to-r from-[var(--accent)]/50 to-transparent" />
                )}
                
               <div className="flex flex-col items-start relative z-10 max-w-[200px] mx-auto">
                  <div className="text-6xl font-black text-white/5 mb-4 select-none absolute -top-10 -left-4">
                    {step.number}
                  </div>
                  <div className="w-[72px] h-[72px] rounded-[var(--radius-base)] bg-[var(--bg-paper)] border border-white/10 flex items-center justify-center mb-6 relative z-10 shadow-lg">
                    <Icon className="w-8 h-8 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--primary)] mb-3">{step.title}</h3>
                  <p className="text-[var(--secondary)] text-sm mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2 w-full">
                    {step.bulletPoints.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-sm text-[var(--secondary)] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]/50" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
