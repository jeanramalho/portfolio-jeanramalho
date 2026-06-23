import { MacWindow } from "./MacWindow";
import { ExternalLink, Github, Folder } from "lucide-react";
import type { PortfolioContent } from "@/content/portfolio";

interface ProjectsProps {
  content: PortfolioContent["projects"];
}

export const Projects = ({ content }: ProjectsProps) => {
  return (
    <section id="projects" className="relative px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 animate-fade-up">
          <p className="font-mono text-sm text-[hsl(var(--purple-glow))]">
            <span className="code-comment">{content.eyebrow}</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            {content.title} <span className="gradient-text">{content.highlightedTitle}</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-xl">
            {content.description}
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6">
          {content.items.map((p, i) => (
            <MacWindow
              key={p.name}
              title={`${p.name} — VS Code`}
              icon={<Folder className="w-3 h-3" />}
              className="hover:-translate-y-1 transition-transform duration-500 [animation-delay:var(--d)]"
              bodyClassName="p-0"
            >
              <div style={{ ["--d" as never]: `${i * 80}ms` }} className="animate-fade-up">
                {/* Window preview area */}
                <div className={`relative h-40 bg-gradient-to-br ${p.color} overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-white/90 drop-shadow-lg">
                      {`{ ${p.name} }`}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>

                {/* Code-like body */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="font-mono text-base font-semibold text-foreground">
                      <span className="code-keyword">export</span>{" "}
                      <span className="code-keyword">const</span>{" "}
                      <span className="code-fn">{p.name}</span>
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.tagline}</p>
                  </div>

                  <p className="text-sm text-foreground/80 leading-relaxed">{p.desc}</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md bg-secondary/70 border border-border/50 font-mono text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                    <a
                      href={p.sourceHref}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> source
                    </a>
                    <a
                      href={p.demoHref}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> live demo
                    </a>
                  </div>
                </div>
              </div>
            </MacWindow>
          ))}
        </div>
      </div>
    </section>
  );
};
