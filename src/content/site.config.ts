import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/brand-icons";
import type { NavLink, SocialLink } from "@/types";

/**
 * Single source of truth for site-wide metadata, navigation and contact info.
 * Update this file to rebrand the portfolio without touching components.
 */
export const siteConfig = {
  name: "Juan Carlos Medina",
  role: "Junior Full-Stack Engineer",
  tagline:
    "I build mobile and web apps — from screen design to working functionality.",
  description:
    "Portfolio of Juan Carlos Medina, a junior software engineer focused on mobile development with Flutter, plus web development and QA automation.",
  url: "https://portfolio-juan-carlos-medina.vercel.app",
  locale: "en_US",
  email: "jn_carlos.medina@outlook.com",
  location: "Remote · EU/LATAM",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/images/avatar.webp",
  ogImage: "/images/og/cover.png",
  keywords: [
    "Mobile Developer",
    "Flutter Developer",
    "Software Engineer",
    "Junior Developer",
    "Dart",
    "Web Developer",
    "QA Automation",
    "Portfolio",
  ],
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/JuanMedinaRdz", icon: GithubIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/juan-carlos-medina-95a939347/",
    icon: LinkedinIcon,
  },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];
