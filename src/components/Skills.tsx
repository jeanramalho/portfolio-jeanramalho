import { MacWindow } from "./MacWindow";
import { Code2 } from "lucide-react";
import type { PortfolioContent } from "@/content/portfolio";

interface SkillsProps {
  content: PortfolioContent["skills"];
}

export const Skills = ({ content }: SkillsProps) => {
  const codeLines = [
    "// stack.ts — o que uso no dia a dia",
    "",
    "interface DevStack {",
    ...content.groups.map(
      (group) => `  ${group.name}: [${group.items.map((item) => `"${item}"`).join(", ")}];`,
    ),
    "}",
    "",
    "export const jean: DevStack = loadStack();",
  ];

  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 animate-fade-up">
          <p className="font-mono text-sm text-[hsl(var(--purple-glow))]">
            <span className="code-comment">{content.eyebrow}</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            {content.title} <span className="gradient-text">{content.highlightedTitle}</span>
          </h2>
        </header>

        <MacWindow
          title="stack.ts — Visual Studio Code"
          icon={<Code2 className="w-3 h-3" />}
          tabs={["stack.ts", "package.json", "README.md"]}
          activeTab="stack.ts"
          className="animate-scale-in"
          bodyClassName="bg-[hsl(var(--navy-deep))] p-0 overflow-hidden"
        >
          <div className="flex font-mono text-sm">
            <div className="py-5 px-3 text-right text-muted-foreground/60 select-none border-r border-border/40 bg-card/40">
              {codeLines.map((_, index) => (
                <div key={index} className="leading-6">
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="py-5 px-4 overflow-x-auto flex-1">
              {codeLines.map((line, index) => (
                <div key={`${line}-${index}`} className="leading-6 whitespace-pre">
                  <CodeLine line={line} />
                </div>
              ))}
            </div>
          </div>
        </MacWindow>
      </div>
    </section>
  );
};

const CodeLine = ({ line }: { line: string }) => {
  if (line.startsWith("//")) {
    return <span className="code-comment">{line}</span>;
  }

  if (line === "interface DevStack {") {
    return (
      <>
        <span className="code-keyword">interface</span>{" "}
        <span className="code-fn">DevStack</span> <span className="code-punct">{"{"}</span>
      </>
    );
  }

  if (line === "}") {
    return <span className="code-punct">{"}"}</span>;
  }

  if (line.startsWith("export const")) {
    return (
      <>
        <span className="code-keyword">export const</span> <span className="code-var">jean</span>
        <span className="code-punct">: </span>
        <span className="code-fn">DevStack</span> <span className="code-punct">=</span>{" "}
        <span className="code-fn">loadStack</span>
        <span className="code-punct">();</span>
      </>
    );
  }

  const [name, values = ""] = line.trim().split(": ");
  return (
    <>
      {"  "}
      <span className="code-var">{name}</span>
      <span className="code-punct">: [</span>
      {values
        .replace("[", "")
        .replace("];", "")
        .split(", ")
        .filter(Boolean)
        .map((value, index, arr) => (
          <span key={`${name}-${value}`}>
            <span className="code-string">{value}</span>
            {index < arr.length - 1 && <span className="code-punct">, </span>}
          </span>
        ))}
      <span className="code-punct">];</span>
    </>
  );
};
