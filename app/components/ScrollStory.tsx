"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";

const stages = [
  {
    num: "01",
    label: "Surface Reset",
    text: "Every transformation starts here. We strip away the invisible — iron deposits, embedded contaminants, road tar. Your paint, finally clean down to the pore.",
    image: "/images/scroll-story/01-dirty-arrival.webp",
    alt: "Dirty Porsche Panamera arriving at Dust Defender Lab for detailing",
  },
  {
    num: "02",
    label: "Safe Wash",
    text: "No shortcuts. pH-neutral foam, two-bucket method, microfiber only. We treat your paint like it deserves — with precision, not pressure.",
    image: "/images/scroll-story/02-foam-wash.webp",
    alt: "Porsche Panamera covered in thick foam wash at detailing studio",
  },
  {
    num: "03",
    label: "Paint Correction",
    text: "Machine polishing reveals what's been hiding. Swirl marks vanish. Micro-scratches disappear. The surface becomes a mirror.",
    image: "/images/scroll-story/03-polishing.webp",
    alt: "Close-up of machine polishing paint correction on Porsche hood",
  },
  {
    num: "04",
    label: "Ceramic Shield",
    text: "Professional-grade ceramic coating bonds at the molecular level. Hydrophobic. UV-resistant. Scratch-resistant. This isn't wax — it's armor.",
    image: "/images/scroll-story/04-ceramic-coating.webp",
    alt: "Ceramic coating application showing iridescent shimmer on Porsche hood",
  },
  {
    num: "05",
    label: "Final Reveal",
    text: "Mirror finish. Deep gloss. Water beads and rolls. Your car doesn't just look new — it's protected for years.",
    image: "/images/scroll-story/05-final-reveal.webp",
    alt: "Completed ceramic coated Porsche Panamera with perfect mirror finish",
  },
];

function StageImage({
  stage,
  progress,
  index,
}: {
  stage: (typeof stages)[0];
  progress: MotionValue<number>;
  index: number;
}) {
  const total = stages.length;
  const segmentSize = 1 / total;
  const overlap = 0.08;
  const start = index * segmentSize - overlap;
  const end = (index + 1) * segmentSize + overlap;

  const opacity = useTransform(progress, (v: number) => {
    if (index === 0 && v <= segmentSize) return 1;
    if (v < start) return 0;
    if (v < start + overlap * 2) return (v - start) / (overlap * 2);
    if (v < end - overlap * 2) return 1;
    if (v < end) return index === total - 1 ? 1 : 1 - (v - (end - overlap * 2)) / (overlap * 2);
    return index === total - 1 ? 1 : 0;
  });

  const imageScale = useTransform(progress, (v: number) => {
    return v >= start && v <= end ? 1.05 : 1;
  });

  return (
    <motion.div
      className="absolute inset-0"
      style={{ opacity, zIndex: index }}
    >
      <motion.div className="relative w-full h-full" style={{ scale: imageScale }}>
        <Image
          src={stage.image}
          alt={stage.alt}
          fill
          className="object-cover object-[center_30%] brightness-[0.9]"
          sizes="(max-width: 768px) 100vw, 60vw"
          loading={index === 0 ? "eager" : "lazy"}
        />
      </motion.div>
    </motion.div>
  );
}

function StageText({
  stage,
  progress,
  index,
}: {
  stage: (typeof stages)[0];
  progress: MotionValue<number>;
  index: number;
}) {
  const total = stages.length;
  const segmentSize = 1 / total;
  const center = (index + 0.5) * segmentSize;

  const opacity = useTransform(
    progress,
    [center - segmentSize * 0.5, center - segmentSize * 0.2, center + segmentSize * 0.2, center + segmentSize * 0.5],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [center - segmentSize * 0.5, center - segmentSize * 0.2, center + segmentSize * 0.2, center + segmentSize * 0.5],
    [30, 0, 0, -30]
  );

  return (
    <motion.div
      className="absolute top-0 bottom-0 left-6 md:left-16 lg:left-24 xl:left-32 right-6 lg:right-12 flex flex-col justify-center"
      style={{ opacity, y }}
    >
      <span className="font-display text-[clamp(4rem,8vw,7rem)] leading-none text-accent/[0.12] mb-2">
        {stage.num}
      </span>
      <h3 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] text-text tracking-wide mb-4">
        {stage.label.toUpperCase()}
      </h3>
      <p className="text-text-muted text-sm md:text-base leading-relaxed max-w-sm font-light">
        {stage.text}
      </p>
    </motion.div>
  );
}

export default function ScrollStory() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-bg">
        {/* Section label */}
        <div className="absolute top-8 left-6 md:left-16 lg:left-24 z-20 flex items-center gap-3">
          <span className="w-7 h-px bg-gold" />
          <span className="text-gold text-[10px] tracking-[0.45em] uppercase font-body">
            The Process
          </span>
        </div>

        {/* Desktop: two-column layout */}
        <div className="hidden md:flex h-full">
          {/* Left: image (50%) */}
          <div className="relative w-[50%] h-full">
            {stages.map((stage, i) => (
              <StageImage
                key={stage.num}
                stage={stage}
                progress={scrollYProgress}
                index={i}
              />
            ))}
            {/* Gradient edge fade */}
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />
          </div>

          {/* Right: text (50%) */}
          <div className="relative w-[50%] h-full">
            {stages.map((stage, i) => (
              <StageText
                key={stage.num}
                stage={stage}
                progress={scrollYProgress}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Mobile: full-width image with text overlay */}
        <div className="flex md:hidden h-full flex-col">
          <div className="relative flex-1">
            {stages.map((stage, i) => (
              <StageImage
                key={stage.num}
                stage={stage}
                progress={scrollYProgress}
                index={i}
              />
            ))}
            {/* Bottom gradient for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-bg via-bg/80 to-transparent z-10" />
          </div>

          {/* Text overlay at bottom */}
          <div className="absolute bottom-0 inset-x-0 z-20 px-5 pb-6" style={{ minHeight: "40%" }}>
            {stages.map((stage, i) => (
              <StageText
                key={stage.num}
                stage={stage}
                progress={scrollYProgress}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Post-story CTA — fades in at final stage */}
        <ScrollStoryCTA progress={scrollYProgress} />

        {/* Progress dots */}
        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
          {stages.map((stage, i) => (
            <ProgressDot
              key={stage.num}
              index={i}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollStoryCTA({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0.82, 0.92], [0, 1]);
  const y = useTransform(progress, [0.82, 0.92], [30, 0]);

  return (
    <motion.div
      className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-md"
      style={{ opacity, y }}
    >
      <div className="bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl p-5 md:p-6 text-center">
        <p className="font-display text-lg md:text-xl text-text tracking-wide mb-1">
          YOUR TRANSFORMATION STARTS HERE
        </p>
        <p className="text-text-muted text-xs mb-4 font-light">
          Find out which protection is right for your vehicle
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <a
            href="#quiz"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold text-bg font-body font-semibold text-xs tracking-wide px-5 py-2.5 rounded-full hover:brightness-110 transition-all duration-300"
          >
            Take the Free Quiz
          </a>
          <a
            href="https://wa.me/919999999999?text=Hi!%20I%20loved%20the%20process%20on%20your%20site.%20I'd%20like%20a%20quote%20for%20my%20car."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-accent/20 text-accent/70 font-body text-xs tracking-wide px-5 py-2.5 rounded-full hover:bg-accent/10 transition-all duration-300"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressDot({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const segmentSize = 1 / stages.length;
  const isActive = useTransform(progress, (v: number) => {
    const start = index * segmentSize;
    const end = (index + 1) * segmentSize;
    return v >= start && v < end ? 1 : 0.3;
  });

  const scale = useTransform(progress, (v: number) => {
    const start = index * segmentSize;
    const end = (index + 1) * segmentSize;
    return v >= start && v < end ? 1.4 : 1;
  });

  return (
    <motion.div
      className="w-2 h-2 rounded-full bg-accent"
      style={{ opacity: isActive, scale }}
      transition={{ duration: 0.3 }}
    />
  );
}
