"use client";
import React from 'react';
import { footer, socialMedia, agencyInfo } from '../data/content';
import { Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold tracking-tighter text-[var(--primary)] uppercase mb-4">
              {agencyInfo.name}
            </h3>
            <p className="text-[var(--secondary)] max-w-sm mb-8">
              {agencyInfo.description}
            </p>
            <div className="flex gap-4">
              {socialMedia.instagram && (
                <a href={socialMedia.instagram} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--secondary)] hover:text-[var(--accent)] hover:bg-white/10 transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {/* {socialMedia.youtube && (
                <a href={socialMedia.youtube} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--secondary)] hover:text-[var(--accent)] hover:bg-white/10 transition-all">
                  <Youtube className="w-5 h-5" />
                </a>
              )}
              {socialMedia.twitter && (
                <a href={socialMedia.twitter} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--secondary)] hover:text-[var(--accent)] hover:bg-white/10 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {socialMedia.linkedin && (
                <a href={socialMedia.linkedin} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--secondary)] hover:text-[var(--accent)] hover:bg-white/10 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              )} */}
            </div>
          </div>

          {/* Links */}
          {footer.links.map((group, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-[var(--primary)] mb-6">{group.title}</h4>
              <ul className="space-y-4">
                {group.items.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href={link.url} className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--secondary)]">
          <p>{footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--primary)]">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--primary)]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
