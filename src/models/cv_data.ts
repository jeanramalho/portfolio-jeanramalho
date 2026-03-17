export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  institution: string;
  course: string;
  period: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  objective: string;
  summary: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const mockProfile: Profile = {
  name: "Jean Ramalho",
  title: "Desenvolvedor de Software",
  location: "São Paulo, SP",
  phone: "11 96314-3672",
  email: "jeanramalho.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/jean-ramalho",
  github: "https://github.com/jeanramalho",
  objective: "Em busca de recolocação na função de Desenvolvedor nas áreas de experiência, com abertura para novas oportunidades em outros ramos.",
  summary: "Desenvolvedor de Software experiente, com histórico de liderança em TI e desenvolvimento full-stack. Especializado na construção de aplicações em React (Web e Native) e Swift (iOS). Focado em código limpo, suporte técnico e melhoria contínua dos processos do negócio."
};

export const mockExperiences: Experience[] = [
  {
    id: "linx",
    role: "Analista de Software Sênior I",
    company: "LINX",
    period: "Fevereiro 2022 - Presente",
    description: [
      "Atendimento, triagem e escalonamento de tickets técnicos para aplicações web e mobile.",
      "Desenvolvimento e correção de funcionalidades em front-end.",
      "Uso de Postman e SQL para testes e debugging de APIs.",
      "Monitoramento de requisições e análise de performance com Grafana.",
      "Criação de ferramenta interna para facilitar debug de requisições e investigação de incidentes.",
      "Substituição temporária da liderança da equipe mantendo e superando metas."
    ]
  },
  {
    id: "lab7",
    role: "Desenvolvedor Mobile (Freelancer)",
    company: "Lab7 Code",
    period: "Janeiro 2021 - Outubro 2025",
    description: [
      "Atendimento de chamados técnicos mobile em regime freelance.",
      "Desenvolvimento de features com React Native (JavaScript/TypeScript).",
      "Implementação de funcionalidades iOS com Swift, UIKit e ViewCode.",
      "Correção de bugs e melhorias em aplicações mobile."
    ]
  },
  {
    id: "colegio",
    role: "Gerente de TI",
    company: "Colégio Adventista",
    period: "Janeiro 2015 - Dezembro 2021",
    description: [
      "Responsável pela infraestrutura de TI da instituição (rede, servidores e suporte técnico).",
      "Administração de rede e auditoria de acessos utilizando pfSense.",
      "Desenvolvimento de sistemas internos com React e scripts SQL para automação de processos.",
      "Criação de soluções para agilizar matrículas, tesouraria e gestão de salas de informática."
    ]
  },
  {
    id: "vision",
    role: "Desenvolvedor Web / Designer",
    company: "Vision Looks",
    period: "Abril 2020 - Janeiro 2021",
    description: [
      "Desenvolvimento de landing pages e presença digital usando React, HTML, CSS e JavaScript.",
      "Criação de materiais de marketing digital e integração entre design e front-end."
    ]
  },
  {
    id: "inforcell",
    role: "Técnico de Manutenção / Gerente de Loja",
    company: "Inforcell",
    period: "Janeiro 2012 - Janeiro 2015",
    description: [
      "Manutenção de computadores e dispositivos móveis.",
      "Atendimento ao cliente e gestão operacional da loja."
    ]
  }
];

export const mockEducation: Education[] = [
  {
    id: "anhanguera",
    institution: "Anhanguera",
    course: "Bacharelado em Engenharia de Software",
    period: "Junho 2023 - Dezembro 2026 (Previsão)"
  },
  {
    id: "resilia",
    institution: "Resilia Educação",
    course: "Desenvolvedor Web Fullstack",
    period: "Julho 2021 - Janeiro 2022"
  },
  {
    id: "unasp",
    institution: "UNASP",
    course: "Técnico em Informática",
    period: "2009 - 2010"
  }
];

export const mockSkills: SkillCategory[] = [
  {
    category: "Mobile & Web",
    skills: ["React Native", "Swift", "UIKit", "ViewCode", "React", "Node.js", "HTML", "CSS", "JavaScript", "TypeScript"]
  },
  {
    category: "Ferramentas & Infra",
    skills: ["Git", "Github", "APIs REST", "Postman", "SQL", "Grafana", "XML", "SPM (Swift Package Manager)"]
  },
  {
    category: "Metodologias & Soft Skills",
    skills: ["Scrum", "Kanban", "Jira", "Asana", "Resolução de Problemas", "Análise de Dados", "Proatividade", "Suporte Técnico"]
  }
];
