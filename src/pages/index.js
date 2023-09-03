import Image from "next/image";
import { Inter } from "next/font/google";
import Center from "@/components/center";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Home() {
  return (
    <main className={inter.className}>
      <Center />
    </main>
  );
}
