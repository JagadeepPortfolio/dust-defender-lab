"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Hero({ ready = false }: { ready?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Background image with scroll zoom */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src="/images/hero.webp"
          alt="Mirror-finish Porsche Panamera with perfect ceramic coating reflections at Dust Defender Lab studio"
          fill
          priority
          className="object-cover object-[center_30%] brightness-[0.85]"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-transparent to-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto"
        style={{ opacity }}
      >
        <motion.p
          className="text-accent/60 font-body text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Premium Car Detailing Studio
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] text-text tracking-tight"
            initial={{ opacity: 0, y: "100%" }}
            animate={ready ? { opacity: 1, y: "0%" } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
          >
            NOT JUST A WASH.
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            className="font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9] text-accent/90 tracking-tight"
            initial={{ opacity: 0, y: "100%" }}
            animate={ready ? { opacity: 1, y: "0%" } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.45 }}
          >
            A TRANSFORMATION.
          </motion.h1>
        </div>

        <motion.p
          className="mt-5 md:mt-6 text-text-muted text-base md:text-lg max-w-md font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.65 }}
        >
          Subtle shine. Deep gloss. Protection that lasts.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="mt-6 md:mt-8 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.85 }}
        >
          <a
            href="#quiz"
            className="inline-flex items-center gap-2 bg-gold text-bg font-body font-semibold text-sm tracking-wide px-6 py-3 rounded-full hover:brightness-110 transition-all duration-300"
          >
            Find Your Perfect Protection
          </a>
          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-2 border border-accent/20 text-accent/80 font-body text-sm tracking-wide px-6 py-3 rounded-full hover:bg-accent/10 transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            Call Now
          </a>
        </motion.div>

        {/* Micro-trust line */}
        <motion.p
          className="mt-4 text-text-muted/60 text-xs tracking-wide"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          ★ 4.9 Rated · 500+ Cars Detailed · Free Consultation
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-6 flex items-center gap-3 text-text-muted text-sm"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
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
