export interface SkillGroup {
  category: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    items: ["JavaScript/TypeScript", "Python", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "React Native",
      "Node.js",
      "Next.js",
      "TanStack",
      "Express",
      "Flask",
      "GraphQL/Apollo",
    ],
  },
  {
    category: "Tools & Infrastructure",
    items: ["AWS", "Docker", "Terraform", "GitHub Actions", "MySQL", "Git"],
  },
  {
    category: "AI-Assisted Development",
    items: ["Claude Code", "Codex", "CodeRabbit", "GitHub Copilot"],
  },
];
