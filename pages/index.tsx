import PhaseHandler from "@/components/PhaseHandler";
import programData from "@/data.json";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex place-content-center">
      <div className="flex flex-col place-content-center relative h-screen aspect-[9/16] bg-white">
        <PhaseHandler data={programData} />
      </div>
    </main>
  );
}
