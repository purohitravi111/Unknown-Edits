"use client";


import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PortfolioProject } from "../types";
import React, { useEffect, useState } from "react";
import { getVideoSource } from "../lib/video";



interface Props {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioModal({
  project,
  isOpen,
  onClose,
}: Props) {

  const [isVertical, setIsVertical] = useState(false);
  const source = project
    ? getVideoSource(project.videoUrl, project.embedUrl, project.thumbnailUrl)
    : null;

  useEffect(() => {
    setIsVertical(Boolean(project && project.format === "Short Form"));
  }, [project]);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
  
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
  
         className={`relative rounded-2xl overflow-hidden bg-[#111] transition-all duration-300
${
  isVertical
    ? "w-[380px] h-[90vh]"
    : "w-full max-w-7xl h-[90vh]"
}
flex flex-col`}
            initial={{ scale: .95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: .95, opacity: 0 }}
            transition={{  duration: 0.25,ease: "easeOut", }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close video"
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            >
              <X size={20} />
            </button>

   <div
  className="relative z-0 flex-1 bg-black"
  
>
  {source?.kind === "embed" ? (
    <iframe
      src={source.embedUrl}
      title={project.projectName}
      allow="autoplay; encrypted-media; picture-in-picture; web-share; fullscreen"
      sandbox={source.restrictExternalNavigation ? "allow-scripts allow-same-origin allow-presentation" : undefined}
      allowFullScreen
      className="h-full w-full border-0"
    />
  ) : source?.kind === "file" ? (
  <video
  src={source.fileUrl}
  controls
  autoPlay
  playsInline
  preload="metadata"
  onLoadedMetadata={(e) => {
    const video = e.currentTarget;
    setIsVertical(video.videoHeight > video.videoWidth);
  }}
  className="w-full h-full object-contain"
/>
  ) : (
    <div className="flex h-full flex-col items-center justify-center gap-4 px-8 text-center text-white">
      <p className="text-lg">This link cannot be embedded automatically.</p>
      <a href={project.videoUrl} target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-3 font-semibold text-black hover:bg-gray-200">
        Watch on the original platform
      </a>
      <p className="max-w-lg text-sm text-gray-400">For an unlisted or custom video host, add its official embed URL to the <code>embedUrl</code> field in data/content.ts.</p>
    </div>
  )}
</div>

            <div className="p-8 overflow-y-auto">
              <h2 className="text-3xl font-bold text-white">
                {project.projectName}
              </h2>

              <p className="mt-4 text-gray-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                {project.softwareUsed.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-white/10 text-white text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
