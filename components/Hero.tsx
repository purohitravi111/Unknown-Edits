"use client";
import React from 'react';
import { motion } from 'motion/react';
import { heroSection } from '../data/content';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
     <div className="absolute inset-0 z-0">

  <video
  autoPlay
  muted
  loop
  playsInline
  controls
  className="absolute inset-0 w-full h-full object-cover z-0"
>
  <source src={heroSection.video} type="video/mp4" />
</video>

  <img
  src={heroSection.backgroundImage}
  alt="Hero Background"
  className="absolute inset-0 w-full h-full object-cover opacity-0"
/>

  <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-default)]/40 via-[var(--bg-default)]/80 to-[var(--bg-default)] z-10" />

</div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest text-[var(--secondary)] uppercase mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
          {heroSection.badge}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[var(--primary)] max-w-5xl leading-[1.1]"
        >
          {heroSection.headline}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-rose-400">
            {heroSection.highlightedWords}
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-[var(--secondary)] max-w-2xl font-light"
        >
          {heroSection.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          {heroSection.buttons.map((btn, idx) => (
            <a
              key={idx}
              href={btn.url}
              className={`px-8 py-4 rounded-[var(--radius-base)] font-bold transition-all flex items-center justify-center gap-2 w-full sm:w-auto ${
                btn.primary 
                  ? 'bg-[var(--accent)] text-white shadow-[var(--glow)] hover:scale-105'
                  : 'bg-white/5 text-[var(--primary)] hover:bg-white/10 border border-white/10'
              }`}
            >
              {!btn.primary && <Play className="w-4 h-4" />}
              {btn.label}
            </a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/10 pt-12 w-full max-w-4xl"
        >
          {heroSection.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-[var(--primary)]">{stat.value}</span>
              <span className="text-sm text-[var(--secondary)] mt-2 font-medium tracking-wide">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
