import type { SkillCategory, Technology } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile Development",
    description: "My main focus — building cross-platform apps with Flutter.",
    items: [
      "Flutter & Dart",
      "Android Studio (emulators & physical devices)",
      "Firebase (cloud storage for images & data)",
      "State management with the Bloc pattern",
      "UI implementation from design to working screens",
    ],
  },
  {
    title: "Web Development",
    description: "Building and designing websites and web interfaces.",
    items: [
      "JavaScript & TypeScript",
      "WordPress site development",
      "HTML & CSS, responsive layouts",
      "React & Next.js (currently learning)",
      "Web & mobile visual design",
    ],
  },
  {
    title: "QA & Automation",
    description: "Test automation experience from my time at Hexaware.",
    items: [
      "End-to-end testing with Selenium",
      "API testing with Postman",
      "Visual test reports with step screenshots",
      "Code review",
      "Agile methodology",
    ],
  },
  {
    title: "Tools & Workflow",
    description: "How I work and the tooling I rely on.",
    items: [
      "Git & version control",
      "Workflow automation with n8n",
      "AI-assisted development with Claude Code",
      "Building automated chatbots",
      "Self-directed learning",
    ],
  },
];

export const technologies: Technology[] = [
  { name: "Dart", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },
  { name: "Flutter", category: "framework" },
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "Firebase", category: "cloud" },
  { name: "WordPress", category: "tool" },
  { name: "Selenium", category: "tool" },
  { name: "Postman", category: "tool" },
  { name: "n8n", category: "tool" },
  { name: "Android Studio", category: "tool" },
  { name: "Git", category: "tool" },
];
