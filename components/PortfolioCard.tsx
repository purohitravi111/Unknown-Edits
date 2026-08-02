"use client";

import React, { useRef } from "react";
import { motion } from "motion/react";
import { PortfolioProject } from "../types";

interface PortfolioCardProps {
  project: PortfolioProject;
  onClick: () => void;
}

export default function PortfolioCard({
  project,
  onClick,
}: PortfolioCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      layoutId={project.projectName}
      className="group cursor-pointer block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        className={`relative ${
          project.category === "Long Form"
            ? "aspect-video"
            : "aspect-[9/16]"
        } rounded-[var(--radius-base)] overflow-hidden bg-[var(--bg-default)] mb-4`}
      >
        {/* Preview Video */}
        <video
          ref={videoRef}
          src={project.previewVideo}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        {/* Thumbnail */}
        <img
          src={project.thumbnail}
          alt={project.projectName}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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

      <p className="text-sm text-[var(--secondary)]">
        {project.clientName} • {project.duration}
      </p>
    </motion.div>
  );
}