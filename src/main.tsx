@tailwind base;
@tailwind components;
@tailwind utilities;

/* macOS-inspired portfolio design system — navy + purple, dark */
@layer base {
  :root {
    --background: 230 35% 7%;
    --foreground: 220 30% 92%;

    --card: 228 32% 11%;
    --card-foreground: 220 30% 92%;

    --popover: 228 32% 11%;
    --popover-foreground: 220 30% 92%;

    --primary: 265 85% 68%;
    --primary-foreground: 230 35% 7%;

    --secondary: 228 30% 16%;
    --secondary-foreground: 220 30% 92%;

    --muted: 228 25% 14%;
    --muted-foreground: 220 15% 65%;

    --accent: 265 70% 60%;
    --accent-foreground: 220 30% 98%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 228 25% 20%;
    --input: 228 25% 18%;
    --ring: 265 85% 68%;

    --radius: 0.85rem;

    /* macOS traffic lights */
    --mac-red: 0 78% 62%;
    --mac-yellow: 42 95% 60%;
    --mac-green: 138 60% 52%;

    /* Brand */
    --navy-deep: 230 45% 5%;
    --navy: 228 38% 10%;
    --navy-light: 226 32% 16%;
    --purple: 265 85% 68%;
    --purple-glow: 275 90% 72%;
    --cyan-code: 190 95% 70%;
    --green-code: 140 70% 65%;
    --pink-code: 330 85% 72%;
    --yellow-code: 45 95% 70%;

    /* Gradients */
    --gradient-window: linear-gradient(180deg, hsl(228 32% 13%), hsl(230 35% 9%));
    --gradient-titlebar: linear-gradient(180deg, hsl(228 28% 18%), hsl(228 30% 14%));
    --gradient-purple: linear-gradient(135deg, hsl(265 85% 68%), hsl(285 80% 65%));
    --gradient-hero: radial-gradient(circle at 20% 0%, hsl(265 70% 25% / 0.4), transparent 50%),
                     radial-gradient(circle at 80% 100%, hsl(230 70% 30% / 0.4), transparent 50%),
                     linear-gradient(180deg, hsl(230 40% 6%), hsl(228 38% 9%));
    --gradient-text: linear-gradient(135deg, hsl(265 90% 75%), hsl(200 95% 70%));

    /* Shadows */
    --shadow-window: 0 25px 60px -15px hsl(230 60% 2% / 0.8), 0 0 0 1px hsl(228 30% 22% / 0.6);
    --shadow-glow: 0 0 40px hsl(265 85% 68% / 0.35);
    --shadow-soft: 0 10px 30px -10px hsl(230 60% 2% / 0.6);

    /* Motion */
    --ease-mac: cubic-bezier(0.16, 1, 0.3, 1);

    --sidebar-background: 228 32% 11%;
    --sidebar-foreground: 220 30% 85%;
    --sidebar-primary: 265 85% 68%;
    --sidebar-primary-foreground: 230 35% 7%;
    --sidebar-accent: 228 28% 16%;
    --sidebar-accent-foreground: 220 30% 92%;
    --sidebar-border: 228 25% 20%;
    --sidebar-ring: 265 85% 68%;
  }

  .dark {
    --background: 230 35% 7%;
    --foreground: 220 30% 92%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground antialiased;
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", system-ui, sans-serif;
    background-image: var(--gradient-hero);
    background-attachment: fixed;
  }

  ::selection {
    background: hsl(var(--primary) / 0.4);
    color: hsl(var(--foreground));
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: hsl(var(--navy-deep));
  }
  ::-webkit-scrollbar-thumb {
    background: hsl(var(--navy-light));
    border-radius: 10px;
    border: 2px solid hsl(var(--navy-deep));
  }
  ::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--purple) / 0.6);
  }
}

@layer components {
  /* macOS Window */
  .mac-window {
    @apply relative rounded-2xl overflow-hidden backdrop-blur-xl;
    background: var(--gradient-window);
    box-shadow: var(--shadow-window);
    border: 1px solid hsl(var(--border) / 0.6);
  }

  .mac-titlebar {
    @apply flex items-center gap-2 px-4 h-9 select-none;
    background: var(--gradient-titlebar);
    border-bottom: 1px solid hsl(var(--border) / 0.6);
  }

  .traffic-light {
    @apply w-3 h-3 rounded-full transition-all duration-200;
    box-shadow: inset 0 0 0 0.5px hsl(0 0% 0% / 0.3);
  }
  .traffic-red    { background: hsl(var(--mac-red)); }
  .traffic-yellow { background: hsl(var(--mac-yellow)); }
  .traffic-green  { background: hsl(var(--mac-green)); }
  .mac-window:hover .traffic-light {
    filter: brightness(1.1);
  }

  /* Code syntax */
  .code-keyword  { color: hsl(var(--pink-code)); }
  .code-string   { color: hsl(var(--green-code)); }
  .code-fn       { color: hsl(var(--cyan-code)); }
  .code-var      { color: hsl(var(--yellow-code)); }
  .code-comment  { color: hsl(var(--muted-foreground)); font-style: italic; }
  .code-punct    { color: hsl(220 20% 70%); }

  .gradient-text {
    background: var(--gradient-text);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .glow-purple {
    box-shadow: var(--shadow-glow);
  }

  .grid-bg {
    background-image:
      linear-gradient(hsl(var(--border) / 0.25) 1px, transparent 1px),
      linear-gradient(90deg, hsl(var(--border) / 0.25) 1px, transparent 1px);
    background-size: 32px 32px;
  }

  .blink-caret::after {
    content: "▋";
    margin-left: 2px;
    color: hsl(var(--purple));
    animation: blink 1s step-end infinite;
  }
}

@layer utilities {
  .font-mono { font-family: "JetBrains Mono", "SF Mono", ui-monospace, Menlo, monospace; }
}

@keyframes blink {
  50% { opacity: 0; }
}
