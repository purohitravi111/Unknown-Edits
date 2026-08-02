"use client";
import React from 'react';
import { themeConfig } from '../config/theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary', themeConfig.colors.primary);
    root.style.setProperty('--secondary', themeConfig.colors.secondary);
    root.style.setProperty('--accent', themeConfig.colors.accent);
    root.style.setProperty('--glow', themeConfig.colors.glow);
    root.style.setProperty('--bg-default', themeConfig.colors.background.default);
    root.style.setProperty('--bg-paper', themeConfig.colors.background.paper);
    root.style.setProperty('--bg-muted', themeConfig.colors.background.muted);
    
    root.style.setProperty('--radius-base', themeConfig.borderRadius.base);
    root.style.setProperty('--radius-lg', themeConfig.borderRadius.large);
    root.style.setProperty('--radius-full', themeConfig.borderRadius.full);
  }, []);

  return <>{children}</>;
}
