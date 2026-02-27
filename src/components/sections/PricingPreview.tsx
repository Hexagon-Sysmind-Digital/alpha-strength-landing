"use client";

import { pricingPlans } from "@/data/pricing";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function PricingPreview() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Membership Plans
          </h2>
          <p className="mt-4 text-white/70">
            Choose the plan that fits your strength journey.
          </p>
        </motion.div>

        {/* cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.14,
              },
            },
          }}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.96 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1], // 👈 smooth premium easing
              }}
              className={cn(
                "rounded-2xl border p-8 transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02]",
                plan.popular
                  ? "border-red-500 bg-red-500/5 shadow-[0_0_40px_rgba(239,68,68,0.18)]"
                  : "border-white/10 bg-white/5"
              )}
            >
              {/* badge */}
              {plan.popular && (
                <div className="mb-4 inline-block rounded-full bg-red-500 px-3 py-1 text-xs font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold">{plan.name}</h3>

              <p className="mt-2 text-white/70 text-sm">
                {plan.description}
              </p>

              {/* price */}
              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-white/60">{plan.period}</span>
              </div>

              {/* features */}
              <ul className="mt-6 space-y-2 text-sm text-white/80">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              {/* button */}
              <button
                className={cn(
                  "mt-8 w-full rounded-xl py-3 font-semibold transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] hover:shadow-lg",
                  plan.popular
                    ? "bg-red-500 hover:bg-red-600"
                    : "bg-white/10 hover:bg-white/20"
                )}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}