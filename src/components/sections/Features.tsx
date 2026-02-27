"use client";

import { features } from "@/data/features";
import { Dumbbell, Brain, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const icons = [Dumbbell, Brain, Clock, Sparkles];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Alpha Strength
          </h2>
          <p className="mt-4 text-white/70">
            Experience the next level of intelligent fitness training designed
            for real results.
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
                staggerChildren: 0.14,
              },
            },
          }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={feature.title}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.96 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Card className="group p-6">

                  {/* icon */}
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-500/20">
                    <Icon className="text-red-500" size={24} />
                  </div>

                  {/* title */}
                  <h3 className="mt-4 font-semibold text-lg">
                    {feature.title}
                  </h3>

                  {/* desc */}
                  <p className="mt-2 text-sm text-white/70">
                    {feature.description}
                  </p>
                  </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}