"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    question: "How do you use your vehicle?",
    options: [
      { label: "Weekend car, mostly garaged", score: 0 },
      { label: "Daily commute, covered parking", score: 1 },
      { label: "Daily driver, open parking", score: 2 },
      { label: "Heavy daily use, highway miles", score: 3 },
    ],
  },
  {
    question: "What's your paint's current condition?",
    options: [
      { label: "Like new, well maintained", score: 0 },
      { label: "Minor scratches, light swirls", score: 1 },
      { label: "Obvious swirls, water spots", score: 2 },
      { label: "Heavy scratches, faded paint", score: 3 },
    ],
  },
  {
    question: "What matters most to you?",
    options: [
      { label: "Keep it clean and shiny", score: 0 },
      { label: "Good looks + 2-3 year protection", score: 1 },
      { label: "Long-term durability (5+ years)", score: 2 },
      { label: "Complete rock-chip protection", score: 3 },
    ],
  },
  {
    question: "How often will you maintain it?",
    options: [
      { label: "Once or twice a year", score: 0 },
      { label: "Every 3-4 months", score: 1 },
      { label: "Monthly care routine", score: 2 },
      { label: "Bring to studio whenever needed", score: 3 },
    ],
  },
  {
    question: "What's most important for your decision?",
    options: [
      { label: "Best value for my budget", score: 0 },
      { label: "Good protection, minimal hassle", score: 1 },
      { label: "Best possible paint protection", score: 2 },
      { label: "Maximum everything, no compromise", score: 3 },
    ],
  },
];

const results = [
  {
    name: "Fresh Start",
    range: "0-4",
    services: ["Car Wash & Steam Clean", "Interior Foam Cleaning"],
    description:
      "Your vehicle is in great shape — it just needs a thorough professional clean to bring back that showroom feel. Our pH-neutral foam wash, clay bar treatment, and deep interior foam cleaning will refresh your car inside and out.",
    why: "You don't need heavy coatings yet. A proper professional clean protects your existing finish and makes daily maintenance effortless.",
    also: "Want longer-lasting protection? Ask us about Ceramic Shield — adds 2-3 years of coating on top.",
  },
  {
    name: "Ceramic Shield",
    range: "5-8",
    services: ["Ceramic Coating", "Sunfilm Protection"],
    description:
      "The sweet spot. Your car gets professional-grade ceramic coating that lasts 2-3 years — water beads off, dirt won't stick, and UV damage is blocked. Add sunfilm protection to keep your cabin cool and private.",
    why: "You use your car daily and want solid, lasting protection without going overboard. Ceramic coating handles weather, bird droppings, road grime, and UV — the perfect balance.",
    also: "Need deeper correction first? If your paint has visible swirls, add Paint Correction before coating for the best results.",
  },
  {
    name: "Graphene Armor",
    range: "9-12",
    services: [
      "Graphene Coating",
      "Interior Foam Cleaning",
      "Sunfilm Protection",
    ],
    description:
      "Next-level protection. Graphene coating offers superior heat dissipation, anti-static properties, and an even deeper gloss than traditional ceramic. Combined with interior deep-clean and sunfilm — your vehicle is fully armored.",
    why: "You're serious about your vehicle and want the latest in coating technology. Graphene outperforms ceramic in heat resistance and longevity, perfect for Hyderabad's intense summers.",
    also: "Want physical impact protection too? Upgrade to Total Fortress with PPF on high-impact zones.",
  },
  {
    name: "Total Fortress",
    range: "13-15",
    services: [
      "Paint Protection Film (PPF)",
      "Ceramic / Graphene Coating",
      "Sunfilm Protection",
      "Interior Foam Cleaning",
    ],
    description:
      "The ultimate package. PPF shields high-impact zones (bumper, hood, fenders) from rock chips and scratches. Ceramic or graphene coating covers the rest. Sunfilm and interior deep-clean complete the transformation.",
    why: "You want zero compromises. PPF is the only way to truly prevent physical damage — and combined with coating, your vehicle has both invisible armor and a mirror-like finish that lasts years.",
    also: "This is our most comprehensive package. WhatsApp us to discuss whether Ceramic or Graphene coating is better for your specific vehicle.",
  },
];

function getResult(score: number) {
  if (score <= 4) return results[0];
  if (score <= 8) return results[1];
  if (score <= 12) return results[2];
  return results[3];
}

export default function ProtectionQuiz() {
  const [started, setStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const totalScore = answers.reduce((sum, s) => sum + s, 0);
  const result = getResult(totalScore);

  const handleSelect = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ(currentQ + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 400);
    }
  };

  const restart = () => {
    setStarted(false);
    setCurrentQ(0);
    setAnswers([]);
    setShowResult(false);
  };

  const waMessage = encodeURIComponent(
    `Hi! I took the protection quiz on your website and got "${result.name}". I'd like to know pricing and available slots for my vehicle.`
  );

  return (
    <section id="quiz" className="relative bg-bg py-24 md:py-32 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[150px] pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">
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
            Free Tool
          </span>
        </motion.div>

        <motion.h2
          className="font-display text-[clamp(2rem,5vw,3.5rem)] text-text leading-[0.95] mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          FIND YOUR PERFECT
          <br />
          <span className="text-accent/70">PROTECTION</span>
        </motion.h2>

        <motion.p
          className="text-text-muted text-sm md:text-base mb-10 font-light max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Answer 5 quick questions. We&apos;ll recommend the best protection for
          your vehicle, driving habits, and priorities.
        </motion.p>

        {/* Quiz container */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {!started && !showResult && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <button
                  onClick={() => setStarted(true)}
                  className="group flex items-center gap-3 bg-glass-bg backdrop-blur-xl border border-glass-border rounded-2xl p-6 md:p-8 w-full text-left hover:border-gold/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display text-lg md:text-xl text-text tracking-wide">
                      START THE QUIZ
                    </p>
                    <p className="text-text-muted text-xs mt-1 font-light">
                      Takes less than 30 seconds · No signup required
                    </p>
                  </div>
                </button>
              </motion.div>
            )}

            {started && !showResult && (
              <motion.div
                key={`q-${currentQ}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Progress bar */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex-1 h-1 bg-glass-border rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gold rounded-full"
                      initial={{ width: `${(currentQ / questions.length) * 100}%` }}
                      animate={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </div>
                  <span className="text-text-muted text-xs font-body">
                    {currentQ + 1}/{questions.length}
                  </span>
                </div>

                {/* Question */}
                <h3 className="font-display text-xl md:text-2xl text-text tracking-wide mb-6">
                  {questions[currentQ].question.toUpperCase()}
                </h3>

                {/* Options */}
                <div className="grid gap-3">
                  {questions[currentQ].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(opt.score)}
                      className="group w-full text-left p-4 md:p-5 rounded-xl border border-glass-border bg-glass-bg backdrop-blur-md hover:border-gold/40 hover:bg-gold/[0.05] transition-all duration-300 active:scale-[0.98]"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-8 h-8 rounded-full border border-accent/20 flex items-center justify-center text-accent/50 text-xs font-body group-hover:border-gold/40 group-hover:text-gold transition-colors duration-300">
                          {String.fromCharCode(65 + i)}
                        </span>
                        <span className="text-text text-sm md:text-base font-light">
                          {opt.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {showResult && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Result card */}
                <div className="rounded-2xl border border-gold/20 bg-glass-bg backdrop-blur-xl p-6 md:p-8 mb-6">
                  <p className="text-gold text-[10px] tracking-[0.4em] uppercase mb-2">
                    Your Recommendation
                  </p>
                  <h3 className="font-display text-3xl md:text-4xl text-text tracking-wide mb-4">
                    {result.name.toUpperCase()}
                  </h3>

                  {/* Services included */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {result.services.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] md:text-xs text-accent/70 border border-glass-border rounded-full px-3 py-1"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="text-text-muted text-sm leading-relaxed font-light mb-4">
                    {result.description}
                  </p>

                  <div className="border-t border-glass-border pt-4 mt-4">
                    <p className="text-gold text-[10px] tracking-[0.3em] uppercase mb-2">
                      Why This Fits You
                    </p>
                    <p className="text-text-muted text-sm leading-relaxed font-light">
                      {result.why}
                    </p>
                  </div>

                  <div className="border-t border-glass-border pt-4 mt-4">
                    <p className="text-accent/50 text-[10px] tracking-[0.3em] uppercase mb-2">
                      Also Consider
                    </p>
                    <p className="text-text-muted text-xs leading-relaxed font-light">
                      {result.also}
                    </p>
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/919999999999?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gold text-bg font-body font-semibold text-sm tracking-wide px-6 py-3.5 rounded-full hover:brightness-110 transition-all duration-300"
                  >
                    Get Your Free Quote on WhatsApp
                  </a>
                  <button
                    onClick={restart}
                    className="inline-flex items-center justify-center gap-2 border border-accent/20 text-accent/60 font-body text-sm px-6 py-3.5 rounded-full hover:bg-accent/10 transition-all duration-300"
                  >
                    Retake Quiz
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
