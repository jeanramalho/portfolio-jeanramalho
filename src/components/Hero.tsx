import type { ReactNode } from "react";
import { MacWindow } from "./MacWindow";
import { Terminal as TerminalIcon, ArrowDown } from "lucide-react";
import type { PortfolioContent } from "@/content/portfolio";

const TerminalLine = ({
  prompt = "jean@dev",
  path = "~/portfolio",
  command,
  delay = 0,
}: {
  prompt?: string;
  path?: string;
  command: ReactNode;
  delay?: number;
}) => (
  <div
    className="font-mono text-sm leading-relaxed animate-fade-up"
    style={{ animationDelay: `${delay}ms` }}
  >
    <span className="text-[hsl(var(--green-code))]">{prompt}</span>
    <span className="text-muted-foreground">:</span>
    <span className="text-[hsl(var(--cyan-code))]">{path}</span>
    <span className="text-muted-foreground">$ </span>
    {command}
  </div>
);

interface HeroProps {
  content: PortfolioContent["hero"];
}

export const Hero = ({ content }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-12"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-glow-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-5xl mx-auto grid lg:grid-cols-5 gap-6 items-center">
        {/* Left: Identity card */}
        <div className="lg:col-span-3 space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--mac-green))] animate-pulse" />
            <span className="text-muted-foreground">{content.availability}</span>
          </div>

          <div>
            <p className="font-mono text-sm text-[hsl(var(--purple-glow))] mb-3">
              <span className="code-comment">{content.intro}</span>
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
              {content.name} <span className="gradient-text">{content.highlightName}</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-xl">
              {content.headline}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground font-medium text-sm shadow-[var(--shadow-glow)] hover:scale-[1.03] active:scale-[0.98] transition-transform"
            >
              {content.primaryCta}
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-card/60 backdrop-blur-sm font-medium text-sm text-foreground hover:border-primary/60 hover:bg-card transition-colors"
            >
              {content.secondaryCta}
            </a>
          </div>

          <p className="font-mono text-sm text-muted-foreground pt-2">
            <span className="text-[hsl(var(--pink-code))]">const</span>{" "}
            <span className="text-[hsl(var(--cyan-code))]">brand</span>{" "}
            <span className="code-punct">=</span>{" "}
            <span className="text-[hsl(var(--green-code))]">
              "{content.brandConst}"
            </span>
            <span className="code-punct">;</span>
          </p>
        </div>

        {/* Right: Terminal window */}
        <MacWindow
          title="zsh — jean@macbook-pro — 80x24"
          icon={<TerminalIcon className="w-3 h-3" />}
          className="lg:col-span-2 animate-scale-in"
          bodyClassName="p-4 bg-[hsl(var(--navy-deep))] min-h-[280px]"
        >
          <div className="space-y-1.5">
            <TerminalLine command={<span className="text-foreground">whoami</span>} delay={100} />
            <div
              className="font-mono text-sm text-muted-foreground pl-2 animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              {content.terminalIdentity}
            </div>

            <TerminalLine command={<span className="text-foreground">ls ./skills</span>} delay={500} />
            <div
              className="font-mono text-sm pl-2 grid grid-cols-2 gap-x-3 animate-fade-in"
              style={{ animationDelay: "700ms" }}
            >
              {content.terminalSkills.map((skill) => (
                <span key={skill} className="text-[hsl(var(--cyan-code))]">
                  {skill}
                </span>
              ))}
            </div>

            <TerminalLine
              command={<span className="text-foreground">echo $MISSION</span>}
              delay={900}
            />
            <div
              className="font-mono text-sm text-[hsl(var(--green-code))] pl-2 animate-fade-in"
              style={{ animationDelay: "1100ms" }}
            >
              "{content.terminalMission}"
            </div>

            <div
              className="font-mono text-sm pt-2 animate-fade-in blink-caret"
              style={{ animationDelay: "1400ms" }}
            >
              <span className="text-[hsl(var(--green-code))]">jean@dev</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-[hsl(var(--cyan-code))]">~</span>
              <span className="text-muted-foreground">$ </span>
            </div>
          </div>
        </MacWindow>
      </div>
    </section>
  );
};
