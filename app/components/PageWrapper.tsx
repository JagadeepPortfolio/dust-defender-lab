"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CinematicLoader from "./CinematicLoader";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ScrollStory from "./ScrollStory";
import FeatureCards from "./FeatureCards";
import ProtectionQuiz from "./ProtectionQuiz";
import TrustSection from "./TrustSection";
import TestimonialsSection from "./TestimonialsSection";
import FAQSection from "./FAQSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function PageWrapper() {
  const [loading, setLoading] = useState(true);

  const handleComplete = useCallback(() => {
    setLoading(false);
    document.body.style.overflow = "";
  }, []);

  // Prevent scroll during loader
  if (typeof document !== "undefined" && loading) {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <CinematicLoader key="loader" onComplete={handleComplete} />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Navbar />
        <main>
          <Hero ready={!loading} />
          <div id="process">
            <ScrollStory />
          </div>
          <div id="protection">
            <FeatureCards />
          </div>
          <ProtectionQuiz />
          <div id="about">
            <TrustSection />
          </div>
          <TestimonialsSection />
          <FAQSection />
          <div id="contact">
            <CTASection />
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </motion.div>
    </>
  );
}
