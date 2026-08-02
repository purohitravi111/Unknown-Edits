"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PortfolioProject } from "../types";

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
  
           className="relative w-full max-w-7xl h-[90vh] rounded-2xl overflow-hidden bg-[#111] flex flex-col"
            initial={{ scale: .95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: .95, opacity: 0 }}
            transition={{  duration: 0.25,ease: "easeOut", }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
            >
              <X size={20} />
            </button>

   <div
  className="relative z-50 flex-1 bg-black"
  
>
  <video
    src={project.fullVideo}
    controls
    autoPlay
    playsInline
      preload="metadata"
    className="w-full h-full object-contain"
  />
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