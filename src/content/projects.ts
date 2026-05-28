import type { Project } from "@/types";

/**
 * Add new projects by appending entries to this array.
 * The `featured` flag controls visibility in the featured grid on the home page.
 */
export const projects: Project[] = [
  {
    slug: "subflix",
    title: "Subflix",
    description:
      "Premium SaaS dashboard to track, analyze and control digital subscriptions.",
    longDescription:
      "Dark-mode-first, glassmorphic dashboard inspired by Linear, Vercel and Stripe. Tracks monthly/yearly spend, visualizes trends and category breakdowns, and surfaces upcoming renewals on a calendar. Visual MVP backed by a typed mock-data layer in localStorage, with a roadmap to Supabase + Playwright + CI/CD.",
    year: 2026,
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "TailwindCSS",
      "Radix UI",
      "Framer Motion",
      "Recharts",
    ],
    image: "/images/projects/dashboard_subflix.png",
    links: {
      live: "https://subflix-seven.vercel.app",
      repo: "https://github.com/JuanMedinaRdz/subflix",
    },
    featured: true,
  },
  {
    slug: "platform-rebuild",
    title: "Customer Platform Rebuild",
    description:
      "Greenfield rewrite of a customer-facing SaaS platform with a focus on performance and DX.",
    longDescription:
      "Migrated a legacy Rails monolith to a modular Next.js + NestJS stack with a typed API contract, design system and observability baked in.",
    year: 2024,
    stack: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "AWS"],
    image: "/images/projects/platform-rebuild.svg",
    links: {
      live: "https://example.com",
      case: "#",
    },
    featured: true,
  },
  {
    slug: "design-system",
    title: "Internal Design System",
    description:
      "Headless, accessible component library that powers all internal products.",
    longDescription:
      "Built on top of Radix primitives with theming tokens, Storybook documentation and per-component visual regression tests.",
    year: 2024,
    stack: ["React", "Radix UI", "Tailwind", "Storybook"],
    image: "/images/projects/design-system.svg",
    links: {
      repo: "https://github.com/yourhandle/design-system",
    },
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
