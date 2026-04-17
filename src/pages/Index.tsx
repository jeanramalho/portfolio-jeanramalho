import { MenuBar } from "@/components/MenuBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <MenuBar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
};

export default Index;
