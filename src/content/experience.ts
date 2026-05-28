import type { Education, ExperienceItem } from "@/types";

/**
 * Career timeline, ordered from most recent to oldest.
 * Periods are approximate — replace them with exact start/end dates when available.
 */
export const experience: ExperienceItem[] = [
  {
    role: "Freelance Developer & AI Automation",
    company: "Independent",
    location: "Remote",
    period: "2023 — Present",
    description:
      "Freelance web and mobile work, alongside hands-on exploration of AI-assisted development and workflow automation.",
    highlights: [
      "Designed and built a complete mobile app for a client end to end — UI, screen flow and functionality — over the course of a year.",
      "Delivered WordPress sites and web/mobile visual designs for freelance clients.",
      "Building automated chatbots with n8n and integrating AI into daily workflows with Claude Code.",
    ],
    stack: ["Flutter", "WordPress", "n8n", "Claude Code"],
  },
  {
    role: "QA Automation Analyst",
    company: "Hexaware",
    location: "On-site",
    period: "2025 — 2026",
    description:
      "Worked on end-to-end test automation and code review within Agile teams.",
    highlights: [
      "Built end-to-end automated test flows with Selenium for several web pages.",
      "Generated visual reports with step-by-step screenshots of successful test runs.",
      "Performed regular code reviews and used Postman for API testing.",
    ],
    stack: ["Selenium", "Postman", "Agile"],
  },
  {
    role: "Mobile Developer",
    company: "Voth Solutions",
    location: "On-site",
    period: "2023 — 2024",
    description:
      "Built cross-platform mobile applications and learned the foundations of mobile development.",
    highlights: [
      "Developed mobile apps with Flutter, testing on Android Studio emulators and physical Android devices.",
      "Integrated Firebase for cloud storage of images and application data.",
      "Implemented state management using the Bloc pattern.",
    ],
    stack: ["Flutter", "Dart", "Firebase", "Android Studio", "Bloc"],
  },
];

export const education: Education[] = [
  {
    title: "B.Eng. in Computer Systems Engineering",
    institution: "Universidad Autónoma de Coahuila",
    period: "2019 — 2024",
  },
];
