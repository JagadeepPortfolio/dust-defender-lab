"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Paint Protection Film",
    tag: "PPF",
    description:
      "Invisible armor against rock chips, scratches, and road debris. Self-healing technology keeps your paint flawless for years.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 3l3.7 7.5L28 12l-6 5.8L23.4 26 16 22l-7.4 4L10 17.8 4 12l8.3-1.5z" />
      </svg>
    ),
  },
  {
    title: "Ceramic Coating",
    tag: "Most Popular",
    description:
      "Professional-grade SiO2 coating that bonds at the molecular level. Hydrophobic, UV-resistant, and lasts 2-5 years.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4C16 4 6 14 6 20a10 10 0 0020 0C26 14 16 4 16 4z" />
        <path d="M12 22a4 4 0 004 4" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Graphene Coating",
    tag: "Advanced",
    description:
      "Next-gen graphene-infused protection. Superior heat dissipation, anti-static properties, and deeper gloss than traditional ceramic.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="16,4 24,10 24,22 16,28 8,22 8,10" />
        <polygon points="16,10 20,13 20,19 16,22 12,19 12,13" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Sunfilm Protection",
    tag: "Interior",
    description:
      "Premium window tinting that blocks 99% UV rays, reduces cabin heat, and adds privacy — all while keeping the view crystal clear.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="16" cy="16" r="5" />
        <path d="M16 3v4M16 25v4M4.9 7.1l2.8 2.8M24.3 22.1l2.8 2.8M3 16h4M25 16h4M4.9 24.9l2.8-2.8M24.3 9.9l2.8-2.8" />
      </svg>
    ),
  },
  {
    title: "Interior Foam Cleaning",
    tag: "Deep Clean",
    description:
      "Deep foam extraction for seats, dashboard, and carpets. Removes stains, odours, and bacteria — your cabin feels brand new.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="8" width="22" height="16" rx="3" />
        <path d="M10 16h12M10 20h8" opacity="0.5" />
        <circle cx="16" cy="5" r="2" />
      </svg>
    ),
  },
  {
    title: "Car Wash & Steam Clean",
    tag: "Essential",
    description:
      "pH-neutral foam wash, clay bar decontamination, and professional steam cleaning. The safest, most thorough wash your car can get.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 24c0-8 4-12 8-18 4 6 8 10 8 18" />
        <path d="M8 24a8 8 0 0016 0" />
        <path d="M14 20c0 2 1 3 2 3s2-1 2-3" opacity="0.4" />
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
            Our Services
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

        {/* Services grid — 2x3 on desktop, 2-col on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="group relative rounded-2xl p-5 md:p-7 border border-glass-border bg-glass-bg backdrop-blur-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-white/[0.15]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-5 right-5 h-px bg-accent/30" />

              {/* Light sweep on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[linear-gradient(135deg,transparent_40%,rgba(232,240,255,0.04)_50%,transparent_60%)] bg-[length:200%_200%] group-hover:animate-[lightSweep_0.8s_ease-out]" />

              {/* Tag */}
              <span className="inline-block text-gold text-[9px] md:text-[10px] tracking-[0.3em] uppercase mb-3 font-medium">
                {service.tag}
              </span>

              {/* Icon */}
              <div className="text-accent/60 mb-4 group-hover:text-accent/90 transition-colors duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-body text-sm md:text-base font-bold text-text mb-2">
                {service.title}
              </h3>
              <p className="text-text-muted text-xs md:text-sm leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quiz teaser */}
        <motion.div
          className="mt-10 md:mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-text-muted text-sm mb-4 font-light">
            Not sure which service is right for you?
          </p>
          <a
            href="#quiz"
            className="inline-flex items-center gap-2 bg-gold text-bg font-body font-semibold text-sm tracking-wide px-7 py-3 rounded-full hover:brightness-110 transition-all duration-300"
          >
            Take the Free Protection Quiz
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
