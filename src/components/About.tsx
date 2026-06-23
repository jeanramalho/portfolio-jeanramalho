import { MacWindow } from "./MacWindow";
import profileImage from "@/assets/Perfil Jean.jpeg";
import { FileCode2, User, Folder, Image as ImageIcon, Music, Download } from "lucide-react";
import type { PortfolioContent } from "@/content/portfolio";

const sidebarItems = [
  { icon: User, label: "AirDrop" },
  { icon: Folder, label: "Recentes" },
  { icon: FileCode2, label: "Documentos", active: true },
  { icon: Download, label: "Downloads" },
  { icon: ImageIcon, label: "Imagens" },
  { icon: Music, label: "Música" },
];

interface AboutProps {
  content: PortfolioContent["about"];
}

export const About = ({ content }: AboutProps) => {
  return (
    <section id="about" className="relative px-4 py-24">
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
          title="sobre — Finder"
          className="animate-scale-in"
          bodyClassName="grid grid-cols-12 min-h-[420px]"
        >
          {/* Sidebar */}
          <aside className="col-span-12 sm:col-span-3 bg-secondary/40 border-r border-border/40 p-3 space-y-1">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold px-2 mb-1">
              Favoritos
            </p>
            {sidebarItems.map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${
                  active
                    ? "bg-primary/20 text-foreground"
                    : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{label}</span>
              </div>
            ))}
          </aside>

          {/* Content */}
          <div className="col-span-12 sm:col-span-9 p-6 sm:p-8">
            <div className="font-mono text-xs text-muted-foreground mb-4 flex items-center gap-2">
              <FileCode2 className="w-3.5 h-3.5" />
              <span>{content.fileName}</span>
            </div>

            <article className="flex flex-col lg:flex-row lg:items-start gap-6 text-foreground/90 leading-relaxed">
              <div className="flex justify-center lg:justify-start flex-shrink-0">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-lg" />
                  <div className="absolute inset-1 rounded-full border border-primary/40 overflow-hidden bg-secondary/30">
                    <img
                      src={profileImage}
                      alt="Jean Ramalho"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                {content.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                <p className="font-mono text-sm bg-secondary/50 border border-border/50 rounded-lg p-4">
                  <span className="code-comment">// stack atual</span>
                  <br />
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-var">stack</span>{" "}
                  <span className="code-punct">=</span>{" "}
                  <span className="code-punct">[</span>
                  <br />
                  {"  "}
                  {content.stack.map((item, index) => {
                    const shouldBreak = index === 2 && index < content.stack.length - 1;

                    return (
                      <span key={item}>
                        <span className="code-string">"{item}"</span>
                        {index < content.stack.length - 1 && <span className="code-punct">,</span>}
                        {shouldBreak ? (
                          <>
                            <br />
                            {"  "}
                          </>
                        ) : (
                          index < content.stack.length - 1 && <span> </span>
                        )}
                      </span>
                    );
                  })}
                  <br />
                  <span className="code-punct">];</span>
                </p>
              </div>
            </article>
          </div>
        </MacWindow>
      </div>
    </section>
  );
};
