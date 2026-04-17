import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MacWindowProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  variant?: "default" | "terminal" | "finder" | "code";
  tabs?: string[];
  activeTab?: string;
}

export const MacWindow = ({
  title,
  icon,
  children,
  className,
  bodyClassName,
  variant = "default",
  tabs,
  activeTab,
}: MacWindowProps) => {
  return (
    <div className={cn("mac-window group", className)}>
      <div className="mac-titlebar">
        <div className="flex items-center gap-1.5">
          <span className="traffic-light traffic-red" />
          <span className="traffic-light traffic-yellow" />
          <span className="traffic-light traffic-green" />
        </div>
        <div className="flex-1 flex items-center justify-center gap-2 text-xs text-muted-foreground font-medium truncate px-2">
          {icon}
          <span className="truncate">{title}</span>
        </div>
        <div className="w-12" />
      </div>

      {tabs && (
        <div className="flex items-center gap-1 px-3 pt-2 pb-0 bg-secondary/40 border-b border-border/40 overflow-x-auto">
          {tabs.map((t) => (
            <div
              key={t}
              className={cn(
                "px-3 py-1.5 text-xs font-mono rounded-t-md whitespace-nowrap border-t border-x",
                t === activeTab
                  ? "bg-card text-foreground border-border"
                  : "bg-transparent text-muted-foreground border-transparent hover:text-foreground"
              )}
            >
              {t}
            </div>
          ))}
        </div>
      )}

      <div className={cn("relative", bodyClassName)}>{children}</div>
    </div>
  );
};
