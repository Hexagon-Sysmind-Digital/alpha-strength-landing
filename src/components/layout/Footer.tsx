"use client";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* 🔥 Brand */}
          <div>
            <img
              src="/images/branding/logo.png"
              alt="Alpha Strength"
              className="h-30 w-auto object-contain"
            />
            <div className="text-xl font-bold tracking-wide"> ALPHA STRENGTH </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#classes" className="hover:text-white transition">
                  Classes
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Strength Training</li>
              <li>HIIT Burn</li>
              <li>Functional Fitness</li>
              <li>Core & Conditioning</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>Washington, D.C., USA</li>
              <li>alphastrength@gmail.com</li>
              <li>+12 345 6789 1011</li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} Alpha Strength. All rights reserved.</p>
          <p className="text-white/40">Built with Next.js & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}