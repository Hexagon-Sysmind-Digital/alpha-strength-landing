"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Features", href: "#features", id: "features" },
  { label: "Classes", href: "#classes", id: "classes" },
  { label: "Schedule", href: "#schedule", id: "schedule" },
  { label: "Trainers", href: "#trainers", id: "trainers" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "BMI", href: "#bmi", id: "bmi" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // 🔥 scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (!el) continue;

        const offsetTop = el.offsetTop - 120;
        const offsetBottom = offsetTop + el.offsetHeight;

        if (scrollY >= offsetTop && scrollY < offsetBottom) {
          setActive(item.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileClick = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          ALPHA STRENGTH
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                "transition font-medium",
                active === item.id
                  ? "text-red-500"
                  : "text-white/70 hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
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
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={handleMobileClick}
              className={cn(
                "block transition",
                active === item.id
                  ? "text-red-500"
                  : "text-white/80 hover:text-white"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}