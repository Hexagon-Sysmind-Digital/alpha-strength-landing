"use client";

import { motion } from "framer-motion";
import { trainers } from "@/data/trainers";
import { Card } from "@/components/ui/Card";

export default function Trainers() {
  return (
    <section id="trainers" className="py-24">
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
            Meet Our Coaches
          </h2>
          <p className="mt-4 text-white/70">
            Train with certified professionals at Alpha Strength.
          </p>
        </motion.div>

        {/* grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-80px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.name}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Card className="group p-6 text-center">

                {/* avatar */}
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-red-500/30 to-red-500/5 flex items-center justify-center text-xl font-bold">
                  {trainer.name.charAt(0)}
                </div>

                {/* name */}
                <h3 className="mt-4 font-semibold text-lg">
                  {trainer.name}
                </h3>

                {/* specialty */}
                <p className="text-sm text-red-400 mt-1">
                  {trainer.specialty}
                </p>

                {/* exp */}
                <p className="text-xs text-white/50 mt-2">
                  {trainer.experience}
                </p>
                </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}