"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Gender = "male" | "female" | null;

function getBMICategory(bmi: number) {
  if (bmi < 18.5)
    return {
      label: "Underweight",
      color: "text-yellow-400",
      advice: "You may need to gain some healthy weight.",
      rangeIndex: 0,
    };
  if (bmi < 25)
    return {
      label: "Normal",
      color: "text-green-400",
      advice: "Great! Your body weight is in a healthy range.",
      rangeIndex: 1,
    };
  if (bmi < 30)
    return {
      label: "Overweight",
      color: "text-orange-400",
      advice: "Consider improving diet and increasing activity.",
      rangeIndex: 2,
    };
  return {
    label: "Obese",
    color: "text-red-500",
    advice: "We recommend consulting a health professional.",
    rangeIndex: 3,
  };
}

function getBMIPosition(bmi: number) {
  const min = 10;
  const max = 40;
  const clamped = Math.min(Math.max(bmi, min), max);
  return ((clamped - min) / (max - min)) * 100;
}

export default function BMICalculator() {
  const [gender, setGender] = useState<Gender>(null);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleCalculate() {
    setSubmitted(true);

    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (!h || !w) {
      setBmi(null);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const value = w / (h * h);
      setBmi(Number.isFinite(value) ? value : null);
      setLoading(false);
    }, 600);
  }

  function handleReset() {
    setBmi(null);
    setSubmitted(false);
    setLoading(false);
  }

  const category = bmi ? getBMICategory(bmi) : null;
  const position = bmi ? getBMIPosition(bmi) : 0;

  return (
    <section id="bmi" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Alpha BMI Analyzer
          </h2>
          <p className="mt-4 text-white/70">
            Measure your body composition and optimize your training.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* ================= FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8"
          >
            {/* gender */}
            <div>
              <p className="text-sm text-white/60 mb-3">Gender</p>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setGender("male")}
                  className={`rounded-xl border p-4 transition ${
                    gender === "male"
                      ? "border-red-500 bg-red-500/10"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  Male
                </button>

                <button
                  onClick={() => setGender("female")}
                  className={`rounded-xl border p-4 transition ${
                    gender === "female"
                      ? "border-red-500 bg-red-500/10"
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* height */}
            <div className="mt-6">
              <label className="text-sm text-white/60">
                Height (cm)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 focus:border-red-500 outline-none"
                placeholder="170"
              />
            </div>

            {/* weight */}
            <div className="mt-6">
              <label className="text-sm text-white/60">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 focus:border-red-500 outline-none"
                placeholder="65"
              />
            </div>

            <button
              onClick={handleCalculate}
              disabled={loading}
              className="mt-8 w-full rounded-xl bg-red-500 hover:bg-red-600 py-3 font-semibold transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Calculating..." : "Calculate BMI"}
            </button>

            {submitted && (!height || !weight) && (
              <p className="mt-3 text-xs text-red-400">
                Please fill in height and weight.
              </p>
            )}
          </motion.div>

          {/* ================= RESULT ================= */}
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              {!bmi ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-white/40"
                >
                  Enter your data and calculate to see the result.
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-8"
                >
                  {/* bmi number */}
                  <div className="text-center">
                    <p className="text-white/60 text-sm">Your BMI</p>
                    <div className="text-5xl font-bold mt-2">
                      {bmi.toFixed(1)}
                    </div>
                    <div
                      className={`mt-2 text-sm font-semibold ${category?.color}`}
                    >
                      {category?.label}
                    </div>
                  </div>

                  {/* ===== RANGE BAR ===== */}
                  <div className="mt-8">
                    <div className="relative h-3 rounded-full overflow-hidden bg-white/10">
                      <div className="absolute inset-0 grid grid-cols-4">
                        <div className="bg-blue-500/70" />
                        <div className="bg-green-500/70" />
                        <div className="bg-orange-500/70" />
                        <div className="bg-red-500/70" />
                      </div>

                      <motion.div
                        initial={{ left: 0 }}
                        animate={{ left: `${position}%` }}
                        transition={{ type: "spring", stiffness: 120 }}
                        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-black"
                      />
                    </div>

                    <div className="mt-2 flex justify-between text-[10px] text-white/50">
                      <span>Under</span>
                      <span>Normal</span>
                      <span>Over</span>
                      <span>Obese</span>
                    </div>
                  </div>

                  {/* advice */}
                  <p className="mt-6 text-sm text-white/70 text-center">
                    {category?.advice}
                  </p>

                  <button
                    onClick={handleReset}
                    className="mt-6 w-full rounded-xl border border-white/20 py-3 hover:border-white/40 transition"
                  >
                    Recalculate
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}