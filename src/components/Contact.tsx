import { MacWindow } from "./MacWindow";
import { Mail, Github, Linkedin, MessageCircle, Terminal as TerminalIcon } from "lucide-react";

const links = [
  { icon: Mail, label: "contato@jeanramalho.dev", href: "mailto:contato@jeanramalho.dev" },
  { icon: Github, label: "github.com/jeanramalho", href: "#" },
  { icon: Linkedin, label: "linkedin.com/in/jeanramalho", href: "#" },
  { icon: MessageCircle, label: "@jeanramalho.dev", href: "#" },
];

export const Contact = () => {
  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 animate-fade-up text-center">
          <p className="font-mono text-sm text-[hsl(var(--purple-glow))]">
            <span className="code-comment">// 04.</span> contato
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            Vamos <span className="gradient-text">construir</span> algo?
          </h2>
          <p className="text-muted-foreground mt-3">
            Estou sempre aberto a conversar sobre novos projetos, ideias ou
            oportunidades.
          </p>
        </header>

        <MacWindow
          title="contact.sh — zsh"
          icon={<TerminalIcon className="w-3 h-3" />}
          className="animate-scale-in"
          bodyClassName="bg-[hsl(var(--navy-deep))] p-5 sm:p-6 font-mono text-sm space-y-3"
        >
          <div>
            <span className="text-[hsl(var(--green-code))]">jean@dev</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-[hsl(var(--cyan-code))]">~</span>
            <span className="text-muted-foreground">$ </span>
            <span className="text-foreground">cat ./contato.json</span>
          </div>

          <div className="pl-2 space-y-1.5">
            <div className="text-muted-foreground">
              <span className="code-punct">{`{`}</span>
            </div>
            {links.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-3 pl-4 py-1.5 rounded-md hover:bg-primary/10 transition-colors"
              >
                <Icon className="w-4 h-4 text-[hsl(var(--purple-glow))] group-hover:scale-110 transition-transform" />
                <span className="text-[hsl(var(--green-code))] group-hover:text-[hsl(var(--purple-glow))] transition-colors break-all">
                  "{label}"
                </span>
              </a>
            ))}
            <div className="text-muted-foreground">
              <span className="code-punct">{`}`}</span>
            </div>
          </div>

          <div className="pt-3">
            <a
              href="mailto:contato@jeanramalho.dev"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground font-sans font-medium text-sm shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform"
            >
              <Mail className="w-4 h-4" />
              ./enviar_mensagem
            </a>
          </div>

          <div className="pt-2 blink-caret">
            <span className="text-[hsl(var(--green-code))]">jean@dev</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-[hsl(var(--cyan-code))]">~</span>
            <span className="text-muted-foreground">$ </span>
          </div>
        </MacWindow>

        <footer className="mt-10 text-center font-mono text-xs text-muted-foreground">
          <span className="text-[hsl(var(--purple-glow))]">&lt;/jeanramalho.dev&gt;</span>
          {" — "}
          construído com React, TypeScript & ☕ · {new Date().getFullYear()}
        </footer>
      </div>
    </section>
  );
};
