import { MenuBar } from "@/components/MenuBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { DynamicSections } from "@/components/DynamicSections";
import { usePortfolioContent } from "@/hooks/usePortfolioContent";

const Index = () => {
  const { content } = usePortfolioContent();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <MenuBar />
      <Hero content={content.hero} />
      <About content={content.about} />
      <Projects content={content.projects} />
      <Skills content={content.skills} />
      <DynamicSections sections={content.customSections} />
      <Contact content={content.contact} />
    </main>
  );
};

export default Index;
