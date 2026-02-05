"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const criteria = [
  "Close 12+ transactions per year (1+ per month)",
  "Are ready to invest at least $500/month in ad spend",
  "Want seller listings, not buyer leads",
  "Don\u2019t have time to learn and manage Meta ads themselves",
  "Value their time more than saving a few hundred dollars per month",
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-20 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Built for Active Agents
        </motion.h2>

        <motion.p
          className="text-lg text-slate-700 mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          REAE is designed for solo agents and small teams who are already
          closing deals but want predictable, scalable pipeline without the
          uncertainty of referrals or the hassle of DIY marketing.
        </motion.p>

        <motion.div
          className="text-left max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">
            Ideal for agents who:
          </p>
          <ul className="space-y-4">
            {criteria.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-slate-700 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
