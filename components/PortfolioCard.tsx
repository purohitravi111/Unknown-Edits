"use client";

import React, { useRef } from "react";
import { motion } from "motion/react";
import { PortfolioProject } from "../types";
import Image from "next/image";

interface PortfolioCardProps {
  project: PortfolioProject;
  onClick: () => void;
}

export default function PortfolioCard({
  project,
  onClick,
}: PortfolioCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
const [isHovered, setIsHovered] = React.useState(false);

 const handleMouseEnter = () => {
  setIsHovered(true);
};

const handleMouseLeave = () => {
  setIsHovered(false);
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
        {isHovered && (
  <video
    ref={videoRef}
    src={project.previewVideo}
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  />
)}

        {/* Thumbnail */}
       <Image
  src={project.thumbnail}
  alt={project.projectName}
  fill
  sizes={
    project.category === "Long Form"
      ? "(max-width: 768px) 100vw, 50vw"
      : "(max-width: 768px) 50vw, 25vw"
  }
  className={`absolute inset-0 object-cover transition-opacity duration-300 ${
    isHovered ? "opacity-0" : "opacity-100"
  }`}
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