import PhaseHandler from "@/components/PhaseHandler";
import programData from "@/data.json";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <h1>Yo</h1>
        <PhaseHandler data={programData} />
      </div>
    </main>
  );
}
