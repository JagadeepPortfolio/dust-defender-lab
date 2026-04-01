"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Minimal sports-car side profile (Panamera-esque silhouette) */
function CarSilhouette({ visible }: { visible: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-28 md:w-36 h-auto mb-8"
      initial={{ opacity: 0 }}
      animate={visible ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Car body outline — draws itself */}
      <motion.path
        d="M10,42 L20,42 C22,42 24,40 26,38 L40,28 C44,25 50,22 58,20 L90,16 C100,15 120,15 140,16 L160,18 C166,19 170,22 174,26 L182,34 C184,36 186,38 188,40 L192,42 L196,42"
        stroke="var(--color-accent)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0.4 }}
        animate={visible ? { pathLength: 1, opacity: 0.5 } : {}}
        transition={{ duration: 1.8, ease: [0.23, 1, 0.32, 1] }}
      />
      {/* Roofline */}
      <motion.path
        d="M58,20 L72,12 C80,9 95,8 110,8 L130,9 C138,10 144,12 148,15 L160,18"
        stroke="var(--color-accent)"
        strokeWidth="0.8"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0.3 }}
        animate={visible ? { pathLength: 1, opacity: 0.4 } : {}}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
      />
      {/* Window */}
      <motion.path
        d="M70,18 L78,12 C84,10 96,9 110,9 L128,10 C134,11 138,13 142,16"
        stroke="var(--color-accent)"
        strokeWidth="0.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={visible ? { pathLength: 1, opacity: 0.25 } : {}}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
      />
      {/* Front wheel */}
      <motion.circle
        cx="48" cy="44" r="8"
        stroke="var(--color-accent)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={visible ? { pathLength: 1, opacity: 0.5 } : {}}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.circle
        cx="48" cy="44" r="4"
        stroke="var(--color-accent)"
        strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={visible ? { pathLength: 1, opacity: 0.3 } : {}}
        transition={{ duration: 0.6, delay: 1.0, ease: [0.23, 1, 0.32, 1] }}
      />
      {/* Rear wheel */}
      <motion.circle
        cx="160" cy="44" r="8"
        stroke="var(--color-accent)"
        strokeWidth="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={visible ? { pathLength: 1, opacity: 0.5 } : {}}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
      />
      <motion.circle
        cx="160" cy="44" r="4"
        stroke="var(--color-accent)"
        strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={visible ? { pathLength: 1, opacity: 0.3 } : {}}
        transition={{ duration: 0.6, delay: 1.1, ease: [0.23, 1, 0.32, 1] }}
      />
      {/* Headlight accent */}
      <motion.line
        x1="14" y1="38" x2="24" y2="36"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={visible ? { pathLength: 1, opacity: 0.6 } : {}}
        transition={{ duration: 0.4, delay: 1.3, ease: [0.23, 1, 0.32, 1] }}
      />
      {/* Taillight accent */}
      <motion.line
        x1="190" y1="38" x2="194" y2="40"
        stroke="var(--color-gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={visible ? { pathLength: 1, opacity: 0.6 } : {}}
        transition={{ duration: 0.4, delay: 1.4, ease: [0.23, 1, 0.32, 1] }}
      />
    </motion.svg>
  );
}

export default function CinematicLoader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [phase, setPhase] = useState<"line" | "car" | "name" | "tagline" | "exit">("line");

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase("car"), 300),
      setTimeout(() => setPhase("name"), 1800),
      setTimeout(() => setPhase("tagline"), 2800),
      setTimeout(() => setPhase("exit"), 3800),
      setTimeout(() => onComplete(), 4400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const showCar = phase === "car" || phase === "name" || phase === "tagline" || phase === "exit";
  const showName = phase === "name" || phase === "tagline" || phase === "exit";
  const showTagline = phase === "tagline" || phase === "exit";

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        {/* Subtle ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px]" />
        </div>

        {/* Car silhouette — draws itself */}
        <CarSilhouette visible={showCar} />

        {/* Top accent line — draws in */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent mb-6"
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        />

        {/* Brand name */}
        <div className="relative overflow-hidden">
          <motion.h1
            className="font-display text-[clamp(2.5rem,8vw,5.5rem)] text-text tracking-[0.15em] leading-none"
            initial={{ y: "110%", opacity: 0 }}
            animate={showName ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          >
            DUST DEFENDER
          </motion.h1>
        </div>

        <div className="relative overflow-hidden mt-1">
          <motion.h1
            className="font-display text-[clamp(2.5rem,8vw,5.5rem)] text-accent/80 tracking-[0.15em] leading-none"
            initial={{ y: "110%", opacity: 0 }}
            animate={showName ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.9,
              delay: 0.12,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            LAB
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          className="mt-6 text-text-muted text-xs md:text-sm tracking-[0.4em] uppercase font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={showTagline ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          Premium Car Detailing Studio
        </motion.p>

        {/* Bottom accent line */}
        <motion.div
          className="mt-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          initial={{ width: 0 }}
          animate={showTagline ? { width: 80 } : {}}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        />

        {/* Exit — curtain wipe up */}
        {phase === "exit" && (
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
