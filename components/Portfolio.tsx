"use client";

import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import { portfolio, categories } from "../data/content";
import PortfolioModal from "./PortfolioModal";
import PortfolioCard from "./PortfolioCard";
import type { PortfolioProject } from "../types";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const displayProjects = portfolio.filter((project) => project.videoUrl.trim()).sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  const filteredProjects = displayProjects.filter(
    (p) => p.category === activeCategory || p.format === activeCategory
  );

  return (
    <>
      <section
        id="portfolio"
        className="py-32 bg-[var(--bg-muted)] relative z-10"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-[var(--primary)] mb-4">
                Selected Work
              </h2>

              <p className="text-[var(--secondary)] max-w-xl">
                A curated collection of our finest edits across commercial,
                documentary, and social platforms.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 4).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-[var(--accent)] text-white"
                      : "bg-[var(--bg-paper)] text-[var(--secondary)] hover:text-[var(--primary)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <div key={project.videoUrl}>
                  <PortfolioCard
                    project={project}
                    onClick={() => {
                      document.querySelectorAll("video").forEach((v) => {
                        v.pause();
                      });

                      setSelectedProject(project);
                      setIsModalOpen(true);
                    }}
                  />
                </div>
              ))}
            </AnimatePresence>
          </div>
          {filteredProjects.length === 0 && (
            <p className="mt-8 text-center text-[var(--secondary)]">
              Videos will appear here after you add their links in data/content.ts.
            </p>
          )}
        </div>
      </section>

      <PortfolioModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </>
  );
}
