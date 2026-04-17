import { MacWindow } from "./MacWindow";
import { FileCode2, User, Folder, Image as ImageIcon, Music, Download } from "lucide-react";

const sidebarItems = [
  { icon: User, label: "AirDrop" },
  { icon: Folder, label: "Recentes" },
  { icon: FileCode2, label: "Documentos", active: true },
  { icon: Download, label: "Downloads" },
  { icon: ImageIcon, label: "Imagens" },
  { icon: Music, label: "Música" },
];

export const About = () => {
  return (
    <section id="about" className="relative px-4 py-24">
      <div className="max-w-5xl mx-auto">
        <header className="mb-8 animate-fade-up">
          <p className="font-mono text-sm text-[hsl(var(--purple-glow))]">
            <span className="code-comment">// 01.</span> sobre
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Sobre <span className="gradient-text">mim</span></h2>
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
              <span>~/documentos/sobre-jean.md</span>
            </div>

            <article className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                Olá! Sou <strong className="text-foreground">Jean Ramalho</strong>,
                desenvolvedor apaixonado por transformar ideias em produtos digitais
                bem construídos — do back-end à última animação da interface.
              </p>
              <p>
                Tenho um carinho especial por <span className="text-[hsl(var(--purple-glow))]">design de sistemas</span>,
                arquiteturas limpas e detalhes que fazem a diferença. Acredito que
                <em> bom código se lê como prosa</em> e que UX de qualidade é
                indistinguível de magia.
              </p>
              <p className="font-mono text-sm bg-secondary/50 border border-border/50 rounded-lg p-4">
                <span className="code-comment">// stack atual</span>
                <br />
                <span className="code-keyword">const</span>{" "}
                <span className="code-var">stack</span>{" "}
                <span className="code-punct">=</span>{" "}
                <span className="code-punct">[</span>
                <br />
                {"  "}
                <span className="code-string">"React"</span>
                <span className="code-punct">, </span>
                <span className="code-string">"TypeScript"</span>
                <span className="code-punct">, </span>
                <span className="code-string">"Node.js"</span>
                <span className="code-punct">,</span>
                <br />
                {"  "}
                <span className="code-string">"Tailwind"</span>
                <span className="code-punct">, </span>
                <span className="code-string">"PostgreSQL"</span>
                <span className="code-punct">, </span>
                <span className="code-string">"AWS"</span>
                <br />
                <span className="code-punct">];</span>
              </p>
            </article>
          </div>
        </MacWindow>
      </div>
    </section>
  );
};
