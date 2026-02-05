"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 items-center">
          {/* Photo */}
          <motion.div
            className="flex flex-col items-center order-1 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/jacob.jpg"
                alt="Jacob McKinney - Founder of REAE"
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-xl font-semibold text-slate-900">
                Jacob McKinney
              </p>
              <p className="text-base text-slate-600">Founder</p>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            className="order-2 md:order-2 md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Built by a Marketing Operator, Not a Lead Reseller
            </h2>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                I&apos;m Jacob, and I built REAE because I saw a problem worth
                solving.
              </p>
              <p>
                Too many agents are stuck paying for leads that go nowhere or
                trying to build their own marketing systems without the time or
                expertise to make them work. They know they need better pipeline,
                but the options are either expensive and low-quality (lead farms)
                or overwhelming and time-consuming (DIY).
              </p>
              <p>
                So I built a system that actually works: seller-focused funnels,
                Meta advertising that converts, and automated follow-up that
                books appointments. I handle the entire acquisition engine so
                agents can focus on what they do best&mdash;closing deals.
              </p>
              <p>
                This isn&apos;t a lead farm reselling the same contacts to five
                agents. It&apos;s your own custom appointment system.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
