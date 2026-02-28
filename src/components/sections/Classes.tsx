"use client";

import { motion } from "framer-motion";
import { classes } from "@/data/classes";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

// 🔥 helper slug dari nama class → nama file
function toSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function Classes() {
  return (
    <section id="classes" className="py-24 bg-black">
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
            Our Training Classes
          </h2>
          <p className="mt-4 text-white/70">
            Choose the program that fits your fitness journey.
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
          {classes.map((item) => (
            <motion.div
              key={item.name}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Card className="group p-6 overflow-hidden">
                {/* 🔥 IMAGE */}
                <div className="relative -mx-6 -mt-6 mb-5 h-40 overflow-hidden rounded-t-2xl">
                  <img
                    src={`/images/classes/${toSlug(item.name)}.jpeg`}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* overlay biar teks kontras */}
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* badge row */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-red-400 font-medium">
                    {item.level}
                  </span>
                  <span className="text-white/50">
                    {item.duration}
                  </span>
                </div>

                {/* title */}
                <h3 className="mt-4 font-semibold text-lg">
                  {item.name}
                </h3>

                {/* desc */}
                <p className="mt-2 text-sm text-white/70">
                  {item.description}
                </p>

                {/* CTA */}
                <a href="#schedule" className="mt-6 block w-full">
                  <Button variant="outline" className="w-full">
                    View Schedule
                  </Button>
                </a>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}