import BMICalculator from "@/components/sections/BMICalculator";
import Navbar from "@/components/layout/Navbar";

export default function BMIPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-24">
      <Navbar />
      <BMICalculator />
    </main>
  );
}