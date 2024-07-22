import About from "@/components/About";
import Hero from "@/components/Hero";
import Projext from "@/components/Projext";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projext />
      <Skills />
      <About />
    </main>
  );
}
