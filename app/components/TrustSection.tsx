"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const stats = [
  { value: 500, suffix: "+", label: "Cars Detailed" },
  { value: 4.9, suffix: "★", label: "Google Rating", isDecimal: true },
  { value: 3, suffix: "+", label: "Years Experience" },
];

function AnimatedCounter({
  value,
  suffix,
  isDecimal,
}: {
  value: number;
  suffix: string;
  isDecimal?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const target = isDecimal ? Math.floor(value) : value;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value, isDecimal]);

  return (
    <span ref={ref} className="font-display text-[clamp(3rem,6vw,4.5rem)] leading-none text-text">
      {count}
      {isDecimal && <span className="text-gold">.9</span>}
      <sup className="text-gold text-[0.4em] ml-1">{suffix}</sup>
    </span>
  );
}

const galleryImages = [
  { src: "/images/gallery/mercedes-wash.webp", alt: "Mercedes AMG GT getting premium foam wash at Dust Defender Lab studio" },
  { src: "/images/gallery/bike-detailing.webp", alt: "Custom bike with gold wheels after professional detailing at Dust Defender Lab" },
  { src: "/images/gallery/porsche-gloss.webp", alt: "Porsche 911 rear quarter showing deep gloss ceramic coating finish" },
];

export default function TrustSection() {
  return (
    <section className="relative bg-bg py-24 md:py-32 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Ghost text background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[18vw] text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        DUST DEFENDER
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
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
            Local Authority
          </span>
        </motion.div>

        <motion.h2
          className="font-display text-[clamp(2rem,5vw,4rem)] text-text leading-[0.95] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          HYDERABAD&apos;S PREMIUM
          <br />
          <span className="text-accent/70">DETAILING STUDIO</span>
        </motion.h2>

        {/* SEO-rich copy */}
        <motion.p
          className="text-text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-14 md:mb-20 font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Looking for the best car detailing studio in Hyderabad? Dust Defender
          Lab is where car owners come for professional ceramic coating that
          delivers deep gloss, hydrophobic protection, and long-lasting
          durability. Whether you&apos;re comparing ceramic coating price or checking
          car detailing cost in Hyderabad, we offer transparent, customized
          packages for every vehicle and budget.
        </motion.p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 md:gap-8 mb-16 md:mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center md:text-left group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                isDecimal={stat.isDecimal}
              />
              <p className="text-text-muted text-[11px] md:text-sm mt-2 tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.src}
              className="relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.23, 1, 0.32, 1],
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Additional SEO copy */}
        <motion.p
          className="text-text-muted text-sm leading-relaxed max-w-3xl mt-12 font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          From luxury sedans to everyday rides, our expert technicians use
          premium-grade products and proven techniques. We&apos;re not just a car
          detailing studio near you — we&apos;re the studio Hyderabad trusts.
          Whether you need bike detailing or full ceramic coating for your car,
          visit Dust Defender Lab today.
        </motion.p>
      </div>
    </section>
  );
}
