import { FileText, LayoutGrid, PanelsTopLeft } from "lucide-react";
import { MacWindow } from "@/components/MacWindow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CustomSection } from "@/content/portfolio";

interface DynamicSectionsProps {
  sections: CustomSection[];
}

export const DynamicSections = ({ sections }: DynamicSectionsProps) => {
  const enabledSections = sections.filter((section) => section.enabled);

  if (enabledSections.length === 0) {
    return null;
  }

  return (
    <>
      {enabledSections.map((section, index) => (
        <section key={section.id} id={section.id} className="relative px-4 py-24">
          <div className="max-w-6xl mx-auto">
            <header className="mb-8 animate-fade-up">
              <p className="font-mono text-sm text-[hsl(var(--purple-glow))]">
                <span className="code-comment">{section.eyebrow}</span>
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2">{section.title}</h2>
              {section.description && (
                <p className="text-muted-foreground mt-2 max-w-2xl">{section.description}</p>
              )}
            </header>

            <SectionBody section={section} index={index} />
          </div>
        </section>
      ))}
    </>
  );
};

const SectionBody = ({ section, index }: { section: CustomSection; index: number }) => {
  if (section.type === "carousel") {
    return (
      <Carousel opts={{ align: "start" }} className="px-10">
        <CarouselContent>
          {section.items.map((item) => (
            <CarouselItem key={item.title} className="md:basis-1/2 lg:basis-1/3">
              <CustomCard item={item} title={section.title} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 border-border bg-card/80" />
        <CarouselNext className="right-0 border-border bg-card/80" />
      </Carousel>
    );
  }

  if (section.type === "text") {
    return (
      <MacWindow
        title={`${section.id}.md — Preview`}
        icon={<FileText className="w-3 h-3" />}
        className="animate-scale-in"
        bodyClassName="p-6 sm:p-8"
      >
        <div className="space-y-4 text-foreground/85 leading-relaxed">
          {section.items.map((item) => (
            <article key={item.title} className="space-y-2">
              <h3 className="font-mono text-lg text-[hsl(var(--cyan-code))]">{item.title}</h3>
              <p>{item.description}</p>
              {item.meta && <p className="font-mono text-xs text-muted-foreground">{item.meta}</p>}
            </article>
          ))}
        </div>
      </MacWindow>
    );
  }

  const gridClass =
    section.layout === "compact"
      ? "grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
      : section.layout === "split"
        ? "grid lg:grid-cols-2 gap-6"
        : "grid md:grid-cols-2 lg:grid-cols-3 gap-6";

  return (
    <div className={gridClass}>
      {section.items.map((item, itemIndex) => (
        <CustomCard
          key={`${item.title}-${itemIndex}`}
          item={item}
          title={section.title}
          delay={(index + itemIndex) * 60}
        />
      ))}
    </div>
  );
};

const CustomCard = ({
  item,
  title,
  delay = 0,
}: {
  item: CustomSection["items"][number];
  title: string;
  delay?: number;
}) => (
  <MacWindow
    title={`${title} — Card`}
    icon={<PanelsTopLeft className="w-3 h-3" />}
    className="h-full hover:-translate-y-1 transition-transform duration-500"
    bodyClassName="p-5 h-full"
  >
    <article className="min-h-44 flex flex-col gap-3 animate-fade-up" style={{ animationDelay: `${delay}ms` }}>
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/60 text-[hsl(var(--purple-glow))]">
        <LayoutGrid className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-mono text-base font-semibold text-foreground">{item.title}</h3>
        {item.meta && <p className="mt-1 font-mono text-xs text-muted-foreground">{item.meta}</p>}
      </div>
      <p className="text-sm leading-relaxed text-foreground/75">{item.description}</p>
    </article>
  </MacWindow>
);
