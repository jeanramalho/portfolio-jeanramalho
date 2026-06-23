import { FormEvent, type ReactNode, useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
import {
  Eye,
  LayoutDashboard,
  LogOut,
  Plus,
  RotateCcw,
  Save,
  Trash2,
} from "lucide-react";
import { MacWindow } from "@/components/MacWindow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  ADMIN_SESSION_KEY,
  adminCredentials,
  defaultPortfolioContent,
  type ContactLink,
  type CustomSection,
  type PortfolioContent,
  type Project,
} from "@/content/portfolio";
import { usePortfolioContent } from "@/hooks/usePortfolioContent";

const sectionTypes: CustomSection["type"][] = ["text", "cards", "carousel"];
const layoutTypes: CustomSection["layout"][] = ["compact", "split", "grid"];
const projectColors = [
  "from-[hsl(var(--purple))] to-[hsl(var(--purple-glow))]",
  "from-[hsl(var(--cyan-code))] to-[hsl(var(--purple))]",
  "from-[hsl(var(--pink-code))] to-[hsl(var(--purple-glow))]",
  "from-[hsl(var(--green-code))] to-[hsl(var(--cyan-code))]",
];

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => window.sessionStorage.getItem(ADMIN_SESSION_KEY) === "true",
  );

  if (!isAuthenticated) {
    return <AdminLogin onSuccess={() => setIsAuthenticated(true)} />;
  }

  return <AdminPanel onLogout={() => setIsAuthenticated(false)} />;
};

const AdminLogin = ({ onSuccess }: { onSuccess: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (email === adminCredentials.email && password === adminCredentials.password) {
      window.sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
      onSuccess();
      return;
    }

    setError("Credenciais inválidas.");
  };

  return (
    <main className="min-h-screen px-4 py-16 flex items-center justify-center">
      <MacWindow
        title="admin-login.tsx — Secure Shell"
        icon={<LayoutDashboard className="w-3 h-3" />}
        className="w-full max-w-md"
        bodyClassName="p-6"
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <p className="font-mono text-sm text-[hsl(var(--purple-glow))]">// rota oculta</p>
            <h1 className="text-2xl font-bold mt-2">Painel admin</h1>
          </div>

          <Field label="Email">
            <Input value={email} onChange={(event) => setEmail(event.target.value)} type="email" />
          </Field>

          <Field label="Senha">
            <Input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />
          </Field>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button className="w-full" type="submit">
            Entrar
          </Button>
        </form>
      </MacWindow>
    </main>
  );
};

const AdminPanel = ({ onLogout }: { onLogout: () => void }) => {
  const { content, setContent, saveContent } = usePortfolioContent();
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [activeArea, setActiveArea] = useState("hero");

  const customSectionOptions = useMemo(
    () => content.customSections.map((section) => ({ id: section.id, title: section.title })),
    [content.customSections],
  );

  const updateContent = (updater: (draft: PortfolioContent) => PortfolioContent) => {
    setContent(updater(content));
  };

  const handleSave = () => {
    saveContent(content);
    setSavedAt(new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
  };

  const handleReset = () => {
    setContent(defaultPortfolioContent);
    saveContent(defaultPortfolioContent);
    setSavedAt("resetado");
  };

  const handleLogout = () => {
    window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
    onLogout();
  };

  if (window.location.pathname !== "/admin") {
    return <Navigate to="/admin" replace />;
  }

  return (
    <main className="min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-mono text-sm text-[hsl(var(--purple-glow))]">// portfolio-cms</p>
            <h1 className="text-3xl font-bold">Painel de edição</h1>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button variant="outline" asChild>
              <a href="/" target="_blank" rel="noreferrer">
                <Eye className="w-4 h-4" />
                Preview
              </a>
            </Button>
            <Button variant="secondary" onClick={handleReset}>
              <RotateCcw className="w-4 h-4" />
              Resetar
            </Button>
            <Button onClick={handleSave}>
              <Save className="w-4 h-4" />
              Salvar
            </Button>
            <Button variant="ghost" onClick={handleLogout}>
              <LogOut className="w-4 h-4" />
              Sair
            </Button>
          </div>
        </header>

        {savedAt && (
          <p className="font-mono text-xs text-[hsl(var(--green-code))]">
            Conteúdo salvo em localStorage: {savedAt}
          </p>
        )}

        <div className="grid lg:grid-cols-[240px_1fr] gap-6 items-start">
          <MacWindow title="sections.json" bodyClassName="p-3">
            <nav className="space-y-1">
              {[
                ["hero", "Hero"],
                ["about", "Sobre"],
                ["projects", "Projetos"],
                ["skills", "Skills"],
                ["contact", "Contato"],
                ["custom", "Seções novas"],
                ...customSectionOptions.map((section) => [section.id, section.title]),
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => setActiveArea(id)}
                  className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                    activeArea === id
                      ? "bg-primary/20 text-foreground"
                      : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </MacWindow>

          <MacWindow title={`${activeArea}.editor.tsx`} bodyClassName="p-5 sm:p-6">
            {activeArea === "hero" && <HeroEditor content={content} updateContent={updateContent} />}
            {activeArea === "about" && <AboutEditor content={content} updateContent={updateContent} />}
            {activeArea === "projects" && <ProjectsEditor content={content} updateContent={updateContent} />}
            {activeArea === "skills" && <SkillsEditor content={content} updateContent={updateContent} />}
            {activeArea === "contact" && <ContactEditor content={content} updateContent={updateContent} />}
            {activeArea === "custom" && <CustomSectionsEditor content={content} updateContent={updateContent} />}
            {content.customSections.map(
              (section) =>
                activeArea === section.id && (
                  <CustomSectionEditor
                    key={section.id}
                    section={section}
                    content={content}
                    updateContent={updateContent}
                  />
                ),
            )}
          </MacWindow>
        </div>
      </div>
    </main>
  );
};

const HeroEditor = ({ content, updateContent }: EditorProps) => (
  <EditorGrid>
    <TextField label="Disponibilidade" value={content.hero.availability} onChange={(availability) => updateContent((draft) => ({ ...draft, hero: { ...draft.hero, availability } }))} />
    <TextField label="Intro" value={content.hero.intro} onChange={(intro) => updateContent((draft) => ({ ...draft, hero: { ...draft.hero, intro } }))} />
    <TextField label="Nome" value={content.hero.name} onChange={(name) => updateContent((draft) => ({ ...draft, hero: { ...draft.hero, name } }))} />
    <TextField label="Nome em destaque" value={content.hero.highlightName} onChange={(highlightName) => updateContent((draft) => ({ ...draft, hero: { ...draft.hero, highlightName } }))} />
    <TextAreaField label="Headline" value={content.hero.headline} onChange={(headline) => updateContent((draft) => ({ ...draft, hero: { ...draft.hero, headline } }))} />
    <TextField label="CTA primário" value={content.hero.primaryCta} onChange={(primaryCta) => updateContent((draft) => ({ ...draft, hero: { ...draft.hero, primaryCta } }))} />
    <TextField label="CTA secundário" value={content.hero.secondaryCta} onChange={(secondaryCta) => updateContent((draft) => ({ ...draft, hero: { ...draft.hero, secondaryCta } }))} />
    <TextField label="Brand const" value={content.hero.brandConst} onChange={(brandConst) => updateContent((draft) => ({ ...draft, hero: { ...draft.hero, brandConst } }))} />
    <TextField label="Identidade terminal" value={content.hero.terminalIdentity} onChange={(terminalIdentity) => updateContent((draft) => ({ ...draft, hero: { ...draft.hero, terminalIdentity } }))} />
    <TextField label="Skills terminal" value={content.hero.terminalSkills.join(", ")} onChange={(value) => updateContent((draft) => ({ ...draft, hero: { ...draft.hero, terminalSkills: splitList(value) } }))} />
    <TextField label="Missão terminal" value={content.hero.terminalMission} onChange={(terminalMission) => updateContent((draft) => ({ ...draft, hero: { ...draft.hero, terminalMission } }))} />
  </EditorGrid>
);

const AboutEditor = ({ content, updateContent }: EditorProps) => (
  <EditorGrid>
    <TextField label="Eyebrow" value={content.about.eyebrow} onChange={(eyebrow) => updateContent((draft) => ({ ...draft, about: { ...draft.about, eyebrow } }))} />
    <TextField label="Título" value={content.about.title} onChange={(title) => updateContent((draft) => ({ ...draft, about: { ...draft.about, title } }))} />
    <TextField label="Título destacado" value={content.about.highlightedTitle} onChange={(highlightedTitle) => updateContent((draft) => ({ ...draft, about: { ...draft.about, highlightedTitle } }))} />
    <TextField label="Arquivo" value={content.about.fileName} onChange={(fileName) => updateContent((draft) => ({ ...draft, about: { ...draft.about, fileName } }))} />
    <TextAreaField label="Parágrafos" value={content.about.paragraphs.join("\n")} onChange={(value) => updateContent((draft) => ({ ...draft, about: { ...draft.about, paragraphs: splitLines(value) } }))} />
    <TextField label="Stack" value={content.about.stack.join(", ")} onChange={(value) => updateContent((draft) => ({ ...draft, about: { ...draft.about, stack: splitList(value) } }))} />
  </EditorGrid>
);

const ProjectsEditor = ({ content, updateContent }: EditorProps) => (
  <div className="space-y-5">
    <EditorGrid>
      <TextField label="Eyebrow" value={content.projects.eyebrow} onChange={(eyebrow) => updateContent((draft) => ({ ...draft, projects: { ...draft.projects, eyebrow } }))} />
      <TextField label="Título" value={content.projects.title} onChange={(title) => updateContent((draft) => ({ ...draft, projects: { ...draft.projects, title } }))} />
      <TextField label="Título destacado" value={content.projects.highlightedTitle} onChange={(highlightedTitle) => updateContent((draft) => ({ ...draft, projects: { ...draft.projects, highlightedTitle } }))} />
      <TextAreaField label="Descrição" value={content.projects.description} onChange={(description) => updateContent((draft) => ({ ...draft, projects: { ...draft.projects, description } }))} />
    </EditorGrid>

    <ListHeader title="Projetos" onAdd={() => updateContent((draft) => ({ ...draft, projects: { ...draft.projects, items: [...draft.projects.items, emptyProject()] } }))} />
    {content.projects.items.map((project, index) => (
      <ProjectEditor key={`${project.name}-${index}`} project={project} index={index} updateContent={updateContent} />
    ))}
  </div>
);

const ProjectEditor = ({ project, index, updateContent }: { project: Project; index: number; updateContent: EditorProps["updateContent"] }) => {
  const updateProject = (patch: Partial<Project>) =>
    updateContent((draft) => ({
      ...draft,
      projects: {
        ...draft.projects,
        items: draft.projects.items.map((item, itemIndex) => (itemIndex === index ? { ...item, ...patch } : item)),
      },
    }));

  return (
    <div className="rounded-lg border border-border bg-secondary/20 p-4 space-y-4">
      <EditorGrid>
        <TextField label="Nome" value={project.name} onChange={(name) => updateProject({ name })} />
        <TextField label="Tagline" value={project.tagline} onChange={(tagline) => updateProject({ tagline })} />
        <TextAreaField label="Descrição" value={project.desc} onChange={(desc) => updateProject({ desc })} />
        <TextField label="Tags" value={project.tags.join(", ")} onChange={(value) => updateProject({ tags: splitList(value) })} />
        <Field label="Gradiente">
          <Select value={project.color} onValueChange={(color) => updateProject({ color })}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>{projectColors.map((color) => <SelectItem key={color} value={color}>{color}</SelectItem>)}</SelectContent>
          </Select>
        </Field>
        <TextField label="Source URL" value={project.sourceHref} onChange={(sourceHref) => updateProject({ sourceHref })} />
        <TextField label="Demo URL" value={project.demoHref} onChange={(demoHref) => updateProject({ demoHref })} />
      </EditorGrid>
      <Button variant="destructive" size="sm" onClick={() => updateContent((draft) => ({ ...draft, projects: { ...draft.projects, items: draft.projects.items.filter((_, itemIndex) => itemIndex !== index) } }))}>
        <Trash2 className="w-4 h-4" />
        Remover projeto
      </Button>
    </div>
  );
};

const SkillsEditor = ({ content, updateContent }: EditorProps) => (
  <div className="space-y-5">
    <EditorGrid>
      <TextField label="Eyebrow" value={content.skills.eyebrow} onChange={(eyebrow) => updateContent((draft) => ({ ...draft, skills: { ...draft.skills, eyebrow } }))} />
      <TextField label="Título" value={content.skills.title} onChange={(title) => updateContent((draft) => ({ ...draft, skills: { ...draft.skills, title } }))} />
      <TextField label="Título destacado" value={content.skills.highlightedTitle} onChange={(highlightedTitle) => updateContent((draft) => ({ ...draft, skills: { ...draft.skills, highlightedTitle } }))} />
    </EditorGrid>
    <ListHeader title="Grupos de skill" onAdd={() => updateContent((draft) => ({ ...draft, skills: { ...draft.skills, groups: [...draft.skills.groups, { name: "novoGrupo", items: ["React"] }] } }))} />
    {content.skills.groups.map((group, index) => (
      <div key={`${group.name}-${index}`} className="rounded-lg border border-border bg-secondary/20 p-4">
        <EditorGrid>
          <TextField label="Nome" value={group.name} onChange={(name) => updateContent((draft) => ({ ...draft, skills: { ...draft.skills, groups: draft.skills.groups.map((item, itemIndex) => itemIndex === index ? { ...item, name } : item) } }))} />
          <TextField label="Itens" value={group.items.join(", ")} onChange={(value) => updateContent((draft) => ({ ...draft, skills: { ...draft.skills, groups: draft.skills.groups.map((item, itemIndex) => itemIndex === index ? { ...item, items: splitList(value) } : item) } }))} />
        </EditorGrid>
      </div>
    ))}
  </div>
);

const ContactEditor = ({ content, updateContent }: EditorProps) => (
  <div className="space-y-5">
    <EditorGrid>
      <TextField label="Eyebrow" value={content.contact.eyebrow} onChange={(eyebrow) => updateContent((draft) => ({ ...draft, contact: { ...draft.contact, eyebrow } }))} />
      <TextField label="Título" value={content.contact.title} onChange={(title) => updateContent((draft) => ({ ...draft, contact: { ...draft.contact, title } }))} />
      <TextField label="Título destacado" value={content.contact.highlightedTitle} onChange={(highlightedTitle) => updateContent((draft) => ({ ...draft, contact: { ...draft.contact, highlightedTitle } }))} />
      <TextAreaField label="Descrição" value={content.contact.description} onChange={(description) => updateContent((draft) => ({ ...draft, contact: { ...draft.contact, description } }))} />
      <TextField label="CTA" value={content.contact.cta} onChange={(cta) => updateContent((draft) => ({ ...draft, contact: { ...draft.contact, cta } }))} />
      <TextField label="Footer brand" value={content.contact.footerBrand} onChange={(footerBrand) => updateContent((draft) => ({ ...draft, contact: { ...draft.contact, footerBrand } }))} />
    </EditorGrid>
    <ListHeader title="Links" onAdd={() => updateContent((draft) => ({ ...draft, contact: { ...draft.contact, links: [...draft.contact.links, { type: "message", label: "novo link", href: "#" }] } }))} />
    {content.contact.links.map((link, index) => (
      <ContactLinkEditor key={`${link.type}-${index}`} link={link} index={index} updateContent={updateContent} />
    ))}
  </div>
);

const ContactLinkEditor = ({ link, index, updateContent }: { link: ContactLink; index: number; updateContent: EditorProps["updateContent"] }) => (
  <div className="rounded-lg border border-border bg-secondary/20 p-4">
    <EditorGrid>
      <Field label="Tipo">
        <Select value={link.type} onValueChange={(type: ContactLink["type"]) => updateContent((draft) => ({ ...draft, contact: { ...draft.contact, links: draft.contact.links.map((item, itemIndex) => itemIndex === index ? { ...item, type } : item) } }))}>
          <SelectTrigger><SelectValue /></SelectTrigger>
          <SelectContent>{["email", "github", "linkedin", "message"].map((type) => <SelectItem key={type} value={type}>{type}</SelectItem>)}</SelectContent>
        </Select>
      </Field>
      <TextField label="Label" value={link.label} onChange={(label) => updateContent((draft) => ({ ...draft, contact: { ...draft.contact, links: draft.contact.links.map((item, itemIndex) => itemIndex === index ? { ...item, label } : item) } }))} />
      <TextField label="Href" value={link.href} onChange={(href) => updateContent((draft) => ({ ...draft, contact: { ...draft.contact, links: draft.contact.links.map((item, itemIndex) => itemIndex === index ? { ...item, href } : item) } }))} />
    </EditorGrid>
  </div>
);

const CustomSectionsEditor = ({ content, updateContent }: EditorProps) => (
  <div className="space-y-4">
    <p className="text-sm text-muted-foreground">
      Crie seções novas com layouts controlados pelo design system. Depois selecione a seção na lateral para editar seus cards.
    </p>
    <Button onClick={() => updateContent((draft) => ({ ...draft, customSections: [...draft.customSections, emptyCustomSection()] }))}>
      <Plus className="w-4 h-4" />
      Criar seção
    </Button>
    <div className="grid md:grid-cols-2 gap-4">
      {content.customSections.map((section) => (
        <div key={section.id} className="rounded-lg border border-border bg-secondary/20 p-4">
          <p className="font-mono text-sm text-foreground">{section.title}</p>
          <p className="text-xs text-muted-foreground mt-1">{section.type} / {section.layout}</p>
        </div>
      ))}
    </div>
  </div>
);

const CustomSectionEditor = ({ section, content, updateContent }: { section: CustomSection; content: PortfolioContent; updateContent: EditorProps["updateContent"] }) => {
  const updateSection = (patch: Partial<CustomSection>) =>
    updateContent((draft) => ({
      ...draft,
      customSections: draft.customSections.map((item) => (item.id === section.id ? { ...item, ...patch } : item)),
    }));

  return (
    <div className="space-y-5">
      <EditorGrid>
        <TextField label="ID da rota interna" value={section.id} onChange={(id) => updateSection({ id: slugify(id) })} />
        <TextField label="Eyebrow" value={section.eyebrow} onChange={(eyebrow) => updateSection({ eyebrow })} />
        <TextField label="Título" value={section.title} onChange={(title) => updateSection({ title })} />
        <TextAreaField label="Descrição" value={section.description} onChange={(description) => updateSection({ description })} />
        <Field label="Tipo">
          <Select value={section.type} onValueChange={(type: CustomSection["type"]) => updateSection({ type })}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>{sectionTypes.map((type) => <SelectItem key={type} value={type}>{type}</SelectItem>)}</SelectContent>
          </Select>
        </Field>
        <Field label="Layout">
          <Select value={section.layout} onValueChange={(layout: CustomSection["layout"]) => updateSection({ layout })}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>{layoutTypes.map((layout) => <SelectItem key={layout} value={layout}>{layout}</SelectItem>)}</SelectContent>
          </Select>
        </Field>
        <Field label="Ativa">
          <div className="h-10 flex items-center">
            <Switch checked={section.enabled} onCheckedChange={(enabled) => updateSection({ enabled })} />
          </div>
        </Field>
      </EditorGrid>

      <ListHeader title="Itens da seção" onAdd={() => updateSection({ items: [...section.items, { title: "Novo card", description: "Descrição do card.", meta: "meta" }] })} />
      {section.items.map((item, index) => (
        <div key={`${item.title}-${index}`} className="rounded-lg border border-border bg-secondary/20 p-4">
          <EditorGrid>
            <TextField label="Título" value={item.title} onChange={(title) => updateSection({ items: section.items.map((entry, entryIndex) => entryIndex === index ? { ...entry, title } : entry) })} />
            <TextField label="Meta" value={item.meta} onChange={(meta) => updateSection({ items: section.items.map((entry, entryIndex) => entryIndex === index ? { ...entry, meta } : entry) })} />
            <TextAreaField label="Descrição" value={item.description} onChange={(description) => updateSection({ items: section.items.map((entry, entryIndex) => entryIndex === index ? { ...entry, description } : entry) })} />
          </EditorGrid>
        </div>
      ))}

      <Button variant="destructive" onClick={() => updateContent(() => ({ ...content, customSections: content.customSections.filter((item) => item.id !== section.id) }))}>
        <Trash2 className="w-4 h-4" />
        Remover seção
      </Button>
    </div>
  );
};

interface EditorProps {
  content: PortfolioContent;
  updateContent: (updater: (draft: PortfolioContent) => PortfolioContent) => void;
}

const EditorGrid = ({ children }: { children: ReactNode }) => (
  <div className="grid md:grid-cols-2 gap-4">{children}</div>
);

const Field = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    {children}
  </div>
);

const TextField = ({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) => (
  <Field label={label}>
    <Input value={value} onChange={(event) => onChange(event.target.value)} />
  </Field>
);

const TextAreaField = ({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) => (
  <Field label={label}>
    <Textarea value={value} onChange={(event) => onChange(event.target.value)} />
  </Field>
);

const ListHeader = ({ title, onAdd }: { title: string; onAdd: () => void }) => (
  <div className="flex items-center justify-between gap-3">
    <h2 className="font-mono text-lg text-[hsl(var(--cyan-code))]">{title}</h2>
    <Button size="sm" onClick={onAdd}>
      <Plus className="w-4 h-4" />
      Adicionar
    </Button>
  </div>
);

const splitList = (value: string) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const splitLines = (value: string) =>
  value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);

const slugify = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const emptyProject = (): Project => ({
  name: "novo-projeto",
  tagline: "Resumo do projeto",
  desc: "Descrição curta do projeto.",
  tags: ["React", "TypeScript"],
  color: projectColors[0],
  sourceHref: "#",
  demoHref: "#",
});

const emptyCustomSection = (): CustomSection => ({
  id: `secao-${Date.now()}`,
  type: "cards",
  title: "Nova seção",
  eyebrow: "// nova seção",
  description: "Descrição da nova seção.",
  layout: "grid",
  enabled: true,
  items: [
    {
      title: "Primeiro card",
      description: "Conteúdo inicial do card.",
      meta: "card.tsx",
    },
  ],
});

export default Admin;
