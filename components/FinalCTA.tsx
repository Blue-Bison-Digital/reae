"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
            Limited Availability
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            6 Founding Member Spots Available
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join the 60-day beta program launching March 2026. Founding members
            receive lifetime pricing benefits and priority access to new
            features.
          </p>

          <a
            href="https://apply.getreae.com/join-beta/"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-10 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
          >
            Apply Now&nbsp;&rarr;
          </a>

          <p className="mt-4 text-sm text-slate-500">
            Beta starts March 3rd &bull; Lifetime $500/month discount for
            founding members
          </p>
        </motion.div>
      </div>
    </section>
  );
}
