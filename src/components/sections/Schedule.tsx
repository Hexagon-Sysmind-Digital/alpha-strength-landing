"use client";

import { motion } from "framer-motion";
import { schedule } from "@/data/schedule";

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Class Schedule
          </h2>
          <p className="mt-4 text-white/70">
            Plan your training and stay consistent.
          </p>
        </motion.div>

        {/* table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
        >
          <div className="grid grid-cols-4 text-sm font-semibold text-white/60 border-b border-white/10">
            <div className="p-4">Class</div>
            <div className="p-4">Trainer</div>
            <div className="p-4">Day</div>
            <div className="p-4">Time</div>
          </div>

          {schedule.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-4 text-sm border-b border-white/5 last:border-none"
            >
              <div className="p-4 font-medium">{item.className}</div>
              <div className="p-4 text-white/70">{item.trainer}</div>
              <div className="p-4 text-white/70">{item.day}</div>
              <div className="p-4 text-red-400 font-medium">
                {item.time}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}