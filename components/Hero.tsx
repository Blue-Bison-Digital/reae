"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-slate-50 to-white pt-16">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.p
          className="text-sm md:text-base uppercase tracking-wider text-blue-600 font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Real Estate Appointment Engine
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-tight tracking-tight">
            Predictable Seller Appointments Without Chasing Referrals
          </h1>
        </motion.div>

        <motion.p
          className="mt-6 text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          We build and run your entire acquisition system. You show up to
          qualified appointments.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <a
            href="https://apply.getreae.com/join-beta/?utm_source=website&utm_medium=cta&utm_campaign=founding_member_beta&utm_content=hero"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
          >
            Apply for Founding Member Beta&nbsp;&rarr;
          </a>
          <p className="mt-4 text-sm text-slate-500">
            6 spots available &bull; March 2026 launch
          </p>
        </motion.div>
      </div>
    </section>
  );
}
