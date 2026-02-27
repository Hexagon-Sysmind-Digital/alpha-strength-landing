"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  // duplicate biar loop halus
  const loopItems = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            What Our Members Say
          </h2>
          <p className="mt-4 text-white/70">
            Real stories from Alpha Strength community.
          </p>
        </motion.div>
      </div>

      {/* ===== MARQUEE ===== */}
      <div className="relative mt-16">
        {/* fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-6 w-max px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 28,
          }}
        >
          {loopItems.map((item, i) => (
            <div
              key={i}
              className="w-[320px] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition"
            >
              {/* quote */}
              <p className="text-sm text-white/80 leading-relaxed">
                “{item.quote}”
              </p>

              {/* user */}
              <div className="mt-6">
                <div className="font-semibold">{item.name}</div>
                <div className="text-xs text-white/50">
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}