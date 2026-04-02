"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What's the difference between Ceramic and Graphene coating?",
    a: "Ceramic coating uses SiO2 (silicon dioxide) for excellent hydrophobic protection and gloss. Graphene coating is the next evolution — it adds superior heat dissipation, anti-static properties, and an even deeper shine. Both last 2-5+ years. WhatsApp us and we'll help you pick the right one for your vehicle.",
  },
  {
    q: "How long does each coating last?",
    a: "Ceramic coating lasts 2-5 years depending on the grade. Graphene coating lasts 3-5+ years with better heat and static resistance. PPF (Paint Protection Film) lasts 7-10 years. All durations depend on maintenance and driving conditions.",
  },
  {
    q: "Do you offer PPF (Paint Protection Film)?",
    a: "Yes! We offer professional PPF installation on high-impact zones — hood, bumper, fenders, side mirrors, and rocker panels. PPF is the only way to physically protect paint from rock chips and scratches. It's virtually invisible and self-healing.",
  },
  {
    q: "Do you do bike detailing too?",
    a: "Absolutely. We detail both cars and bikes — from Royal Enfields to sports bikes. Our bike packages include foam wash, paint correction, ceramic/graphene coating, and chrome polishing. WhatsApp us with your bike model for a custom quote.",
  },
  {
    q: "What's included in Interior Foam Cleaning?",
    a: "Our deep foam cleaning covers seats (fabric or leather), dashboard, door panels, carpets, headliner, and all crevices. We use professional extraction equipment that removes embedded dirt, stains, and odours — leaving your cabin smelling and feeling brand new.",
  },
  {
    q: "Where is Dust Defender Lab located?",
    a: "We're at Bhavani Towers, beside Srikara Hospital, LB Nagar, Hyderabad 500074. Easy access from Banjara Hills, Jubilee Hills, HITEC City, Gachibowli, Madhapur, and Kondapur — typically a 30-45 minute drive. Free parking available at the studio.",
  },
  {
    q: "How long does the process take?",
    a: "Car Wash & Steam Clean: 1-2 hours. Interior Foam Cleaning: 2-3 hours. Ceramic/Graphene Coating: 4-8 hours (includes prep and curing). PPF installation: 1-2 days depending on coverage. We never rush — quality takes time.",
  },
  {
    q: "How do I book a session?",
    a: "The easiest way is WhatsApp — tap the button below and we'll reply within minutes. You can also call us directly. Walk-ins are welcome, but we recommend booking 1-2 days in advance to secure your slot. We're open Monday to Saturday, 10am to 7pm.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-glass-border rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-glass-bg transition-colors duration-200"
      >
        <span className="text-text text-sm md:text-base font-medium pr-4">
          {faq.q}
        </span>
        <motion.span
          className="text-accent/50 flex-shrink-0"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 md:px-6 pb-5 md:pb-6 text-text-muted text-sm leading-relaxed font-light">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative bg-bg py-24 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto">
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
            Common Questions
          </span>
        </motion.div>

        <motion.h2
          className="font-display text-[clamp(2rem,5vw,3.5rem)] text-text leading-[0.95] mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          FREQUENTLY
          <br />
          <span className="text-accent/70">ASKED</span>
        </motion.h2>

        <div className="grid gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-text-muted text-sm mb-4 font-light">
            Still have questions?
          </p>
          <a
            href="https://wa.me/919999999999?text=Hi!%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-accent/20 text-accent/70 font-body text-sm px-6 py-3 rounded-full hover:bg-accent/10 transition-all duration-300"
          >
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
