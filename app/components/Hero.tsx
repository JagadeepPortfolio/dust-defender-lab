"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const float3DFrom = {
  opacity: 0,
  y: "70%",
  rotateX: -92,
  skewX: -12,
  skewY: 3,
};

const float3DTo = {
  opacity: 1,
  y: "0%",
  rotateX: 0,
  skewX: 0,
  skewY: 0,
};

export default function Hero({ ready = false }: { ready?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const lightX = useTransform(scrollYProgress, [0, 1], ["30%", "70%"]);
  const lightY = useTransform(scrollYProgress, [0, 1], ["40%", "60%"]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background image with scroll zoom */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src="/images/hero.png"
          alt="Mirror-finish Porsche Panamera with perfect ceramic coating reflections at Dust Defender Lab studio"
          fill
          priority
          className="object-cover object-[center_30%] brightness-[0.85]"
          sizes="100vw"
        />
      </motion.div>

      {/* Light glide overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 600px 400px at var(--lx) var(--ly), rgba(232,240,255,0.06), transparent 70%)`,
          // @ts-expect-error CSS custom properties
          "--lx": lightX,
          "--ly": lightY,
        }}
      />

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto"
        style={{ opacity, perspective: 1200 }}
      >
        <motion.p
          className="text-accent/60 font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Premium Car Detailing Studio
        </motion.p>

        {/* 3D float-in text — same as webflow-designer template */}
        <div className="overflow-hidden" style={{ perspective: 1200 }}>
          <motion.h1
            className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] text-text tracking-tight origin-bottom"
            initial={float3DFrom}
            animate={ready ? float3DTo : {}}
            transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            NOT JUST A WASH.
          </motion.h1>
        </div>
        <div className="overflow-hidden" style={{ perspective: 1200 }}>
          <motion.h1
            className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] text-accent/90 tracking-tight origin-bottom"
            initial={float3DFrom}
            animate={ready ? float3DTo : {}}
            transition={{ duration: 1.4, ease: [0.33, 1, 0.68, 1], delay: 0.45 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            A TRANSFORMATION.
          </motion.h1>
        </div>

        <motion.p
          className="mt-5 md:mt-6 text-text-muted text-base md:text-lg max-w-md font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.7 }}
        >
          Subtle shine. Deep gloss. Protection that lasts.
        </motion.p>

        <motion.div
          className="mt-6 md:mt-8 flex items-center gap-3 text-text-muted text-sm"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <span className="w-8 h-px bg-accent/30" />
          <span className="tracking-[0.2em] uppercase text-xs">
            Scroll to explore
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
