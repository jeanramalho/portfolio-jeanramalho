import {
  BarChart3,
  Braces,
  FileText,
  Image,
  LayoutGrid,
  PanelsTopLeft,
  Rocket,
  Route,
} from "lucide-react";
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

  if (section.type === "gallery") {
    return (
      <div className="grid md:grid-cols-6 gap-4">
        {section.items.map((item, itemIndex) => (
          <MacWindow
            key={`${item.title}-${itemIndex}`}
            title={`${item.title} — Gallery`}
            icon={<Image className="w-3 h-3" />}
            className={itemIndex % 3 === 0 ? "md:col-span-3" : "md:col-span-3 lg:col-span-2"}
            bodyClassName="p-0"
          >
            <article className="relative min-h-64 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--purple))] via-[hsl(var(--cyan-code))] to-[hsl(var(--pink-code))] opacity-80" />
              <div className="absolute inset-0 grid-bg opacity-25" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/35 to-transparent" />
              <div className="relative min-h-64 flex flex-col justify-end p-5">
                {item.meta && <p className="font-mono text-xs text-white/70">{item.meta}</p>}
                <h3 className="mt-2 font-mono text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/78">{item.description}</p>
              </div>
            </article>
          </MacWindow>
        ))}
      </div>
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

  if (section.type === "timeline") {
    return (
      <MacWindow
        title={`${section.id}.timeline — Finder`}
        icon={<Route className="w-3 h-3" />}
        className="animate-scale-in"
        bodyClassName="p-6 sm:p-8"
      >
        <div className="relative space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-border">
          {section.items.map((item) => (
            <article key={item.title} className="relative pl-10">
              <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/50 bg-card">
                <span className="h-2 w-2 rounded-full bg-[hsl(var(--purple-glow))]" />
              </span>
              {item.meta && <p className="font-mono text-xs text-muted-foreground">{item.meta}</p>}
              <h3 className="mt-1 font-mono text-lg text-[hsl(var(--cyan-code))]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/75">{item.description}</p>
            </article>
          ))}
        </div>
      </MacWindow>
    );
  }

  if (section.type === "cta") {
    const [primary, ...supporting] = section.items;

    return (
      <MacWindow
        title={`${section.id}.cta — zsh`}
        icon={<Rocket className="w-3 h-3" />}
        className="animate-scale-in"
        bodyClassName="relative overflow-hidden p-6 sm:p-8"
      >
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            {primary?.meta && <p className="font-mono text-xs text-[hsl(var(--green-code))]">{primary.meta}</p>}
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold">{primary?.title ?? section.title}</h3>
            <p className="mt-3 text-foreground/75 max-w-2xl">{primary?.description ?? section.description}</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary to-accent px-5 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
          >
            ./iniciar_conversa
          </a>
        </div>
        {supporting.length > 0 && (
          <div className="relative mt-6 grid sm:grid-cols-2 gap-3">
            {supporting.map((item) => (
              <p key={item.title} className="rounded-lg border border-border bg-secondary/40 p-3 text-sm text-muted-foreground">
                <span className="font-mono text-foreground">{item.title}</span> — {item.description}
              </p>
            ))}
          </div>
        )}
      </MacWindow>
    );
  }

  if (section.type === "code") {
    return (
      <MacWindow
        title={`${section.id}.ts — Visual Studio Code`}
        icon={<Braces className="w-3 h-3" />}
        tabs={[`${section.id}.ts`, "README.md"]}
        activeTab={`${section.id}.ts`}
        className="animate-scale-in"
        bodyClassName="bg-[hsl(var(--navy-deep))] p-0 overflow-hidden"
      >
        <div className="flex font-mono text-sm">
          <div className="py-5 px-3 text-right text-muted-foreground/60 select-none border-r border-border/40 bg-card/40">
            {section.items.map((_, itemIndex) => (
              <div key={itemIndex} className="leading-6">
                {itemIndex + 1}
              </div>
            ))}
          </div>
          <div className="py-5 px-4 overflow-x-auto flex-1">
            {section.items.map((item) => (
              <div key={item.title} className="leading-6 whitespace-pre">
                <span className="code-keyword">const</span> <span className="code-var">{toCodeName(item.title)}</span>{" "}
                <span className="code-punct">=</span>{" "}
                <span className="code-string">"{item.description}"</span>
                <span className="code-punct">;</span>
                {item.meta && <span className="code-comment"> // {item.meta}</span>}
              </div>
            ))}
          </div>
        </div>
      </MacWindow>
    );
  }

  if (section.type === "stats") {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {section.items.map((item) => (
          <MacWindow key={item.title} title={`${item.title} — Metric`} icon={<BarChart3 className="w-3 h-3" />} bodyClassName="p-5">
            <article className="space-y-2">
              <p className="font-mono text-3xl font-bold gradient-text">{item.meta || item.title}</p>
              <h3 className="font-mono text-sm text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </article>
          </MacWindow>
        ))}
      </div>
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

const toCodeName = (value: string) =>
  value
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, character: string) => character.toUpperCase())
    .replace(/^[A-Z]/, (character) => character.toLowerCase())
    .replace(/[^a-zA-Z0-9]/g, "");
