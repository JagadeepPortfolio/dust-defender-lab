"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicLoader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showText, setShowText] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Show brand text after a short delay so video has focus first
    const textTimer = setTimeout(() => setShowText(true), 1200);

    // Start exit after video plays (~7s), but cap at 6s for snappiness
    const exitTimer = setTimeout(() => setExiting(true), 5800);
    const completeTimer = setTimeout(() => onComplete(), 6400);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Video — centered, contained */}
        <motion.div
          className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-full border border-accent/10" />
          <video
            ref={videoRef}
            src="/images/loader-video.mp4"
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Vignette overlay on video */}
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_20px_rgba(10,10,10,0.7)]" />
        </motion.div>

        {/* Brand text — small, below video */}
        <motion.div
          className="mt-8 flex flex-col items-center"
          initial={{ opacity: 0, y: 15 }}
          animate={showText ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* Accent line */}
          <motion.div
            className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-4"
            initial={{ width: 0 }}
            animate={showText ? { width: 80 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          />
          <h1 className="font-display text-xl md:text-2xl text-text tracking-[0.2em] leading-none">
            DUST DEFENDER
          </h1>
          <h1 className="font-display text-xl md:text-2xl text-accent/70 tracking-[0.2em] leading-none mt-1">
            LAB
          </h1>
          <p className="mt-3 text-text-muted text-[10px] md:text-xs tracking-[0.35em] uppercase font-light">
            Premium Car Detailing Studio
          </p>
        </motion.div>

        {/* Exit — curtain wipe up */}
        {exiting && (
          <motion.div
            className="absolute inset-0 bg-bg z-10"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
