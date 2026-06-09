import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { WhyDifferent } from "@/components/WhyDifferent";
import { Projects } from "@/components/Projects";
import { AIArsenal } from "@/components/AIArsenal";
import { AreasOfInterest } from "@/components/AreasOfInterest";
import { Mission } from "@/components/Mission";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <WhyDifferent />
      <Projects />
      <AIArsenal />
      <AreasOfInterest />
      <Mission />
      <Contact />
    </div>
  );
}
