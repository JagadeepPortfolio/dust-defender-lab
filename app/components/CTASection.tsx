"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative bg-bg-card py-24 md:py-32 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: emotional copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-gold" />
              <span className="text-gold text-[10px] tracking-[0.45em] uppercase">
                Get Started
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] text-text mb-6">
              YOUR CAR DESERVES
              <br />
              <span className="text-accent/80">MORE THAN ORDINARY.</span>
            </h2>

            <p className="text-text-muted text-base md:text-lg leading-relaxed mb-2 max-w-md font-light">
              Book your session today. Walk-ins welcome at our Hyderabad studio.
            </p>
            <p className="text-gold/70 text-xs tracking-wide mb-8">
              Limited slots available this week — book now to secure your date.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/919999999999?text=Hi!%20I'd%20like%20to%20book%20a%20session%20at%20your%20LB%20Nagar%20studio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold text-bg font-body font-semibold px-7 py-3.5 rounded-full text-sm tracking-wide hover:brightness-110 transition-all duration-300"
              >
                Book on WhatsApp
              </a>
              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center gap-2 border border-accent/20 text-accent/80 font-body font-medium px-7 py-3.5 rounded-full text-sm tracking-wide hover:bg-accent/5 transition-all duration-300"
              >
                Call +91 99999 99999
              </a>
            </div>

            {/* Micro-trust */}
            <p className="mt-5 text-text-muted/50 text-[10px] tracking-wider">
              ★ 4.9 Google Rating · 500+ Cars Detailed · Mon-Sat: 10am-7pm
            </p>
          </motion.div>

          {/* Right: Google Map */}
          <motion.div
            id="map"
            className="relative rounded-2xl overflow-hidden border border-glass-border"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="aspect-[4/3] md:aspect-square">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.5!2d78.55!3d17.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c5eb4f4525%3A0x8900fc2980ee9e58!2sDust%20Defender%20Lab%20-%20LB%20Nagar!5e0!3m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(30%) invert(90%) hue-rotate(180deg) brightness(0.85)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dust Defender Lab location on Google Maps — LB Nagar, Hyderabad"
              />
            </div>
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-bg-card to-transparent">
              <p className="text-text-muted text-xs">
                Dust Defender Lab — Bhavani Towers, beside Srikara Hospital, LB Nagar, Hyderabad 500074
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
