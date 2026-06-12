import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { NijamProject } from "@/components/NijamProject";
import { Skills } from "@/components/Skills";
import { WhyDifferent } from "@/components/WhyDifferent";
import { Projects } from "@/components/Projects";
import { AIArsenal } from "@/components/AIArsenal";
import { AreasOfInterest } from "@/components/AreasOfInterest";
import { Mission } from "@/components/Mission";
import { Contact } from "@/components/Contact";
import { ClientWrapper } from "@/components/ClientWrapper";

export default function Home() {
  return (
    <ClientWrapper>
      <Hero />
      <About />
      <Experience />
      <NijamProject />
      <Skills />
      <WhyDifferent />
      <Projects />
      <AIArsenal />
      <AreasOfInterest />
      <Mission />
      <Contact />
    </ClientWrapper>
  );
}
