import type { CustomSection } from "@/content/portfolio";

export interface SectionFormatOption {
  type: CustomSection["type"];
  label: string;
  description: string;
  defaultLayout: CustomSection["layout"];
}

export const sectionFormatOptions: SectionFormatOption[] = [
  {
    type: "cards",
    label: "Cards",
    description: "Grade de cards para serviços, cases, destaques ou recursos.",
    defaultLayout: "grid",
  },
  {
    type: "carousel",
    label: "Carrossel",
    description: "Lista navegável horizontal para projetos, depoimentos ou destaques.",
    defaultLayout: "grid",
  },
  {
    type: "gallery",
    label: "Galeria",
    description: "Composição visual em mosaico usando os mesmos tokens do portfólio.",
    defaultLayout: "grid",
  },
  {
    type: "text",
    label: "Texto",
    description: "Bloco editorial para manifesto, bio detalhada ou apresentação.",
    defaultLayout: "split",
  },
  {
    type: "timeline",
    label: "Timeline",
    description: "Linha do tempo para trajetória, processo ou marcos profissionais.",
    defaultLayout: "compact",
  },
  {
    type: "cta",
    label: "CTA",
    description: "Chamada de ação para contato, orçamento, agenda ou download.",
    defaultLayout: "split",
  },
  {
    type: "code",
    label: "Código",
    description: "Bloco estilo terminal/editor para snippets, princípios ou stack.",
    defaultLayout: "compact",
  },
  {
    type: "stats",
    label: "Métricas",
    description: "Indicadores rápidos como anos, entregas, tecnologias ou resultados.",
    defaultLayout: "grid",
  },
];

export const sectionLayoutOptions: CustomSection["layout"][] = ["compact", "split", "grid"];

export const getSectionFormat = (type: CustomSection["type"]) =>
  sectionFormatOptions.find((format) => format.type === type) ?? sectionFormatOptions[0];
