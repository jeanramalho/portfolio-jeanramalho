import { z } from "zod";

export const ADMIN_STORAGE_KEY = "jeanramalho.portfolio.content";
export const ADMIN_SESSION_KEY = "jeanramalho.admin.session";

export const adminCredentials = {
  email: "jeanramalho.dev@gmail.com",
  password: "#Raikinha2012",
};

export const projectSchema = z.object({
  name: z.string().min(1),
  tagline: z.string().min(1),
  desc: z.string().min(1),
  tags: z.array(z.string()),
  color: z.string().min(1),
  sourceHref: z.string(),
  demoHref: z.string(),
});

export const contactLinkSchema = z.object({
  type: z.enum(["email", "github", "linkedin", "message"]),
  label: z.string().min(1),
  href: z.string().min(1),
});

export const customSectionSchema = z.object({
  id: z.string().min(1),
  type: z.enum(["text", "cards", "carousel", "gallery", "timeline", "cta", "code", "stats"]),
  title: z.string().min(1),
  eyebrow: z.string().min(1),
  description: z.string(),
  layout: z.enum(["compact", "split", "grid"]),
  enabled: z.boolean(),
  items: z.array(
    z.object({
      title: z.string().min(1),
      description: z.string(),
      meta: z.string(),
    }),
  ),
});

export const portfolioContentSchema = z.object({
  hero: z.object({
    availability: z.string().min(1),
    intro: z.string().min(1),
    name: z.string().min(1),
    highlightName: z.string().min(1),
    headline: z.string().min(1),
    primaryCta: z.string().min(1),
    secondaryCta: z.string().min(1),
    brandConst: z.string().min(1),
    terminalIdentity: z.string().min(1),
    terminalSkills: z.array(z.string()),
    terminalMission: z.string().min(1),
  }),
  about: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    highlightedTitle: z.string().min(1),
    fileName: z.string().min(1),
    paragraphs: z.array(z.string()),
    stack: z.array(z.string()),
  }),
  projects: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    highlightedTitle: z.string().min(1),
    description: z.string().min(1),
    items: z.array(projectSchema),
  }),
  skills: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    highlightedTitle: z.string().min(1),
    groups: z.array(
      z.object({
        name: z.string().min(1),
        items: z.array(z.string()),
      }),
    ),
  }),
  contact: z.object({
    eyebrow: z.string().min(1),
    title: z.string().min(1),
    highlightedTitle: z.string().min(1),
    description: z.string().min(1),
    cta: z.string().min(1),
    footerBrand: z.string().min(1),
    links: z.array(contactLinkSchema),
  }),
  customSections: z.array(customSectionSchema),
});

export type Project = z.infer<typeof projectSchema>;
export type ContactLink = z.infer<typeof contactLinkSchema>;
export type CustomSection = z.infer<typeof customSectionSchema>;
export type PortfolioContent = z.infer<typeof portfolioContentSchema>;

export const defaultPortfolioContent: PortfolioContent = {
  hero: {
    availability: "disponível para projetos",
    intro: "// hello world, I'm",
    name: "Jean",
    highlightName: "Ramalho",
    headline:
      "Desenvolvedor Full-Stack construindo interfaces performáticas e experiências que parecem nativas.",
    primaryCta: "./ver_projetos",
    secondaryCta: "cat contato.txt",
    brandConst: "</jeanramalho.dev>",
    terminalIdentity: "jean_ramalho — full-stack dev",
    terminalSkills: ["react.tsx", "node.js", "typescript", "tailwind"],
    terminalMission: "build things that matter",
  },
  about: {
    eyebrow: "// 01. sobre",
    title: "Sobre",
    highlightedTitle: "mim",
    fileName: "~/documentos/sobre-jean.md",
    paragraphs: [
      "Olá! Sou Jean Ramalho, desenvolvedor apaixonado por transformar ideias em produtos digitais bem construídos — do back-end à última animação da interface.",
      "Tenho um carinho especial por design de sistemas, arquiteturas limpas e detalhes que fazem a diferença. Acredito que bom código se lê como prosa e que UX de qualidade é indistinguível de magia.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Tailwind", "PostgreSQL", "AWS"],
  },
  projects: {
    eyebrow: "// 02. projetos",
    title: "Projetos",
    highlightedTitle: "selecionados",
    description:
      "Janelas para alguns dos trabalhos que mais me orgulho — cada um com uma história de decisões técnicas por trás.",
    items: [
      {
        name: "nebula-ui",
        tagline: "Design system com 60+ componentes acessíveis",
        desc: "Biblioteca React + TS publicada no npm, focada em performance e dark mode nativo.",
        tags: ["React", "TypeScript", "Storybook"],
        color: "from-[hsl(var(--purple))] to-[hsl(var(--purple-glow))]",
        sourceHref: "#",
        demoHref: "#",
      },
      {
        name: "orbit-api",
        tagline: "Backend escalável para SaaS multi-tenant",
        desc: "Node.js, Postgres e Redis. Autenticação JWT, rate limiting e jobs em fila.",
        tags: ["Node.js", "PostgreSQL", "Redis"],
        color: "from-[hsl(var(--cyan-code))] to-[hsl(var(--purple))]",
        sourceHref: "#",
        demoHref: "#",
      },
      {
        name: "lume.app",
        tagline: "App de produtividade com sync offline-first",
        desc: "PWA com IndexedDB, conflict resolution e UI inspirada em apps nativos.",
        tags: ["React", "PWA", "IndexedDB"],
        color: "from-[hsl(var(--pink-code))] to-[hsl(var(--purple-glow))]",
        sourceHref: "#",
        demoHref: "#",
      },
      {
        name: "pulse-cli",
        tagline: "Ferramenta de DX para times de produto",
        desc: "CLI em Node que automatiza setup, deploy e telemetria de microserviços.",
        tags: ["Node.js", "CLI", "DevOps"],
        color: "from-[hsl(var(--green-code))] to-[hsl(var(--cyan-code))]",
        sourceHref: "#",
        demoHref: "#",
      },
    ],
  },
  skills: {
    eyebrow: "// 03. skills",
    title: "Minha",
    highlightedTitle: "stack",
    groups: [
      { name: "frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
      { name: "backend", items: ["Node.js", "Express", "NestJS", "Python"] },
      { name: "database", items: ["PostgreSQL", "MongoDB", "Redis"] },
      { name: "devops", items: ["Docker", "AWS", "GitHub Actions"] },
      { name: "tools", items: ["Figma", "Git", "Vite", "Vitest"] },
    ],
  },
  contact: {
    eyebrow: "// 04. contato",
    title: "Vamos",
    highlightedTitle: "construir",
    description:
      "Estou sempre aberto a conversar sobre novos projetos, ideias ou oportunidades.",
    cta: "./enviar_mensagem",
    footerBrand: "</jeanramalho.dev>",
    links: [
      { type: "email", label: "contato@jeanramalho.dev", href: "mailto:contato@jeanramalho.dev" },
      { type: "github", label: "github.com/jeanramalho", href: "#" },
      { type: "linkedin", label: "linkedin.com/in/jeanramalho", href: "#" },
      { type: "message", label: "@jeanramalho.dev", href: "#" },
    ],
  },
  customSections: [],
};

export const loadPortfolioContent = (): PortfolioContent => {
  if (typeof window === "undefined") {
    return defaultPortfolioContent;
  }

  const stored = window.localStorage.getItem(ADMIN_STORAGE_KEY);
  if (!stored) {
    return defaultPortfolioContent;
  }

  try {
    const parsed = portfolioContentSchema.safeParse(JSON.parse(stored));
    return parsed.success ? parsed.data : defaultPortfolioContent;
  } catch {
    return defaultPortfolioContent;
  }
};

export const savePortfolioContent = (content: PortfolioContent) => {
  const parsed = portfolioContentSchema.parse(content);
  window.localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(parsed));
  window.dispatchEvent(new CustomEvent("portfolio-content-updated", { detail: parsed }));
};
