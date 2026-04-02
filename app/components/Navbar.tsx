"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Process", href: "#process" },
  { label: "Protection", href: "#protection" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-xl border-b border-glass-border"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display text-xl md:text-2xl text-text tracking-wider">
            DUST DEFENDER LAB
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted text-xs tracking-[0.2em] uppercase hover:text-text transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+919999999999"
              className="flex items-center gap-1.5 text-accent/70 text-xs tracking-wide hover:text-accent transition-colors duration-300"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              +91 99999 99999
            </a>
            <a
              href="https://wa.me/919999999999?text=Hi!%20I'd%20like%20to%20book%20a%20session.%20What's%20the%20next%20available%20slot%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase bg-gold text-bg font-semibold px-5 py-2.5 rounded-full hover:brightness-110 transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-3"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-px bg-text transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`w-6 h-px bg-text transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
              }`}
            />
          </button>
        </div>
        {/* Info bar — visible on scroll */}
        {scrolled && (
          <div className="hidden md:flex h-6 items-center justify-center gap-4 text-text-muted/50 text-[10px] tracking-wider uppercase border-t border-glass-border">
            <span>Mon-Sat: 10am-7pm</span>
            <span className="w-1 h-1 rounded-full bg-gold/40" />
            <span>LB Nagar, Hyderabad</span>
          </div>
        )}
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="font-display text-3xl text-text tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label.toUpperCase()}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/919999999999?text=Hi%20Dust%20Defender%20Lab%2C%20I%27d%20like%20to%20book%20a%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-whatsapp text-white font-body font-semibold px-8 py-4 rounded-full text-sm tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => setMobileOpen(false)}
            >
              Book on WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
