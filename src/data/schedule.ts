export type ClassSchedule = {
  className: string;
  trainer: string;
  day: string;
  time: string;
};

export const schedule: ClassSchedule[] = [
  {
    className: "Strength Training",
    trainer: "Adrian Prakoso",
    day: "Monday",
    time: "07:00 - 08:00",
  },
  {
    className: "HIIT Burn",
    trainer: "Maya Putri",
    day: "Tuesday",
    time: "18:00 - 18:45",
  },
  {
    className: "Functional Fitness",
    trainer: "Rizal Mahendra",
    day: "Wednesday",
    time: "17:00 - 17:50",
  },
  {
    className: "Core & Conditioning",
    trainer: "Kevin Santoso",
    day: "Friday",
    time: "07:30 - 08:10",
  },
];