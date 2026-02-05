"use client";

import { motion } from "framer-motion";
import { TrendingDown, ThumbsDown, Clock } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    heading: "Unpredictable Pipeline",
    body: "Relying on referrals and past clients means feast or famine months. You never know when the next lead is coming.",
  },
  {
    icon: ThumbsDown,
    heading: "Low-Quality Leads",
    body: "Zillow and portal leads are expensive, over-shopped, and rarely convert. You\u2019re competing with 5 other agents for the same unqualified lead.",
  },
  {
    icon: Clock,
    heading: "No Time to DIY",
    body: "You know you need better marketing, but learning ads, building funnels, and managing campaigns takes hundreds of hours you don\u2019t have.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          The Lead Generation Problem Most Agents Face
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, i) => (
            <motion.div
              key={item.heading}
              className="group rounded-xl border border-slate-200 bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {item.heading}
              </h3>
              <p className="text-slate-600 leading-relaxed">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
