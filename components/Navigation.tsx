"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { agencyInfo, navigation } from '../data/content';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[var(--bg-default)]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 relative z-50">
          {/* Logo can be an image, here we use text as fallback */}
          <span className="text-2xl font-bold tracking-tighter text-[var(--primary)] uppercase">
            {agencyInfo.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item, index) => (
            <a 
              key={index} 
              href={item.url}
              className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors text-sm font-medium tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={agencyInfo.primaryCTA.url}
            className="px-5 py-2.5 rounded-[var(--radius-base)] bg-[var(--accent)] text-white text-sm font-semibold hover:bg-opacity-90 transition-all shadow-[var(--glow)]"
          >
            {agencyInfo.primaryCTA.label}
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 text-[var(--primary)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[var(--bg-default)] z-40 flex flex-col items-center justify-center gap-8"
          >
            {navigation.map((item, index) => (
              <a 
                key={index} 
                href={item.url}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-[var(--secondary)] hover:text-[var(--primary)] transition-colors"
              >
                {item.label}
              </a>
            ))}
             <a 
                href={agencyInfo.primaryCTA.url}
                onClick={() => setMobileMenuOpen(false)}
                className="px-8 py-4 rounded-[var(--radius-base)] bg-[var(--accent)] text-white text-lg font-bold shadow-[var(--glow)] mt-4"
              >
                {agencyInfo.primaryCTA.label}
              </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
