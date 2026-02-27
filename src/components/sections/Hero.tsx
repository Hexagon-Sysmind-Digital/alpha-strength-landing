"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24"
    >
      {/* glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-500/10 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Train the Body.
          <br />
          <span className="text-red-500">Master the Mind.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-white/70 text-lg"
        >
          Welcome to Alpha Strength — where intelligent training meets
          elite performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl font-semibold text-lg transition">
            Start Free Trial
          </button>

          <button className="border border-white/20 hover:border-white/40 px-8 py-4 rounded-2xl font-semibold text-lg transition">
            View Classes
          </button>
        </motion.div>
      </div>
    </section>
  );
}