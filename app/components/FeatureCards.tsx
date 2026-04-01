"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Hydrophobic Protection",
    description:
      "Water beads and slides off instantly. Dust, dirt, and grime can't bond to the surface. Your car stays cleaner, longer.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4C16 4 6 14 6 20a10 10 0 0020 0C26 14 16 4 16 4z" />
        <path d="M12 22a4 4 0 004 4" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "UV Shielding",
    description:
      "Sun damage fades paint, yellows headlights, and ages plastic. Our ceramic coating blocks UV at the molecular level.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="5" />
        <path d="M16 3v4M16 25v4M4.9 7.1l2.8 2.8M24.3 22.1l2.8 2.8M3 16h4M25 16h4M4.9 24.9l2.8-2.8M24.3 9.9l2.8-2.8" />
      </svg>
    ),
  },
  {
    title: "Scratch Resistance",
    description:
      "A hardness layer sits above your paint. Minor scratches, swirl marks, and wash marring — handled before they happen.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3l3.7 7.5L28 12l-6 5.8L23.4 26 16 22l-7.4 4L10 17.8 4 12l8.3-1.5z" />
      </svg>
    ),
  },
  {
    title: "Showroom Gloss",
    description:
      "Not just protection — transformation. Deep, wet-look gloss that makes your car look better than the day you bought it.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 2v4M16 26v4M2 16h4M26 16h4" />
        <path d="M6.3 6.3l2.8 2.8M22.9 22.9l2.8 2.8M6.3 25.7l2.8-2.8M22.9 9.1l2.8-2.8" opacity="0.5" />
        <circle cx="16" cy="16" r="4" />
      </svg>
    ),
  },
];

export default function FeatureCards() {
  return (
    <section className="relative bg-bg-elevated py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="w-7 h-px bg-gold" />
          <span className="text-gold text-[10px] tracking-[0.45em] uppercase">
            Why This Is Premium
          </span>
        </motion.div>

        <motion.h2
          className="font-display text-[clamp(2rem,5vw,4rem)] text-text leading-[0.95] mb-14 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          ENGINEERED
          <br />
          <span className="text-accent/70">PROTECTION</span>
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="group relative rounded-2xl p-6 md:p-8 border border-glass-border bg-glass-bg backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px bg-accent/30" />

              {/* Light sweep on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[linear-gradient(135deg,transparent_40%,rgba(232,240,255,0.04)_50%,transparent_60%)] bg-[length:200%_200%] group-hover:animate-[lightSweep_0.8s_ease-out]" />

              {/* Icon */}
              <div className="text-accent/60 mb-5 group-hover:text-accent/90 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-body text-lg font-bold text-text mb-3">
                {feature.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
