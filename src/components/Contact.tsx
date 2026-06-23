import { MacWindow } from "./MacWindow";
import { Mail, Github, Linkedin, MessageCircle, Terminal as TerminalIcon } from "lucide-react";
import type { ContactLink, PortfolioContent } from "@/content/portfolio";

const linkIcons: Record<ContactLink["type"], typeof Mail> = {
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  message: MessageCircle,
};

interface ContactProps {
  content: PortfolioContent["contact"];
}

export const Contact = ({ content }: ContactProps) => {
  const primaryEmail = content.links.find((link) => link.type === "email")?.href ?? "#";

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 animate-fade-up text-center">
          <p className="font-mono text-sm text-[hsl(var(--purple-glow))]">
            <span className="code-comment">{content.eyebrow}</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">
            {content.title} <span className="gradient-text">{content.highlightedTitle}</span> algo?
          </h2>
          <p className="text-muted-foreground mt-3">
            {content.description}
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
            {content.links.map(({ type, label, href }) => {
              const Icon = linkIcons[type];

              return (
                <a
                  key={`${type}-${label}`}
                  href={href}
                  className="group flex items-center gap-3 pl-4 py-1.5 rounded-md hover:bg-primary/10 transition-colors"
                >
                  <Icon className="w-4 h-4 text-[hsl(var(--purple-glow))] group-hover:scale-110 transition-transform" />
                  <span className="text-[hsl(var(--green-code))] group-hover:text-[hsl(var(--purple-glow))] transition-colors break-all">
                    "{label}"
                  </span>
                </a>
              );
            })}
            <div className="text-muted-foreground">
              <span className="code-punct">{`}`}</span>
            </div>
          </div>

          <div className="pt-3">
            <a
              href={primaryEmail}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground font-sans font-medium text-sm shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform"
            >
              <Mail className="w-4 h-4" />
              {content.cta}
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
          <span className="text-[hsl(var(--purple-glow))]">{content.footerBrand}</span>
          {" — "}
          construído com React, TypeScript & ☕ · {new Date().getFullYear()}
        </footer>
      </div>
    </section>
  );
};
