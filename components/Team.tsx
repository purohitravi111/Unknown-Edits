"use client";
import React from 'react';
import { motion } from 'motion/react';
import { team } from '../data/content';
import Image from "next/image";

export function Team() {
  return (
    <section id="team" className="py-32 bg-[var(--bg-muted)] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)] mb-4">Meet The Team</h2>
          <p className="text-[var(--secondary)] max-w-2xl mx-auto">
            The creative minds behind the screen. We are editors, designers, and storytellers obsessed with the craft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[var(--bg-default)] rounded-[var(--radius-lg)] overflow-hidden border border-white/5 group"
            >
              <div className="relative aspect-square overflow-hidden bg-[var(--bg-paper)]">
               <Image
  src={member.photo}
  alt={member.name}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
/>
              </div>
              <div className="p-8 text-center md:text-left">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-1">{member.name}</h3>
                <p className="text-[var(--accent)] font-medium text-sm mb-4">{member.role}</p>
                <p className="text-[var(--secondary)] text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {member.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 bg-white/5 rounded-full text-xs text-[var(--secondary)] border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
