"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24">
      {/* glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-500/10 blur-[120px]" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.18,
            },
          },
        }}
        className="relative max-w-7xl mx-auto px-6 text-center"
      >
        {/* heading */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40, scale: 0.96 },
            show: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Train Hard.
          <br />
          <span className="text-red-500">Become Alpha.</span>
        </motion.h1>

        {/* subtitle */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 max-w-2xl mx-auto text-white/70 text-lg"
        >
          Welcome to Alpha Strength — where intelligent training meets
          elite performance.
        </motion.p>

        {/* buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* primary CTA */}
          <Button className="px-8 py-4 text-lg">
            Start Free Trial
          </Button>

          {/* anchor CTA */}
          <a href="#classes" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="px-8 py-4 text-lg w-full sm:w-auto"
            >
              View Classes
            </Button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}