"use client";

import React from "react";
import { motion } from "motion/react";
import { PortfolioProject } from "../types";
import { Play } from "lucide-react";
import { getVideoSource } from "../lib/video";

interface PortfolioCardProps {
  project: PortfolioProject;
  onClick: () => void;
}

export default function PortfolioCard({
  project,
  onClick,
}: PortfolioCardProps) {
  const source = getVideoSource(project.videoUrl, project.embedUrl, project.thumbnailUrl);
  const thumbnail = source.thumbnailUrl;

  return (
    <motion.div
      layoutId={project.projectName}
      className="group cursor-pointer block"
      onClick={onClick}
    >
      <div
        className={`relative ${
          project.category === "Long Form"
            ? "aspect-video"
            : "aspect-[9/16]"
        } rounded-[var(--radius-base)] overflow-hidden bg-[var(--bg-default)] mb-4`}
      >
        {thumbnail ? (
          // External providers supply their own thumbnails; don't run them through Next image optimization.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={thumbnail} alt={project.projectName} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950 px-5 text-center text-white/70">
            <span className="text-sm">Add a thumbnail URL in data/content.ts</span>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-sm transition-transform group-hover:scale-110">
            <Play className="ml-1 h-6 w-6 fill-current" />
          </span>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 text-xs font-semibold bg-black/60 backdrop-blur-md text-white rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-bold text-[var(--primary)] mb-1 group-hover:text-[var(--accent)] transition-colors">
        {project.projectName}
      </h3>

      {(project.clientName || project.duration) && (
        <p className="text-sm text-[var(--secondary)]">
          {[project.clientName, project.duration].filter(Boolean).join(" • ")}
        </p>
      )}
    </motion.div>
  );
}
