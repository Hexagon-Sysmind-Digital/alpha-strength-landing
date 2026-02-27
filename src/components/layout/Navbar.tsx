"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          ALPHA STRENGTH
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#pricing" className="hover:text-white transition">
            Pricing
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* CTA */}
        <button className="hidden md:block bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl text-sm font-semibold transition">
          Join Now
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black px-6 pb-4 space-y-3">
          <a href="#home" className="block text-white/80">
            Home
          </a>
          <a href="#features" className="block text-white/80">
            Features
          </a>
          <a href="#pricing" className="block text-white/80">
            Pricing
          </a>
          <a href="#contact" className="block text-white/80">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}