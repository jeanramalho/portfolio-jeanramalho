import type { ReactNode } from "react";
import { MacWindow } from "./MacWindow";
import { Code2 } from "lucide-react";

const codeLines: { n: number; tokens: ReactNode }[] = [
  {
    n: 1,
    tokens: (
      <>
        <span className="code-comment">// stack.ts — o que uso no dia a dia</span>
      </>
    ),
  },
  { n: 2, tokens: <></> },
  {
    n: 3,
    tokens: (
      <>
        <span className="code-keyword">interface</span>{" "}
        <span className="code-fn">DevStack</span>{" "}
        <span className="code-punct">{`{`}</span>
      </>
    ),
  },
  {
    n: 4,
    tokens: (
      <>
        {"  "}
        <span className="code-var">frontend</span>
        <span className="code-punct">: [</span>
        <span className="code-string">"React"</span>
        <span className="code-punct">, </span>
        <span className="code-string">"Next.js"</span>
        <span className="code-punct">, </span>
        <span className="code-string">"TypeScript"</span>
        <span className="code-punct">, </span>
        <span className="code-string">"Tailwind"</span>
        <span className="code-punct">];</span>
      </>
    ),
  },
  {
    n: 5,
    tokens: (
      <>
        {"  "}
        <span className="code-var">backend</span>
        <span className="code-punct">: [</span>
        <span className="code-string">"Node.js"</span>
        <span className="code-punct">, </span>
        <span className="code-string">"Express"</span>
        <span className="code-punct">, </span>
        <span className="code-string">"NestJS"</span>
        <span className="code-punct">, </span>
        <span className="code-string">"Python"</span>
        <span className="code-punct">];</span>
      </>
    ),
  },
  {
    n: 6,
    tokens: (
      <>
        {"  "}
        <span className="code-var">database</span>
        <span className="code-punct">: [</span>
        <span className="code-string">"PostgreSQL"</span>
        <span className="code-punct">, </span>
        <span className="code-string">"MongoDB"</span>
        <span className="code-punct">, </span>
        <span className="code-string">"Redis"</span>
        <span className="code-punct">];</span>
      </>
    ),
  },
  {
    n: 7,
    tokens: (
      <>
        {"  "}
        <span className="code-var">devops</span>
        <span className="code-punct">: [</span>
        <span className="code-string">"Docker"</span>
        <span className="code-punct">, </span>
        <span className="code-string">"AWS"</span>
        <span className="code-punct">, </span>
        <span className="code-string">"GitHub Actions"</span>
        <span className="code-punct">];</span>
      </>
    ),
  },
  {
    n: 8,
    tokens: (
      <>
        {"  "}
        <span className="code-var">tools</span>
        <span className="code-punct">: [</span>
        <span className="code-string">"Figma"</span>
        <span className="code-punct">, </span>
        <span className="code-string">"Git"</span>
        <span className="code-punct">, </span>
        <span className="code-string">"Vite"</span>
        <span className="code-punct">, </span>
        <span className="code-string">"Vitest"</span>
        <span className="code-punct">];</span>
      </>
    ),
  },
  { n: 9, tokens: <span className="code-punct">{`}`}</span> },
  { n: 10, tokens: <></> },
  {
    n: 11,
    tokens: (
      <>
        <span className="code-keyword">export const</span>{" "}
        <span className="code-var">jean</span>
        <span className="code-punct">: </span>
        <span className="code-fn">DevStack</span>{" "}
        <span className="code-punct">=</span>{" "}
        <span className="code-fn">loadStack</span>
        <span className="code-punct">();</span>
      </>
    ),
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative px-4 py-24">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 animate-fade-up">
          <p className="font-mono text-sm text-[hsl(var(--purple-glow))]">
            <span className="code-comment">// 03.</span> skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Minha <span className="gradient-text">stack</span>
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
            {/* line numbers */}
            <div className="py-5 px-3 text-right text-muted-foreground/60 select-none border-r border-border/40 bg-card/40">
              {codeLines.map((l) => (
                <div key={l.n} className="leading-6">
                  {l.n}
                </div>
              ))}
            </div>
            {/* code */}
            <div className="py-5 px-4 overflow-x-auto flex-1">
              {codeLines.map((l) => (
                <div key={l.n} className="leading-6 whitespace-pre">
                  {l.tokens}
                </div>
              ))}
            </div>
          </div>
        </MacWindow>
      </div>
    </section>
  );
};
