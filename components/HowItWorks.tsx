"use client";

import { motion } from "framer-motion";
import { Hammer, Settings, CalendarCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Hammer,
    heading: "We Build It",
    body: "Custom Meta ads, landing pages, quiz funnels, and automated follow-up sequences designed specifically for seller leads in your market.",
  },
  {
    number: "02",
    icon: Settings,
    heading: "We Run It",
    body: "Ongoing campaign management, optimization, and creative testing. We monitor performance daily and make adjustments to maximize qualified appointments.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    heading: "You Show Up",
    body: "Pre-qualified sellers book directly into your calendar. You get context before every call. No cold calling, no chasing leads, just conversations with motivated sellers.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          How REAE Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative">
          {/* Connector line (desktop only) — vertically centered with the 4rem (h-16) icons */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px bg-slate-300" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="relative z-10 mx-auto mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                <step.icon size={28} />
              </div>
              <span className="inline-block text-sm font-semibold text-blue-600 mb-2 tracking-wide">
                STEP {step.number}
              </span>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {step.heading}
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
