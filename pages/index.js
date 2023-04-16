import { FirstContent, SecondContent } from "@/components";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="space-y-24 px-24">
      <div className=" content-height py-24">
        <FirstContent />
      </div>
      <div className=" content-height py-24">
        <SecondContent />
      </div>
    </main>
  );
}
