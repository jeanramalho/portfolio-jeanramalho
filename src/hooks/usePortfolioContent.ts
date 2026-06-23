import { useEffect, useState } from "react";
import {
  loadPortfolioContent,
  savePortfolioContent,
  type PortfolioContent,
} from "@/content/portfolio";

export const usePortfolioContent = () => {
  const [content, setContent] = useState<PortfolioContent>(() => loadPortfolioContent());

  useEffect(() => {
    const handleStorage = () => setContent(loadPortfolioContent());
    const handleCustomUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<PortfolioContent>;
      setContent(customEvent.detail);
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("portfolio-content-updated", handleCustomUpdate);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("portfolio-content-updated", handleCustomUpdate);
    };
  }, []);

  const saveContent = (nextContent: PortfolioContent) => {
    savePortfolioContent(nextContent);
    setContent(nextContent);
  };

  return { content, setContent, saveContent };
};
