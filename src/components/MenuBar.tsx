import { useEffect, useState } from "react";
import { Apple, Wifi, BatteryFull, Search } from "lucide-react";

export const MenuBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  const dateStr = time.toLocaleDateString("pt-BR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
  const timeStr = time.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const menus = ["Arquivo", "Editar", "Visualizar", "Janela", "Ajuda"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-7 backdrop-blur-2xl bg-background/70 border-b border-border/40">
      <div className="h-full max-w-[1600px] mx-auto px-4 flex items-center gap-4 text-xs">
        <Apple className="w-4 h-4 text-foreground" fill="currentColor" />
        <span className="font-bold text-foreground">&lt;/jeanramalho.dev&gt;</span>
        <nav className="hidden md:flex items-center gap-4 text-muted-foreground">
          {menus.map((m) => (
            <button key={m} className="hover:text-foreground transition-colors">
              {m}
            </button>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3 text-muted-foreground">
          <BatteryFull className="w-4 h-4" />
          <Wifi className="w-3.5 h-3.5" />
          <Search className="w-3.5 h-3.5" />
          <span className="hidden sm:inline capitalize">{dateStr}</span>
          <span className="font-medium text-foreground">{timeStr}</span>
        </div>
      </div>
    </header>
  );
};
