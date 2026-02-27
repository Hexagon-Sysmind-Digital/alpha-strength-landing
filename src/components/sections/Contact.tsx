"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Start Your Journey?
          </h2>

          <p className="mt-4 text-white/70 max-w-2xl mx-auto">
            Join Alpha Strength today and transform your body with
            professional coaching and smart training programs.
          </p>

          {/* CTA button (disabled) */}
          <button
            disabled
            className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-transform duration-200 hover:scale-[1.05] active:scale-[0.97]"
          >
            Contact Us 
          </button>
        </motion.div>
      </div>
    </section>
  );
}