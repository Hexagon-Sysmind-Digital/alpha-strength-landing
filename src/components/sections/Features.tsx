import { features } from "@/data/features";
import { Dumbbell, Brain, Clock, Sparkles } from "lucide-react";

const icons = [Dumbbell, Brain, Clock, Sparkles];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Alpha Strength
          </h2>
          <p className="mt-4 text-white/70">
            Experience the next level of intelligent fitness training designed
            for real results.
          </p>
        </div>

        {/* grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = icons[index];

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                {/* icon */}
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}