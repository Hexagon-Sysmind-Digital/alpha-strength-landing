export type GymClass = {
  name: string;
  level: string;
  duration: string;
  description: string;
};

export const classes: GymClass[] = [
  {
    name: "Strength Training",
    level: "All Levels",
    duration: "60 min",
    description:
      "Build raw power and muscle with structured strength programs.",
  },
  {
    name: "HIIT Burn",
    level: "Intermediate",
    duration: "45 min",
    description:
      "High-intensity intervals designed to maximize fat burning.",
  },
  {
    name: "Functional Fitness",
    level: "All Levels",
    duration: "50 min",
    description:
      "Improve mobility, balance, and real-world strength.",
  },
  {
    name: "Core & Conditioning",
    level: "Beginner",
    duration: "40 min",
    description:
      "Strengthen your core and boost overall endurance.",
  },
];