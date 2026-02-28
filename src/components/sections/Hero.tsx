"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useEffect, useState } from "react";

const slides = [
  "/images/hero/hero-1.jpeg",
  "/images/hero/hero-2.jpeg",
  "/images/hero/hero-3.jpeg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // 🔥 auto slide
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => setIndex(i);

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24">
      {/* ===== BACKGROUND SLIDER ===== */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={slides[index]}
            src={slides[index]}
            alt="Alpha Strength Gym"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-red-500/10 blur-[120px]" />
      </div>

      {/* ===== CONTENT ===== */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.18 } },
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
          Elite-level training programs, world-class coaches, and a
          community built for those who refuse to stay average.
        </motion.p>

        {/* buttons */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button className="px-8 py-4 text-lg">
            Start Free Trial
          </Button>

          <a href="#classes" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="px-8 py-4 text-lg w-full sm:w-auto"
            >
              View Classes
            </Button>
          </a>
        </motion.div>

        {/* ===== DOT INDICATOR ===== */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                index === i
                  ? "w-8 bg-red-500"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}