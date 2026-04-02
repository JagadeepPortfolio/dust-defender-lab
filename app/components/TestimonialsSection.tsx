"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    text: "Got ceramic coating for my Creta. The gloss is insane — looks better than showroom. Team was professional and transparent about everything.",
    name: "Rajesh K.",
    vehicle: "Hyundai Creta",
  },
  {
    text: "Best detailing studio in Hyderabad, hands down. My 3-year-old Fortuner looks brand new after their graphene coating. Worth every rupee.",
    name: "Priya M.",
    vehicle: "Toyota Fortuner",
  },
  {
    text: "Was comparing ceramic coating studios across Hyderabad. DDL offered the best quality with premium products. The PPF on my hood is invisible.",
    name: "Vikram S.",
    vehicle: "Honda City",
  },
  {
    text: "Got my Royal Enfield detailed here. The attention to detail on a bike is unmatched. The chrome looks like a mirror now.",
    name: "Arjun D.",
    vehicle: "Royal Enfield Classic",
  },
  {
    text: "Booked on WhatsApp, dropped my car, picked it up gleaming. Smooth process, no upselling, just honest work. My Polo GTI has never looked better.",
    name: "Sneha R.",
    vehicle: "VW Polo GTI",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--color-gold)" stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function MobileTestimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.1"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <div ref={ref} className="md:hidden overflow-hidden -mx-6">
      <motion.div className="flex gap-3 px-6" style={{ x }}>
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex-shrink-0 w-[80vw] rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-xl p-5"
          >
            <Stars />
            <p className="text-text-muted text-sm leading-relaxed font-light mb-4">
              &ldquo;{t.text}&rdquo;
            </p>
            <div>
              <p className="text-text text-sm font-medium">{t.name}</p>
              <p className="text-text-muted/60 text-xs">{t.vehicle} · via Google</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative bg-bg-elevated py-24 md:py-32 px-6 md:px-16 lg:px-24 overflow-hidden">
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
            What Our Clients Say
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-4">
          <motion.h2
            className="font-display text-[clamp(2rem,5vw,3.5rem)] text-text leading-[0.95]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            TRUSTED BY
            <br />
            <span className="text-accent/70">HYDERABAD</span>
          </motion.h2>

          {/* Google rating badge */}
          <motion.div
            className="flex items-center gap-2 bg-glass-bg border border-glass-border rounded-full px-4 py-2 w-fit"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-gold text-sm font-semibold">4.9 ★</span>
            <span className="text-text-muted text-xs">on Google · 120+ Reviews</span>
          </motion.div>
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              className="rounded-2xl border border-glass-border bg-glass-bg backdrop-blur-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <Stars />
              <p className="text-text-muted text-sm leading-relaxed font-light mb-5">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-text text-sm font-medium">{t.name}</p>
                <p className="text-text-muted/60 text-xs">{t.vehicle} · via Google</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <MobileTestimonials />
      </div>
    </section>
  );
}
